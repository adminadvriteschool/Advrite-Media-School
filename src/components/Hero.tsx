import { Play, Calendar } from 'lucide-react';
import workspaceEditor from '../assets/workspace_editor.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0B0B0B] flex items-center pt-[80px] overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <div className="text-white z-10 animate-fade-up">
          <p className="text-viz-primary font-bold text-sm tracking-widest uppercase mb-6">
            Learn. Create. Inspire.
          </p>
          <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-extrabold leading-[1.1] mb-8">
            MASTER CREATIVE SKILLS.<br />
            SHAPE <span className="text-viz-primary text-glow">YOUR FUTURE.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Industry-focused courses in Design, Video Editing, Motion Graphics and more. 
            Learn from experts and build real-world projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#courses" className="bg-viz-primary text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:bg-viz-primary-hover w-full sm:w-auto text-center inline-block">
              Explore Courses
            </a>
            <a href="https://wa.me/918590008225?text=Hi%20Klaiva%20Academy%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class.%20Please%20share%20the%20available%20time%20slots." target="_blank" className="bg-transparent border border-viz-primary text-viz-primary px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              Book a Free Demo
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative z-10 animate-fade-up delay-200 lg:pl-10">
          {/* Abstract Triangle Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 flex items-center justify-center opacity-40">
             <svg viewBox="0 0 100 100" className="w-full h-full animate-[pulse_4s_ease-in-out_infinite]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 95,90 5,90" stroke="#00CCCC" strokeWidth="0.5" strokeLinejoin="round" />
             </svg>
          </div>
          
          {/* Main Image Card */}
          <div className="relative rounded-xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.6)] group">
            <img 
              src={workspaceEditor} 
              alt="Creative Workspace" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 contrast-[1.15]"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg">
                <Play className="w-8 h-8 text-viz-primary ml-1 fill-viz-primary" />
              </button>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-8 -left-4 bg-[#0a0a1a] border border-[#2b2b5c] px-4 py-3 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-[#5c5cff] font-bold text-xl animate-[bounce_3s_infinite]">Pr</div>
            <div className="absolute bottom-16 -right-6 bg-[#0a1526] border border-[#23538f] px-4 py-3 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-[#3399ff] font-bold text-xl animate-[bounce_4s_infinite]">Ps</div>
            <div className="absolute bottom-8 -left-6 bg-[#1a051c] border border-[#5c1966] px-4 py-3 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-[#d455ff] font-bold text-xl animate-[bounce_3.5s_infinite]">Ae</div>
            <div className="absolute top-12 -right-4 bg-[#261005] border border-[#8f3a0a] px-4 py-3 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-[#ff7733] font-bold text-xl animate-[bounce_4.5s_infinite]">Ai</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
