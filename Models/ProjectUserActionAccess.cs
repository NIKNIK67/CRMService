#nullable disable

namespace CRMService.Models
{
    public class ProjectUserActionAccess : ProjectActionAccess
    {
        public int UserId { get; set; }
        public User RootUser { get; set; }
    }
}
