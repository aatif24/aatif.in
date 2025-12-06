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
      <nav className="sticky top-4 md:top-6 left-0 right-0 z-50 mx-auto w-fit px-4" aria-label="Main navigation">
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
          <div className="flex gap-3 md:gap-6 text-xs md:text-sm font-medium text-muted-foreground">
            {['Home', 'About', 'Experience', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-foreground transition-colors whitespace-nowrap px-2 md:px-3 py-1 ${activeSection === item.toLowerCase() ? 'text-foreground font-bold' : ''}`}
                aria-label={`Navigate to ${item} section`}
                aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('recommendations')}
              className={`hover:text-foreground transition-colors whitespace-nowrap px-2 md:px-3 py-1 ${activeSection === 'recommendations' ? 'text-foreground font-bold' : ''}`}
              aria-label="Navigate to Recommendations section"
              aria-current={activeSection === 'recommendations' ? 'page' : undefined}
            >
              Recs
            </button>
          </div>
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
          className="absolute bottom-20 left-6 md:top-1/2 md:-translate-y-1/2 md:left-12 md:bottom-auto max-w-[200px] md:max-w-xs space-y-4 text-sm md:text-base font-light text-muted-foreground"
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
      <section className="min-h-screen snap-start relative px-4 md:px-6 flex items-center" aria-label="Statistics">
        <div className="max-w-7xl mx-auto w-full relative">
          {/* Geometric accent lines - hidden on mobile */}
          <div className="hidden md:block absolute top-0 left-0 w-px h-48 bg-border" />
          <div className="hidden md:block absolute bottom-0 right-0 w-px h-48 bg-border" />

          {/* Decorative text sprinkles - Bauhaus style */}
          <div className="hidden md:block absolute top-12 left-8 max-w-[150px] text-xs font-light text-muted-foreground">
            <p>Impact at<br />scale</p>
          </div>
          <div className="hidden md:block absolute bottom-12 right-24 text-right max-w-[150px] text-xs font-light text-muted-foreground">
            <p>Consistently<br />delivering value</p>
          </div>

          {/* Asymmetric stat placement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-8 md:gap-x-16">
            {/* Top right */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="md:text-right md:col-start-2">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">100K+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Global Users</div>
            </motion.div>

            {/* Mid left */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="md:col-start-1 md:row-start-2">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">99.9%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Uptime</div>
            </motion.div>

            {/* Bottom right */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="md:text-right md:col-start-2 md:row-start-3">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">11+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Years Experience</div>
            </motion.div>

            {/* Bottom left */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="md:col-start-1 md:row-start-4">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">50M+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Records Migrated</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="min-h-screen snap-start px-4 md:px-6 max-w-7xl mx-auto flex items-center relative" aria-label="Industries section">
        {/* Geometric box accent - hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 right-0 w-24 h-24 border border-border" />

        <div className="w-full relative">
          <div className="mb-8 md:mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-heading mb-4 md:mb-6 flex flex-col items-start leading-none tracking-tighter">
              <span className="text-foreground z-10">SEC</span>
              <span className="text-foreground/50 -mt-[0.5em] z-0">TORS</span>
            </h2>
          </div>

          {/* Asymmetric scattered layout */}
          <div className="space-y-8 md:space-y-12">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`max-w-md ${i % 2 === 0 ? '' : 'md:ml-auto'}`}
              >
                {/* Geometric line marker */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-6 md:w-8 h-px bg-foreground mt-4 md:mt-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground font-heading mb-2">{industry.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground font-light">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 md:px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center relative" aria-label="About section">
        {/* Geometric accent shapes - hidden on mobile */}
        <div className="hidden md:block absolute top-1/3 left-0 w-16 h-px bg-border" />
        <div className="hidden md:block absolute bottom-1/3 right-12 w-px h-16 bg-border" />

        <div className="w-full space-y-8 md:space-y-12">
          {/* Heading positioned top-left */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-2xl">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-heading mb-6 md:mb-8 flex flex-col items-start leading-none tracking-tighter">
              <span className="text-foreground z-20">PHILO</span>
              <span className="text-foreground/70 -mt-[0.4em] z-10">SO</span>
              <span className="text-foreground/40 -mt-[0.4em] z-0">PHY</span>
            </h2>
          </motion.div>

          {/* Content scattered asymmetrically */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Body text - left column */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="md:col-span-2 max-w-xl">
              <p className="text-sm leading-relaxed text-muted-foreground font-light mb-4">
                Lead Engineer specializing in building robust, scalable systems. Over a decade transforming from simple websites to complex cloud-native distributed systems.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground font-light">
                At <span className="font-bold text-foreground">AirFi</span>, driving technical strategy and leading teams to deliver high-impact solutions.
              </p>
            </motion.div>

            {/* Stats - right column */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="space-y-6 md:space-y-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-1">40%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Performance</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-1">25%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Cost Savings</div>
              </div>
            </motion.div>
          </div>

          {/* Contact - bottom right */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="md:ml-auto max-w-sm space-y-3 md:space-y-4">
            <div className="border-l-2 border-border pl-3 md:pl-4">
              <div className="font-bold text-foreground text-sm mb-1">Navi Mumbai, India</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
            </div>
            <div className="border-l-2 border-border pl-3 md:pl-4">
              <div className="font-bold text-foreground text-sm mb-1">saatif24@gmail.com</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-4 md:px-6 min-h-screen snap-start flex items-center relative" aria-label="Experience section">
        {/* Geometric grid accent - hidden on mobile */}
        <div className="hidden md:grid absolute top-12 right-12 grid-cols-3 gap-3">
          <div className="w-3 h-3 border border-border" />
          <div className="w-3 h-3 border border-border" />
          <div className="w-3 h-3 border border-border" />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-8 md:mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-heading flex flex-col items-start leading-none tracking-tighter">
              <span className="text-foreground z-10">JOUR</span>
              <span className="text-foreground/50 -mt-[0.5em] z-0">NEY</span>
            </h2>
          </div>

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`max-w-2xl ${i % 2 === 0 ? '' : 'md:ml-auto md:text-right'}`}
              >
                <div className="space-y-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{exp.period}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-1">{exp.role}</h3>
                    <div className="text-sm md:text-base text-muted-foreground">{exp.company}</div>
                  </div>
                  <div className={`w-10 md:w-12 h-px bg-foreground ${i % 2 === 0 ? '' : 'md:ml-auto'}`} />
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 md:px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center relative" aria-label="Skills section">
        {/* Geometric line accents - hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 left-12 w-px h-32 bg-border" />
        <div className="hidden md:block absolute bottom-1/4 right-12 w-32 h-px bg-border" />

        <div className="w-full">
          <div className="mb-8 md:mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-heading flex flex-col items-start leading-none tracking-tighter">
              <span className="text-foreground z-10">ARSE</span>
              <span className="text-foreground/50 -mt-[0.5em] z-0">NAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="space-y-3 md:space-y-4"
              >
                <div className="border-b border-border pb-2">
                  <h3 className="text-xs uppercase tracking-widest text-foreground font-bold">{category}</h3>
                </div>
                <div className="space-y-2">
                  {items.map((skill, j) => (
                    <div key={j} className="text-sm text-muted-foreground font-light">
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
      <section id="recommendations" className="px-4 md:px-6 min-h-screen snap-start flex items-center relative" aria-label="Recommendations section">
        {/* Geometric box frame - subtle on mobile */}
        <div className="absolute inset-4 md:inset-8 border border-border pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-8 md:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-heading flex flex-col items-start leading-none tracking-tighter">
              <span className="text-foreground z-10">ENDOR</span>
              <span className="text-foreground/50 -mt-[0.5em] z-0">SED</span>
            </h2>
            <a href="https://www.linkedin.com/in/aatif24/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest font-bold text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2 mt-4" aria-label="View all recommendations on LinkedIn">
              View All <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-8 md:space-y-12">
            {recommendations.map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`max-w-xl ${i % 3 === 1 ? 'md:mx-auto' : i % 3 === 2 ? 'md:ml-auto' : ''}`}
              >
                <div className="space-y-3">
                  <div className="w-6 md:w-8 h-px bg-foreground" />
                  <div>
                    <div className="text-sm md:text-base font-bold text-foreground mb-1">{rec.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{rec.title}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-md">{rec.text.split('\n\n')[0]}</p>
                </div>
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