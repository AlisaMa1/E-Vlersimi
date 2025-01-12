using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using E_Vlersimiii.Data;

[Route("api/[controller]")]
[ApiController]
public class PrindiiController : ControllerBase
{
    private readonly E_VleresimiiContext _context;

    public object?[]? IdPrindi { get; private set; }

    public PrindiiController(E_VleresimiiContext context)
    {
        _context = context;
    }

    // Get all Prind
    [HttpGet("GetIdPrindi")]
    public async Task<ActionResult<List<Prindii>>> Get()
    {
        return Ok(await _context.Prindii.ToListAsync());
    }

    [HttpGet("{IdPrindi}")]
    // GET: api/Shippingschedules/ID

    public async Task<ActionResult<Prindii>> GetPrindii(int IdPrindi)
    {
        ActionResult<Prindii> prindii = await _context.Prindii.FindAsync(IdPrindi);

        if (IdPrindi == null)
        {
            return NotFound();
        }

        return prindii;
    }


    // Create Prindi 
    [HttpPost("ShtoIdPrindi")]
    public async Task<ActionResult<List<Prindii>>> AddPrindi(Prindii prindii)
    {
        _context.Prindii.Add(prindii);
        await _context.SaveChangesAsync();

        return Ok(await _context.Prindii.ToListAsync());
    }

    // Update Prindi
    [HttpPut("UpdatePrindii")]
    public async Task<ActionResult<Prindii>> UpdatePrindii(Prindii request)
    {
        var dbPrindiis = await _context.Prindii.FindAsync(request.IdPrindi);
        if (dbPrindiis == null)
            return NotFound("Prindi not found");

        // Your update logic here

        if (!request.Nxenesi.Equals(""))
            dbPrindiis.Nxenesi = request.Nxenesi;
        if (!request.MbiemriP.Equals(""))
            dbPrindiis.MbiemriP = request.MbiemriP;
        if (!request.EmriP.Equals(""))
            dbPrindiis.EmriP = request.EmriP;
        if (!request.NrTel.Equals(""))
            dbPrindiis.NrTel = request.NrTel;
        if (!request.NotaP1.Equals(""))
            dbPrindiis.NotaP1 = request.NotaP1;
        if (!request.NotaP2.Equals(""))
            dbPrindiis.NotaP2 = request.NotaP2;
        if (!request.NotaP3.Equals(""))
            dbPrindiis.NotaP3 = request.NotaP3;
        if (!request.NotaP.Equals(""))
            dbPrindiis.NotaP = request.NotaP;


        await _context.SaveChangesAsync();

        return Ok(await _context.Prindii.ToListAsync());
    }

    // Delete Prindi
    [HttpDelete("FshijePrindii/{IdPrindi}")]
    public async Task<ActionResult<List<Prindii>>> DeletePrindii(int IdPrindi)
    {
        var dbPrindiis = await _context.Prindii.FindAsync(IdPrindi);
        if (dbPrindiis == null)
            return NotFound("Prindi not found");

        Prindii dbPrindii = null;
        _context.Prindii.Remove(dbPrindiis);
        await _context.SaveChangesAsync();

        return Ok(await _context.Prindii.ToListAsync());
    }
}