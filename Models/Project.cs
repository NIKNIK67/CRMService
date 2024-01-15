#nullable disable

namespace CRMService.Models
{
    public class Project
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public List<Document> Documents { get; set; }
        public List<ProjectUserActionAccess> UsersWithAccess { get; set; }
        public List<ProjectRoleActionAccess> RolesWithAccess { get; set; }
    }
}
