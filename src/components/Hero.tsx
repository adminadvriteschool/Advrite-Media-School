import { Play, Calendar, Video, Star, Award } from 'lucide-react';
import workspaceEditor from '../assets/workspace_editor.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0B0B0B] flex items-center pt-[80px] overflow-hidden relative">
      <div className="w-full max-w-[1560px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
        
        {/* Left Column */}
        <div className="text-white z-10 animate-fade-up max-w-[620px]">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00CCCC] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
              Advrite Media School <span className="text-white/30 mx-1.5">•</span> <span className="text-[#00CCCC]">An Education Division of Advrite</span>
            </span>
          </div>
          <h1 className="text-[36px] md:text-[48px] lg:text-[72px] xl:text-[80px] font-extrabold leading-[1.1] mb-8">
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
            <a href="https://wa.me/918590008225?text=Hi%20Advrite%20Media%20School%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class.%20Please%20share%20the%20available%20time%20slots." target="_blank" className="bg-transparent border border-viz-primary text-viz-primary px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              Book a Free Demo
            </a>
          </div>

          {/* Social proof strip */}
          <div className="w-10 h-[2px] bg-white/10 mt-10 mb-5 rounded-full"></div>
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Video className="w-3.5 h-3.5 text-[#00CCCC]" />
              </div>
              <p className="text-white/40 text-[13px] whitespace-nowrap"><span className="text-white/80 font-semibold">Live</span> One-to-One Classes</p>
            </div>
            
            <span className="text-white/20 text-xs hidden sm:inline-block select-none">•</span>
            
            <div className="flex items-center gap-1.5 shrink-0 text-white/40 text-[13px]">
              <div className="flex items-center gap-1 text-white/80 font-semibold">
                <span>4.9</span>
                <Star className="w-3.5 h-3.5 fill-[#00CCCC] text-[#00CCCC]" />
              </div>
              <span className="whitespace-nowrap">Rating</span>
            </div>

            <span className="text-white/20 text-xs hidden sm:inline-block select-none">•</span>

            <div className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Award className="w-3.5 h-3.5 text-[#00CCCC]" />
              </div>
              <p className="text-white/40 text-[13px] whitespace-nowrap"><span className="text-white/80 font-semibold">Certificate</span> Included</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative z-10 animate-fade-up delay-200 w-full flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[560px]">




          {/* Main Image Card */}
          <div className="relative rounded-xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.6)] group w-full max-w-[620px] lg:max-w-none">
            <img 
              src={workspaceEditor} 
              alt="Creative Workspace and Student Learning" 
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
