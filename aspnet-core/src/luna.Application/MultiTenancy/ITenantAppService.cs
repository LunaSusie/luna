using Abp.Application.Services;
using Abp.Application.Services.Dto;
using luna.MultiTenancy.Dto;

namespace luna.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
