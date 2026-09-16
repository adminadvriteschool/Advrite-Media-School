import { Instagram, Linkedin, Youtube, Triangle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-viz-black pt-32 pb-8 border-t border-white/5 mt-auto relative z-10">
      <div className="max-w-[1560px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Triangle className="text-viz-primary w-8 h-8 fill-viz-primary rotate-180" />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-wider text-white">ADVRITE</span>
              <span className="text-[10px] tracking-[0.2em] text-viz-primary font-semibold">MEDIA SCHOOL</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#course" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Course</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
            <a href="https://advrite.com/" target="_blank" rel="noopener noreferrer" className="text-viz-primary hover:text-white transition-colors text-sm font-medium">Advrite</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-viz-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-viz-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-viz-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Part of ADVrite Parent Brand Banner */}
        <div className="mb-12 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <p className="text-viz-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Part of Advrite</p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Advrite is a Creative &amp; Digital Marketing brand providing branding, digital marketing, graphic design, video production and web design services.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="https://advrite.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-viz-primary text-black font-bold text-sm transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-[0_4px_16px_rgba(0,204,204,0.3)]"
            >
              <span>Visit Advrite</span>
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-xs">
            © {currentYear} Advrite Media School. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
