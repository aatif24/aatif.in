"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MapPin, Phone, ArrowUpRight, Code2, Database, Rocket, Globe, Zap, Brain, ChevronDown, Server } from 'lucide-react';

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
      icon: <Rocket className="w-5 h-5" />
    },
    {
      company: "Bombayworks",
      role: "Senior Software Engineer",
      period: "Aug 2020 – Nov 2021",
      description: "Directed fullstack development across enterprise projects, improving incident response by 50%.",
      tags: ["React", "Node.js", "MySQL", "Monitoring"],
      color: "bg-indigo-50 text-indigo-700 border-indigo-100",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      company: "HealthDekho",
      role: "Team Lead",
      period: "2016 – 2020",
      description: "Managed engineering team, rebuilt legacy platform, and migrated to microservices.",
      tags: ["Microservices", "Team Leadership", "Migration"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
      icon: <Database className="w-5 h-5" />
    },
    {
      company: "Codebox",
      role: "Associate Engineer",
      period: "2014 – 2015",
      description: "Delivered multiple fullstack applications and optimized performance.",
      tags: ["PHP", "JavaScript", "Fullstack"],
      color: "bg-slate-50 text-slate-700 border-slate-100",
      icon: <Server className="w-5 h-5" />
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">

      {/* Navigation */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm max-w-[calc(100vw-2rem)]" aria-label="Main navigation">
        <div className="flex gap-3 md:gap-6 text-xs md:text-sm font-medium text-slate-500 overflow-x-auto scrollbar-hide">
          {['Home', 'About', 'Experience', 'Skills'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap px-2 py-1 ${activeSection === item.toLowerCase() ? 'text-slate-900 font-bold' : ''}`}
              aria-label={`Navigate to ${item} section`}
              aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('recommendations')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap px-2 py-1 ${activeSection === 'recommendations' ? 'text-slate-900 font-bold' : ''}`}
            aria-label="Navigate to Recommendations section"
            aria-current={activeSection === 'recommendations' ? 'page' : undefined}
          >
            Recs
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen snap-start flex flex-col justify-center items-center relative overflow-hidden px-4 md:px-6 pt-24 md:pt-20" aria-label="Hero section">
        {/* Background Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-100/50 rounded-full blur-3xl -z-10 opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-100/50 rounded-full blur-3xl -z-10 opacity-60" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold tracking-wider text-slate-600 uppercase mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Ready to Relocate
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-heading font-bold tracking-tight text-slate-900 leading-[0.9]">
            Aatif <span className="text-slate-400">Shaikh</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Lead Engineer & Fullstack Specialist building <span className="font-medium text-slate-900 bg-cyan-50 px-1 rounded">scalable cloud systems</span> and <span className="font-medium text-slate-900 bg-indigo-50 px-1 rounded">GenAI solutions</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-8 w-full max-w-md">
            <a href="https://www.linkedin.com/in/aatif24/" target="_blank" rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-1"
              aria-label="Connect with Aatif on LinkedIn">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm md:text-base">Connect on LinkedIn</span>
            </a>
            <a href="https://github.com/aatif24" target="_blank" rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:border-slate-400 transition-all flex items-center justify-center gap-2 hover:bg-slate-50"
              aria-label="View Aatif's GitHub profile">
              <Github className="w-5 h-5" />
              <span className="text-sm md:text-base">GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100 snap-start flex items-center" aria-label="Statistics">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: "Global Users", value: "100K+", icon: <Globe className="w-6 h-6 text-cyan-500" /> },
            { label: "Uptime", value: "99.9%", icon: <Zap className="w-6 h-6 text-amber-500" /> },
            { label: "Experience", value: "11+ Yrs", icon: <Brain className="w-6 h-6 text-indigo-500" /> },
            { label: "Records Migrated", value: "50M+", icon: <Database className="w-6 h-6 text-emerald-500" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 font-heading">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center" aria-label="About section">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900">
              Engineering with <br />
              <span className="text-cyan-600">Precision & Passion</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                I&apos;m a Lead Engineer specializing in building robust, scalable systems. With over a decade of experience, I&apos;ve transitioned from building simple websites to architecting complex cloud-native distributed systems.
              </p>
              <p>
                Currently at <span className="font-bold text-slate-900">AirFi</span>, I drive technical strategy and lead teams to deliver high-impact solutions. I love solving hard problems—whether it&apos;s optimizing API latency, reducing cloud costs, or integrating cutting-edge GenAI features.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 md:gap-4 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-slate-900">40%</span>
                <span className="text-sm text-slate-500 font-medium">Perf Boost</span>
              </div>
              <div className="w-px bg-slate-200 h-12" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-slate-900">25%</span>
                <span className="text-sm text-slate-500 font-medium">Cost Reduced</span>
              </div>
              <div className="w-px bg-slate-200 h-12" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-slate-900">0</span>
                <span className="text-sm text-slate-500 font-medium">Downtime</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-indigo-100 rounded-3xl transform rotate-3 -z-10" />
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Navi Mumbai, India</div>
                    <div className="text-slate-500 text-sm">Open to Relocation</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">saatif24@gmail.com</div>
                    <div className="text-slate-500 text-sm">Email Me</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">+91-9975856562</div>
                    <div className="text-slate-500 text-sm">Call Me</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-slate-50 px-4 md:px-6 min-h-screen snap-start flex items-center" aria-label="Experience section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">Professional Journey</h2>
            <p className="text-slate-500">A timeline of technical leadership and impact.</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${exp.color.split(' ')[0]} ${exp.color.split(' ')[1]}`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <div className="text-lg font-medium text-slate-700 mb-4">{exp.company}</div>
                    <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center" aria-label="Skills section">
        <div className="w-full">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">Technical Arsenal</h2>
            <p className="text-slate-500">Tools and technologies I use to build world-class software.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, j) => (
                    <span key={j} className="px-3 md:px-4 py-2 bg-white text-slate-700 font-medium rounded-xl shadow-sm border border-slate-100 hover:border-cyan-200 hover:text-cyan-600 transition-colors cursor-default text-sm md:text-base">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section id="recommendations" className="py-20 md:py-32 bg-slate-900 text-white px-4 md:px-6 rounded-t-[3rem] mt-20 min-h-screen snap-start flex items-center" aria-label="Recommendations section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">Kind Words</h2>
              <p className="text-slate-400 text-sm md:text-base">Endorsements from colleagues and leaders.</p>
            </div>
            <a href="https://www.linkedin.com/in/aatif24/details/recommendations/?detailScreenTabIndex=0" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 font-medium text-sm md:text-base" aria-label="View all recommendations on LinkedIn">
              View all on LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recommendations.map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors flex flex-col"
              >
                <div className="mb-6">
                  <div className="font-bold text-lg">{rec.name}</div>
                  <div className="text-slate-400 text-sm">{rec.title}</div>
                </div>
                <p className="text-slate-300 leading-relaxed italic text-sm md:text-base whitespace-pre-line">&quot;{rec.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 text-center border-t border-slate-900 snap-start">
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/aatif24/" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://github.com/aatif24" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="mailto:saatif24@gmail.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Aatif Shaikh. Built with Next.js & Tailwind.</p>
      </footer>

    </div>
  );
};

export default Portfolio;