using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using luna.Authorization.Roles;
using luna.Authorization.Users;
using luna.MultiTenancy;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace luna.EntityFrameworkCore
{
    public class lunaDbContext : AbpZeroDbContext<Tenant, Role, User, lunaDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public lunaDbContext(DbContextOptions<lunaDbContext> options)
            : base(options)
        {
           
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //清楚abp前缀
            modelBuilder.ChangeAbpTablePrefix<Tenant, Role, User>(null);
        }
    }
}
