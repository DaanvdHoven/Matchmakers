using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace webapp.Models
{
    public class ChallengeComment
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        [Display(Name = "Title")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Content is required")]
        [Display(Name = "Content")]
        public string Content { get; set; }
    }
}
