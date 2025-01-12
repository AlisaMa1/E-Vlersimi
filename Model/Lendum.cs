using System;
using System.Collections.Generic;

namespace E_Vlersimiii.Models
{
    public partial class Lendum
    {
        public Lendum()
        {
            Ditaris = new HashSet<Ditari>();
            Mesimdhenesiis = new HashSet<Mesimdhenesii>();
            Nxenesiis = new HashSet<Nxenesii>();
        }

        public string Lenda { get; set; } = null!;

        public virtual ICollection<Ditari> Ditaris { get; set; }
        public virtual ICollection<Mesimdhenesii> Mesimdhenesiis { get; set; }
        public virtual ICollection<Nxenesii> Nxenesiis { get; set; }
    }
}
