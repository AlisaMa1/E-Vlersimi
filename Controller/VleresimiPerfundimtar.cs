using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class VleresimiPerfundimtarController : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? VleresimiPerfundimtar { get; private set; }

    public VleresimiPerfundimtarController(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all NotaP
    [HttpGet("GetNotaP")]
    public async Task<ActionResult<List<VleresimiPerfundimtar>>> Get()
    {
        return Ok(await _context.VleresimiPerfundimtar.ToListAsync());
    }

    [HttpGet("{NotaP}")]
    // GET: api/Shippingschedules/ID

    public async Task<ActionResult<VleresimiPerfundimtar>> GetVleresimiPerfundimtar(int NotaP)
    {
        ActionResult<VleresimiPerfundimtar> VleresimiPerfundimtar = await _context.VleresimiPerfundimtar.FindAsync(NotaP);

        if (NotaP == null)
        {
            return NotFound();
        }

        return VleresimiPerfundimtar;
    }


    // Create Nota3
    [HttpPost("ShtoNota3")]
    public async Task<ActionResult<List<VleresimiPerfundimtar>>> AddVleresimiPerfundimtar(VleresimiPerfundimtar VleresimiPerfundimtar)
    {
        _context.VleresimiPerfundimtar.Add(VleresimiPerfundimtar);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nota3.ToListAsync());
    }

    // Update Nota3
    [HttpPut("UpdateNota3")]
    public async Task<ActionResult<VleresimiPerfundimtar>> UpdateVleresimiPerfundimtar(VleresimiPerfundimtar request)
    {
        var dbVleresimiPerfundimtars = await _context.VleresimiPerfundimtar.FindAsync(request.NotaP);
        if (dbVleresimiPerfundimtars == null)
            return NotFound("VleresimiPerfundimtar not found");

        // Your update logic here

        await _context.SaveChangesAsync();

        return Ok(await _context.VleresimiPerfundimtar.ToListAsync());
    }

    // Delete a ditar
    [HttpDelete("FshijeVleresimiPerfundimtar/{NotaP}")]
    public async Task<ActionResult<List<VleresimiPerfundimtar>>> DeleteVleresimiPerfundimtar(int NotaP)
    {
        var dbVleresimiPerfundimtars = await _context.VleresimiPerfundimtar.FindAsync(NotaP);
        if (dbVleresimiPerfundimtars == null)
            return NotFound("VleresimiPerfundimtar not found");

        Nota1 dbVleresimiPerfundimtar = null;
        _context.VleresimiPerfundimtar.Remove(dbVleresimiPerfundimtars);
        await _context.SaveChangesAsync();

        return Ok(await _context.VleresimiPerfundimtar.ToListAsync());
    }
}