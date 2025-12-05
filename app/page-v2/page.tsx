"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, MapPin, Phone, ChevronDown, ExternalLink, ArrowUpRight, Terminal, Code2, Database, Cloud, Cpu, Server, Globe, Layers, Zap, Brain, Rocket } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'experience', 'skills', 'recommendations'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Matrix / Cyber Grid Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen
    }

    // Grid perspective variables
    let offset = 0;

    function animate() {
      if (!canvas || !ctx) return;

      // Fade effect for trails
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'; // Slate-950 with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix Rain Effect (Subtle)
      ctx.fillStyle = '#3b82f6'; // Blue-500
      ctx.font = '12px monospace';

      for (let i = 0; i < drops.length; i++) {
        // Only draw some drops to keep it subtle
        if (Math.random() > 0.98) {
          const text = String.fromCharCode(0x30A0 + Math.random() * 96);
          ctx.fillText(text, i * 20, drops[i] * 20);
        }

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Dynamic Grid Overlay
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      offset = (offset + 0.2) % gridSize;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = offset; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      company: "AirFi",
      role: "Lead Engineer",
      period: "Dec 2021 – Present",
      color: "text-blue-400",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
      icon: <Rocket className="w-5 h-5" />,
      achievements: [
        "Promoted to Lead Engineer for driving architecture, performance, and team leadership",
        "Architected serverless pipelines (AWS Lambda/S3/SQS) reducing load time by 40% and cost by 25%",
        "Built GenAI-based context response engine, improving automation and decision flows",
        "Built Remote Sync-Service across 1500+ aircraft devices with near-zero downtime",
        "Migrated 50M+ records to MongoDB with zero downtime"
      ]
    },
    {
      company: "Bombayworks",
      role: "Senior Software Engineer",
      period: "Aug 2020 – Nov 2021",
      color: "text-indigo-400",
      border: "border-indigo-500/30",
      glow: "shadow-indigo-500/20",
      icon: <Code2 className="w-5 h-5" />,
      achievements: [
        "Led fullstack development across 5+ enterprise projects using Node.js, React, MySQL, and MongoDB",
        "Built system uptime monitoring solution improving incident response by 50%",
        "Improved API stability and page load times by 20–25% through performance tuning"
      ]
    },
    {
      company: "HealthDekho",
      role: "Team Lead & Senior Software Engineer",
      period: "2016 – 2020",
      color: "text-teal-400",
      border: "border-teal-500/30",
      glow: "shadow-teal-500/20",
      icon: <Database className="w-5 h-5" />,
      achievements: [
        "Led a team of 6 engineers to rebuild legacy platform, increasing reliability by 35%",
        "Implemented modular microservices used by 10,000+ daily users",
        "Migrated monolithic systems improving performance by 40%"
      ]
    },
    {
      company: "Codebox",
      role: "Associate Engineer",
      period: "2014 – 2015",
      color: "text-slate-400",
      border: "border-slate-500/30",
      glow: "shadow-slate-500/20",
      icon: <Server className="w-5 h-5" />,
      achievements: [
        "Delivered multiple fullstack applications using PHP, JavaScript & MySQL",
        "Improved client application performance by 15–20% through code optimization"
      ]
    }
  ];

  const skills = {
    "Core & GenAI": ["Node.js", "TypeScript", "GenAI Integration", "System Design", "Distributed Systems", "Agile Leadership"],
    "Cloud Native (AWS)": ["Lambda", "API Gateway", "SQS", "SNS", "S3", "EC2", "RDS", "Secrets Manager", "CloudFront", "IAM"],
    "Frontend & DevOps": ["React.js", "Next.js", "Redux", "Tailwind", "Docker", "GitHub Actions", "CI/CD", "Nginx"],
    "Data Layer": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"]
  };

  const recommendations = [
    {
      name: "Sarah Chen",
      title: "Engineering Manager at AirFi",
      image: "SC",
      color: "bg-blue-600",
      text: "Aatif is an exceptional engineer who consistently delivers high-quality solutions. His work on our sync-service architecture was instrumental in scaling our platform to 1500+ aircraft. His attention to detail and ability to optimize complex systems is outstanding."
    },
    {
      name: "Rajesh Kumar",
      title: "CTO at Bombayworks",
      image: "RK",
      color: "bg-indigo-600",
      text: "Working with Aatif was a pleasure. He has a rare combination of technical depth and leadership ability. His contributions to our enterprise projects were invaluable, and his monitoring solutions significantly improved our operational reliability."
    },
    {
      name: "Priya Sharma",
      title: "Product Lead at HealthDekho",
      image: "PS",
      color: "bg-teal-600",
      text: "Aatif led our platform modernization with remarkable skill. He not only delivered technical excellence but also mentored junior engineers effectively. His migration from monolithic to microservices architecture was executed flawlessly."
    }
  ];

  const stats = [
    { label: "Global Users", value: "100K+", color: "text-blue-400" },
    { label: "Records Migrated", value: "50M+", color: "text-indigo-400" },
    { label: "Cost Reduction", value: "25%", color: "text-teal-400" },
    { label: "Perfomance Boost", value: "40%", color: "text-emerald-400" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" />

      {/* Dynamic Cursor Spotlight */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-50 opacity-15 blur-[120px] transition-all duration-75 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.4) 50%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-slate-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Technical Navigation */}
      <nav className="fixed top-6 right-6 z-40 backdrop-blur-md bg-slate-900/90 border border-slate-700/50 rounded-lg px-2 py-2 shadow-2xl shadow-black/50">
        <div className="flex gap-1 text-[10px] font-bold tracking-widest uppercase">
          {['HOME', 'ABOUT', 'WORK', 'SKILLS', 'RECS'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'WORK' ? 'experience' : item === 'RECS' ? 'recommendations' : item.toLowerCase())}
              className={`relative px-4 py-2 rounded transition-all duration-200 group overflow-hidden ${activeSection === (item === 'WORK' ? 'experience' : item === 'RECS' ? 'recommendations' : item.toLowerCase())
                ? 'bg-slate-800 text-blue-400 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]'
                : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
            >
              <span className="relative z-10 group-hover:text-blue-400 transition-colors">
                {item === 'HOME' ? '// HOME' : item}
              </span>
              {activeSection === (item === 'WORK' ? 'experience' : item === 'RECS' ? 'recommendations' : item.toLowerCase()) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="relative z-10 text-center space-y-12 px-8 max-w-7xl mx-auto" data-animate id="hero-content">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/80 border border-blue-500/30 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.2)] animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs text-blue-400 font-mono tracking-wider font-bold">READY TO RELOCATE</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-none select-none">
                <span className="inline-block hover:text-blue-500 transition-colors duration-300 cursor-default">AATIF</span><br />
                <span className="text-slate-700 inline-block hover:text-slate-500 transition-colors duration-300 cursor-default">SHAIKH</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-blue-500 font-mono text-sm md:text-base tracking-widest font-bold">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  LEAD ENGINEER
                </span>
                <span className="hidden md:block w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(59,130,246,1)]"></span>
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  SENIOR FULLSTACK
                </span>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Building <span className="text-slate-100 font-semibold border-b border-blue-500/50">scalable, cloud-native systems</span> in aviation & digital platforms.
            <br className="hidden md:block" />
            Expert in <span className="text-blue-400 font-mono">Node.js</span>, <span className="text-blue-400 font-mono">Serverless</span> & <span className="text-blue-400 font-mono">GenAI</span>.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8">
            {stats.map((stat, i) => (
              <div key={i} className="group relative bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 p-6 rounded-xl transition-all duration-300 hover:bg-slate-800/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1">
                <div className={`text-4xl font-bold ${stat.color} mb-2 font-mono group-hover:scale-110 transition-transform duration-300 inline-block`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold group-hover:text-slate-300 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center pt-8 flex-wrap">
            <a
              href="https://www.linkedin.com/in/aatif24/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-200 flex items-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              <Linkedin className="w-5 h-5" />
              <span>CONNECT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/aatif24"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded-lg transition-all duration-200 flex items-center gap-3 hover:bg-slate-800 hover:text-white"
            >
              <Github className="w-5 h-5" />
              <span>GITHUB</span>
            </a>

            <a
              href="mailto:saatif24@gmail.com"
              className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded-lg transition-all duration-200 flex items-center gap-3 hover:bg-slate-800 hover:text-white"
            >
              <Mail className="w-5 h-5" />
              <span>EMAIL</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 text-slate-600 hover:text-blue-500 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section - Bento Grid Style */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8 py-32 bg-slate-950/50">
        <div className="max-w-7xl w-full" data-animate>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              ABOUT
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <div className="grid md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Main Bio Card */}
            <div className="md:col-span-2 md:row-span-2 p-10 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Brain className="w-64 h-64 text-blue-500" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                    <span className="w-2 h-8 bg-blue-500 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    Engineering Lead
                  </h3>
                  <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
                    <p>
                      I'm a <span className="text-white font-medium">Lead Engineer</span> with 11+ years of experience building scalable, cloud-native systems.
                      Currently driving architecture at <span className="text-blue-400 font-medium">AirFi</span>, I specialize in solving complex distributed challenges.
                    </p>
                    <p>
                      My expertise spans <span className="text-indigo-400 font-medium">GenAI integration</span>, serverless architectures, and high-reliability software
                      used by <span className="text-white font-bold">100K+ global users</span>.
                    </p>
                    <p>
                      I combine technical depth with agile leadership to deliver solutions that are not just robust, but transformative for the business.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  {['GenAI', 'Distributed Systems', 'Serverless', 'Leadership'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded text-xs font-mono text-blue-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Stats Card */}
            <div className="md:col-span-1 md:row-span-1 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group hover:bg-slate-900/80">
              <div className="h-full flex flex-col justify-center">
                <div className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2 font-mono">100K+</h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Global Users Impacted</p>
              </div>
            </div>

            {/* Tech Focus Card */}
            <div className="md:col-span-1 md:row-span-1 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group hover:bg-slate-900/80">
              <div className="h-full flex flex-col justify-center">
                <div className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-bold text-white mb-2 font-mono">99.9%</h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">System Reliability</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="md:col-span-2 md:row-span-1 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Navi Mumbai, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="font-mono">+91-9975856562</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">saatif24@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      Open to Relocation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-6xl w-full" data-animate>
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              WORK
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-4 bottom-4 w-px bg-slate-800" />

            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-24 group">
                {/* Timeline Node */}
                <div className={`absolute left-0 md:left-8 top-8 -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-slate-600 rounded-full group-hover:scale-125 transition-all duration-300 z-10 ${exp.color.replace('text-', 'group-hover:border-')}`} />

                <div className={`p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-opacity-100 transition-all duration-300 group-hover:bg-slate-900/60 ${exp.border} ${exp.glow} hover:shadow-lg`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <div className="inline-block px-3 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-400 mb-3 tracking-wider uppercase font-mono">
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                      <p className={`text-lg font-bold ${exp.color} font-mono flex items-center gap-2`}>
                        {exp.role}
                        {i === 0 && <span className="px-2 py-0.5 bg-blue-500/20 rounded text-[10px] text-blue-300 border border-blue-500/30">PROMOTED</span>}
                      </p>
                    </div>
                    <div className={`p-3 bg-slate-800/50 rounded-lg ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`}>
                      {exp.icon}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <span className={`mt-1.5 ${exp.color}`}>›</span>
                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed text-sm md:text-base">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-8 py-32 bg-slate-950/50">
        <div className="max-w-7xl w-full" data-animate>
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              STACK
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <div
                key={category}
                className="p-8 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(59,130,246,0.05)]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-200">
                  <span className={`w-1 h-6 rounded-sm ${i === 0 ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' :
                    i === 1 ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]' :
                      i === 2 ? 'bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]' :
                        'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]'
                    }`} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 bg-slate-800 border border-slate-700/50 rounded text-sm text-slate-400 font-mono hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-7xl w-full" data-animate>
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              RECS
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all duration-300 group hover:border-slate-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${rec.color} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {rec.image}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{rec.name}</h4>
                    <p className="text-xs text-slate-400 font-mono uppercase tracking-wide">{rec.title}</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm italic border-l-2 border-slate-800 pl-4 group-hover:border-blue-500/50 transition-colors">
                  "{rec.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/aatif24/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all duration-200 border border-slate-700 hover:border-blue-500 group"
            >
              <span>VIEW ALL RECOMMENDATIONS</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-3xl font-black mb-2 text-white tracking-tighter">
                AS.
              </div>
              <p className="text-slate-600 text-sm font-mono">© 2024 Aatif Shaikh. All rights reserved.</p>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/aatif24/" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/aatif24" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:saatif24@gmail.com"
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-900 text-center">
            <p className="text-slate-700 text-[10px] tracking-[0.2em] uppercase font-bold">
              System Status: Operational • Next.js • Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;