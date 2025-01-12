using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class Nota2Controller : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? NotaP2 { get; private set; }

    public Nota2Controller(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Nota2
    [HttpGet("GetNotaP2")]
    public async Task<ActionResult<List<Nota2>>> Get()
    {
        return Ok(await _context.Nota2.ToListAsync());
    }

    [HttpGet("{NotaP2}")]
    // GET: api/Shippingschedules/ID

    public async Task<ActionResult<Nota2>> GetNota1(int NotaP2)
    {
        ActionResult<Nota2> Nota2 = await _context.Nota2.FindAsync(NotaP2);

        if (NotaP2 == null)
        {
            return NotFound();
        }

        return Nota2;
    }


    // Create Nota2 
    [HttpPost("ShtoNota2")]
    public async Task<ActionResult<List<Nota2>>> AddNota2(Nota2 nota2)
    {
        _context.Nota2.Add(nota2);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nota2.ToListAsync());
    }

    // Update Nota2
    [HttpPut("UpdateNota2")]
    public async Task<ActionResult<Nota2>> UpdateNota2(Nota2 request)
    {
        var dbNota2s = await _context.Nota2.FindAsync(request.NotaP2);
        if (dbNota2s == null)
            return NotFound("Nota2 not found");

        // Your update logic here

        await _context.SaveChangesAsync();

        return Ok(await _context.Nota2.ToListAsync());
    }

    // Delete a ditar
    [HttpDelete("FshijeNota2/{NotaP2}")]
    public async Task<ActionResult<List<Nota2>>> DeleteNota2(int NotaP2)
    {
        var dbNota2s = await _context.Nota2.FindAsync(NotaP2);
        if (dbNota2s == null)
            return NotFound("Nota2 not found");

        Nota1 dbNota2 = null;
        _context.Nota2.Remove(dbNota2s);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nota2.ToListAsync());
    }
}