using System.Threading.Tasks;
using Abp.Application.Services;
using luna.Authorization.Accounts.Dto;

namespace luna.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
