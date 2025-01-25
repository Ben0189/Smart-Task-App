using Microsoft.AspNetCore.Identity;
using BlotzTask.Models;
using BlotzTask.Models.CustomError;
using BlotzTask.Data.Entities;

namespace BlotzTask.Services;

public interface IUserInfoService
{
    public Task<UserInfoDTO> GetCurrentUserInfoAsync(string userId);
}

public class UserInfoService : IUserInfoService
{
    private readonly UserManager<User> _userManager;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UserInfoService(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<UserInfoDTO> GetCurrentUserInfoAsync(string userId)
    {
        try
        {
            if (string.IsNullOrEmpty(userId))
            {
                throw new NotFoundException($"User Not Founded");
            }
            
            var user = await _userManager.FindByIdAsync(userId);
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

