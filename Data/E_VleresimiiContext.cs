using System;
using System.Collections.Generic;
using E_Vlersimiii.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace E_Vlersimiii.Data
{
    public partial class E_VleresimiiContext : DbContext
    {
        public E_VleresimiiContext()
        {
        }

        public E_VleresimiiContext(DbContextOptions<E_VleresimiiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Ditari> Ditari { get; set; } = null!;
        public virtual DbSet<Lendum> Lenda { get; set; } = null!;
        public virtual DbSet<Mesimdhenesii> Mesimdhenesiis { get; set; } = null!;
        public virtual DbSet<Nota1> Nota1 { get; set; } = null!;
        public virtual DbSet<Nota2> Nota2 { get; set; } = null!;
        public virtual DbSet<Nota3> Nota3 { get; set; } = null!;
        public virtual DbSet<Nxenesii> Nxenesii { get; set; } = null!;
        public virtual DbSet<Prindii> Prindii { get; set; } = null!;
        public virtual DbSet<VleresimiPerfundimtar> VleresimiPerfundimtar { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-G6O4QA7;Database=E_Vleresimii; Trusted_Connection=True;MultipleActiveResultSets=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ditari>(entity =>
            {
                entity.HasKey(e => e.IdNxenesi)
                    .HasName("PK__Ditari__16F46B2582E1C6BC");

                entity.ToTable("Ditari");

                entity.Property(e => e.IdKlasa).HasColumnName("ID_Klasa");


                entity.Property(e => e.IdNxenesi)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("ID_Nxenesi")
                    .HasDefaultValueSql("('12/2')");

                entity.Property(e => e.Lenda)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MesimdhenesiId).HasColumnName("Mesimdhenesi_ID");

                entity.Property(e => e.NotaP1).HasColumnName("NotaP_1");

                entity.Property(e => e.NotaP2).HasColumnName("NotaP_2");

                entity.Property(e => e.NotaP3).HasColumnName("NotaP_3");

                entity.Property(e => e.NxenesiId).HasColumnName("Nxenesi_ID");

                entity.Property(e => e.Orari)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Prezenca)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.LendaNavigation)
                    .WithMany(p => p.Ditaris)
                    .HasForeignKey(d => d.Lenda)
                    .HasConstraintName("fk_Lenda");

                entity.HasOne(d => d.Mesimdhenesi)
                    .WithMany(p => p.Ditaris)
                    .HasForeignKey(d => d.MesimdhenesiId)
                    .HasConstraintName("fk_Mesimdhenesi");

                entity.HasOne(d => d.NotaPNavigation)
                    .WithMany(p => p.Ditaris)
                    .HasForeignKey(d => d.NotaP)
                    .HasConstraintName("fk_NotaP_Ditari");

                entity.HasOne(d => d.NotaP1Navigation)
                    .WithMany(p => p.Ditaris)
                    .HasForeignKey(d => d.NotaP1)
                    .HasConstraintName("fk_Nota1_Ditari");

                entity.HasOne(d => d.NotaP2Navigation)
                    .WithMany(p => p.Ditaris)
                    .HasForeignKey(d => d.NotaP2)
                    .HasConstraintName("fk_Nota2_Ditari");

                entity.HasOne(d => d.NotaP3Navigation)
                    .WithMany(p => p.Ditaris)
                    .HasForeignKey(d => d.NotaP3)
                    .HasConstraintName("fk_Nota3_Ditari");

                entity.HasOne(d => d.Nxenesi)
                    .WithMany(p => p.Ditaris)
                    .HasForeignKey(d => d.NxenesiId)
                    .HasConstraintName("fk_Nxenesi_Ditari");
            });

            modelBuilder.Entity<Lendum>(entity =>
            {
                entity.HasKey(e => e.Lenda)
                    .HasName("PK__Lenda__B707CB7A633B27E9");

                entity.Property(e => e.Lenda)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Mesimdhenesii>(entity =>
            {
                entity.HasKey(e => e.IdMesimdhensi)
                    .HasName("PK__Mesimdhe__EC069A501338F92C");

                entity.ToTable("Mesimdhenesii");

                entity.Property(e => e.IdMesimdhensi)
                    .ValueGeneratedNever()
                    .HasColumnName("ID_Mesimdhensi");

                entity.Property(e => e.EmriM)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Lenda)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MbiemriM)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NrTel).HasColumnName("Nr_Tel");

                entity.HasOne(d => d.LendaNavigation)
                    .WithMany(p => p.Mesimdhenesiis)
                    .HasForeignKey(d => d.Lenda)
                    .HasConstraintName("fk_Lenda_Mesimdhenesii");
            });

            modelBuilder.Entity<Nota1>(entity =>
            {
                entity.HasKey(e => e.NotaP1)
                    .HasName("PK__Nota1__308D8E1B0B2E3FA7");

                entity.ToTable("Nota1");

                entity.Property(e => e.NotaP1)
                    .ValueGeneratedNever()
                    .HasColumnName("NotaP_1");

                entity.Property(e => e.Aktiviteti)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Nota2>(entity =>
            {
                entity.HasKey(e => e.NotaP2)
                    .HasName("PK__Nota2__308D8E1C18016B1E");

                entity.ToTable("Nota2");

                entity.Property(e => e.NotaP2)
                    .ValueGeneratedNever()
                    .HasColumnName("NotaP_2");

                entity.Property(e => e.Aktiviteti)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Nota3>(entity =>
            {
                entity.HasKey(e => e.NotaP3)
                    .HasName("PK__Nota3__308D8E1D4CB9FF40");

                entity.ToTable("Nota3");

                entity.Property(e => e.NotaP3)
                    .ValueGeneratedNever()
                    .HasColumnName("NotaP_3");

                entity.Property(e => e.Aktiviteti)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Nxenesii>(entity =>
            {
                entity.HasKey(e => e.IdNxenesi)
                    .HasName("PK__Nxenesii__14FD69EBC633B489");

                entity.ToTable("Nxenesii");

                entity.Property(e => e.IdNxenesi)
                    .ValueGeneratedNever()
                    .HasColumnName("ID_Nxenesi");

                entity.Property(e => e.EmriN)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Klasa)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('12/2')");

                entity.Property(e => e.Lenda)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MbiemriN)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NotaP1).HasColumnName("NotaP_1");

                entity.Property(e => e.NotaP2).HasColumnName("NotaP_2");

                entity.Property(e => e.NotaP3).HasColumnName("NotaP_3");

                entity.HasOne(d => d.LendaNavigation)
                    .WithMany(p => p.Nxenesiis)
                    .HasForeignKey(d => d.Lenda)
                    .HasConstraintName("fk_Lenda_Nxenesi");

                entity.HasOne(d => d.NotaPNavigation)
                    .WithMany(p => p.Nxenesiis)
                    .HasForeignKey(d => d.NotaP)
                    .HasConstraintName("fk_NotaP_Nxenesi");

                entity.HasOne(d => d.NotaP1Navigation)
                    .WithMany(p => p.Nxenesiis)
                    .HasForeignKey(d => d.NotaP1)
                    .HasConstraintName("fk_Nota1_Nxenesi");

                entity.HasOne(d => d.NotaP2Navigation)
                    .WithMany(p => p.Nxenesiis)
                    .HasForeignKey(d => d.NotaP2)
                    .HasConstraintName("fk_Nota2_Nxenesi");

                entity.HasOne(d => d.NotaP3Navigation)
                    .WithMany(p => p.Nxenesiis)
                    .HasForeignKey(d => d.NotaP3)
                    .HasConstraintName("fk_Nota3_Nxenesi");
            });

            modelBuilder.Entity<Prindii>(entity =>
            {
                entity.HasKey(e => e.IdPrindi)
                    .HasName("PK__Prindii__0F9122BEDB506304");

                entity.ToTable("Prindii");

                entity.Property(e => e.IdPrindi)
                    .ValueGeneratedNever()
                    .HasColumnName("ID_Prindi");

                entity.Property(e => e.EmriP)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MbiemriP)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NotaP1).HasColumnName("NotaP_1");

                entity.Property(e => e.NotaP2).HasColumnName("NotaP_2");

                entity.Property(e => e.NotaP3).HasColumnName("NotaP_3");

                entity.Property(e => e.NrTel).HasColumnName("Nr_Tel");

                entity.HasOne(d => d.NotaPNavigation)
                    .WithMany(p => p.Prindiis)
                    .HasForeignKey(d => d.NotaP)
                    .HasConstraintName("fk_NotaP_P");

                entity.HasOne(d => d.NotaP1Navigation)
                    .WithMany(p => p.Prindiis)
                    .HasForeignKey(d => d.NotaP1)
                    .HasConstraintName("fk_Nota1_P");

                entity.HasOne(d => d.NotaP2Navigation)
                    .WithMany(p => p.Prindiis)
                    .HasForeignKey(d => d.NotaP2)
                    .HasConstraintName("fk_Nota2_P");

                entity.HasOne(d => d.NotaP3Navigation)
                    .WithMany(p => p.Prindiis)
                    .HasForeignKey(d => d.NotaP3)
                    .HasConstraintName("fk_Nota3_P");

                entity.HasOne(d => d.NxenesiNavigation)
                    .WithMany(p => p.Prindiis)
                    .HasForeignKey(d => d.Nxenesi)
                    .HasConstraintName("fk_Nxenesi_P");
            });

            modelBuilder.Entity<VleresimiPerfundimtar>(entity =>
            {
                entity.HasKey(e => e.NotaP)
                    .HasName("PK__Vleresim__4FB2C7F4D4208617");

                entity.ToTable("Vleresimi_Perfundimtar");

                entity.Property(e => e.NotaP).ValueGeneratedNever();

                entity.HasOne(d => d.Nota1Navigation)
                    .WithMany(p => p.VleresimiPerfundimtars)
                    .HasForeignKey(d => d.Nota1)
                    .HasConstraintName("fk_Nota1");

                entity.HasOne(d => d.Nota2Navigation)
                    .WithMany(p => p.VleresimiPerfundimtars)
                    .HasForeignKey(d => d.Nota2)
                    .HasConstraintName("fk_Nota2");

                entity.HasOne(d => d.Nota3Navigation)
                    .WithMany(p => p.VleresimiPerfundimtars)
                    .HasForeignKey(d => d.Nota3)
                    .HasConstraintName("fk_Nota3");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
