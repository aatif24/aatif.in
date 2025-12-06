"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Github, Mail, MapPin, Phone, ArrowUpRight, Code2, Rocket, ChevronDown, Server, Plane, Heart, Building2, ShoppingCart, Users, TrendingUp, Award, HardDrive, Activity } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
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

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "AirFi",
      role: "Lead Engineer",
      period: "Dec 2021 – Present",
      description: "Leading backend engineering for cloud-native systems powering 1500+ aircraft.",
      tags: ["AWS Serverless", "GenAI", "Node.js", "System Design"],
      color: "bg-cyan-50 text-cyan-700 border-cyan-100",
      logo: "https://logo.clearbit.com/airfi.aero",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      company: "Bombayworks",
      role: "Senior Software Engineer",
      period: "Aug 2020 – Nov 2021",
      description: "Directed fullstack development across enterprise projects, improving incident response by 50%.",
      tags: ["React", "Node.js", "MySQL", "Monitoring"],
      color: "bg-indigo-50 text-indigo-700 border-indigo-100",
      logo: "https://logo.clearbit.com/bombayworks.com",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      company: "HealthDekho",
      role: "Team Lead",
      period: "2016 – 2020",
      description: "Managed engineering team, rebuilt legacy platform, and migrated to microservices.",
      tags: ["Microservices", "Team Leadership", "Migration"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
      logo: "https://logo.clearbit.com/healthdekho.com",
      icon: <Activity className="w-5 h-5" />
    },
    {
      company: "Codebox",
      role: "Associate Engineer",
      period: "2014 – 2015",
      description: "Delivered multiple fullstack applications and optimized performance.",
      tags: ["PHP", "JavaScript", "Fullstack"],
      color: "bg-slate-50 text-slate-700 border-slate-100",
      logo: "https://logo.clearbit.com/codebox.in", // No public website
      icon: <Server className="w-5 h-5" />
    }
  ];

  const industries = [
    {
      name: "Aviation",
      description: "In-flight connectivity and entertainment systems serving 1500+ aircraft globally",
      icon: <Plane className="w-6 h-6" />,
      color: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      name: "Healthcare",
      description: "Digital health platforms connecting patients with healthcare providers",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      name: "Enterprise",
      description: "Enterprise software solutions for monitoring, analytics, and operational efficiency",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      name: "E-commerce",
      description: "Scalable platforms for online retail and digital commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-700 border-amber-200"
    }
  ];

  const skills = {
    "Core & GenAI": ["Node.js", "TypeScript", "GenAI Integration", "System Design", "Distributed Systems"],
    "Cloud Native": ["AWS Lambda", "API Gateway", "SQS/SNS", "S3", "DynamoDB", "Docker"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
    "Data": ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
  };

  const recommendations = [
    {
      name: "Ajinkya Shelar",
      title: "Sr. iOS Engineer | Glancer | Ex-Quikr",
      text: `Worked with Aatif for 5 years at HealthDekho & he's genuinely one of the best full-stack developers I've had the chance to collaborate with. 
Super solid technically, whether it's frontend or backend, he just gets things done.
But honestly, what I'll remember most is how easy and fun it was to work with him. Always positive, always helpful, and the kind of person who makes the team better just by being there. Great developer, even better human.
Any team would be lucky to have him.`,
      color: "bg-cyan-50 border-cyan-100"
    },
    {
      name: "Tanveer Bhanot",
      title: "Director at AirFi",
      text: `I have had the opportunity to work with Aatif for a few years and he has been one of the most dependable and technically strong engineers on the team. His depth in JavaScript, Node.js, TypeScript, React and cloud architecture is outstanding. He approaches the most complex problems with clarity and calmness.

Aatif is an amazing team member, always ready to help others, share knowledge and support the team without hesitation. He is exceptionally likeable, easy to work with and brings a composed presence that makes a huge difference during high pressure situations.

I strongly recommend Aatif for any senior engineering or architectural role. His combination of technical strength, ownership and supportive leadership makes him a valuable asset to any organisation.`,
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      name: "Pratheek Krishnan",
      title: "Staff Engineer at AirFi",
      text: `Aatif is one of the calmest minds I’ve worked with. His approach to solving even the toughest problems has always impressed me. He has literally been available day or night to provide support and guide the team when needed.

His expertise in modern tech stacks such as NodeJS, NextJS, MongoDB, TypeScript, and the broader JavaScript ecosystem is excellent, and he can always be relied on for clear and accurate technical clarification. He is highly committed to his deliverables and is extremely dependable. In all our time working together, I’ve never seen a project under his ownership face unnecessary escalations.

I would strongly recommend him to lead and contribute to any project involving modern technology and scalable solutions.`,
      color: "bg-emerald-50 border-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">

      {/* Navigation */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-border rounded-full px-3 md:px-6 py-2 md:py-3 shadow-sm max-w-[calc(100vw-2rem)]" aria-label="Main navigation">
        <div className="flex gap-2 md:gap-6 text-xs md:text-sm font-medium text-muted-foreground overflow-x-auto scrollbar-hide">
          {['Home', 'About', 'Experience', 'Skills'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`hover:text-foreground transition-colors whitespace-nowrap px-1.5 md:px-2 py-1 ${activeSection === item.toLowerCase() ? 'text-foreground font-bold' : ''}`}
              aria-label={`Navigate to ${item} section`}
              aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('recommendations')}
            className={`hover:text-foreground transition-colors whitespace-nowrap px-1.5 md:px-2 py-1 ${activeSection === 'recommendations' ? 'text-foreground font-bold' : ''}`}
            aria-label="Navigate to Recommendations section"
            aria-current={activeSection === 'recommendations' ? 'page' : undefined}
          >
            Recs
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section id="home" className="min-h-screen snap-start relative overflow-hidden px-6 pt-24 pb-12 flex flex-col justify-between" aria-label="Hero section">

        {/* Top Right Info Block */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-32 right-6 md:right-12 text-right max-w-[200px] md:max-w-xs space-y-4 text-sm md:text-base font-light text-muted-foreground"
        >
          <p>
            The portfolio of <strong className="text-foreground">Aatif Shaikh</strong>
          </p>
          <p>
            a Lead Engineer
            <br />
            located in Navi Mumbai
          </p>
        </motion.div>

        {/* Mid Left Info Block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 max-w-[200px] md:max-w-xs space-y-4 text-sm md:text-base font-light text-muted-foreground"
        >
          <p>
            Since 2014
          </p>
          <p>
            architecting scalable
            <br />
            cloud systems & GenAI
          </p>
        </motion.div>

        {/* Center Main Text - Bauhaus Overlap Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative font-black font-heading tracking-tighter text-[25vw] leading-none flex items-center justify-center mix-blend-exclusion"
          >
            {/* Overlapping Letters Experiment */}
            <span className="text-foreground/80 -mr-[0.15em] relative z-10">a</span>
            <span className="text-foreground/60 -mr-[0.15em] relative z-20 mix-blend-difference">a</span>
            <span className="text-foreground/80 -mr-[0.15em] relative z-10">t</span>
            <span className="text-foreground/60 -mr-[0.15em] relative z-30">i</span>
            <span className="text-foreground/80 relative z-10">f</span>
          </motion.div>
        </div>

        {/* Bottom Connect Links */}
        <div className="absolute bottom-12 right-6 md:right-12 flex gap-6 text-sm font-bold tracking-widest uppercase">
          <a href="https://www.linkedin.com/in/aatif24/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">LinkedIn</a>
          <a href="https://github.com/aatif24" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GitHub</a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
        </motion.div>

      </section>

      {/* Stats Section */}
      <section className="min-h-screen snap-start py-20 md:py-32 px-6 flex items-center" aria-label="Statistics">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "Global Users", value: "100K+", icon: <Users className="w-5 h-5" /> },
            { label: "Uptime", value: "99.9%", icon: <TrendingUp className="w-5 h-5" /> },
            { label: "Experience", value: "11+ Yrs", icon: <Award className="w-5 h-5" /> },
            { label: "Records Migrated", value: "50M+", icon: <HardDrive className="w-5 h-5" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start space-y-3"
            >
              <div className="text-muted-foreground mb-1">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-foreground font-heading tracking-tight">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="min-h-screen snap-start py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-border flex items-center" aria-label="Industries section">
        <div className="w-full">
          <div className="mb-16 md:mb-20">
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold font-heading text-foreground leading-[0.85] mb-8">
              INDUS<br />TRIES
            </h2>
            <p className="text-muted-foreground font-light max-w-md">Diverse experience across multiple sectors</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-border pl-6 hover:border-foreground transition-colors"
              >
                <div className="flex flex-col space-y-4">
                  <div className="text-muted-foreground">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{industry.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground font-light">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center border-t border-border" aria-label="About section">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold font-heading text-foreground leading-[0.85] mb-8">
              ENGI<br />NEER<br />ING
            </h2>
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                I&apos;m a Lead Engineer specializing in building robust, scalable systems. With over a decade of experience, I&apos;ve transitioned from building simple websites to architecting complex cloud-native distributed systems.
              </p>
              <p>
                Currently at <span className="font-bold text-foreground">AirFi</span>, I drive technical strategy and lead teams to deliver high-impact solutions. I love solving hard problems—whether it&apos;s optimizing API latency, reducing cloud costs, or integrating cutting-edge GenAI features.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-3 gap-8 pb-8 border-b border-border">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-foreground font-heading">40%</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Perf Boost</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-foreground font-heading">25%</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Cost Cut</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-foreground font-heading">0</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Downtime</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <div className="font-bold text-foreground">Navi Mumbai, India</div>
                  <div className="text-muted-foreground text-sm font-light">Open to Relocation</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <div className="font-bold text-foreground">saatif24@gmail.com</div>
                  <div className="text-muted-foreground text-sm font-light">Email Me</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <div className="font-bold text-foreground">+91-9975856562</div>
                  <div className="text-muted-foreground text-sm font-light">Call Me</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 px-6 min-h-screen snap-start flex items-center border-t border-border" aria-label="Experience section">
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-16 md:mb-20">
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold font-heading text-foreground leading-[0.85] mb-8">
              EXPER<br />IENCE
            </h2>
            <p className="text-muted-foreground font-light">A timeline of technical leadership and impact</p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-border pl-8 hover:border-foreground transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground font-heading">{exp.role}</h3>
                      <div className="text-base font-medium text-muted-foreground mt-1">{exp.company}</div>
                    </div>
                    <span className="text-sm text-muted-foreground font-light">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light">{exp.description}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center border-t border-border" aria-label="Skills section">
        <div className="w-full">
          <div className="mb-16 md:mb-20">
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold font-heading text-foreground leading-[0.85] mb-8">
              TECH<br />STACK
            </h2>
            <p className="text-muted-foreground font-light">Tools and technologies I use to build world-class software</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-foreground font-heading">{category}</h3>
                <div className="space-y-3">
                  {items.map((skill, j) => (
                    <div key={j} className="text-muted-foreground font-light hover:text-foreground transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section id="recommendations" className="py-20 md:py-32 px-6 min-h-screen snap-start flex items-center border-t border-border" aria-label="Recommendations section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
            <div>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold font-heading mb-8 leading-[0.85]">
                KIND<br />WORDS
              </h2>
              <p className="text-muted-foreground font-light">Endorsements from colleagues and leaders</p>
            </div>
            <a href="https://www.linkedin.com/in/aatif24/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest font-bold text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2 mt-4" aria-label="View all recommendations on LinkedIn">
              View All <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-border pl-6 hover:border-foreground transition-colors"
              >
                <div className="mb-4">
                  <div className="font-bold text-foreground">{rec.name}</div>
                  <div className="text-muted-foreground text-sm font-light mt-1">{rec.title}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">{rec.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-muted-foreground py-12 px-6 text-center border-t border-border snap-start">
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/aatif24/" className="hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://github.com/aatif24" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
          <a href="mailto:saatif24@gmail.com" className="hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Aatif Shaikh. Built with Next.js & Tailwind.</p>
      </footer>

    </div>
  );
};

export default Portfolio;