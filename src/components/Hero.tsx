import { CalendarDays, Star, Award, Sparkles, MapPin } from 'lucide-react';
import { IMAGES } from '../data';
import { ActiveTab } from '../types';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
  ambiance?: 'sunset' | 'midnight';
}

export default function Hero({ setActiveTab, ambiance = 'sunset' }: HeroProps) {
  const isMidnight = ambiance === 'midnight';

  return (
    <div className={`relative ${isMidnight ? 'bg-[#0A0908]' : 'bg-[#171615]'} text-[#FAF8F5] overflow-hidden select-none py-16 lg:py-24 xl:py-32 theme-transition`}>
      {/* Background Graphic Grid/Radial elements - Deepen and enrich lighting */}
      <div className={`absolute inset-0 ${isMidnight ? 'bg-[radial-gradient(circle_at_bottom_left,#1E3A8A_0%,transparent_50%)] opacity-35' : 'bg-[radial-gradient(circle_at_bottom_left,#C25E3A_0%,transparent_50%)] opacity-25'} pointer-events-none theme-transition`} />
      <div className={`absolute inset-0 ${isMidnight ? 'bg-[radial-gradient(circle_at_top_right,#C25E3A_0%,transparent_45%)] opacity-20' : 'bg-[radial-gradient(circle_at_top_right,#E4A83F_0%,transparent_45%)] opacity-20'} pointer-events-none theme-transition`} />
      
      {/* Fine golden lines as architectural grid background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,168,63,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,168,63,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Dynamic Star particles for Celestial mode */}
      {isMidnight && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-[10%] text-white/50 text-[10px] animate-twinkle">✦</div>
          <div className="absolute top-[28%] left-[80%] text-white/60 text-[12px] animate-twinkle [animation-delay:1.5s]">✦</div>
          <div className="absolute top-[68%] left-[18%] text-white/40 text-[9px] animate-twinkle [animation-delay:3s]">✧</div>
          <div className="absolute top-[75%] left-[90%] text-white/70 text-[11px] animate-twinkle [animation-delay:0.5s]">✦</div>
          <div className="absolute top-[15%] left-[65%] text-white/50 text-[10px] animate-twinkle [animation-delay:2s]">✧</div>
        </div>
      )}

      {/* Hero Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text details */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left select-text">
            <div className="inline-flex items-center space-x-2 bg-[#C25E3A]/10 border border-[#E4A83F]/30 px-4 py-2 rounded-full text-[10px] md:text-xs font-semibold text-[#E4A83F] uppercase tracking-[0.2em] leading-none pointer-events-none shadow-[inset_0_1px_rgba(255,255,255,0.05)] bg-slate-900/40">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#E4A83F] mr-1" />
              <span>Chandigarh’s Elite Open-Air Dining Destination</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.2] tracking-tight">
              Dine Under <span className="text-[#E4A83F] italic font-medium font-serif">the Stars</span> <br className="hidden sm:inline" />
              at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F5] via-[#E4A83F] to-[#C25E3A] font-semibold font-serif italic block sm:inline mt-1 sm:mt-0 drop-shadow-[0_2px_12px_rgba(194,94,58,0.2)]">The Skylight Garden</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Elevated restaurant & bar on the 2nd Floor of <strong className="font-semibold text-white font-serif italic">The Fern Residency</strong> (Industrial Area Phase II). 
              Indulge in our slow-simmered Punjabi Butter Chicken, robust tandoori platters, and stellar local mocktails surrounded by lush garden greens and scenic Chandigarh skyline views.
            </p>

            {/* Quick Action Buttons with Premium Hover Mechanics */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActiveTab('reservations')}
                id="hero-cta-reserve"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#C25E3A] to-[#D36F49] hover:from-[#A94C2B] hover:to-[#C25E3A] text-white font-sans font-semibold rounded-xl shadow-[0_10px_25px_-10px_rgba(194,94,58,0.5)] hover:shadow-[0_12px_30px_-5px_rgba(194,94,58,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2.5 border border-[#C25E3A]/40"
              >
                <CalendarDays className="h-5 w-5 text-[#FAF8F5]" />
                <span className="tracking-wide text-xs sm:text-sm">Reserve Rooftop Table</span>
              </button>
              
              <button
                onClick={() => setActiveTab('menu')}
                id="hero-cta-menu"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-[#FAF8F5] border border-white/15 hover:border-white/25 shadow-sm hover:shadow-md font-sans font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2.5"
              >
                <span className="tracking-wide text-xs sm:text-sm">View Full Menu</span>
              </button>
            </div>

            {/* Feature Badges with Premium Box Shadows and Luxury Accents */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="p-4 bg-[#1E1D1B]/80 border border-white/5 rounded-2xl flex items-start space-x-3.5 backdrop-blur-md pointer-events-none shadow-md">
                <div className="p-2.5 bg-[#E4A83F]/15 rounded-xl text-[#E4A83F] mt-0.5">
                  <Star className="h-4.5 w-4.5 fill-current animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">4.6 Stars</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-light">500+ Verified Reviews</p>
                </div>
              </div>

              <div className="p-4 bg-[#1E1D1B]/80 border border-white/5 rounded-2xl flex items-start space-x-3.5 backdrop-blur-md pointer-events-none shadow-md">
                <div className="p-2.5 bg-[#C25E3A]/15 rounded-xl text-[#C25E3A] mt-0.5">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Multi-Cuisine</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-light">North Indian & Global</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/PoQC2h1ktRRe6qmHA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#1E1D1B]/80 hover:bg-[#25201A] border border-white/5 hover:border-[#E4A83F]/35 rounded-2xl flex items-start space-x-3.5 backdrop-blur-md col-span-2 sm:col-span-1 transition-all duration-300 shadow-md group/maps"
              >
                <div className="p-2.5 bg-[#E4A83F]/15 rounded-xl text-[#E4A83F] mt-0.5 group-hover/maps:scale-105 transition-transform duration-300">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white group-hover/maps:text-[#E4A83F] transition-colors uppercase tracking-wider truncate">Fern Residency</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-light truncate">Opp. Porsche Showroom</p>
                  <span className="text-[10px] text-[#E4A83F] font-semibold block mt-1 underline decoration-dotted">Live GPS Map</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column Interactive Image Display */}
          <div className="lg:col-span-5 relative">
            {/* Elegant outer geometric box framework */}
            <div className="absolute inset-0 border border-[#E4A83F]/15 rounded-3xl translate-x-3 translate-y-3 pointer-events-none -z-0" />
            
            <div className="relative z-10 w-full aspect-square sm:aspect-[4/3] lg:aspect-square bg-gradient-to-tr from-[#1E1D1B] to-[#3A332B] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E4A83F]/25 group">
              <img
                src={IMAGES.rooftopSunset}
                alt="Beautiful open-air rooftop dining terrace at sunset"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[22px] transition-transform duration-[1.2s] ease-out group-hover:scale-105 pointer-events-none"
              />
              
              {/* Overlay shading to blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Float Glass Card info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#1E1D1B]/85 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between pointer-events-none shadow-lg">
                <div className="min-w-0 pr-2">
                  <span className="text-[#E4A83F] text-[10px] font-bold tracking-[0.2em] uppercase block mb-1">
                    Scenic Highlight
                  </span>
                  <span className="text-white text-xs sm:text-sm font-serif font-light block truncate">
                    Terrace Views & Cozy Pergolas at Sunset
                  </span>
                </div>
                <div className="bg-[#C25E3A] text-white text-[9px] font-bold py-1.5 px-3.5 rounded-full uppercase tracking-wider shrink-0 shadow-md">
                  Live View
                </div>
              </div>
            </div>

            {/* Glowing borders around image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E4A83F]/20 rounded-full blur-3xl -z-10 animate-pulse duration-[8s]" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#C25E3A]/15 rounded-full blur-3xl -z-10 animate-pulse duration-[12s]" />
          </div>
        </div>
      </div>
    </div>
  );
}
