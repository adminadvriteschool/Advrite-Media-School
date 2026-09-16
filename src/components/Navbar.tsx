import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about', active: false },
    { name: 'Course', href: '#course', active: false },
    { name: 'Contact', href: '#contact', active: false },
    { name: 'Advrite', href: 'https://advrite.com/', active: false, external: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 flex items-center ${
        scrolled ? 'glass-nav text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 h-full grid grid-cols-[1fr_auto_1fr] items-center">
        
        {/* Logo */}
        <div className="justify-self-start flex items-center gap-3 cursor-pointer -translate-x-[15%]">
          <div className="flex flex-col gap-[2px]">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L20 8L8 11L22 17L10 20L14 24" stroke="#00CCCC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl leading-none tracking-wider text-white">ADVRITE</span>
            <span className="text-[9px] tracking-[0.25em] text-viz-primary font-semibold flex items-center justify-center gap-1 mt-1">
              <span className="w-2 h-[1px] bg-viz-primary"></span>
              MEDIA SCHOOL
              <span className="w-2 h-[1px] bg-viz-primary"></span>
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-self-center items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`text-sm font-medium transition-colors hover:text-viz-primary relative group ${
                link.external ? 'text-viz-primary font-semibold' : link.active ? 'text-white' : 'text-gray-300'
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-viz-primary rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block justify-self-end">
          <button className="bg-viz-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:box-glow">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden justify-self-end col-start-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-viz-black border-t border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`font-medium text-lg border-b border-white/10 pb-2 ${link.external ? 'text-viz-primary font-semibold' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name} {link.external ? '(Parent Brand)' : ''}
            </a>
          ))}
          <button className="bg-viz-primary text-white px-6 py-3 rounded-xl font-semibold mt-4">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
