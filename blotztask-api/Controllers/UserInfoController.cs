using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using BlotzTask.Services;
using BlotzTask.Models;
using System.Security.Claims;

namespace BlotzTask.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize] // make sure only authenticate user can use this method
public class UserInfoController : ControllerBase
{
    private readonly IUserInfoService _userInfoService;
    public UserInfoController(IUserInfoService userInfoService)
    {
        _userInfoService = userInfoService;
    }

    [HttpGet("current-user-info")]
    public async Task<IActionResult> GetCurrentUserInfo()
    {
        // Use UserInfoService to get User info.
        try{
            // Extract user ID from claims
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized(new { message = "User not authenticated or missing required claims" });
            }

            var userInfo = await _userInfoService.GetCurrentUserInfoAsync(userId);
            if (userInfo == null)
            {
                return Unauthorized(new { message = "User not authenticated or not found" });
            }
            var message = userInfo.Message;
            // return result
            return Ok(new ResponseWrapper<UserInfoDTO>(userInfo, message, true));
        }catch(Exception){
            throw;
        }
        
    }
}
