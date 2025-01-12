using System;
using System.Collections.Generic;

namespace E_Vlersimiii.Models
{
    public partial class Ditari
    {
        public string IdKlasa { get; set; } = null!;
        public string? Lenda { get; set; }
        public int? MesimdhenesiId { get; set; }
        public int? NxenesiId { get; set; }
        public int? NotaP1 { get; set; }
        public int? NotaP2 { get; set; }
        public int? NotaP3 { get; set; }
        public int? NotaP { get; set; }
        public string? Prezenca { get; set; }
        public string? Orari { get; set; }

        public virtual Lendum? LendaNavigation { get; set; }
        public virtual Mesimdhenesii? Mesimdhenesi { get; set; }
        public virtual Nota1? NotaP1Navigation { get; set; }
        public virtual Nota2? NotaP2Navigation { get; set; }
        public virtual Nota3? NotaP3Navigation { get; set; }
        public virtual VleresimiPerfundimtar? NotaPNavigation { get; set; }
        public virtual Nxenesii? Nxenesi { get; set; }
    }
}
