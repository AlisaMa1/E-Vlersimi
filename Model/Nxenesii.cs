using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_Vlersimiii.Models
{
    public partial class Nxenesii
    {
        public Nxenesii()
        {
            Ditaris = new HashSet<Ditari>();
            Prindiis = new HashSet<Prindii>();
        }

        public int IdNxenesi { get; set; }
        public string? Klasa { get; set; }
        public string? EmriN { get; set; }
        public string? MbiemriN { get; set; }
        public string? Lenda { get; set; }
        public int? NotaP1 { get; set; }
        public int? NotaP2 { get; set; }
        public int? NotaP3 { get; set; }
        public int? NotaP { get; set; }

        public virtual Lendum? LendaNavigation { get; set; }
        public virtual Nota1? NotaP1Navigation { get; set; }
        public virtual Nota2? NotaP2Navigation { get; set; }
        public virtual Nota3? NotaP3Navigation { get; set; }
        public virtual VleresimiPerfundimtar? NotaPNavigation { get; set; }
        public virtual ICollection<Ditari> Ditaris { get; set; }
        public virtual ICollection<Prindii> Prindiis { get; set; }
    }
}
