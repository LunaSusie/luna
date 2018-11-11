using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using luna.Roles.Dto;
using luna.Users.Dto;

namespace luna.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
