using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace webapp.Models
{
    public class ChallengeModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Description is required")]
        [Display(Name = "Description")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Requirements are required")]
        [Display(Name = "Requirements")]
        public string Requirements { get; set; }

        // Implement Tag class
        [Required(ErrorMessage = "Tags are required")]
        [Display(Name = "Tags")]
        public string Tags { get; set; }
    }
}
