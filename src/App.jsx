import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, ExternalLink, X, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    category: "Web Development",
    accent: "cyan",
    items: ["React JS", "TypeScript", "JavaScript", "HTML & CSS", "PHP", "Laravel"]
  },
  {
    category: "Mobile Development",
    accent: "blue",
    items: ["React Native (Expo)", "Java"]
  },
  {
    category: "Data Science & Scripting",
    accent: "indigo",
    items: ["Python", "Machine Learning", "NLP", "TF-IDF", "K-Means", "K-Medoids"]
  },
  {
    category: "Tools & Workflow",
    accent: "sky",
    items: ["Redux Toolkit", "Context API", "Axios", "Tailwind CSS", "Vite", "Git"]
  }
];

const experiences = [
  {
    period: "Agustus 2025",
    company: "PTUN Medan",
    role: "Mahasiswa Magang",
    points: [
      "Mendukung kegiatan operasional sistem di lingkungan institusi peradilan.",
      "Merancang Si Butet (Sistem Buku Tamu Elektronik) untuk digitalisasi pendataan riwayat kunjungan tamu.",
      "Menyusun laporan teknis terkait implementasi dan optimalisasi sistem selama masa magang."
    ],
    delay: 50
  },
  {
    period: "Sep – Des 2024",
    company: "Alterra Academy",
    role: "React JavaScript Training",
    points: [
      "Menyelesaikan program pelatihan intensif di bidang pengembangan aplikasi web front-end menggunakan React JS.",
      "Menerapkan best practices dalam arsitektur komponen, manajemen state, dan integrasi RESTful API."
    ],
    delay: 100
  }
];

const projects = [
  {
    title: "Skripsi (K-Means vs K-Medoids)",
    year: "2026",
    category: "Machine Learning & Analisis Data ulasan Tokopedia",
    desc: "Analisis komparatif kinerja K-Means dan K-Medoids dalam klasterisasi 1.000 ulasan Tokopedia menggunakan pembobotan TF-IDF dan metrik Davies-Bouldin Index (DBI).",
    longDesc: "Penelitian akademik ini membandingkan keandalan dan akurasi pengelompokan algoritma K-Means dan K-Medoids pada data tekstual. Data ulasan Tokopedia diproses melalui pipeline NLP yang ketat (case folding, tokenizing, stopword removal, stemming) lalu ditransformasikan ke vektor numerik menggunakan TF-IDF dengan L2 Normalization. Evaluasi hasil klasterisasi dihitung secara matematis menggunakan Davies-Bouldin Index (DBI) berbasis Cosine Distance untuk mengidentifikasi metode pengelompokan terbaik.",
    techStack: ["Python", "NLP", "TF-IDF", "K-Means", "K-Medoids", "Davies-Bouldin Index"],
    features: [
      "Preprocessing NLP bahasa Indonesia tingkat lanjut (Stemming Sastrawi & Stopwords)",
      "Ekstraksi fitur matematis TF-IDF dengan L2 Normalization",
      "Komparasi iterasi jarak berbasis Cosine Distance",
      "Evaluasi efektivitas klaster menggunakan Davies-Bouldin Index (DBI)"
    ],
    delay: 50,
    stagger: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Si Butet (Buku Tamu Elektronik)",
    year: "2025",
    category: "Aplikasi Web Internal PTUN Medan",
    desc: "Sistem Buku Tamu Elektronik berbasis web yang dirancang untuk mendigitalisasi proses registrasi, pelaporan, dan pengelolaan data kunjungan tamu secara real-time.",
    longDesc: "Dibuat dan diterapkan selama masa magang di Pengadilan Tata Usaha Negara (PTUN) Medan. Aplikasi 'Si Butet' bertujuan mendigitalisasi pencatatan riwayat tamu dari sistem manual berbasis kertas menjadi basis data yang aman dan terstruktur. Hal ini memudahkan petugas administrasi dalam melakukan pencarian instan, validasi identitas, dan pelaporan statistik bulanan secara terkomputerisasi.",
    techStack: ["React JS", "Laravel", "Tailwind CSS", "Axios", "MySQL"],
    features: [
      "Pencatatan data kunjungan tamu yang cepat dan aman",
      "Dashboard admin interaktif dengan chart statistik kunjungan",
      "Fitur filter, pencarian riwayat kunjungan instan, dan ekspor laporan berkala",
      "Autentikasi berlapis untuk menjaga integritas data kunjungan institusi"
    ],
    delay: 100,
    stagger: true,
    image: "./src/assets/sibutet.png"
  },
  {
    title: "Website Relawanku",
    year: "2024",
    category: "Platform Kampanye Sosial & Relawan",
    desc: "Platform berbasis web modern yang mempertemukan komunitas sosial dengan sukarelawan untuk mempermudah pendaftaran aksi sosial secara digital.",
    longDesc: "Relawanku is standard collaborative platform built using React JS and TypeScript. Berfokus pada arsitektur komponen yang reusable, performa render yang efisien, serta manajemen state global yang kompleks dengan Redux Toolkit untuk menangani ribuan data kampanye dan interaksi pengguna.",
    techStack: ["React JS", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Context API"],
    features: [
      "Sistem pendaftaran dan pencarian kampanye sosial berbasis lokasi dan kategori",
      "Arsitektur kode berbasis TypeScript yang andal dan minim bug",
      "Manajemen state global yang terpusat menggunakan Redux Toolkit",
      "Integrasi API yang aman untuk pembaruan kuota relawan secara real-time"
    ],
    delay: 50,
    stagger: false,
    image: "./src/assets/relawanku.png"
  },
  {
    title: "Novel App",
    year: "2025",
    category: "Aplikasi Mobile Baca Novel",
    desc: "Aplikasi seluler interaktif yang menyajikan koleksi pustaka buku digital dengan sistem navigasi intuitif dan performa rendering teks yang dioptimalkan.",
    longDesc: "Aplikasi seluler yang dikembangkan menggunakan React Native (Expo) untuk mendukung pengalaman membaca buku digital yang mulus pada perangkat Android maupun iOS. Aplikasi ini memanfaatkan manajemen cache data lokal untuk penghematan bandwidth pengguna serta antarmuka yang ramah mata guna meminimalkan kelelahan saat membaca dalam waktu lama.",
    techStack: ["React Native", "Expo", "Context API", "JavaScript", "React Navigation"],
    features: [
      "Navigasi dinamis (Tab & Stack Navigation) yang responsif",
      "Fitur bookmark halaman membaca terakhir dan penyesuaian ukuran font",
      "Mode gelap (Dark Mode) dan terang terintegrasi langsung",
      "Optimasi load data teks panjang dengan minim penggunaan memori perangkat"
    ],
    delay: 100,
    stagger: true,
    image: "./src/assets/novelapp.jpeg"
  }
];

const techBadges = [
  {
    name: "React JS", color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/15 hover:border-cyan-400/60",
    icon: <svg className="w-4 h-4" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></svg>
  },
  {
    name: "TypeScript", color: "text-blue-400 border-blue-500/20 bg-blue-950/15 hover:border-blue-400/60",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm11.123 10.154h8.318V12h-3.045v9.846h-2.228V12h-3.045zm-1.895 2.114c0 3.123-2.115 4.398-4.475 4.398-1.543 0-2.822-.591-3.41-1.391l1.542-1.205c.421.566.983.875 1.702.875.948 0 1.405-.439 1.405-1.194 0-.843-.65-1.141-1.844-1.65-1.597-.685-2.915-1.528-2.915-3.354 0-1.931 1.545-3.178 3.863-3.178 1.422 0 2.458.544 3.019 1.211l-1.405 1.159c-.386-.439-.896-.685-1.528-.685-.755 0-1.176.369-1.176.913 0 .738.51 1.001 1.633 1.492 1.809.773 3.067 1.563 3.067 3.346z"/></svg>
  },
  {
    name: "Python", color: "text-yellow-400 border-yellow-500/20 bg-yellow-950/15 hover:border-yellow-400/60",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.927 0C6.23 0 6.643 2.47 6.643 2.47l.006 2.56H12v.37H5.11s-4.63-.518-4.63 4.63c0 5.147 4.022 4.962 4.022 4.962h2.413v-3.4s-.044-4.084 4.022-4.084h6.791s3.948-.052 3.948-3.947V3.535S22.022 0 16.326 0zm3.873 1.53c.484 0 .878.394.878.878 0 .485-.394.879-.878.879s-.879-.394-.879-.879a.88.88 0 0 1 .879-.879zm-7.994 8.94c-3.948 0-3.948 3.947-3.948 3.947v4.114s-.347 2.47 5.348 2.47c5.696 0 5.283-2.47 5.283-2.47l-.006-2.56H12v-.37h6.89s4.63.518 4.63-4.63c0-5.147-4.022-4.962-4.022-4.962h-2.413v3.4s.044 4.084-4.022 4.084H6.262s-4.456 0-4.456 4.456zM11.927 20.94a.88.88 0 0 1 .879.878c0 .485-.394.879-.879.879s-.878-.394-.878-.879.393-.878.878-.878z"/></svg>
  },
  {
    name: "Machine Learning", color: "text-purple-400 border-purple-500/20 bg-purple-950/15 hover:border-purple-400/60",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  },
  {
    name: "PHP & Laravel", color: "text-red-400 border-red-500/20 bg-red-950/15 hover:border-red-400/60",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  },
  {
    name: "React Native", color: "text-indigo-400 border-indigo-500/20 bg-indigo-950/15 hover:border-indigo-400/60",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  },
  {
    name: "Data Analysis", color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/15 hover:border-emerald-400/60",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  }
];

const accentMap = {
  cyan:   { border: "border-cyan-500/30",   text: "text-cyan-400",   bg: "bg-cyan-950/20",   dot: "bg-cyan-400"   },
  blue:   { border: "border-blue-500/30",   text: "text-blue-400",   bg: "bg-blue-950/20",   dot: "bg-blue-400"   },
  indigo: { border: "border-indigo-500/30", text: "text-indigo-400", bg: "bg-indigo-950/20", dot: "bg-indigo-400" },
  sky:    { border: "border-sky-500/30",    text: "text-sky-400",    bg: "bg-sky-950/20",    dot: "bg-sky-400"    }
};

const Reveal = React.memo(({ children, delay = 0, className = "", instant = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (instant) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [instant]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
});

const SectionLabel = React.memo(({ children }) => (
  <h2 className="text-[10px] font-mono uppercase tracking-[0.35em] text-cyan-500 flex items-center gap-4 mb-10 md:mb-16">
    <span className="w-8 md:w-12 h-px bg-cyan-500 shrink-0"></span>
    {children}
  </h2>
));

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let rafId;
    let lastScrolled = false;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const isScrolled = scrollY > 50;
        
        if (isScrolled !== lastScrolled) {
          setScrolled(isScrolled);
          lastScrolled = isScrolled;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden bg-[#020818]">

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3 bg-[#030b21] border-b border-blue-900/40 shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tighter text-white flex items-center gap-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>
            JDS<span className="text-cyan-400">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-blue-200/60">
            <a href="#about"      className="hover:text-cyan-400 transition-colors duration-200">Tentang</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors duration-200">Pengalaman</a>
            <a href="#projects"   className="hover:text-cyan-400 transition-colors duration-200">Proyek</a>
            <a href="#contact"    className="hover:text-cyan-400 transition-colors duration-200">Kontak</a>
          </div>
          <a href="#contact" className="md:hidden text-cyan-400 border border-cyan-500/40 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-cyan-500/10 transition-all">
            Halo
          </a>
        </div>
      </nav>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#020818]"></div>
        <div className="absolute inset-0 bg-radial-vignette"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        <section id="home" className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 border-b border-blue-900/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
              <Reveal delay={50} instant={true}>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] mb-6 md:mb-8 bg-blue-950/70 border border-cyan-500/20 px-4 py-2.5 rounded-full text-cyan-300/90">
                  <MapPin size={12} className="text-cyan-400 shrink-0" />
                  Medan, Sumatera Utara, Indonesia
                </div>
              </Reveal>

              <Reveal delay={100} instant={true}>
                <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.0] tracking-tighter mb-2 uppercase text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Joenathan
                </h1>
                <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.0] tracking-tighter mb-2 uppercase" style={{ fontFamily: "'Syne', sans-serif", color: 'transparent', WebkitTextStroke: '1.5px rgba(148,215,235,0.6)' }}>
                  Daniel
                </h1>
                <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.0] tracking-tighter mb-8 uppercase text-cyan-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Sihombing<span className="text-white">.</span>
                </h1>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-blue-900/40 text-left">
                <Reveal delay={150} className="sm:col-span-1" instant={true}>
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-400/50 mb-2">Fokus Utama</p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300 leading-relaxed" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Web &<br/>Mobile<br/>Developer
                  </p>
                </Reveal>
                <Reveal delay={200} className="sm:col-span-2" instant={true}>
                  <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md tracking-tight text-blue-100/80 mb-6">
                    Mengembangkan aplikasi web modern yang responsif dan aplikasi mobile fungsional, terintegrasi dengan{' '}
                    <span className="font-medium text-cyan-400">keahlian analisis data</span> tersertifikasi untuk menghadirkan solusi teknologi berkinerja tinggi.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#projects" className="bg-cyan-500 text-[#020818] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Lihat Proyek
                    </a>
                    <a href="#contact" className="border border-cyan-500/40 text-cyan-200 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-500/5 transition-all duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Hubungi Saya
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end mb-4 lg:mb-0">
              <Reveal delay={100} instant={true}>
                <div className="relative w-48 h-64 sm:w-60 sm:h-80 md:w-80 md:h-[27rem] lg:w-[22rem] lg:h-[30rem] rounded-2xl p-[3px] lg:-rotate-2 hover:rotate-0 transition-all duration-500 group"
                     style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(29,78,216,0.15) 50%, rgba(6,182,212,0.05) 100%)' }}>
                  <div className="w-full h-full rounded-xl overflow-hidden bg-blue-950/40">
                    <img
                      src="./src/assets/file_0000000095f8720ba83999cd3b5712cd.png"
                      alt="Joenathan Daniel Sihombing"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#020818] text-[9px] md:text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 md:px-6 md:py-3 rounded-full" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Data Analyst BNSP
                  </div>
                  <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center bg-[#030b21]">
                    <span className="text-[10px] font-bold text-cyan-400 text-center leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>3.68<br/>/4.00</span>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        <section className="px-6 md:px-12 py-8 md:py-10 border-b border-blue-900/30 bg-blue-950/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-cyan-500/80 shrink-0 font-bold">
              Tech Stack:
            </span>
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {techBadges.map((tech, i) => (
                <div key={i} className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105 cursor-default ${tech.color}`}>
                  {tech.icon}
                  <span className="text-[11px] md:text-xs font-semibold tracking-wide">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 md:px-12 py-20 md:py-32 border-b border-blue-900/30 scroll-mt-20">
          <Reveal>
            <SectionLabel>Tentang Saya</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal delay={50} className="lg:col-span-7">
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-[1.6] text-blue-50/85 tracking-tight">
                Lulusan <span className="text-white font-medium">Teknik Informatika</span> dengan fokus keahlian pada pengembangan web, aplikasi seluler, dan analisis data.
              </p>
              <p className="mt-6 text-base md:text-lg text-blue-200/65 leading-relaxed font-light">
                Memiliki pengalaman langsung dalam membangun aplikasi terintegrasi, serta pemahaman praktis terkait{' '}
                <em className="text-blue-100/90 not-italic font-medium">Machine Learning</em> dan pengolahan data. Tersertifikasi resmi sebagai{' '}
                <span className="text-cyan-400 font-medium">Data Analyst</span> oleh BNSP dan terbiasa bekerja secara{' '}
                <em className="text-blue-100/90 not-italic">remote</em> maupun kolaboratif untuk menghadirkan solusi teknologi yang fungsional, efisien, dan menarik bagi pengguna.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "IPK", value: "3.68", sub: "dari 4.00" },
                  { label: "Sertifikasi", value: "BNSP", sub: "Data Analyst" },
                  { label: "Proyek", value: "4+", sub: "Selesai" },
                  { label: "Pengalaman", value: "2+", sub: "Tahun Belajar" }
                ].map((stat, i) => (
                  <div key={i} className="border border-blue-800/40 rounded-2xl p-5 bg-blue-950/20 hover:border-cyan-500/40 hover:bg-blue-950/35 transition-all duration-200">
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{stat.value}</p>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400/70">{stat.label}</p>
                    <p className="text-xs text-blue-300/50 mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="px-6 md:px-12 py-20 md:py-32 border-b border-blue-900/30 scroll-mt-20">
          <Reveal>
            <SectionLabel>Kemampuan Teknis</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {skillCategories.map((cat, i) => {
              const a = accentMap[cat.accent];
              return (
                <Reveal key={i} delay={i * 30}>
                  <div className={`h-full border rounded-2xl p-6 md:p-7 bg-blue-950/15 hover:bg-blue-950/30 transition-all duration-200 group cursor-default ${a.border} hover:border-opacity-70`}>
                    <p className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-5 ${a.text}`}>{cat.category}</p>
                    <div className="flex flex-col gap-2.5">
                      {cat.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}></span>
                          <span className="text-sm text-blue-100/75 group-hover:text-blue-100/90 transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={50}>
            <div className="mt-8 border border-blue-800/30 rounded-2xl p-6 md:p-7 bg-blue-950/10">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] mb-5 text-blue-400/70">Soft Skills</p>
              <div className="flex flex-wrap gap-3">
                {["Komunikasi Interpersonal & Teknis", "Kolaborasi Tim", "Adaptabilitas", "Kemauan Belajar Tinggi"].map((skill, i) => (
                  <span key={i} className="text-xs text-blue-200/70 border border-blue-700/30 rounded-full px-4 py-1.5 bg-blue-900/20 hover:border-blue-500/50 hover:text-blue-100/90 transition-all duration-150 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="experience" className="px-6 md:px-12 py-20 md:py-32 border-b border-blue-900/30 scroll-mt-20">
          <Reveal>
            <SectionLabel>Pengalaman & Pendidikan</SectionLabel>
          </Reveal>

          <div className="relative">
            <div className="absolute left-0 md:left-[calc(25%-1px)] top-0 bottom-0 w-px bg-blue-900/30 hidden md:block"></div>

            {experiences.map((exp, i) => (
              <Reveal key={i} delay={exp.delay}>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-10 md:py-14 border-b border-blue-900/25 hover:bg-blue-900/10 transition-colors duration-300 rounded-2xl md:px-4 md:-mx-4">
                  <div className="md:col-span-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.12em] text-cyan-300/50 pt-1.5 mb-3 md:mb-0 md:text-right md:pr-8">
                    {exp.period}
                  </div>
                  <div className="md:col-span-9 md:pl-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1.5 text-white group-hover:text-cyan-300 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {exp.company}
                    </h3>
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.18em] text-cyan-400/80 mb-5">{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm md:text-base text-blue-100/65 leading-relaxed">
                          <ArrowUpRight size={14} className="text-cyan-500/60 shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={150}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-10 md:py-14 hover:bg-blue-900/10 transition-colors duration-300 rounded-2xl md:px-4 md:-mx-4">
                <div className="md:col-span-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.12em] text-cyan-300/50 pt-1.5 mb-3 md:mb-0 md:text-right md:pr-8">
                  Sep 2022 – Mei 2026
                </div>
                <div className="md:col-span-9 md:pl-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1.5 text-white group-hover:text-cyan-300 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Universitas Methodist Indonesia
                  </h3>
                  <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.18em] text-cyan-400/80 mb-5">
                    Sarjana Teknik Informatika — Medan, Sumatera Utara
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 text-xs text-blue-200/70 border border-blue-700/30 rounded-full px-4 py-1.5 bg-blue-900/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      IPK 3.68 / 4.00
                    </span>
                    <span className="flex items-center gap-2 text-xs text-blue-200/70 border border-blue-700/30 rounded-full px-4 py-1.5 bg-blue-900/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      Tersertifikasi Data Analyst (BNSP)
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="px-6 md:px-12 py-20 md:py-32 border-b border-blue-900/30 scroll-mt-20">
          <Reveal>
            <SectionLabel>Proyek Pilihan</SectionLabel>
          </Reveal>

          <p className="text-xs text-blue-300/60 mb-8 font-mono tracking-widest uppercase flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
            Klik pada kartu proyek untuk melihat deskripsi detail &amp; fitur lengkap
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-20">
            {projects.map((project, i) => (
              <Reveal key={i} delay={project.delay} className={project.stagger ? "md:mt-20 lg:mt-28" : ""}>
                <div
                  className="group cursor-pointer transition-all duration-200 hover:-translate-y-1"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[16/10] bg-blue-950/40 mb-5 overflow-hidden relative border border-blue-800/30 group-hover:border-cyan-400/50 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-40"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#020818]/95 to-blue-900/10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">Lihat Detail Proyek</span>
                      <span className="text-[10px] font-mono tracking-[0.22em] border border-cyan-400/50 rounded-full px-4 py-1.5 text-cyan-200 bg-[#020818]/90">
                        Klik untuk Membuka
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 z-10">
                      <span className="text-[10px] font-mono tracking-[0.22em] bg-blue-950/90 border border-blue-800/40 rounded-full px-3.5 py-1 text-cyan-300/95">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="px-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight mb-2.5 flex items-center justify-between text-white group-hover:text-cyan-400 transition-colors duration-200" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {project.title}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyan-400 shrink-0" size={18} />
                    </h3>
                    <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-cyan-500/70 mb-2">{project.category}</p>
                    <p className="text-xs sm:text-sm md:text-base text-blue-200/55 leading-relaxed max-w-md line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <div
              className="absolute inset-0 bg-slate-950/95"
              onClick={() => setSelectedProject(null)}
            />

            <div className="relative bg-[#040d21] border border-blue-900/60 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl z-10">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 bg-blue-950/90 border border-blue-800/50 hover:border-cyan-400/80 text-blue-200 hover:text-white p-2.5 rounded-full transition-colors duration-200 z-20"
                aria-label="Tutup Detail Proyek"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-full min-h-[250px] lg:min-h-[450px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#040d21] via-transparent to-transparent opacity-100" />
                  <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                    <span className="text-[10px] font-mono tracking-[0.25em] bg-cyan-500 text-slate-950 px-3 py-1.5 rounded-md font-bold uppercase">
                      {selectedProject.year}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400">
                      Detail Proyek
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1 mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {selectedProject.title}
                    </h2>
                    <p className="text-xs font-mono uppercase tracking-[0.15em] text-blue-400/80 mb-6">
                      {selectedProject.category}
                    </p>

                    <div className="border-t border-blue-900/35 pt-4">
                      <p className="text-sm text-blue-100/80 leading-relaxed font-light mb-6">
                        {selectedProject.longDesc}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-400/60 mb-3 font-semibold">
                        Fitur Utama &amp; Implementasi:
                      </p>
                      <ul className="space-y-2.5">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-blue-200/70">
                            <CheckCircle2 size={15} className="text-cyan-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-blue-900/35 pt-5 mt-4">
                    <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 mb-2.5">
                      Teknologi yang Digunakan:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-cyan-300 font-mono bg-blue-950/65 border border-blue-800/40 px-3 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer id="contact" className="px-6 md:px-12 py-20 md:py-32 relative scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <Reveal delay={50}>
              <SectionLabel>Mulai Diskusi</SectionLabel>
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-10 uppercase text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Let's Build<br/>
                <span className="text-cyan-400">Something</span>.
              </h3>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:joenathandaniel33@gmail.com" className="flex items-center gap-3 bg-cyan-500 text-[#020818] hover:bg-cyan-400 hover:scale-105 transition-all duration-300 rounded-full px-7 py-4 md:px-8 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.15)]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <Mail size={16} />
                  joenathandaniel33@gmail.com
                </a>
                <a href="tel:085760311900" className="flex items-center gap-3 border border-cyan-500/40 hover:border-cyan-400/70 hover:bg-cyan-500/10 text-cyan-100 transition-all duration-300 rounded-full px-7 py-4 md:px-8 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Syne', sans-serif" }}>
                  <Phone size={16} />
                  085760311900
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} className="flex flex-col justify-end lg:text-right">
              <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-blue-200/60 space-y-3.5">
                <p className="flex items-center lg:justify-end gap-2.5">
                  <ArrowUpRight size={14} className="text-cyan-500 shrink-0" />
                  Tersertifikasi Data Analyst — BNSP
                </p>
                <p className="flex items-center lg:justify-end gap-2.5">
                  <ArrowUpRight size={14} className="text-cyan-500 shrink-0" />
                  Sarjana Teknik Informatika — IPK 3.68/4.00
                </p>
                <p className="flex items-center lg:justify-end gap-2.5">
                  <ArrowUpRight size={14} className="text-cyan-500 shrink-0" />
                  Universitas Methodist Indonesia
                </p>
                <p className="flex items-center lg:justify-end gap-2.5">
                  <MapPin size={14} className="text-cyan-500 shrink-0" />
                  Medan, Sumatera Utara, Indonesia
                </p>
                <p className="pt-10 text-cyan-500/40 text-[10px]">
                  © 2026 JOENATHAN DANIEL SIHOMBING. ALL RIGHTS RESERVED.
                </p>
              </div>
            </Reveal>
          </div>
        </footer>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

        * { font-family: 'DM Sans', sans-serif; }

        html { scroll-behavior: smooth; }

        .bg-radial-vignette {
          background: radial-gradient(circle at 50% 30%, rgba(29, 78, 216, 0.15) 0%, rgba(2, 8, 24, 0) 70%);
        }

        .bg-grid-pattern {
          background-size: 56px 56px;
          background-image:
            linear-gradient(to right, rgba(34,211,238,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34,211,238,0.02) 1px, transparent 1px);
        }

        ::-webkit-scrollbar              { width: 6px; }
        ::-webkit-scrollbar-track        { background: #020818; }
        ::-webkit-scrollbar-thumb        { background: #1e3a5f; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover  { background: #06b6d4; }
      `}</style>
    </div>
  );
};

export default App;