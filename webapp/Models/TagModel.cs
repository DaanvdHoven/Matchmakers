using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace webapp.Models
{
    public class TagModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        [Display(Name = "Title")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Description is required")]
        [Display(Name = "Description")]
        public string Description { get; set; }
    }
}
