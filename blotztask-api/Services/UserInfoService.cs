using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using BlotzTask.Models;
using BlotzTask.Models.CustomError;
using BlotzTask.Data.Entities;

namespace BlotzTask.Services;

public interface IUserInfoService
{
    public Task<UserInfoDTO> GetCurrentUserInfoAsync(string? userID = null);
}

public class UserInfoService : IUserInfoService
{
    private readonly UserManager<User> _userManager;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UserInfoService(UserManager<User> userManager, IHttpContextAccessor httpContextAccessor)
    {
        _userManager = userManager;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<UserInfoDTO> GetCurrentUserInfoAsync(string? userID = null)
    {
        try
        {
            string resolvedUserId;

            // Judge if userID is empty, if it is then use HttpContext to get userId
            if (!string.IsNullOrEmpty(userID))
            {
                resolvedUserId = userID;
            }
            else
            {
                resolvedUserId = _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier) 
             ?? string.Empty;

                if (string.IsNullOrEmpty(resolvedUserId))
                {
                    throw new NotFoundException($"User Not Founded");
                }
            }

            var user = await _userManager.FindByIdAsync(resolvedUserId);
            if (user == null)
            {
                throw new NotFoundException($"User Not Founded");
            }

            return new UserInfoDTO
            {   
                // Username and Email can be empty in database.
                Username = user.UserName?? string.Empty,
                Email = user.Email?? string.Empty,
                Message = "Successfully get current user info"
            };
        }
        catch (Exception)
        {
            throw;
        }
    }

}

