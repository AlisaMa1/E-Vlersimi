using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class DitariController : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? ID_Ditari { get; private set; }

    public DitariController(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Ditaret
    [HttpGet("GetDitaret")]
    public async Task<ActionResult<List<Ditari>>> Get()
    {
        return Ok(await _context.Ditari.ToListAsync());
    }

    [HttpGet("{IdNxenesi}")]
    public async Task<ActionResult<Ditari>> GetDitari(int IdNxenesi)
    {
        ActionResult<Ditari> Ditari = await _context.Ditari.FindAsync(IdNxenesi);

        if (Ditari == null)
        {
            return NotFound();
        }

        return Ditari;
    }



    // Create a ditar 
    [HttpPost("ShtoDitari")]
    public async Task<ActionResult<List<Ditari>>> AddDitari(Ditari ditari)
    {
        _context.Ditari.Add(ditari);
        await _context.SaveChangesAsync();

        return Ok(await _context.Ditari.ToListAsync());
    }

    
    [HttpPut("UpdateDitari")]
    public async Task<ActionResult<Ditari>> UpdateDitari(Ditari request)
    {
        var dbDitari = await _context.Ditari.FindAsync(request.IdKlasa);
        if (dbDitari == null)
            return NotFound("Ditari not found");

       
        if (!request.Lenda.Equals(""))
            dbDitari.Lenda = request.Lenda;
        if (!request.MesimdhenesiId.Equals(""))
            dbDitari.MesimdhenesiId = request.MesimdhenesiId;
        if (!request.NxenesiId.Equals(""))
            dbDitari.NxenesiId = request.NxenesiId;
        if (!request.Prezenca.Equals(""))
            dbDitari.Prezenca = request.Prezenca;
        if (!request.Orari.Equals(""))
            dbDitari.Orari = request.Orari;

        await _context.SaveChangesAsync();

        return Ok(await _context.Ditari.ToListAsync());
    }

    // Delete a ditar
    [HttpDelete("FshijeDitarin")]
    public async Task<ActionResult<List<Ditari>>> DeleteDitari(int IdNxenesi)
    {
        var dbDitari = await _context.Ditari.FindAsync(IdNxenesi);
        if (dbDitari == null)
            return NotFound("Ditari not found");

        _context.Ditari.Remove(dbDitari);
        await _context.SaveChangesAsync();

        return Ok(await _context.Ditari.ToListAsync());
    }
}
