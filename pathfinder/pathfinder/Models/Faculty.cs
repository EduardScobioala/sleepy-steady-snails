namespace pathfinder.Models;

public class Faculty
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? ImageSource { get; set; }
    public string? Description { get; set; }
    public University University { get; set; }
    
}