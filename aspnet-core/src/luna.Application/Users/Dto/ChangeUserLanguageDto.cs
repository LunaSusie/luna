using System.ComponentModel.DataAnnotations;

namespace luna.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}