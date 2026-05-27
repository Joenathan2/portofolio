import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, X, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  { category: "Web Development", accent: "cyan", items: ["React JS", "TypeScript", "JavaScript", "HTML & CSS", "PHP", "Laravel"] },
  { category: "Mobile Development", accent: "blue", items: ["React Native (Expo)", "Java"] },
  { category: "Data Science & Scripting", accent: "indigo", items: ["Python", "Machine Learning", "NLP", "TF-IDF", "K-Means", "K-Medoids"] },
  { category: "Tools & Workflow", accent: "sky", items: ["Redux Toolkit", "Context API", "Axios", "Tailwind CSS", "Vite", "Git"] }
];

const experiences = [
  {
    period: "Agustus 2025", company: "PTUN Medan", role: "Mahasiswa Magang",
    points: [
      "Mendukung kegiatan operasional sistem di lingkungan institusi peradilan.",
      "Merancang Si Butet (Sistem Buku Tamu Elektronik) untuk digitalisasi pendataan riwayat kunjungan tamu.",
      "Menyusun laporan teknis terkait implementasi dan optimalisasi sistem selama masa magang."
    ],
    delay: 200
  },
  {
    period: "Sep – Des 2024", company: "Alterra Academy", role: "React JavaScript Training",
    points: [
      "Menyelesaikan program pelatihan intensif di bidang pengembangan aplikasi web front-end menggunakan React JS.",
      "Menerapkan best practices dalam arsitektur komponen, manajemen state, dan integrasi RESTful API."
    ],
    delay: 350
  }
];

const projects = [
  {
    title: "Skripsi (K-Means vs K-Medoids)", year: "2026", category: "Machine Learning & Analisis Data",
    desc: "Analisis komparatif kinerja K-Means dan K-Medoids dalam klasterisasi 1.000 ulasan Tokopedia.",
    longDesc: "Penelitian akademik ini membandingkan keandalan dan akurasi pengelompokan algoritma K-Means dan K-Medoids pada data tekstual. Data ulasan diproses melalui pipeline NLP yang ketat lalu ditransformasikan ke vektor numerik menggunakan TF-IDF. Evaluasi hasil dihitung menggunakan Davies-Bouldin Index (DBI).",
    techStack: ["Python", "NLP", "TF-IDF", "K-Means", "K-Medoids"],
    features: [
      "Preprocessing NLP bahasa Indonesia tingkat lanjut",
      "Ekstraksi fitur matematis TF-IDF",
      "Komparasi iterasi jarak berbasis Cosine Distance",
      "Evaluasi efektivitas klaster menggunakan DBI"
    ],
    delay: 100, stagger: false, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Si Butet (Buku Tamu Elektronik)", year: "2025", category: "Aplikasi Web Internal PTUN",
    desc: "Sistem Buku Tamu Elektronik berbasis web yang dirancang untuk mendigitalisasi proses registrasi.",
    longDesc: "Dibuat dan diterapkan selama masa magang di Pengadilan Tata Usaha Negara (PTUN) Medan. Aplikasi 'Si Butet' bertujuan mendigitalisasi pencatatan riwayat tamu dari sistem manual berbasis kertas menjadi basis data yang aman dan terstruktur.",
    techStack: ["React JS", "Laravel", "Tailwind CSS", "MySQL"],
    features: [
      "Pencatatan data kunjungan tamu yang cepat dan aman",
      "Dashboard admin interaktif dengan chart statistik kunjungan",
      "Fitur filter, pencarian riwayat kunjungan instan",
      "Autentikasi berlapis untuk menjaga integritas data"
    ],
    delay: 300, stagger: true, image: "./src/assets/sibutet.png"
  },
  {
    title: "Website Relawanku", year: "2024", category: "Platform Kampanye Sosial & Relawan",
    desc: "Platform berbasis web modern yang mempertemukan komunitas sosial dengan sukarelawan.",
    longDesc: "Relawanku adalah platform kolaboratif interaktif yang dibangun menggunakan React JS dan TypeScript untuk memfasilitasi gerakan sosial di Indonesia. Berfokus pada arsitektur komponen yang reusable dan manajemen state dengan Redux Toolkit.",
    techStack: ["React JS", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    features: [
      "Sistem pendaftaran dan pencarian kampanye sosial",
      "Arsitektur kode berbasis TypeScript yang andal",
      "Manajemen state global menggunakan Redux Toolkit",
      "Integrasi API untuk pembaruan kuota relawan"
    ],
    delay: 100, stagger: false, image: "./src/assets/relawanku.png"
  },
  {
    title: "Novel App", year: "2025", category: "Aplikasi Mobile Baca Novel",
    desc: "Aplikasi seluler interaktif yang menyajikan koleksi pustaka buku digital.",
    longDesc: "Aplikasi seluler yang dikembangkan menggunakan React Native (Expo) untuk mendukung pengalaman membaca buku digital yang mulus pada perangkat Android maupun iOS. Memanfaatkan manajemen cache data lokal.",
    techStack: ["React Native", "Expo", "Context API", "JavaScript"],
    features: [
      "Navigasi dinamis (Tab & Stack Navigation)",
      "Fitur bookmark halaman membaca terakhir",
      "Mode gelap (Dark Mode) dan terang terintegrasi",
      "Optimasi load data teks panjang"
    ],
    delay: 300, stagger: true, image: "./src/assets/novelapp.jpeg"
  }
];

const techBadges = [
  { name: "React JS", color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/15", icon: <svg className="w-4 h-4" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></svg> },
  { name: "TypeScript", color: "text-blue-400 border-blue-500/20 bg-blue-950/15", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm11.123 10.154h8.318V12h-3.045v9.846h-2.228V12h-3.045zm-1.895 2.114c0 3.123-2.115 4.398-4.475 4.398-1.543 0-2.822-.591-3.41-1.391l1.542-1.205c.421.566.983.875 1.702.875.948 0 1.405-.439 1.405-1.194 0-.843-.65-1.141-1.844-1.65-1.597-.685-2.915-1.528-2.915-3.354 0-1.931 1.545-3.178 3.863-3.178 1.422 0 2.458.544 3.019 1.211l-1.405 1.159c-.386-.439-.896-.685-1.528-.685-.755 0-1.176.369-1.176.913 0 .738.51 1.001 1.633 1.492 1.809.773 3.067 1.563 3.067 3.346z"/></svg> },
  { name: "Python", color: "text-yellow-400 border-yellow-500/20 bg-yellow-950/15", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.927 0C6.23 0 6.643 2.47 6.643 2.47l.006 2.56H12v.37H5.11s-4.63-.518-4.63 4.63c0 5.147 4.022 4.962 4.022 4.962h2.413v-3.4s-.044-4.084 4.022-4.084h6.791s3.948-.052 3.948-3.947V3.535S22.022 0 16.326 0zm3.873 1.53c.484 0 .878.394.878.878 0 .485-.394.879-.878.879s-.879-.394-.879-.879a.88.88 0 0 1 .879-.879zm-7.994 8.94c-3.948 0-3.948 3.947-3.948 3.947v4.114s-.347 2.47 5.348 2.47c5.696 0 5.283-2.47 5.283-2.47l-.006-2.56H12v-.37h6.89s4.63.518 4.63-4.63c0-5.147-4.022-4.962-4.022-4.962h-2.413v3.4s.044 4.084-4.022 4.084H6.262s-4.456 0-4.456 4.456zM11.927 20.94a.88.88 0 0 1 .879.878c0 .485-.394.879-.879.879s-.878-.394-.878-.879.393-.878.878-.878z"/></svg> },
  { name: "Laravel", color: "text-red-400 border-red-500/20 bg-red-950/15", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> }
];

const accentMap = {
  cyan:   { border: "border-cyan-500/30",   text: "text-cyan-400",   dot: "bg-cyan-400"   },
  blue:   { border: "border-blue-500/30",   text: "text-blue-400",   dot: "bg-blue-400"   },
  indigo: { border: "border-indigo-500/30", text: "text-indigo-400", dot: "bg-indigo-400" },
  sky:    { border: "border-sky-500/30",    text: "text-sky-400",    dot: "bg-sky-400"    }
};

const Reveal = ({ children, delay = 0, className = "", instant = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (instant) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [instant]);

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionLabel = React.memo(({ children }) => (
  <h2 className="text-[10px] font-mono uppercase tracking-[0.35em] text-cyan-500 flex items-center gap-4 mb-10 md:mb-16">
    <span className="w-8 md:w-12 h-px bg-cyan-500 shrink-0"></span>
    {children}
  </h2>
));

const App = () => {
  const bgOrb1Ref = useRef(null);
  const bgOrb2Ref = useRef(null);
  const heroTextRef = useRef(null);
  const cursorGlowRef = useRef(null); 
  
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.background = `radial-gradient(550px circle at ${e.clientX}px ${e.clientY}px, rgba(34,211,238,0.06), transparent 80%)`;
      }
    };
    
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    let rafId;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollY > 50 && lastScrollY <= 50) setScrolled(true);
        else if (scrollY <= 50 && lastScrollY > 50) setScrolled(false);
        lastScrollY = scrollY;

        if (bgOrb1Ref.current) bgOrb1Ref.current.style.transform = `translateY(${scrollY * 0.2}px) translateZ(0)`;
        if (bgOrb2Ref.current) bgOrb2Ref.current.style.transform = `translateY(${scrollY * 0.1}px) translateZ(0)`;
        if (heroTextRef.current) heroTextRef.current.style.transform = `translateY(${scrollY * 0.05}px) translateZ(0)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden bg-[#020818]">
      
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3 bg-[#020818]/90 backdrop-blur-md border-b border-blue-900/40 shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="font-bold text-lg text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            JDS<span className="text-cyan-400">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest text-blue-200/60">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Pengalaman</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      <div
        ref={cursorGlowRef}
        className="pointer-events-none fixed inset-0 z-20 hidden md:block"
        style={{ transform: 'translateZ(0)' }} 
      />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#020818]"></div>

        <div ref={bgOrb1Ref} className="absolute inset-0 will-change-transform">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-40 animate-spin-slow blur-3xl"
               style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.5) 0%, transparent 70%)', transform: 'translateZ(0)' }}/>
        </div>
        <div ref={bgOrb2Ref} className="absolute inset-0 will-change-transform">
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen opacity-30 animate-blob blur-3xl"
               style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)', transform: 'translateZ(0)' }}/>
        </div>
        
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise" style={{ transform: 'translateZ(0)' }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <section id="home" className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 border-b border-blue-900/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div ref={heroTextRef} className="lg:col-span-7 order-2 lg:order-1 will-change-transform">
              <Reveal delay={0} instant={true}>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] mb-6 md:mb-8 bg-blue-950/50 border border-cyan-500/20 px-4 py-2.5 rounded-full text-cyan-300">
                  <MapPin size={12} className="text-cyan-400" /> Medan, Indonesia
                </div>
              </Reveal>

              <Reveal delay={50} instant={true}>
                <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-none tracking-tighter uppercase text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Joenathan
                </h1>
                <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-none tracking-tighter uppercase" style={{ fontFamily: "'Syne', sans-serif", color: 'transparent', WebkitTextStroke: '1px rgba(148,215,235,0.6)' }}>
                  Daniel
                </h1>
                <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-none tracking-tighter mb-8 uppercase text-cyan-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Sihombing.
                </h1>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-blue-900/40">
                <Reveal delay={100} className="sm:col-span-1" instant={true}>
                  <p className="text-[10px] font-mono uppercase text-cyan-400/50 mb-2">Fokus Utama</p>
                  <p className="text-sm font-semibold uppercase text-cyan-300" style={{ fontFamily: "'Syne', sans-serif" }}>Web & Mobile<br/>Developer</p>
                </Reveal>
                <Reveal delay={150} className="sm:col-span-2" instant={true}>
                  <p className="text-sm sm:text-base font-light text-blue-100/80 mb-6">
                    Mengembangkan aplikasi web modern yang responsif dan terintegrasi dengan <span className="font-medium text-cyan-400">keahlian analisis data</span>.
                  </p>
                  <div className="flex gap-3">
                    <a href="#projects" className="bg-cyan-500 text-[#020818] px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-cyan-400 transition-colors">Lihat Proyek</a>
                    <a href="#contact" className="border border-cyan-500/40 text-cyan-200 px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-cyan-500/10 transition-colors">Hubungi Saya</a>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <Reveal delay={100} instant={true}>
                <div className="relative w-48 h-64 sm:w-60 sm:h-80 md:w-72 md:h-[24rem] rounded-2xl p-[2px] bg-gradient-to-br from-cyan-500/40 to-blue-600/20">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-blue-950/40">
                    <img src="./src/assets/file_0000000095f8720ba83999cd3b5712cd.png" alt="Joenathan" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="eager" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#020818] text-[10px] font-bold uppercase px-5 py-2.5 rounded-full">
                    Data Analyst BNSP
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 md:px-12 py-20 border-b border-blue-900/30 scroll-mt-20">
          <Reveal><SectionLabel>Tentang Saya</SectionLabel></Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal delay={100}>
              <p className="text-xl sm:text-2xl font-light leading-[1.6] text-blue-50/85">
                Lulusan <span className="text-white font-medium">Teknik Informatika</span> dengan fokus keahlian pada pengembangan web, mobile, dan analisis data. Tersertifikasi resmi sebagai Data Analyst oleh BNSP.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: "IPK", value: "3.68" }, { label: "Sertifikasi", value: "BNSP" }, { label: "Proyek", value: "4+" }, { label: "Pengalaman", value: "2+ Thn" }].map((stat, i) => (
                  <div key={i} className="border border-blue-800/40 rounded-2xl p-5 bg-blue-950/20">
                    <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{stat.value}</p>
                    <p className="text-[10px] font-mono uppercase text-cyan-400/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="px-6 md:px-12 py-20 border-b border-blue-900/30 scroll-mt-20">
          <Reveal><SectionLabel>Kemampuan Teknis</SectionLabel></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {skillCategories.map((cat, i) => {
              const a = accentMap[cat.accent];
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className={`h-full border rounded-2xl p-6 bg-blue-950/15 ${a.border}`}>
                    <p className={`text-[10px] font-mono uppercase mb-4 ${a.text}`}>{cat.category}</p>
                    <div className="flex flex-col gap-2">
                      {cat.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className={`w-1 h-1 rounded-full ${a.dot}`}></span>
                          <span className="text-sm text-blue-100/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="experience" className="px-6 md:px-12 py-20 border-b border-blue-900/30 scroll-mt-20">
          <Reveal><SectionLabel>Pengalaman & Pendidikan</SectionLabel></Reveal>
          <div>
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={exp.delay}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-8 border-b border-blue-900/25">
                  <div className="md:col-span-3 text-[10px] font-mono text-cyan-300/50 pt-1">{exp.period}</div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{exp.company}</h3>
                    <p className="text-xs font-mono text-cyan-400/80 mb-4">{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-blue-100/70">
                          <ArrowUpRight size={14} className="text-cyan-500/60 shrink-0 mt-1" /> <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="px-6 md:px-12 py-20 border-b border-blue-900/30 scroll-mt-20">
          <Reveal><SectionLabel>Proyek Pilihan</SectionLabel></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, i) => (
              <Reveal key={i} delay={project.delay}>
                <div className="group cursor-pointer hover:-translate-y-1 transition-transform" onClick={() => setSelectedProject(project)}>
                  <div className="aspect-[16/10] bg-blue-950/40 mb-4 overflow-hidden relative rounded-xl border border-blue-800/30">
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute bottom-4 left-4 z-10"><span className="text-[10px] font-mono bg-blue-950/80 px-3 py-1 rounded-full text-cyan-300">{project.year}</span></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors flex justify-between">{project.title} <ArrowUpRight size={18} /></h3>
                    <p className="text-[11px] font-mono text-cyan-500/70 mb-2">{project.category}</p>
                    <p className="text-sm text-blue-200/60 line-clamp-2">{project.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div className="relative bg-[#040d21] border border-blue-900/60 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto z-10 shadow-2xl">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-blue-950/80 text-blue-200 p-2 rounded-full z-20"><X size={20} /></button>
              <div className="h-48 sm:h-64 relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040d21] to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-sm text-blue-100/80 mb-6">{selectedProject.longDesc}</p>
                <div className="mb-6">
                  <p className="text-xs font-mono text-cyan-400 mb-2">Fitur Utama:</p>
                  <ul className="space-y-2">{selectedProject.features.map((f, i) => (<li key={i} className="flex gap-2 text-sm text-blue-200/70"><CheckCircle2 size={16} className="text-cyan-500 shrink-0" /> {f}</li>))}</ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (<span key={i} className="text-[11px] bg-blue-900/40 text-cyan-300 px-3 py-1 rounded-md">{tech}</span>))}
                </div>
              </div>
            </div>
          </div>
        )}

        <footer id="contact" className="px-6 md:px-12 py-20 relative scroll-mt-20">
          <Reveal>
            <SectionLabel>Mulai Diskusi</SectionLabel>
            <h3 className="text-4xl md:text-6xl font-bold uppercase text-white mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>Let's Build<br/><span className="text-cyan-400">Something</span>.</h3>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:joenathandaniel33@gmail.com" className="flex items-center gap-2 bg-cyan-500 text-slate-900 px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-cyan-400"><Mail size={16}/> Email Saya</a>
            </div>
          </Reveal>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        html { scroll-behavior: smooth; }
        
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.03) 1px, transparent 1px);
        }
        .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes blob { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-2vw, 3vh) scale(1.1); } 100% { transform: translate(0, 0) scale(1); } }
        
        .animate-spin-slow { animation: spin-slow 35s infinite linear; }
        .animate-blob { animation: blob 25s infinite alternate ease-in-out; }
        
        .will-change-transform { will-change: transform, opacity; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020818; }
        ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;