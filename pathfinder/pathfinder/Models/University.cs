namespace pathfinder.Models;

public class University
{
    public int Id { get; set; }

    public string Name { get; set; }
    
    public string City { get; set; }
    
    public string Country { get; set; }
    
    public List<Faculty>? Faculties { get; set; }
}