using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using pathfinder.Contexts;
using pathfinder.Models;

namespace pathfinder.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private UniversityContext context;
    
    
    
    public HomeController(ILogger<HomeController> logger, UniversityContext context)
    {
        _logger = logger;
        this.context = context;
    }

    public IActionResult Index()
    {
        context.Universities.Add(new University());
        
        
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult CreateUniversity()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreateUniversity(University university)
    {
        if (!ModelState.IsValid)
            return BadRequest();
        
        context.Universities.Add(university);
        context.SaveChangesAsync();

        return Ok();
    }

   

    public IActionResult ViewUniversity([FromQuery] int index)
    {
        context.Universities.Where((uni) => uni.Country ==  "Romanija");

        return View(context.Universities.First(uni => uni.Id == index));
    }
    
    
    

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}