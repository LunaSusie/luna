using Abp.Authorization;
using luna.Authorization.Roles;
using luna.Authorization.Users;

namespace luna.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
