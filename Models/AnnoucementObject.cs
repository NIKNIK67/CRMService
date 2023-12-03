#nullable disable

namespace CRMService.Models
{
    public class AnnoucementObject
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public DateOnly CreationDate { get; set; }
        public User AutorUser { get; set; }
    }
}
