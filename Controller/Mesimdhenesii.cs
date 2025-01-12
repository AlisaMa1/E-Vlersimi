using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class MesimdhenesiiController : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? IdMesimdhensi { get; private set; }

    public MesimdhenesiiController(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Mesimdhenesat
    [HttpGet("GetMesimdhenesii")]
    public async Task<ActionResult<List<Mesimdhenesii>>> Get()
    {
        return Ok(await _context.Mesimdhenesiis.ToListAsync());
    }

    [HttpGet("{IdMesimdhensi}")]
    // GET: api/IdMesimdhensi

    public async Task<ActionResult<Mesimdhenesii>> GetMesimdhenesii(int IdMesimdhensi)
    {
        ActionResult<Mesimdhenesii> Mesimdhenesii = await _context.Mesimdhenesiis.FindAsync(IdMesimdhensi);

        if (Mesimdhenesii == null)
        {
            return NotFound();
        }

        return Mesimdhenesii;
    }


    // Create a Mesimdhenesii
    [HttpPost("ShtoMesimdhenesii")]
    public async Task<ActionResult<List<Mesimdhenesii>>> AddMesimdhenesii(Mesimdhenesii mesimdhenesii)
    {
        _context.Mesimdhenesiis.Add(mesimdhenesii);
        await _context.SaveChangesAsync();

        return Ok(await _context.Mesimdhenesiis.ToListAsync());
    }

    // Update Mesimdhenesii
    [HttpPut("UpdateMesimdhenesii")]
    public async Task<ActionResult<Mesimdhenesii>> UpdateMesimdhenesii(Mesimdhenesii request)
    {
        var dbMesimdhenesii = await _context.Mesimdhenesiis.FindAsync(request.IdMesimdhensi);
        if (dbMesimdhenesii == null)
            return NotFound("Mesimdhenesi not found");

        if (!request.Lenda.Equals(""))
            dbMesimdhenesii.Lenda = request.Lenda;
        if (!request.Lenda.Equals(""))
            dbMesimdhenesii.Lenda = request.Lenda;
        if (!request.MbiemriM.Equals(""))
            dbMesimdhenesii.MbiemriM = request.MbiemriM;
        if (!request.EmriM.Equals(""))
            dbMesimdhenesii.EmriM = request.EmriM;
        if (!request.NrTel.Equals(""))
            dbMesimdhenesii.NrTel = request.NrTel;
      

        await _context.SaveChangesAsync();

        return Ok(await _context.Mesimdhenesiis.ToListAsync());
    }

    // Delete a ditar
    [HttpDelete("FshijeMesimdhenesin/{IdMesimdhensi}")]
    public async Task<ActionResult<List<Mesimdhenesii>>> DeleteMesimdhenesii(int IdMesimdhensi)
    {
        var dbMesimdhenesii = await _context.Mesimdhenesiis.FindAsync(IdMesimdhensi);
        if (dbMesimdhenesii == null)
            return NotFound("Mesimdhenesii not found");

        _context.Mesimdhenesiis.Remove(dbMesimdhenesii);
        await _context.SaveChangesAsync();

        return Ok(await _context.Mesimdhenesiis.ToListAsync());
    }
}
