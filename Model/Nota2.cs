using System;
using System.Collections.Generic;

namespace E_Vlersimiii.Models
{
    public partial class Nota2
    {
        public Nota2()
        {
            Ditaris = new HashSet<Ditari>();
            Nxenesiis = new HashSet<Nxenesii>();
            Prindiis = new HashSet<Prindii>();
            VleresimiPerfundimtars = new HashSet<VleresimiPerfundimtar>();
        }

        public int? Test1 { get; set; }
        public int? Test2 { get; set; }
        public string? Aktiviteti { get; set; }
        public int NotaP2 { get; set; }

        public virtual ICollection<Ditari> Ditaris { get; set; }
        public virtual ICollection<Nxenesii> Nxenesiis { get; set; }
        public virtual ICollection<Prindii> Prindiis { get; set; }
        public virtual ICollection<VleresimiPerfundimtar> VleresimiPerfundimtars { get; set; }
    }
}
