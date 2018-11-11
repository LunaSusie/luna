using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using luna.Authorization;

namespace luna
{
    [DependsOn(
        typeof(lunaCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class lunaApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<lunaAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(lunaApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddProfiles(thisAssembly)
            );
        }
    }
}
