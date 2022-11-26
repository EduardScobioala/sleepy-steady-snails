using Microsoft.AspNetCore.Mvc;
using pathfinder.Contexts;
using pathfinder.Models;

namespace pathfinder.Controllers;

public class UniversityController : Controller
{
    private UniversityContext context;

    public UniversityController(UniversityContext context)
    {
        this.context = context;
    }

    public IActionResult Index([FromQuery] string? country, [FromQuery] string? city)
    {
        if (country != null)
        {
            if (city != null)
            {
                return View(context.Universities.Where(uni => uni.City == city && uni.Country == country).ToList());
            }
            return View(context.Universities.Where(uni => uni.Country == country).ToList());
        }

        return View(context.Universities.Where(uni => true).ToList());



    }
}