#nullable disable

namespace CRMService.Models
{
    public class Document
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public List<Project> Projects { get; set; }

    }
}