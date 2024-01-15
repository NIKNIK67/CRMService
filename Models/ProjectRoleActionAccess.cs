#nullable disable

namespace CRMService.Models
{
    public class ProjectRoleActionAccess : ProjectActionAccess
    {
        public int RoleId { get; set; }
        public UserRole RootRole { get; set; }
    }
}
