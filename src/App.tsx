import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Code2, Database, Layout, ArrowRight, Github, Linkedin, Twitter, Mail, ExternalLink, ChevronRight, Copy } from 'lucide-react';

const NAV_LINKS = ['Home', 'Projects', 'About', 'Contact'];

const PROJECTS = [
  {
    id: 'ecommerce',
    title: 'E-COMMERCE PLATFORMS',
    description: 'Developed fully functional online stores with product pages, cart systems, and user-friendly navigation.',
    tags: ['REACT', 'JAVASCRIPT', 'WEBFLOW'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000&h=1200',
    category: 'E-COMMERCE'
  },
  {
    id: 'landing-pages',
    title: 'CONVERSION LANDING PAGES',
    description: 'Designed conversion-focused pages for marketing campaigns and product promotions.',
    tags: ['FIGMA', 'TAILWIND CSS', 'SEO'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&h=1200',
    category: 'MARKETING'
  },
  {
    id: 'business-ngo',
    title: 'BUSINESS & NGO WEBSITES',
    description: 'Created professional websites to enhance brand identity and online visibility.',
    tags: ['WORDPRESS', 'WIX', 'HTML/CSS'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000&h=1200',
    category: 'CORPORATE'
  },
  {
    id: 'blogs',
    title: 'BLOGS & CONTENT PLATFORMS',
    description: 'Built structured and SEO-friendly blog websites with easy content management.',
    tags: ['NEXT.JS', 'CMS', 'RESPONSIVE'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000&h=1200',
    category: 'CONTENT'
  }
];

const TERMINAL_LINES = [
  { text: 'bryan-myles git:(main) echo "Hello World"', type: 'command' },
  { text: 'Hello World', type: 'output' },
  { text: 'bryan-myles git:(main) npm run build', type: 'command' },
  { text: '> bryan-myles-portfolio@1.0.0 build', type: 'system' },
  { text: '> tailwindcss -i ./input.css -o ./output.css', type: 'system' },
  { text: 'Rebuilding...', type: 'system' },
  { text: 'Done in 420ms.', type: 'system' },
];

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [terminalLine, setTerminalLine] = useState(0);

  useEffect(() => {
    if (terminalLine < TERMINAL_LINES.length) {
      const timer = setTimeout(() => {
        setTerminalLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [terminalLine]);

  return (
    <div className="min-h-screen bg-bg selection:bg-primary-light selection:text-primary overflow-x-hidden font-sans text-ink">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-secondary">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-xl font-bold tracking-tight text-ink"
          >
            <div className="w-8 h-8 bg-primary rounded-none transform rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-white transform -rotate-45"></div>
            </div>
            <span>BRYAN MYLES</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveNav(link)}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                  activeNav === link ? 'text-primary border-b-2 border-primary pb-1' : 'text-ink-muted hover:text-primary'
                }`}
              >
                {link}
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary text-white px-6 py-2 text-sm font-bold uppercase tracking-tighter"
          >
            RESUME
          </motion.button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-40">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-16 h-1 bg-primary mb-8"
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-black text-ink leading-[0.9] uppercase"
            >
              Building digital experiences with <br/> <span className="text-primary">precision.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-ink-muted max-w-lg leading-relaxed mt-6 mb-10"
            >
              Creative Web Design enthusiast with experience in Digital Product Design and front-end development. I translate conceptual strategy into functional, high-converting digital assets and polished interface components.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4 animate-none"
            >
              <button className="px-8 py-4 bg-ink text-white font-bold uppercase tracking-tighter transition-all hover:bg-ink/90">
                VIEW PROJECTS 
              </button>
              <button className="px-8 py-4 border-2 border-ink text-ink font-bold uppercase tracking-tighter hover:bg-ink/5 transition-all">
                GET IN TOUCH
              </button>
            </motion.div>
          </div>

          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 bg-white border border-secondary relative overflow-hidden h-[360px]"
          >
            <div className="absolute inset-0 geometric-pattern"></div>
            <div className="relative z-10 w-full h-full flex flex-col pt-6">
              <div className="px-6 mb-4 flex gap-2">
                <div className="w-2.5 h-2.5 bg-red-400 rounded-none"></div>
                <div className="w-2.5 h-2.5 bg-amber-400 rounded-none"></div>
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-none"></div>
              </div>
              <div className="flex-1 p-6 font-mono text-sm leading-relaxed bg-white border-t border-secondary overflow-hidden">
                <AnimatePresence>
                  {TERMINAL_LINES.slice(0, terminalLine).map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mb-2 flex whitespace-pre-wrap"
                    >
                      {line.type === 'command' && (
                        <>
                          <span className="text-primary mr-2">➜</span>
                          <span className="text-ink">{line.text}</span>
                        </>
                      )}
                      {line.type === 'output' && <span className="text-ink-muted">{line.text}</span>}
                      {line.type === 'system' && <span className="text-ink-muted/60">{line.text}</span>}
                    </motion.div>
                  ))}
                  {terminalLine >= TERMINAL_LINES.length && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 flex items-center gap-2"
                    >
                      <span className="text-primary">➜</span>
                      <motion.div 
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2.5 h-5 bg-primary"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Marquee Ticker */}
        <section className="py-8 bg-white border-y border-secondary overflow-hidden -mx-6 px-6">
          <div className="flex gap-16 items-center whitespace-nowrap opacity-60">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-16 items-center flex-none font-mono text-sm tracking-widest uppercase font-bold text-ink-muted"
            >
              {Array.from({ length: 4 }).map((_, idx) => (
                <React.Fragment key={idx}>
                  <span className="flex items-center gap-2"><Layout className="w-5 h-5 text-primary"/> React</span>
                  <span className="text-primary">•</span>
                  <span className="flex items-center gap-2"><Code2 className="w-5 h-5 text-primary"/> HTML & CSS</span>
                  <span className="text-primary">•</span>
                  <span className="flex items-center gap-2"><Terminal className="w-5 h-5 text-primary"/> JavaScript</span>
                  <span className="text-primary">•</span>
                  <span className="flex items-center gap-2"><Database className="w-5 h-5 text-primary"/> WordPress</span>
                  <span className="text-primary">•</span>
                  <span className="flex items-center gap-2"><Layout className="w-5 h-5 text-primary"/> Figma</span>
                  <span className="text-primary">•</span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Work Grid */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-5xl font-black tracking-tight text-ink uppercase mb-2">Projects</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            <button className="group text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              Explore All Projects 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white border border-secondary overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden h-[300px] border-b border-secondary">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10 duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className=" bg-white/90 backdrop-blur-sm text-primary border border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    <button className="bg-primary text-white font-bold p-4 rounded-none shadow-lg hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5"/>
                    </button>
                    <button className="bg-white text-ink border border-primary/20 font-bold p-4 rounded-none shadow-lg hover:scale-110 transition-transform">
                      <Github className="w-5 h-5"/>
                    </button>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-primary transition-colors uppercase">{project.title}</h3>
                  <p className="text-ink-muted text-lg mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-secondary">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-accent"></span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact/CTA */}
        <section className="bg-white border-y border-secondary py-20 px-8 relative overflow-hidden -mx-6 px-6 sm:px-12">
          <div className="absolute inset-0 geometric-pattern"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="w-16 h-1 bg-primary"></div>
              <h2 className="text-5xl font-black uppercase tracking-tight text-ink leading-tight">
                Ready to<br/><span className="text-primary">construct.</span>
              </h2>
              <p className="text-lg text-ink-muted">
                Accepting select projects. Connect with me to discuss architectural requirements and system scaling.
              </p>
            </div>
            <div className="lg:w-1/2 w-full bg-bg border border-secondary p-8 flex flex-col gap-6 font-mono">
               <div className="flex justify-between items-center pb-4 border-b border-secondary text-sm font-bold uppercase tracking-widest text-accent">
                 <span>Status</span>
                 <span className="text-primary flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> ONLINE</span>
               </div>
               <div className="flex items-center gap-4 bg-white border border-secondary p-4 text-ink">
                 <Mail className="w-5 h-5 text-primary" />
                 <span className="flex-1 truncate">okerekeemmanuel4000@gmail.com</span>
                 <button className="hover:text-primary transition-colors"><Copy className="w-5 h-5" /></button>
               </div>
               <button className="bg-primary text-white py-4 text-center font-bold uppercase tracking-tighter hover:bg-primary/90 transition-colors">
                 Initiate Protocol
               </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-secondary bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-secondary">
          <div className="p-8 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-8 md:mb-0">
               <div className="w-6 h-6 bg-primary rounded-none transform rotate-45 flex items-center justify-center">
                 <div className="w-3 h-3 bg-white transform -rotate-45"></div>
               </div>
               <span className="font-bold text-ink tracking-tight uppercase">BRYAN MYLES</span>
            </div>
            <span className="text-xs font-mono text-ink-muted uppercase tracking-widest">&copy; 2026 BRYAN MYLES.</span>
          </div>
          <div className="p-8 flex flex-col justify-between hidden md:flex">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-4 md:mb-0">Uptime</span>
            <span className="text-4xl font-bold text-primary">99.99<span className="text-xl">%</span></span>
          </div>
          <div className="p-8 flex flex-col justify-between hidden md:flex">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-4 md:mb-0">Deployments</span>
            <span className="text-4xl font-bold text-ink">1,420<span className="text-xl text-accent">+</span></span>
          </div>
          <div className="p-8 bg-primary-light flex flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 md:mb-0">Network</span>
            <div className="flex gap-4 text-ink hover:*:text-primary transition-colors">
              <a href="#"><Github className="w-6 h-6" /></a>
              <a href="#"><Linkedin className="w-6 h-6" /></a>
              <a href="#"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
