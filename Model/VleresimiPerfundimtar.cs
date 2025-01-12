using System;
using System.Collections.Generic;

namespace E_Vlersimiii.Models
{
    public partial class VleresimiPerfundimtar
    {
        public VleresimiPerfundimtar()
        {
            Ditaris = new HashSet<Ditari>();
            Nxenesiis = new HashSet<Nxenesii>();
            Prindiis = new HashSet<Prindii>();
        }

        public int NotaP { get; set; }
        public int? Nota1 { get; set; }
        public int? Nota2 { get; set; }
        public int? Nota3 { get; set; }

        public virtual Nota1? Nota1Navigation { get; set; }
        public virtual Nota2? Nota2Navigation { get; set; }
        public virtual Nota3? Nota3Navigation { get; set; }
        public virtual ICollection<Ditari> Ditaris { get; set; }
        public virtual ICollection<Nxenesii> Nxenesiis { get; set; }
        public virtual ICollection<Prindii> Prindiis { get; set; }
    }
}
