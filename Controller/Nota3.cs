using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class Nota3Controller : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? NotaP3 { get; private set; }

    public Nota3Controller(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Nota3
    [HttpGet("GetNotaP3")]
    public async Task<ActionResult<List<Nota3>>> Get()
    {
        return Ok(await _context.Nota3.ToListAsync());
    }

    [HttpGet("{NotaP3}")]
    // GET: api/Shippingschedules/ID

    public async Task<ActionResult<Nota3>> GetNota1(int NotaP3)
    {
        ActionResult<Nota3> Nota3 = await _context.Nota3.FindAsync(NotaP3);

        if (NotaP3 == null)
        {
            return NotFound();
        }

        return Nota3;
    }


    // Create Nota3
    [HttpPost("ShtoNota3")]
    public async Task<ActionResult<List<Nota3>>> AddNota3(Nota3 nota3)
    {
        _context.Nota3.Add(nota3);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nota3.ToListAsync());
    }

    // Update Nota3
    [HttpPut("UpdateNota3")]
    public async Task<ActionResult<Nota3>> UpdateNota3(Nota3 request)
    {
        var dbNota3s = await _context.Nota3.FindAsync(request.NotaP3);
        if (dbNota3s == null)
            return NotFound("Nota3 not found");

        // Your update logic here

        await _context.SaveChangesAsync();

        return Ok(await _context.Nota3.ToListAsync());
    }

    // Delete a ditar
    [HttpDelete("FshijeNota3/{NotaP3}")]
    public async Task<ActionResult<List<Nota3>>> DeleteNota3(int NotaP3)
    {
        var dbNota3s = await _context.Nota3.FindAsync(NotaP3);
        if (dbNota3s == null)
            return NotFound("Nota3 not found");

        Nota1 dbNota3 = null;
        _context.Nota3.Remove(dbNota3s);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nota3.ToListAsync());
    }
}