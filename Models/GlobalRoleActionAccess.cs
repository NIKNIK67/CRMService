#nullable disable

namespace CRMService.Models
{
    public class GlobalRoleActionAccess : GlobalActionAccess
    {
        public int RoleId { get; set; }
        public UserRole RootRole { get; set; }
    }
}
