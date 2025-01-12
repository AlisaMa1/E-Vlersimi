using System;
using System.Collections.Generic;

namespace E_Vlersimiii.Models
{
    public partial class Mesimdhenesii
    {
        public Mesimdhenesii()
        {
            Ditaris = new HashSet<Ditari>();
        }

        public int IdMesimdhensi { get; set; }
        public string? Lenda { get; set; }
        public string? MbiemriM { get; set; }
        public string? EmriM { get; set; }
        public int? NrTel { get; set; }

        public virtual Lendum? LendaNavigation { get; set; }
        public virtual ICollection<Ditari> Ditaris { get; set; }
    }
}
