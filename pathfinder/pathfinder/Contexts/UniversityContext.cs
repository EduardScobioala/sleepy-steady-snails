using Microsoft.EntityFrameworkCore;
using pathfinder.Models;

namespace pathfinder.Contexts;

public class UniversityContext : DbContext
{
    public DbSet<University> Universities { get; set; }
    public DbSet<Faculty> Faculties { get; set; }
    public DbSet<Specialization> Specializations { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Skill> Skills { get; set; }
    public DbSet<Sponsor> Sponsors { get; set; }

    public UniversityContext(DbContextOptions<UniversityContext> options) : base(options)
    {
        this.Database.EnsureCreated();
    }
}