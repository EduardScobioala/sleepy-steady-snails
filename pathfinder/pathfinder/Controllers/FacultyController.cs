using Microsoft.AspNetCore.Mvc;
using pathfinder.Contexts;

namespace pathfinder.Controllers;

public class FacultyController : Controller
{
  private UniversityContext context;

  public FacultyController(UniversityContext context)
  {
    this.context = context;
  }

  public IActionResult Index([FromQuery] int universityId)
  {
    var faculties = context.Faculties.Where(faculty => faculty.University.Id == universityId).ToList();


    return View(faculties);
  }
}