using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace webapp.Models
{
    public class ChallengeRegistrationModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Message is required")]
        [Display(Name = "Message")]
        public string Message { get; set; }
    }
}
