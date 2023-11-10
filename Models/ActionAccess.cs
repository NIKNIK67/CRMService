#nullable disable

namespace CRMService.Models
{
    public class ActionAccess
    {
        public int UserId { get; set; }
        public User RootUser { get; set; }
        public bool IsDocumentEditor { get; set; }
        public bool IsDocumentReader { get; set; }

    }
}
