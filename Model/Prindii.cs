using System;
using System.Collections.Generic;

namespace E_Vlersimiii.Models
{
    public partial class Prindii
    {
        public int IdPrindi { get; set; }
        public int? Nxenesi { get; set; }
        public string? MbiemriP { get; set; }
        public string? EmriP { get; set; }
        public int? NrTel { get; set; }
        public int? NotaP1 { get; set; }
        public int? NotaP2 { get; set; }
        public int? NotaP3 { get; set; }
        public int? NotaP { get; set; }

        public virtual Nota1? NotaP1Navigation { get; set; }
        public virtual Nota2? NotaP2Navigation { get; set; }
        public virtual Nota3? NotaP3Navigation { get; set; }
        public virtual VleresimiPerfundimtar? NotaPNavigation { get; set; }
        public virtual Nxenesii? NxenesiNavigation { get; set; }
    }
}
