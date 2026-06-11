import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  Star, 
  ArrowRight,
  Sparkles,
  Wrench,
  Bike,
  Zap,
  RotateCw,
  Truck,
  Compass
} from 'lucide-react';

/* ==========================================================
   Kuyavian Folk Design System Components
   ========================================================== */

// SVG Element 1: Horizontal repeating band used as section dividers
export const FolkBorderBand = ({ 
  variant = 'blue-on-white', 
  className = '' 
}: { 
  variant?: 'blue-on-white' | 'white-on-blue' | 'light-blue-on-dark'; 
  className?: string; 
}) => {
  const isDark = variant === 'white-on-blue' || variant === 'light-blue-on-dark';
  const mainColor = isDark ? '#FFFFFF' : '#1A5FA8';
  const bgColor = variant === 'blue-on-white' ? 'transparent' : (variant === 'white-on-blue' ? '#1A5FA8' : '#0D3D70');

  return (
    <div className={`w-full overflow-hidden h-[48px] flex items-center relative ${className}`} style={{ backgroundColor: bgColor }}>
      <svg className="w-full h-full" width="100%" height="48" preserveAspectRatio="none">
        <defs>
          <pattern id={`folk-border-pattern-${variant}`} width="100" height="48" patternUnits="userSpaceOnUse">
            {/* Horizontal connection line */}
            <line x1="0" y1="24" x2="100" y2="24" stroke={mainColor} strokeWidth="1.5" />
            
            {/* Central Diamond Unit */}
            <polygon points="50,11 63,24 50,37 37,24" fill={mainColor} />
            <polygon points="50,15 59,24 50,33 41,24" fill="#C0392B" />
            <circle cx="50" cy="24" r="3" fill="#E8B84B" />

            {/* Folk floral curl sprouting left */}
            <path d="M 37,24 Q 28,14 24,19" stroke={mainColor} strokeWidth="1.5" fill="none" />
            <circle cx="24" cy="19" r="2.5" fill={mainColor} />
            
            {/* Folk floral curl sprouting right */}
            <path d="M 63,24 Q 72,34 76,29" stroke={mainColor} strokeWidth="1.5" fill="none" />
            <circle cx="76" cy="29" r="2.5" fill={mainColor} />

            {/* Folk Rosette centered on left pattern boundary (0) and right boundary (100) */}
            <circle cx="0" cy="12" r="5.5" fill={mainColor} />
            <circle cx="100" cy="12" r="5.5" fill={mainColor} />
            <circle cx="0" cy="36" r="5.5" fill={mainColor} />
            <circle cx="100" cy="36" r="5.5" fill={mainColor} />
            
            <circle cx="10" cy="24" r="5.5" fill={mainColor} />
            <circle cx="90" cy="24" r="5.5" fill={mainColor} />
            <circle cx="-10" cy="24" r="5.5" fill={mainColor} />
            <circle cx="110" cy="24" r="5.5" fill={mainColor} />

            {/* Inner highlights (Folk Red and Yellow) */}
            <circle cx="0" cy="12" r="2" fill="#C0392B" />
            <circle cx="100" cy="12" r="2" fill="#C0392B" />
            <circle cx="0" cy="36" r="2" fill="#C0392B" />
            <circle cx="100" cy="36" r="2" fill="#C0392B" />
            
            <circle cx="10" cy="24" r="2.5" fill="#C0392B" />
            <circle cx="90" cy="24" r="2.5" fill="#C0392B" />

            <circle cx="0" cy="24" r="5" fill="#E8B84B" />
            <circle cx="100" cy="24" r="5" fill="#E8B84B" />
            <circle cx="0" cy="24" r="2.5" stroke={mainColor} strokeWidth="1" fill="none" />
            <circle cx="100" cy="24" r="2.5" stroke={mainColor} strokeWidth="1" fill="none" />

            {/* Small decorative alignment dots */}
            <circle cx="27" cy="24" r="2" fill={mainColor} />
            <circle cx="73" cy="24" r="2" fill={mainColor} />
          </pattern>
        </defs>
        <rect width="100%" height="48" fill={`url(#folk-border-pattern-${variant})`} />
      </svg>
    </div>
  );
};

// SVG Element 2: Symmetrical 8-petal paper-wycinanka cut rosette
export const FolkRosette = ({ 
  size = 24, 
  className = '', 
  color = '#1A5FA8' 
}: { 
  size?: number; 
  className?: string; 
  color?: string; 
}) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth="1.5">
        {/* North */}
        <path d="M24,24 C21,12 27,12 24,3 M24,24 C27,12 21,12 24,3" fill={color} fillOpacity="0.08" />
        <circle cx="24" cy="7.5" r="3" fill="#C0392B" stroke={color} strokeWidth="1" />
        
        {/* South */}
        <path d="M24,24 C21,36 27,36 24,45 M24,24 C27,36 21,36 24,45" fill={color} fillOpacity="0.08" />
        <circle cx="24" cy="40.5" r="3" fill="#C0392B" stroke={color} strokeWidth="1" />
        
        {/* East */}
        <path d="M24,24 C36,21 36,27 45,24 M24,24 C36,27 36,21 45,24" fill={color} fillOpacity="0.08" />
        <circle cx="40.5" cy="24" r="3" fill="#C0392B" stroke={color} strokeWidth="1" />

        {/* West */}
        <path d="M24,24 C12,21 12,27 3,24 M24,24 C12,27 12,21 3,24" fill={color} fillOpacity="0.08" />
        <circle cx="7.5" cy="24" r="3" fill="#C0392B" stroke={color} strokeWidth="1" />

        {/* NE */}
        <path d="M24,24 C31,16 38,23 39,10 M24,24 C38,23 31,16 39,10" fill={color} fillOpacity="0.08" />
        <circle cx="34.5" cy="13.5" r="2.5" fill="#E8B84B" stroke={color} strokeWidth="1" />

        {/* NW */}
        <path d="M24,24 C17,16 10,23 9,10 M24,24 C10,23 17,16 9,10" fill={color} fillOpacity="0.08" />
        <circle cx="13.5" cy="13.5" r="2.5" fill="#E8B84B" stroke={color} strokeWidth="1" />

        {/* SE */}
        <path d="M24,24 C31,32 38,25 39,38 M24,24 C38,25 31,32 39,38" fill={color} fillOpacity="0.08" />
        <circle cx="34.5" cy="34.5" r="2.5" fill="#E8B84B" stroke={color} strokeWidth="1" />

        {/* SW */}
        <path d="M24,24 C17,32 10,25 9,38 M24,24 C10,25 17,32 9,38" fill={color} fillOpacity="0.08" />
        <circle cx="13.5" cy="34.5" r="2.5" fill="#E8B84B" stroke={color} strokeWidth="1" />
      </g>

      {/* Centerpiece Details */}
      <circle cx="24" cy="24" r="8.5" fill="#FFFFFF" stroke={color} strokeWidth="1.8" />
      <circle cx="24" cy="24" r="5.5" fill="#E8B84B" />
      <circle cx="24" cy="24" r="2.2" fill={color} />
      
      {/* Tiny decorative folk dots */}
      <circle cx="24" cy="15.5" r="1.2" fill={color} />
      <circle cx="24" cy="32.5" r="1.2" fill={color} />
      <circle cx="15.5" cy="24" r="1.2" fill={color} />
      <circle cx="32.5" cy="24" r="1.2" fill={color} />
    </svg>
  );
};

// SVG Element 3: Botanical L-shaped corner ornament (tulips & stems)
export const FolkCorner = ({ 
  size = 64, 
  className = '', 
  color = '#1A5FA8', 
  position = 'top-left' 
}: { 
  size?: number; 
  className?: string; 
  color?: string; 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; 
}) => {
  let rotation = 'rotate-0';
  if (position === 'top-right') rotation = 'rotate-90';
  if (position === 'bottom-right') rotation = 'rotate-180';
  if (position === 'bottom-left') rotation = 'rotate-270';

  return (
    <svg className={`${className} ${rotation} transition-transform duration-300`} width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corner baseline */}
      <path d="M 2,64 L 2,2 L 64,2" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Botanical stems */}
      <path d="M 2,2 Q 22,10 35,4" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 2,2 Q 10,22 4,35" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Horizontal stem bud (Kuyavian Tulip) */}
      <g transform="translate(35, 4) rotate(-10)">
        <path d="M0,0 C6,-7 14,-10 16,-5 C18,-1 11,5 0,0 Z" fill={color} />
        <path d="M0,0 C-6,-7 -14,-10 -16,-5 C-18,-1 -11,5 0,0 Z" fill={color} />
        <path d="M-7,-5 Q0,-13 7,-5" stroke="#E8B84B" strokeWidth="1" fill="none" />
        <circle cx="0" cy="-5" r="3" fill="#C0392B" />
      </g>
      
      {/* Vertical stem bud */}
      <g transform="translate(4, 35) rotate(80)">
        <path d="M0,0 C6,-7 14,-10 16,-5 C18,-1 11,5 0,0 Z" fill={color} />
        <path d="M0,0 C-6,-7 -14,-10 -16,-5 C-18,-1 -11,5 0,0 Z" fill={color} />
        <path d="M-7,-5 Q0,-13 7,-5" stroke="#E8B84B" strokeWidth="1" fill="none" />
        <circle cx="0" cy="-5" r="3" fill="#C0392B" />
      </g>

      {/* Kuyavian leaves */}
      <path d="M 15,4 Q 21,-2 24,3" stroke={color} strokeWidth="1.2" fill="none" />
      <path d="M 4,15 Q -2,21 3,24" stroke={color} strokeWidth="1.2" fill="none" />

      {/* Colorful dots */}
      <circle cx="9" cy="9" r="2.5" fill="#C0392B" />
      <circle cx="26" cy="12" r="2" fill="#E8B84B" />
      <circle cx="12" cy="26" r="2" fill="#E8B84B" />
      <circle cx="19" cy="19" r="1.5" fill={color} />
    </svg>
  );
};

// SVG Element 4: Horizontal section title divider (thin line - rosette - thin line)
export const FolkDivider = ({ 
  className = '', 
  color = '#1A5FA8' 
}: { 
  className?: string; 
  color?: string; 
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 w-full my-3 ${className}`}>
      <div className="h-[2px] flex-1 max-w-[100px] rounded-full" style={{ backgroundColor: color }} />
      <FolkRosette size={26} color={color} />
      <div className="h-[2px] flex-1 max-w-[100px] rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
};

// SVG Element 5: Decorative 12-spoke wheel / sun watermark
export const FolkWheel = ({ 
  size = 200, 
  className = '', 
  color = '#1A5FA8', 
  opacity = 1 
}: { 
  size?: number | string; 
  className?: string; 
  color?: string; 
  opacity?: number; 
}) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
      {/* Outer spoke runner & tire */}
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="2.5" />
      <circle cx="60" cy="60" r="50" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Inner spoke circle */}
      <circle cx="60" cy="60" r="22" stroke={color} strokeWidth="1" />
      
      {/* Hub */}
      <circle cx="60" cy="60" r="9.5" fill="#FFFFFF" stroke={color} strokeWidth="2" />
      <circle cx="60" cy="60" r="5.5" fill="#E8B84B" />
      <circle cx="60" cy="60" r="2.5" fill="#C0392B" />

      {/* 12 Ornamental Spokes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30;
        return (
          <g key={i} transform={`rotate(${angle} 60 60)`}>
            {/* Spoke line */}
            <line x1="60" y1="50" x2="60" y2="10" stroke={color} strokeWidth="1.8" />
            
            {/* Folk petal emblem midway */}
            <polygon points="60,24 64,30 60,36 56,30" fill={color} />
            <polygon points="60,27 62,30 60,33 58,30" fill="#C0392B" />
            
            {/* Spoke tip flower element */}
            <circle cx="60" cy="6.5" r="3" fill="#E8B84B" stroke={color} strokeWidth="1" />
          </g>
        );
      })}
      
      {/* Surrounding botanical accents */}
      <circle cx="60" cy="18" r="1.5" fill="#C0392B" />
      <circle cx="60" cy="102" r="1.5" fill="#C0392B" />
      <circle cx="18" cy="60" r="1.5" fill="#C0392B" />
      <circle cx="102" cy="60" r="1.5" fill="#C0392B" />
    </svg>
  );
};

/* ==========================================================
   Main App Component
   ========================================================== */

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(1); // Default to Monday
  const [activeTab, setActiveTab] = useState('o-nas');

  // Load current day on mount
  useEffect(() => {
    const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
    setCurrentDayIndex(today);
  }, []);

  // Setup intersection observer for scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select elements to reveal
    const revealItems = document.querySelectorAll('.reveal-item');
    const borderReveals = document.querySelectorAll('.border-reveal');
    
    revealItems.forEach((el) => observer.observe(el));
    borderReveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // List of weekly opening hours
  const schedule = [
    { day: 'Poniedziałek', hours: '10:00 – 18:00', index: 1 },
    { day: 'Wtorek', hours: '10:00 – 18:00', index: 2 },
    { day: 'Środa', hours: '10:00 – 18:00', index: 3 },
    { day: 'Czwartek', hours: '10:00 – 18:00', index: 4 },
    { day: 'Piątek', hours: '10:00 – 18:00', index: 5 },
    { day: 'Sobota', hours: 'ZAMKNIĘTE', index: 6 },
    { day: 'Niedziela', hours: 'ZAMKNIĘTE', index: 0 },
  ];

  // List of bicycle services
  const services = [
    {
      icon: <Wrench className="w-6 h-6 text-brand-blue" />,
      title: 'Serwis Ogólny',
      description: 'Pełny przegląd roweru, precyzyjna regulacja hamulców, ustawienie przerzutek, sprawdzenie połączeń technicznych oraz smarowanie.',
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-blue" />,
      title: 'Serwis E-Bike',
      description: 'Kompletna diagnostyka komputerowa i naprawa zaawansowanych rowerów elektrycznych, regeneracja akumulatorów oraz napędów.',
    },
    {
      icon: <RotateCw className="w-6 h-6 text-brand-blue" />,
      title: 'Rowery Zabytkowe',
      description: 'Kompleksowa renowacja i konserwacja rowerów historycznych oraz retro z najwyższym szacunkiem i pietyzmem dla oryginalnych części.',
    },
    {
      icon: <Bike className="w-6 h-6 text-brand-blue" />,
      title: 'Maszyny Zawodnicze',
      description: 'Serwisowanie i customizacja rowerów wyczynowych. Indywidualne nastawy, ultralekkie komponenty i precyzja na poziomie sportowym.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-blue" />,
      title: 'Wymiana Podzespołów',
      description: 'Profesjonalna wymiana łańcuchów, kaset, korb, suportów oraz hamulców przy użyciu sprawdzonych, w pełni oryginalnych części.',
    },
    {
      icon: <Bike className="w-6 h-6 text-brand-blue" transform="rotate(45)" />,
      title: 'Naprawa Kół',
      description: 'Centrowanie, precyzyjne naciąganie szprych, zaplatanie kół od podstaw oraz instalacja zaawansowanych systemów bezdętkowych tubeless.',
    },
    {
      icon: <Truck className="w-6 h-6 text-brand-blue" />,
      title: 'Odbiór i Dostawa',
      description: 'Nie masz jak dostarczyć roweru? Odbierzemy go bezpośrednio spod Twojego domu we Włocławku i odwieziemy w pełni gotowego po naprawie!',
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-blue" />,
      title: 'Turystyka Rowerowa',
      description: 'Fachowe doradztwo sprzętowe, dobór sakw oraz przygotowanie maszyny na wymagające wyprawy i najpiękniejsze trasy krajoznawcze Kujaw.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-accent selection:text-brand-deep font-merriweather">
      
      {/* ==========================================================
         NAVIGATION HEADER (FIXED)
         ========================================================== */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md transition-shadow duration-300 shadow-sm border-b-3 border-brand-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <a href="#" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-blue shadow-md transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="https://i.ibb.co/nMrrVj3X/687679587-26894732610175848-4533317228564637891-n.jpg" 
                  alt="Warsztat Kujawski Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-lato font-light text-[10px] tracking-[0.3em] text-brand-gray uppercase leading-none">WARSZTAT</span>
                <span className="font-lato font-black text-lg sm:text-xl tracking-tight text-brand-blue uppercase leading-tight flex items-center gap-1.5">
                  KUJAWSKI
                  <FolkRosette size={14} className="hidden sm:inline-block animate-spin-slow animate-[spin_10s_linear_infinite]" />
                </span>
              </div>
            </a>

            {/* Nav Links Right (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {['O Nas', 'Usługi', 'Godziny', 'Opinie', 'Kontakt'].map((item) => {
                const targetId = item.toLowerCase().replace(' ', '-');
                return (
                  <a 
                    key={item} 
                    href={`#${targetId}`}
                    onClick={() => setActiveTab(targetId)}
                    className="font-lato font-bold text-xs uppercase tracking-[0.150em] text-brand-dark hover:text-brand-blue py-2 relative group flex items-center gap-1 transition-colors"
                  >
                    {/* Tiny folk rosette appearing on hover */}
                    <span className="opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                      <FolkRosette size={12} color="#1A5FA8" />
                    </span>
                    {item}
                  </a>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-blue p-2 focus:outline-none"
                aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
                id="hamburger-btn"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic miniature folk border pattern directly under the nav block */}
        <div className="h-[5px] bg-[#1A5FA8] overflow-hidden flex items-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)] animate-pulse" />
          <FolkBorderBand variant="white-on-blue" className="opacity-70 scale-y-50" />
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col justify-start gap-6 border-b-6 border-brand-blue"
            id="mobile-nav"
          >
            {/* Folk Watermark inside overlay */}
            <div className="absolute top-[35%] right-[-10%] opacity-5 pointer-events-none">
              <FolkWheel size={350} color="#1A5FA8" />
            </div>

            <div className="flex flex-col gap-6 text-center">
              {['O Nas', 'Usługi', 'Godziny', 'Opinie', 'Kontakt'].map((item, index) => {
                const targetId = item.toLowerCase().replace(' ', '-');
                return (
                  <motion.a 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item}
                    href={`#${targetId}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveTab(targetId);
                    }}
                    className="font-lato font-black text-lg uppercase tracking-[0.2em] text-brand-dark hover:text-brand-blue py-3 border-b border-brand-accent flex items-center justify-center gap-3 transition-all"
                  >
                    <FolkRosette size={18} color="#1A5FA8" />
                    {item}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-1 bg-brand-blue rounded-full" />
              <p className="font-lato font-bold text-xs uppercase tracking-widest text-brand-blue">POLSKIE KOŁA • KUJAWSKI DUCH</p>
              <a 
                href="tel:605959497" 
                className="font-mono text-brand-deep font-bold text-md flex items-center gap-2 bg-brand-accent px-4 py-2 rounded-full border border-brand-blue/20 hover:scale-105 transition"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                605 959 497
              </a>
            </div>
            
            <div className="flex justify-center mt-auto pb-8">
              <FolkRosette size={40} color="#1A5FA8" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================================
         HERO SECTION
         ========================================================== */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-deep via-brand-blue to-brand-blue/90"
      >
        {/* Decorative watermarks */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          {/* Centered Large Folk Wheel */}
          <FolkWheel size={680} color="#FFFFFF" opacity={0.05} className="animate-[spin_40s_linear_infinite]" />
        </div>
        
        {/* Corner Watermarks */}
        <div className="absolute top-[10%] left-[-5%] z-0 pointer-events-none">
          <FolkWheel size={220} color="#FFFFFF" opacity={0.06} className="animate-[spin_45s_linear_infinite]" />
        </div>
        <div className="absolute bottom-[10%] right-[-5%] z-0 pointer-events-none">
          <FolkWheel size={280} color="#FFFFFF" opacity={0.06} className="animate-[spin_35s_linear_infinite]" />
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 z-10 text-center text-white py-12 flex flex-col items-center">
          
          {/* Folk Rosette White */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <FolkRosette size={42} color="#FFFFFF" />
          </motion.div>

          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center mb-4"
          >
            <h1 className="font-lato font-light tracking-[0.22em] text-brand-light text-2xl sm:text-3xl md:text-4xl leading-none uppercase">
              WARSZTAT
            </h1>
            <h2 className="font-lato font-black text-5xl sm:text-7xl md:text-9xl tracking-tighter text-brand-accent leading-none uppercase">
              KUJAWSKI
            </h2>
          </motion.div>

          {/* Folk Divider in White */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }} 
            animate={{ opacity: 1, width: '100%' }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-md my-4"
          >
            <FolkDivider color="#FFFFFF" />
          </motion.div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl font-merriweather font-light italic text-base sm:text-lg md:text-xl text-brand-accent/90 leading-relaxed mb-10"
          >
            "Serwis rowerów tradycyjnych, zabytkowych, e-bike i wyczynowych. Z pasją do dwóch kółek i Kujaw."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
          >
            <a 
              href="#kontakt" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-brand-blue hover:bg-brand-accent font-lato font-black tracking-wide text-sm uppercase rounded-[30px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_22px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 group-btn"
              id="cta-book-service"
            >
              UMÓW SERWIS
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#usługi" 
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10 font-lato font-bold tracking-wide text-sm uppercase rounded-[30px] transition-all duration-300 flex items-center justify-center"
              id="cta-services"
            >
              ZAKRES USŁUG
            </a>
          </motion.div>

          {/* Phone quick link under CTA */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.9 }} 
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col items-center sm:flex-row gap-2"
          >
            <span className="font-lato font-semibold text-xs tracking-widest text-brand-accent/70 uppercase">ZADZWOŃ TERAZ:</span>
            <a 
              href="tel:605959497" 
              className="font-mono text-brand-accent text-base font-bold hover:text-white transition flex items-center gap-1.5 underline underline-offset-4 decoration-brand-accent/40 decoration-2"
            >
              <Phone className="w-4 h-4" />
              605 959 497
            </a>
          </motion.div>
        </div>

        {/* Absolute White Folk Border Band at the Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <FolkBorderBand variant="white-on-blue" className="opacity-95" />
        </div>
      </section>

      {/* ==========================================================
         O NAS (ABOUT) SECTION
         ========================================================== */}
      <section id="o-nas" className="relative py-24 bg-white overflow-hidden scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 reveal-item">
              <div className="flex flex-col items-start">
                <span className="font-lato font-bold text-xs uppercase tracking-[0.25em] text-brand-blue">
                  O WARSZTACIE
                </span>
                <FolkDivider className="!justify-start max-w-[200px]" color="#1A5FA8" />
              </div>

              <h2 className="font-lato font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-dark leading-tight uppercase">
                ROWER TO PASJA, <br />
                <span className="text-brand-blue">SERWIS TO RZEMIOSŁO</span>
              </h2>

              <div className="font-merriweather font-light text-brand-gray space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>Warsztat Kujawski</strong> to miejsce stworzone we Włocławku z prawdziwej miłości do rowerów, tradycji rzemieślniczej oraz unikalnego uroku regionu Kujaw. Każda sprężyna, każde koło zębate i każdy centymetr ramy traktowany jest tu z uwagą, na jaką zasługuje.
                </p>
                <p>
                  Serwisujemy z najwyższym profesjonalizmem rowery <strong>tradycyjne</strong>, zabytkowe renowacje retro, innowacyjne rowery elektryczne (<strong>e-bike</strong>) oraz wysokowydajne <strong>maszyny wyczynowe</strong> do ścigania szosowego czy enduro. 
                </p>
                <p>
                  Ponadto, jako zakochany w Kujawach kolarz, aktywnie promujemy <strong>turystykę rowerową</strong> w regionie, służąc wsparciem technicznym oraz unikatową wiedzą o lokalnych trasach, zabytkach i ścieżkach rezerwatu.
                </p>
              </div>

              {/* Chips row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {[
                  { label: 'Rowery Tradycyjne', emoji: '🚲' },
                  { label: 'Rowery Zabytkowe', emoji: '🏛️' },
                  { label: 'E-Bike', emoji: '⚡' },
                  { label: 'Maszyny Zawodnicze', emoji: '🏆' }
                ].map((chip) => (
                  <div 
                    key={chip.label}
                    className="flex items-center gap-1.5 px-3 py-2 bg-brand-bg border border-brand-accent rounded-full shadow-sm text-xs font-lato font-bold text-brand-deep"
                  >
                    <FolkRosette size={14} color="#1A5FA8" />
                    <span className="truncate">{chip.label}</span>
                  </div>
                ))}
              </div>

              {/* Callout Box */}
              <div className="mt-8 p-5 bg-brand-accent/50 border-l-4 border-brand-blue rounded-r-lg shadow-sm">
                <p className="font-merriweather font-normal italic text-brand-deep text-sm md:text-base leading-relaxed flex items-start gap-2">
                  <span className="text-xl">✨</span>
                  <span>Oferujemy darmowy odbiór roweru spod domu oraz dostawę po kompletnym serwisie na terenie Włocławka!</span>
                </p>
              </div>
            </div>

            {/* Right Image Frame Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end reveal-item">
              <div className="relative p-8 max-w-[340px] md:max-w-md w-full">
                
                {/* Folk Corner Ornaments around the container */}
                <FolkCorner position="top-left" size={56} className="absolute top-0 left-0" color="#1A5FA8" />
                <FolkCorner position="top-right" size={56} className="absolute top-0 right-0" color="#1A5FA8" />
                <FolkCorner position="bottom-left" size={56} className="absolute bottom-0 left-0" color="#1A5FA8" />
                <FolkCorner position="bottom-right" size={56} className="absolute bottom-0 right-0" color="#1A5FA8" />

                {/* Main Enclaved Circle Logo / Photo */}
                <div className="w-full aspect-square rounded-full border-6 border-brand-blue shadow-2xl p-1 bg-white overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="https://i.ibb.co/nMrrVj3X/687679587-26894732610175848-4533317228564637891-n.jpg" 
                    alt="Warsztat Kujawski właściciel z pasją" 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle inner folk pattern frame */}
                  <div className="absolute inset-0 border-2 border-brand-accent rounded-full pointer-events-none m-2" />
                </div>

                {/* Tiny Floating Badge */}
                <div className="absolute bottom-4 right-4 bg-brand-deep text-white font-lato font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full border border-white shadow-xl flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
                  WŁOCŁAWEK
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================
         FOLK BAND SEPARATOR (FIRST INSTANCE)
         ========================================================== */}
      <section className="relative h-20 bg-brand-blue flex items-center justify-center overflow-hidden">
        <FolkWheel size={220} color="#FFFFFF" opacity={0.06} className="absolute left-10 scale-125" />
        <FolkWheel size={220} color="#FFFFFF" opacity={0.06} className="absolute right-10 scale-125" />
        <FolkBorderBand variant="white-on-blue" className="w-full" />
      </section>

      {/* ==========================================================
         SERVICES (USŁUGI) SECTION
         ========================================================== */}
      <section id="usługi" className="relative py-24 bg-brand-bg scroll-mt-14">
        {/* Soft background watermark */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <FolkWheel size={600} color="#1A5FA8" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-item">
            <span className="font-lato font-bold text-xs uppercase tracking-[0.25em] text-brand-blue">
              ZAKRES USŁUG
            </span>
            <FolkDivider className="my-2" color="#1A5FA8" />
            <h2 className="font-lato font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-dark uppercase">
              CO MOŻEMY DLA CIEBIE ZROBIĆ
            </h2>
            <p className="mt-4 font-merriweather font-light italic text-base text-brand-gray text-center leading-relaxed">
              Profesjonalizm, regionalna rzetelność oraz wyjątkowe podejście do tradycyjnych i technicznych wyzwań.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <div 
                key={svc.title}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl border-t-4 border-brand-blue p-6 relative transition-all duration-300 hover:-translate-y-1.5 group reveal-item flex flex-col justify-between min-h-[240px]"
                id={`service-card-${idx}`}
              >
                {/* Decorative absolute top right folk rosette inside cards */}
                <div className="absolute top-4 right-4 text-brand-blue/20 group-hover:text-brand-blue/90 group-hover:rotate-45 transition-all duration-500">
                  <FolkRosette size={18} color="currentColor" />
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full bg-brand-accent/40 flex items-center justify-center mb-4 text-brand-blue relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-blue/5 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                    {svc.icon}
                  </div>

                  <h3 className="font-lato font-black text-brand-deep text-lg uppercase tracking-tight mb-2 flex items-center gap-1.5">
                    {svc.title}
                  </h3>
                  
                  <p className="font-merriweather font-light text-brand-gray text-[13px] sm:text-sm leading-relaxed mb-4">
                    {svc.description}
                  </p>
                </div>

                <div className="border-t border-brand-lightgray/70 pt-3 flex items-center justify-between text-xs font-lato font-bold text-brand-blue uppercase tracking-widest mt-auto">
                  <span>Profesjonalna obsługa</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================
         OPENING HOURS SECTION (DARK BACKGROUND)
         ========================================================== */}
      <section id="godziny" className="relative py-24 bg-brand-blue text-white overflow-hidden scroll-mt-14">
        {/* Decorative wheel watermark */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-5">
          <FolkWheel size={620} color="#FFFFFF" className="animate-[spin_60s_linear_infinite]" />
        </div>

        <div className="max-w-xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          
          {/* Section Header */}
          <div className="reveal-item w-full flex flex-col items-center mb-10">
            <span className="font-lato font-bold text-xs uppercase tracking-[0.25em] text-white/95">
              GODZINY OTWARCIA
            </span>
            <FolkDivider className="my-2" color="#FFFFFF" />
            <h2 className="font-lato font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              KIEDY NAS ZNAJDZIESZ
            </h2>
          </div>

          {/* Schedule container */}
          <div className="w-full bg-brand-deep/65 backdrop-blur-sm border border-white/15 rounded-xl shadow-2xl overflow-hidden reveal-item">
            {/* Header sub block */}
            <div className="bg-brand-deep font-lato font-black text-xs tracking-[0.2em] text-brand-accent py-4 uppercase border-b border-white/10 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              HARMONOGRAM PRACY SERWISU
            </div>

            {/* List */}
            <div className="divide-y divide-white/5">
              {schedule.map((row) => {
                const isActive = row.index === currentDayIndex;
                return (
                  <div 
                    key={row.day}
                    className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/15 border-l-4 border-white font-bold scale-[1.01]' 
                        : 'opacity-90'
                    } ${row.hours === 'ZAMKNIĘTE' ? 'opacity-50' : ''}`}
                    id={`schedule-row-${row.index}`}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && <FolkRosette size={14} color="#E8B84B" className="shrink-0 animate-pulse" />}
                      <span className="font-lato font-bold text-sm tracking-wide text-white">{row.day}</span>
                    </div>
                    <span className="font-mono text-sm tracking-wide text-brand-accent">
                      {row.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-8 font-merriweather font-light italic text-white/80 text-sm max-w-sm reveal-item">
            "Potrzebujesz pomocy poza standardowymi godzinami? Napisz wiadomość lub zadzwoń — zawsze staram się pomóc współtowarzyszom podróży!"
          </p>

        </div>
      </section>

      {/* ==========================================================
         FOLK BAND SEPARATOR (SECOND INSTANCE)
         ========================================================== */}
      <section className="relative h-20 bg-brand-bg flex items-center justify-center overflow-hidden">
        <FolkBorderBand variant="blue-on-white" className="w-full" />
      </section>

      {/* ==========================================================
         REVIEWS (OPINIE) SECTION
         ========================================================== */}
      <section id="opinie" className="relative py-24 bg-white overflow-hidden scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-item">
            <span className="font-lato font-bold text-xs uppercase tracking-[0.25em] text-brand-blue">
              OPINIE KLIENTÓW
            </span>
            <FolkDivider className="my-2" color="#1A5FA8" />
            <h2 className="font-lato font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-dark uppercase">
              CO MÓWIĄ ROWERZYŚCI
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-2xl mx-auto reveal-item flex flex-col items-center">
            
            <div className="w-full bg-brand-bg rounded-xl border-l-[6px] border-brand-blue p-8 sm:p-10 relative shadow-md">
              {/* Decorative folk rosette icon at top center */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full border border-brand-accent shadow-sm">
                <FolkRosette size={36} color="#1A5FA8" />
              </div>

              {/* Big decorative quotes sign in font */}
              <span className="hidden sm:inline-block font-serif text-[120px] text-brand-blue/8 leading-none absolute left-4 top-2 pointer-events-none">
                “
              </span>

              <div className="relative z-10 space-y-6 pt-2">
                <p className="font-merriweather font-normal italic text-[1.1rem] sm:text-xl text-brand-dark leading-relaxed">
                  "Serwis roweru zrobiony szybko i fachowo, a dodatkowo rower odebrany spod domu i po serwisie odwieziony pod same drzwi 🙂. Bardzo sympatyczny właściciel z gigantyczną kolarską pasją. POLECAM z całego serca!"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4 border-t border-brand-lightgray pt-4">
                  <div className="flex flex-col">
                    <span className="font-lato font-black text-brand-deep text-sm uppercase tracking-wide">
                      — Zadowolony Rowerzysta
                    </span>
                    <span className="font-lato text-[11px] text-brand-muted tracking-wide mt-0.5">
                      Recenzent z Włocławka
                    </span>
                  </div>

                  {/* Stars block */}
                  <div className="flex gap-1 bg-brand-accent/40 px-3 py-1.5 rounded-full border border-brand-blue/15">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-brand-blue text-brand-blue" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Check out Facebook reviews button */}
            <a 
              href="https://www.facebook.com/profile.php?id=61589558513393&sk=reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 px-8 py-3 outline-none border-2 border-brand-blue text-brand-blue hover:bg-brand-accent/50 font-lato font-black tracking-widest text-xs uppercase rounded-[30px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              id="cta-fb-reviews"
            >
              <i className="fa-brands fa-facebook text-md" />
              PRZECZYTAJ WIĘCEJ OPINII NA FB
            </a>

          </div>

        </div>
      </section>

      {/* ==========================================================
         CONTACT (KONTAKT) SECTION
         ========================================================== */}
      <section id="kontakt" className="relative py-24 bg-brand-bg scroll-mt-14">
        {/* Dynamic folk border at the top of contact */}
        <div className="absolute top-0 left-0 right-0 z-10 w-full">
          <FolkBorderBand variant="blue-on-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-item">
            <span className="font-lato font-bold text-xs uppercase tracking-[0.25em] text-brand-blue">
              KONTAKT I LOKALIZACJA
            </span>
            <FolkDivider className="my-2" color="#1A5FA8" />
            <h2 className="font-lato font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-brand-dark uppercase">
              JAK NAS ZNALEŹĆ
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-8 reveal-item">
              
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 space-y-6 border-t-4 border-brand-blue">
                <h3 className="font-lato font-black text-brand-deep text-lg uppercase tracking-tight flex items-center gap-2">
                  <FolkRosette size={20} color="#1A5FA8" />
                  DANE KONTAKTOWE SERWISU
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: <MapPin className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />,
                      label: 'Adres warsztatu',
                      value: 'ul. Hutnicza 2, 87-800 Włocławek',
                      link: 'https://maps.google.com/?q=Hutnicza+2,+87-800+Włocławek',
                      linkText: 'Zobacz w nawigacji',
                    },
                    {
                      icon: <Phone className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />,
                      label: 'Zadzwoń do nas (właściciel)',
                      value: '605 959 497',
                      link: 'tel:605959497',
                      linkText: 'Połącz z telefonem',
                      isMono: true,
                    },
                    {
                      icon: <Mail className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />,
                      label: 'Napisz adres e-mail',
                      value: 'warsztatkujawski@gmail.com',
                      link: 'mailto:warsztatkujawski@gmail.com',
                      linkText: 'Wyślij wiadomość',
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />,
                      label: 'Godziny pracy',
                      value: 'Poniedziałek – Piątek: 10:00 – 18:00 | Sob – Nd: Zamknięte',
                    },
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-4 pb-4 border-b border-brand-lightgray last:border-0 last:pb-0"
                    >
                      <div className="p-2 bg-brand-accent/40 rounded-lg">
                        {item.icon}
                      </div>

                      <div className="space-y-0.5">
                        <span className="font-lato font-bold text-[11px] text-brand-muted uppercase tracking-widest block">
                          {item.label}
                        </span>
                        
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={`text-brand-deep hover:text-brand-blue transition font-semibold text-sm sm:text-base block ${item.isMono ? 'font-mono' : ''}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-brand-dark font-medium text-sm sm:text-base block">
                            {item.value}
                          </span>
                        )}

                        {item.linkText && (
                          <a 
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            className="font-lato font-bold text-[10px] text-brand-blue uppercase tracking-wider inline-flex items-center gap-1 hover:underline mt-1"
                          >
                            {item.linkText}
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Box Service Pickup & Delivery */}
              <div className="relative bg-brand-blue text-white p-6 rounded-xl shadow-xl overflow-hidden">
                {/* Folk corners decoration inside callout */}
                <FolkCorner position="top-left" size={40} className="absolute top-0 left-0" color="#FFFFFF" />
                <FolkCorner position="bottom-right" size={40} className="absolute bottom-0 right-0" color="#FFFFFF" />
                <FolkWheel size={150} color="#FFFFFF" opacity={0.05} className="absolute -right-6 -bottom-6" />

                <div className="relative z-10 space-y-3 px-3 py-2 text-center lg:text-left">
                  <h4 className="font-lato font-black tracking-widest text-base sm:text-lg uppercase">
                    ZAMÓW SERWIS D2D (DRZWI-DO-DRZWI)
                  </h4>
                  <p className="font-merriweather font-light text-brand-accent/90 text-[13px] sm:text-sm leading-relaxed">
                    Nie musisz martwić się transportem. Zadzwoń pod numer <strong className="font-mono text-white">605 959 497</strong> lub skontaktuj się z nami poprzez Facebooka. Przyjedziemy, odbierzemy rower, a po oddaniu go do pełnej formy przywieziemy z powrotem.
                  </p>
                </div>
              </div>

              {/* Main Facebook Banner Button */}
              <a 
                href="https://www.facebook.com/profile.php?id=61589558513393" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-brand-blue hover:bg-brand-deep text-white font-lato font-bold text-sm tracking-widest uppercase rounded-[30px] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
                id="cta-fb-main"
              >
                <i className="fa-brands fa-facebook text-xl text-brand-accent" />
                DOWIEDZ SIĘ WIĘCEJ NA PROFILU FB
              </a>

            </div>

            {/* Right Map Column */}
            <div className="lg:col-span-6 reveal-item flex flex-col justify-stretch">
              <div className="bg-white rounded-xl shadow-md p-2 border-3 border-brand-blue h-full flex flex-col justify-between overflow-hidden relative min-h-[380px]">
                {/* Embed direct Google Maps block */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.6050085713932!2d19.043352112694425!3d52.6671117252106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c9909335bab8b%3A0x8caaf4269bc6d44f!2sHutnicza%202%2C%2087-800%20W%C5%82oc%C5%82awek!5e0!3m2!1spl!2spl!4v1781177005274!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '6px', flexGrow: 1 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Warsztat Kujawski we Włocławku"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================
         FOOTER
         ========================================================== */}
      <footer className="relative bg-brand-deep text-white pt-16 pb-8 overflow-hidden">
        {/* Repeating folk border white at top */}
        <div className="absolute top-0 left-0 right-0 z-10 w-full">
          <FolkBorderBand variant="white-on-blue" className="opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Logo Center */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl relative scale-105">
                <img 
                  src="https://i.ibb.co/nMrrVj3X/687679587-26894732610175848-4533317228564637891-n.jpg" 
                  alt="Warsztat Kujawski Logo Footer" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div>
                <span className="font-lato font-light text-[10px] tracking-[0.3em] text-brand-accent uppercase leading-none block">WARSZTAT</span>
                <span className="font-lato font-black text-2xl tracking-tighter text-white uppercase block mt-1">
                  KUJAWSKI
                </span>
              </div>
            </div>

            {/* Folk Divider in White */}
            <div className="w-full max-w-sm">
              <FolkDivider color="#FFFFFF" />
            </div>

            {/* Address */}
            <div className="space-y-1">
              <p className="font-merriweather font-light text-brand-accent/80 text-sm">
                Włocławek · ul. Hutnicza 2 · Kujawy
              </p>
              <p className="font-lato font-bold text-xs uppercase tracking-widest text-brand-accent">
                SPASOWANI DO TWOJEJ DROGI
              </p>
            </div>

            {/* Handy links */}
            <div className="flex gap-6 text-xs font-lato font-bold uppercase tracking-[0.2em] text-white/50 pt-4">
              <a href="#o-nas" className="hover:text-white transition">O NAS</a>
              <span>·</span>
              <a href="#usługi" className="hover:text-white transition">USŁUGI</a>
              <span>·</span>
              <a href="#kontakt" className="hover:text-white transition">KONTAKT</a>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-between text-[11px] font-lato font-light text-white/40 gap-4">
              <p>
                © 2026 Warsztat Kujawski · Wszelkie prawa zastrzeżone.
              </p>
              <p className="flex items-center gap-1">
                Kuyavian Folk Art & Craft Design · Crafted with pride.
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
