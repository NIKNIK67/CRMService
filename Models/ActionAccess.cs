#nullable disable

namespace CRMService.Models
{
    public class ActionAccess
    {
        public int Id { get; set; }
        public UserRole RootRole { get; set; }
        public bool IsDocumentEditor { get; set; }
        public bool IsDocumentReader { get; set; }

    }
}
