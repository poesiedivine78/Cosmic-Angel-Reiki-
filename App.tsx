
import React, { useEffect, useState, useRef } from 'react';
import CustomCursor from './components/CustomCursor';
import NebulaBackground from './components/NebulaBackground';
import Orb from './components/Orb';
import { SERVICES, COLORS, CHAKRAS, PATHOLOGIES, PROGRAMS, BOOKS, SOCIAL_STATS, TESTIMONIALS } from './constants';
import { Sparkles, Star, CheckCircle2, ArrowRight, Send, Facebook, Activity, Moon, Zap, Brain, Heart, Shield, Compass, History, Clock, Info, Stars, ExternalLink, Crown, Check, RefreshCw, Quote as QuoteIcon, ArrowDownCircle, ShieldCheck, Eye, Wind, Layers } from 'lucide-react';

const iconsMap: Record<string, React.ReactNode> = {
  Activity: <Activity size={20} />,
  Moon: <Moon size={20} />,
  Zap: <Zap size={20} />,
  Brain: <Brain size={20} />,
  Heart: <Heart size={20} />,
  Shield: <Shield size={20} />,
  Compass: <Compass size={20} />,
  History: <History size={20} />,
  Stars: <Stars size={20} />,
  Eye: <Eye size={20} />,
  Wind: <Wind size={20} />,
  Layers: <Layers size={20} />,
  RefreshCw: <RefreshCw size={20} />
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const BodySilhouette: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 220" className={`absolute pointer-events-none drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] ${className}`}>
    <path 
      d="M50,15 C42,15 35,22 35,32 C35,42 42,52 50,52 C58,52 65,42 65,32 C65,22 58,15 50,15 M50,52 L50,160 M30,85 L50,65 L70,85 M35,205 L50,160 L65,205" 
      fill="none" 
      stroke="rgba(192, 132, 252, 0.4)" 
      strokeWidth="0.8" 
      strokeLinecap="round"
      className="animate-pulse"
    />
    <circle cx="50" cy="32" r="12" fill="none" stroke="rgba(192, 132, 252, 0.2)" strokeWidth="0.3" />
    <rect x="49.5" y="52" width="1" height="108" fill="url(#spine-grad)" opacity="0.5" />
    <defs>
      <linearGradient id="spine-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
  </svg>
);

const SacredGeometry: React.FC<{ className?: string, color?: string }> = ({ className, color = 'currentColor' }) => (
  <svg viewBox="0 0 100 100" className={`absolute opacity-[0.05] pointer-events-none fill-none stroke-current ${className}`} strokeWidth="0.15" style={{ color }}>
    <circle cx="50" cy="50" r="45" />
    <circle cx="50" cy="50" r="30" />
    <path d="M50 5 L95 95 L5 95 Z" />
    <path d="M50 95 L95 5 L5 5 Z" />
    <rect x="20" y="20" width="60" height="60" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-3 glass border-b' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Stars className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-widest uppercase">Michael Furtak</h1>
            <p className="text-[10px] text-violet-400 font-medium tracking-[0.2em] uppercase">Starseed Cosmic Angel</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Éveil', id: 'éveil' },
            { name: 'Soins', id: 'soin' },
            { name: 'Phoenix', id: 'phoenix' },
            { name: 'Livres', id: 'livres' },
            { name: 'Témoignages', id: 'témoignages' }
          ].map((item) => (
            <button key={item.name} onClick={() => scrollToSection(item.id)} className="text-xs uppercase tracking-widest font-semibold hover:text-violet-400 transition-colors">
              {item.name}
            </button>
          ))}
          <button onClick={() => scrollToSection('soin')} className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-violet-400 hover:text-white transition-all duration-300 shadow-lg shadow-white/10">
            Prendre RDV
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="éveil" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 animate-bounce-slow">
        <Sparkles size={16} className="text-violet-400" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Bienvenue dans votre sanctuaire fréquentiel</span>
      </div>
      
      <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
        TRANSFORMER <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-violet-600">L'OMBRE</span> EN LUMIÈRE
      </h2>
      
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 serif-quote italic mb-12">
        "Réveillez la force stellaire qui sommeille en vous. Par le Reiki Usui & Kundalini, retrouvez l'harmonie parfaite de votre structure d'âme."
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button 
          onClick={() => scrollToSection('quand-consulter')} 
          className="w-full md:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-transform animate-impulse text-center"
        >
          Explorer mes soins
        </button>
        <button 
          onClick={() => scrollToSection('livres')} 
          className="w-full md:w-auto px-10 py-5 rounded-full glass border border-white/10 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors text-center"
        >
          Boutique Amazon
        </button>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto opacity-60">
        <div className="text-center">
          <p className="text-2xl font-bold">{SOCIAL_STATS.facebook}</p>
          <p className="text-[10px] uppercase tracking-widest">Facebook</p>
        </div>
        <div className="text-center border-x border-white/10">
          <p className="text-2xl font-bold">{SOCIAL_STATS.tiktok}</p>
          <p className="text-[10px] uppercase tracking-widest">TikTok</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">21k+</p>
          <p className="text-[10px] uppercase tracking-widest">Âmes Guidées</p>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <button onClick={() => scrollToSection('quand-consulter')} aria-label="Scroll to guide">
        <ArrowDownCircle className="text-white/20" size={32} />
      </button>
    </div>
  </section>
);

const ChakraSystem = () => (
  <section className="py-24 relative overflow-hidden bg-slate-950/50">
    <SacredGeometry className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-violet-500" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h3 className="text-xs uppercase tracking-[0.5em] text-violet-400 font-bold mb-4">Ingénierie Sacrée</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">VOTRE SYSTÈME <span className="italic font-light">ÉNERGÉTIQUE</span></h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-12">
        <div className="relative w-[300px] h-[600px] flex items-center justify-center">
          <BodySilhouette className="w-full h-full opacity-30" />
          {CHAKRAS.map((chakra, idx) => (
            <div key={idx} className={`absolute left-1/2 -translate-x-1/2 ${chakra.pos}`}>
              <Orb 
                color={chakra.color} 
                size="40px" 
                interactive={true} 
                label={chakra.name} 
                description={`${chakra.frequency} - ${chakra.meaning}`} 
              />
            </div>
          ))}
        </div>

        <div className="max-w-xl space-y-8">
          <div className="glass p-8 rounded-3xl border border-white/10">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
              <RefreshCw className="text-violet-400" />
              Réalignement Fréquentiel
            </h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              Chaque centre énergétique vibre à une fréquence spécifique. Lorsqu'un chakra est bloqué, c'est toute votre mélodie intérieure qui se désaccorde, provoquant stress, fatigue ou maladies.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Libération des nœuds', 'Ancrage profond', 'Clarté mentale', 'Activation intuitive'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-1 rounded-3xl bg-gradient-to-r from-violet-500/20 to-blue-500/20">
            <div className="glass p-8 rounded-[calc(1.5rem-1px)]">
              <QuoteIcon className="text-violet-400 mb-4 opacity-50" size={32} />
              <p className="serif-quote text-xl italic text-white/80 leading-relaxed">
                "Michael ne se contente pas de soigner, il réécrit votre signature énergétique pour qu'elle s'accorde avec l'Univers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PathologiesExplorer = () => {
  const [activeTab, setActiveTab] = useState<'physique' | 'psychique' | 'spirituel'>('physique');

  return (
    <section id="quand-consulter" className="py-24 bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h3 className="text-xs uppercase tracking-[0.5em] text-violet-400 font-bold mb-4">Diagnostic Fréquentiel</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">QUAND <span className="italic font-light">CONSULTER ?</span></h2>
            <p className="text-slate-400 mt-4">Identifiez votre besoin pour découvrir l'approche thérapeutique la plus adaptée à votre structure.</p>
          </div>
          <div className="flex gap-4 p-1 glass rounded-2xl border border-white/5">
            {['physique', 'psychique', 'spirituel'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-violet-600 text-white shadow-lg' : 'hover:bg-white/5 text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PATHOLOGIES[activeTab].map((p, idx) => (
            <div key={idx} className="glass p-8 rounded-[32px] border border-white/10 hover:border-violet-500/30 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                  {iconsMap[p.icon] || <Activity />}
                </div>
                <div className="text-right">
                  <span className="text-[8px] uppercase font-black tracking-widest text-slate-500 block mb-1">Recommandation</span>
                  <span className="text-[10px] font-bold text-violet-400">{p.details.recommendation}</span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-2">{p.title}</h4>
              <p className="text-xs text-violet-300 font-semibold mb-6 uppercase tracking-widest">Reiki {p.reiki}</p>
              
              <div className="space-y-6 flex-1">
                <div>
                  <h5 className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-2 flex items-center gap-2">
                    <Info size={12} /> Origine du blocage
                  </h5>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{p.details.origin}"
                  </p>
                </div>

                <div>
                  <h5 className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                    <Check size={12} /> Bienfaits apportés
                  </h5>
                  <ul className="space-y-2">
                    {p.details.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-violet-500"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5 mt-auto">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-2">
                    <span>Impact Fréquentiel</span>
                    <span className="text-violet-400">{activeTab === 'physique' ? p.impact.physical : activeTab === 'psychique' ? p.impact.emotional : p.impact.spiritual}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-1000" 
                      style={{ width: `${activeTab === 'physique' ? p.impact.physical : activeTab === 'psychique' ? p.impact.emotional : p.impact.spiritual}%` }}
                    ></div>
                  </div>
                </div>

                <button 
                  onClick={() => scrollToSection('soin')}
                  className="w-full py-4 bg-white/5 text-[10px] uppercase font-black tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all rounded-2xl flex items-center justify-center gap-2 border border-white/10"
                >
                  Découvrir ce soin <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="soin" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-xs uppercase tracking-[0.5em] text-blue-400 font-bold mb-4">Méthodes de Guérison</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">NOS <span className="italic font-light">SOINS</span> STELLAIRES</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="group relative glass rounded-[40px] border border-white/10 p-10 hover:border-violet-500/30 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-600/10 to-transparent blur-3xl -z-10 group-hover:opacity-100 opacity-50 transition-opacity"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
              <div>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block`} style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                  Reiki {service.type}
                </span>
                <h4 className="text-3xl font-bold mb-2">{service.title}</h4>
                <p className="text-violet-400 font-medium">{service.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black mb-1">{service.price}</div>
                <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-widest">
                  <Clock size={14} />
                  {service.duration}
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {Object.entries(service.detailedBenefits).map(([key, benefits]) => (
                <div key={key}>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-4">{key}</p>
                  <ul className="space-y-3">
                    {benefits.map((b, i) => (
                      <li key={i} className="text-[11px] flex items-start gap-2 text-slate-300">
                        <Check size={14} className="text-violet-400 shrink-0 mt-0.5" />
                        <span><strong>{b.label}:</strong> {b.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a href="https://calendly.com/michael-furtak" target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all duration-500 text-center">
              Réserver ce soin
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PhoenixProtocol = () => (
  <section id="phoenix" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px] -z-10"></div>
    <div className="container mx-auto px-6">
      <div className="glass rounded-[60px] border border-white/10 p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-10 right-10">
          <ShieldCheck size={120} className="text-violet-500/10" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Crown size={14} /> EXCLUSIVITÉ SIGNATURE
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">LE PROTOCOLE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">PHOENIX</span></h2>
            <p className="text-xl text-slate-400 serif-quote italic mb-12">
              "Brûlez les anciennes versions de vous-même pour renaître dans votre vibration originelle la plus pure."
            </p>
            
            <div className="space-y-6 mb-12">
              {PROGRAMS[0].perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-orange-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-widest">{perk.label}</h5>
                    <p className="text-sm text-slate-500">{perk.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="px-8 py-4 rounded-3xl bg-white text-black font-black text-2xl">
                {PROGRAMS[0].price}
              </div>
              <div className="text-sm font-bold text-orange-400 uppercase tracking-widest">
                {PROGRAMS[0].saving}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-8">Le Voyage de Transformation</h4>
            {PROGRAMS[0].path.map((step, i) => (
              <div key={i} className="relative glass p-6 rounded-3xl border border-white/5 flex gap-6 items-center group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-orange-400 group-hover:scale-110 transition-transform">
                  {iconsMap[step.icon] || <Zap />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-bold text-lg">{step.step}</h5>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{step.duration}</span>
                  </div>
                  <p className="text-xs text-slate-400">{step.desc}</p>
                </div>
                {i < PROGRAMS[0].path.length - 1 && (
                  <div className="absolute left-[34px] -bottom-4 w-px h-4 bg-white/10"></div>
                )}
              </div>
            ))}
            <a href="https://calendly.com/michael-furtak/phoenix" target="_blank" rel="noopener noreferrer" className="block w-full mt-8 py-6 rounded-[30px] bg-gradient-to-r from-orange-600 to-red-600 text-sm font-black uppercase tracking-[0.3em] shadow-xl shadow-red-600/20 hover:scale-[1.02] transition-transform text-center">
              Initier ma renaissance
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Books = () => (
  <section id="livres" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-xs uppercase tracking-[0.5em] text-violet-400 font-bold mb-4">Mots Vibratoires</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">VIBRER PAR <span className="italic font-light">LES MOTS</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BOOKS.map((book, idx) => (
          <div key={idx} className="glass rounded-[40px] border border-white/10 p-8 flex flex-col lg:flex-row gap-8 hover:bg-white/5 transition-all">
            <div className="w-full lg:w-48 h-72 rounded-2xl overflow-hidden shadow-2xl shrink-0">
              <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-2">{book.tag}</span>
              <h4 className="text-2xl font-bold mb-1">{book.title}</h4>
              <p className="text-sm font-medium text-slate-500 mb-4">{book.subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">{book.description}</p>
              <a 
                href={book.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-violet-400 transition-colors"
              >
                Découvrir sur Amazon <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="témoignages" className="py-24 bg-slate-950/20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-xs uppercase tracking-[0.5em] text-green-400 font-bold mb-4">Voix de la Communauté</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">ILS ONT <span className="italic font-light">RETROUVÉ LEUR LUMIÈRE</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="glass p-10 rounded-[40px] border border-white/10 flex flex-col">
            <QuoteIcon className="text-violet-500/30 mb-8" size={40} />
            <p className="text-lg italic serif-quote text-slate-300 leading-relaxed mb-8 flex-1">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-violet-500/30" />
              <div>
                <p className="font-bold text-sm">{t.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-violet-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 border-t border-white/5 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] -z-10"></div>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
        <div>
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Stars className="text-black" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-widest">Michael Furtak</h2>
              <p className="text-[10px] text-violet-400 font-bold tracking-[0.3em] uppercase">Starseed Cosmic Angel</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-8 max-sm">
            Maître Praticien Reiki spécialisé dans l'éveil Starseed et la transmutation des mémoires cellulaires. Guide vers votre souveraineté fréquentielle.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-violet-600 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-violet-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8">Navigation Rapide</h4>
          <ul className="space-y-4">
            {[
              { name: 'Quand consulter ?', id: 'quand-consulter' },
              { name: 'Soins Reiki', id: 'soin' },
              { name: 'Protocole Phoenix', id: 'phoenix' },
              { name: 'Livres & Poésies', id: 'livres' },
              { name: 'Témoignages', id: 'témoignages' }
            ].map(item => (
              <li key={item.name}>
                <button onClick={() => scrollToSection(item.id)} className="text-sm text-slate-400 hover:text-white transition-colors text-left">{item.name}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8">Newsletter Fréquentielle</h4>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            Recevez mes guidances mensuelles et les codes d'activation stellaire directement dans votre boîte.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Votre email sacré" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-violet-600 transition-colors" />
            <button className="p-4 rounded-2xl bg-white text-black hover:bg-violet-600 hover:text-white transition-colors" type="submit">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-slate-600 uppercase tracking-widest">
          © {new Date().getFullYear()} Michael Furtak. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-white">Mentions Légales</a>
          <a href="#" className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-white">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <NebulaBackground />
      <Navbar />
      
      <main>
        <Hero />
        <ChakraSystem />
        <PathologiesExplorer />
        <Services />
        <PhoenixProtocol />
        <Books />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
