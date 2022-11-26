namespace pathfinder.Models;

public class Specialization
{
    public int Id { get; set; }
    
    public string Alias { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Type { get; set; }
    
    public string? ImageSource { get; set; }
    
    public int Years { get; set; }
    
    public Faculty Faculty { get; set; }

}