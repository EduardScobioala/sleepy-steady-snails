using Microsoft.EntityFrameworkCore;

namespace pathfinder.Models;

public class Course
{
    
    public int Id { get; set; }
    public int Credits { get; set; }
    public int Year { get; set; }
    public int Semester { get; set; }
    public string Description { get; set; }
    public string Name { get; set; }
    public string ImageSource { get; set; }
}