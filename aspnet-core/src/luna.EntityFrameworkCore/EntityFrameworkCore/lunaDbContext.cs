using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using luna.Authorization.Roles;
using luna.Authorization.Users;
using luna.MultiTenancy;

namespace luna.EntityFrameworkCore
{
    public class lunaDbContext : AbpZeroDbContext<Tenant, Role, User, lunaDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public lunaDbContext(DbContextOptions<lunaDbContext> options)
            : base(options)
        {
        }
    }
}
