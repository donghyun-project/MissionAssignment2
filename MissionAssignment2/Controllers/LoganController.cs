using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MissionAssignment2.Models;

namespace MissionAssignment2.Controllers
{
    // Get: /<controller>/
    public class LoganController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator(LoganModel model)
        {
            return View();
        }
    }
}
