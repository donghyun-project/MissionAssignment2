using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MissionAssignment2.Models
{
    public class LoganModel
    {
        [Required]
        [Range(0, 100)]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int GroupProjects { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int Exams { get; set; }

        [Required]
        [Range(0, 100)]
        public int INTEX { get; set; }
    }
}
