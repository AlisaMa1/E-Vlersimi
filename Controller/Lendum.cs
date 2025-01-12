using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class LendumController : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? Lenda { get; private set; }

    public LendumController(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Lenda
    [HttpGet("GetLenda")]
    public async Task<ActionResult<List<Lendum>>> Get()
    {
        return Ok(await _context.Lenda.ToListAsync());
    }


    // Create Lenda
    [HttpPost("ShtoLenda")]
    public async Task<ActionResult<List<Lendum>>> AddLenda(Lendum lendum)
    {
        _context.Lenda.Add(lendum);
        await _context.SaveChangesAsync();

        return Ok(await _context.Lenda.ToListAsync());
    }

    // Update  Lenda
    [HttpPut("UpdateLenda")]
    public async Task<ActionResult<Lendum>> UpdateLenda(Lendum request)
    {
        var dbLenda = await _context.Lenda.FindAsync(request.Lenda);
        if (dbLenda == null)
            return NotFound("Lenda not found");

        // Your update logic here

        if (!request.Lenda.Equals(""))
            dbLenda.Lenda = request.Lenda;


        await _context.SaveChangesAsync();

        return Ok(await _context.Lenda.ToListAsync());
    }

    // Delete Lenda
    [HttpDelete("FshijeLenden/{Lenda}")]
    public async Task<ActionResult<List<Lendum>>> DeleteLenda(string Lenda)
    {
        var dbLenda = await _context.Lenda.FindAsync(Lenda);
        if (dbLenda == null)
            return NotFound("Lenda not found");

        Lendum dbLendum = null;
        _context.Lenda.Remove(dbLenda);
        await _context.SaveChangesAsync();

        return Ok(await _context.Lenda.ToListAsync());
    }
}