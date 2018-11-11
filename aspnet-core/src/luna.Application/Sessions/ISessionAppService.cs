using System.Threading.Tasks;
using Abp.Application.Services;
using luna.Sessions.Dto;

namespace luna.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
