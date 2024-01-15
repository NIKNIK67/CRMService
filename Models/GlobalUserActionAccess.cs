#nullable disable

namespace CRMService.Models
{
    public class GlobalUserActionAccess : GlobalActionAccess
    {
        public int UserId { get; set; }
        public User RootUser { get; set; }

    }
}
