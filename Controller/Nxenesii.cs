using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class NxenesiiController : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? IdNxenesii { get; private set; }

    public NxenesiiController(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Nxenesat
    [HttpGet("GetNxenesat")]
    public async Task<ActionResult<List<Nxenesii>>> Get()
    {
        return Ok(await _context.Nxenesii.ToListAsync());
    }

    [HttpGet("{IdNxenesi}")]
    // GET: api/Shippingschedules/ID

    public async Task<ActionResult<Nxenesii>> GetNxenesii(int IdNxenesi)
    {
        ActionResult<Nxenesii> Nxenesii = await _context.Nxenesii.FindAsync(IdNxenesi);

        if (Nxenesii == null)
        {
            return NotFound();
        }

        return Nxenesii;
    }


    // Create Nxenes
    [HttpPost("ShtoNxenesa")]
    public async Task<ActionResult<List<Nxenesii>>> AddDitari(Nxenesii nxenesii)
    {
        _context.Nxenesii.Add(nxenesii);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nxenesii.ToListAsync());
    }

    // Update Nxenes
    [HttpPut("UpdateNxenesi")]
    public async Task<ActionResult<Nxenesii>> UpdateNxenesii(Nxenesii request)
    {
        var dbNxenesii = await _context.Nxenesii.FindAsync(request.IdNxenesi);
        if (dbNxenesii == null)
            return NotFound("Nxenesi not found");

        if (!request.Klasa.Equals(""))
            dbNxenesii.Klasa = request.Klasa;
        if (!request.EmriN.Equals(""))
            dbNxenesii.EmriN = request.EmriN;
        if (!request.MbiemriN.Equals(""))
            dbNxenesii.MbiemriN = request.MbiemriN;
        if (!request.Lenda.Equals(""))
            dbNxenesii.Lenda = request.Lenda;
     


        await _context.SaveChangesAsync();

        return Ok(await _context.Nxenesii.ToListAsync());
    }


   
        



    






    // Delete Nxenes
    [HttpDelete("FshijeNxenesin/{idNxenesi}")]
    public async Task<ActionResult<List<Nxenesii>>> DeleteNxenesii(int idNxenesi)
    {
        var dbNxenesii = await _context.Nxenesii.FindAsync(idNxenesi);
        if (dbNxenesii == null)
            return NotFound("Nxenesi not found");

        _context.Nxenesii.Remove(dbNxenesii);
        await _context.SaveChangesAsync();

        return Ok(await _context.Nxenesii.ToListAsync());
    }
}
