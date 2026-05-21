import { Building2, Compass, ShieldCheck, MapPin, Eye, Zap, Flame, Clock } from 'lucide-react';
import { IMAGES } from '../data';

interface AboutProps {
  ambiance?: 'sunset' | 'midnight';
}

export default function About({ ambiance = 'sunset' }: AboutProps) {
  const isMidnight = ambiance === 'midnight';
  const milestones = [
    {
      id: 1,
      phase: "Research & Strategy",
      task: "Rooftop concept exploration, market analysis of Chandigarh Industrial Area dining, brand definitions.",
      duration: "June 01 - June 14",
      status: "completed",
    },
    {
      id: 2,
      phase: "Visual Design & Mockups",
      task: "Aesthetic color selections (terracotta, gold, deep charcoal), menu illustrations, desktop/mobile responsive prototypes.",
      duration: "June 15 - June 28",
      status: "active",
    },
    {
      id: 3,
      phase: "Full Stack Build",
      task: "Development of interactive menu selectors, real-time seat reservation engine, gallery lightboxes, and test simulations.",
      duration: "June 29 - July 19",
      status: "scheduled",
    },
    {
      id: 4,
      phase: "Live Launch",
      task: "Performance tuning, responsive verification, public table booking launch, Swiggy/EazyDiner partner link integrations.",
      duration: "July 20 - July 30",
      status: "scheduled",
    }
  ];

  const highlights = [
    {
      icon: <Flame className="h-5.5 w-5.5 text-[#C25E3A]" />,
      title: "Open-Air Garden Oasis",
      desc: "Pergolas adorned with gorgeous foliage and warm lights, creating the perfect romantic twilight date or happy family dinner ambient."
    },
    {
      icon: <Building2 className="h-5.5 w-5.5 text-[#E4A83F]" />,
      title: "The Fern Residency",
      desc: "Nested safely within a premium 4-star hospitality environment. Restrooms, elevators, and lobbies are constantly polished and pristine."
    },
    {
      icon: <ShieldCheck className="h-5.5 w-5.5 text-[#C25E3A]" />,
      title: "A-Grade Accessibility",
      desc: "Complete ramps, direct secure elevators, dedicated accessible parking slots, and spacious table clearance. We welcome everyone."
    },
    {
      icon: <Compass className="h-5.5 w-5.5 text-[#E4A83F]" />,
      title: "Vibrant Entertainments",
      desc: "Equipped with live football/cricket sports projection screens, dynamic acoustics for live acoustic singers, and a dancefloor layout."
    }
  ];

  return (
    <div className={`py-20 sm:py-28 theme-transition transition-colors duration-500 relative overflow-hidden ${isMidnight ? 'bg-[#0E0D0C] text-gray-300' : 'bg-[#FAF8F5] text-[#333333]'}`}>
      
      {/* Decorative architectural background circle */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#E4A83F]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#C25E3A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
        
        {/* Core Description - Identity (Our Story) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#C25E3A] tracking-[0.25em] block uppercase">
                Our Story
              </span>
              <h2 className={`font-serif text-4xl sm:text-5xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-light leading-tight tracking-tight select-text`}>
                An Elevated Escape <br />
                <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#C25E3A] to-[#E4A83F]">Defined by the Skies</span>
              </h2>
            </div>
            
            <div className={`space-y-5 font-sans ${isMidnight ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-base font-light select-text`}>
              <p>
                The story of <strong className={`font-serif font-semibold ${isMidnight ? 'text-[#E4A83F]' : 'text-[#1E1D1B]'} italic`}>The Skylight Garden</strong> began with a simple vision: to craft a tranquil, foliage-framed sanctuary suspended above the vibrant rhythms of Chandigarh. 
                Situated on the second-floor rooftop terrace of <strong className={`font-medium ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`}>The Fern Residency</strong> hotel on Purv Marg corridor, we transformed this skyward space into a botanical escape where gourmet flavors harmonized with breathtaking city views.
              </p>
              <p>
                Our culinary curators and architecture partners blended natural timber pergolas, soft wind-brushed greenery, and warm incandescent light strings to foster a serene dining atmosphere. 
                Under the chef's expertise, we offer an exquisite menu spanning authentic tandoor-roasted platters, slow-simmered Punjabi North Indian delicacies, and light, wood-fired artisanal pizzas. Here, every evening becomes a memorable journey under the open sky.
              </p>
            </div>

            {/* Premium Quote Callout with Elegant Double Quotes */}
            <div className={`relative p-6 sm:p-8 ${isMidnight ? 'bg-white/[0.03] border-[#E4A83F]/70' : 'bg-white border-[#E4A83F]'} rounded-2xl border-l-[6px] shadow-sm overflow-hidden group theme-transition`}>
              <div className={`absolute right-4 bottom-2 text-7xl ${isMidnight ? 'text-white/[0.04]' : 'text-gray-100/70'} font-serif select-none pointer-events-none`}>”</div>
              <p className={`text-sm sm:text-base ${isMidnight ? 'text-gray-200' : 'text-gray-700'} italic relative z-10 leading-relaxed`}>
                “Designed to celebrate Chandigarh’s starlit nights, offering unparalleled hospitality with complimentary valet service right opposite the Porsche showroom.”
              </p>
            </div>
          </div>

          {/* Side Graphic Overlapping Composition with Fine Layout Borders */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            {/* Elegant luxury graphic frame behind */}
            <div className="absolute -inset-4 border border-[#C25E3A]/15 rounded-3xl pointer-events-none -translate-x-2 -translate-y-2" />
            
            {/* Main Image: The Gorgeous Open-Air Chandigarh Rooftop (User Requested) */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-gray-100 group transition-all duration-300 hover:shadow-orange-100/40">
              <img
                src={IMAGES.aboutChandigarh}
                alt="The Skylight Garden beautiful rooftop outdoor garden seating setup in Chandigarh"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl transition-transform duration-[1.2s] ease-out group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Glass label directly overlaying the user's beautiful image */}
              <div className="absolute bottom-4 left-4 bg-[#1E1D1B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[10px] text-[#E4A83F] tracking-widest font-bold uppercase">
                The Terrace Garden
              </div>
            </div>


            
            {/* Floating Luxury Stat box with Glowing Backdrop */}
            <div className={`absolute -bottom-8 -right-4 sm:right-6 z-20 ${isMidnight ? 'bg-[#181615] border-[#C25E3A]/30' : 'bg-[#1E1D1B] border-[#C25E3A]/20'} text-white p-6 rounded-2xl shadow-2xl border max-w-xs space-y-1.5 pointer-events-none theme-transition`}>
              <div className="flex items-baseline space-x-1">
                <span className="text-[#E4A83F] font-serif text-4xl font-extrabold tracking-tight">100+</span>
                <span className="text-xs text-[#E4A83F] font-bold uppercase tracking-wider">Seats</span>
              </div>
              <h4 className="text-sm font-semibold text-white tracking-wide">Guest Seating Capacity</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Spacious open terrace pergolas and a fully climate-controlled indoor glass lounge.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Divider */}
        <div className="flex items-center justify-center space-x-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C25E3A]/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#E4A83F]" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C25E3A]/30" />
        </div>

        {/* Highlights Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C25E3A] text-xs font-bold tracking-[0.25em] uppercase block">Premium Facilities</span>
            <h3 className={`font-serif text-3xl sm:text-4xl ${isMidnight ? 'text-[#FAF8F5]' : 'text-[#1E1D1B]'} font-light tracking-tight`}>Engineered for Your Leisure</h3>
            <p className={`text-sm ${isMidnight ? 'text-gray-400' : 'text-gray-500'} font-light max-w-md mx-auto leading-relaxed`}>
              Every facility detail is refined to achieve high-vibe comfort, seamless accessibility, and luxurious comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div 
                key={i} 
                className={`${isMidnight ? 'bg-[#181615] border-white/5 hover:border-[#E4A83F]/30 hover:shadow-[0_12px_24px_rgba(228,168,63,0.02)]' : 'bg-white border-orange-100/50 hover:border-[#E4A83F]/30 hover:shadow-[0_12px_24px_rgba(194,94,58,0.05)]'} p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between theme-transition`}
              >
                <div>
                  <div className={`p-3 ${isMidnight ? 'bg-orange-950/20 text-[#E4A83F] border-[#E4A83F]/20' : 'bg-orange-50/60 text-[#C25E3A] border-orange-100/30'} inline-block rounded-xl mb-5 border theme-transition`}>
                    {h.icon}
                  </div>
                  <h4 className={`font-serif font-medium ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} text-lg mb-2.5`}>{h.title}</h4>
                  <p className={`font-sans text-xs sm:text-sm ${isMidnight ? 'text-gray-400' : 'text-gray-500'} leading-relaxed font-light`}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Project Roadmap Timeline */}
        <div className={`theme-transition ${isMidnight ? 'bg-[#151312] border-white/[0.03]' : 'bg-[#171615] border-white/5'} text-white p-8 sm:p-12 lg:p-14 rounded-[32px] relative overflow-hidden shadow-2xl border`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C25E3A_0%,transparent_45%)] opacity-25 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Timeline Info Text */}
            <div className="lg:col-span-4 space-y-5 text-left">
              <span className="text-xs font-bold text-[#E4A83F] tracking-[0.25em] uppercase block">Digital Roadmap</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light leading-tight tracking-tight">The Skylight Digital Roadmap</h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                This interactive timeline represents our step-by-step master plan as we craft and launch Chandigarh’s ultimate gastropub platform. 
              </p>
              
              <div className="flex items-center space-x-3 text-xs text-[#E4A83F] bg-white/5 p-4 rounded-xl border border-white/10 shadow-inner">
                <Clock className="h-4.5 w-4.5 animate-pulse text-[#E4A83F]" />
                <span className="font-medium tracking-wide">Phase 2 Is Active: UI Visual Engineering</span>
              </div>
            </div>

            {/* Timelines Cards */}
            <div className="lg:col-span-8 space-y-5 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#E4A83F]/30 via-white/10 to-transparent hidden md:block" />
              
              {milestones.map((m) => {
                const isCompleted = m.status === 'completed';
                const isActive = m.status === 'active';
                return (
                  <div 
                    key={m.id} 
                    className={`relative md:pl-12 flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-300 ${
                      isActive ? 'scale-[1.01]' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    {/* Circle Indicator */}
                    <div className={`absolute left-4.5 w-3.5 h-3.5 rounded-full border-2 hidden md:block z-10 transition-transform ${
                      isCompleted 
                        ? 'bg-[#E4A83F] border-[#E4A83F]' 
                        : isActive 
                        ? 'bg-[#C25E3A] border-[#C25E3A] scale-125' 
                        : 'bg-transparent border-white/20'
                    }`} />
                    
                    {isActive && (
                      <div className="absolute left-[13px] w-5 h-5 rounded-full bg-[#C25E3A] opacity-35 animate-ping hidden md:block z-0" />
                    )}

                    <div className={`w-full p-6 rounded-2xl text-left border transition-all duration-300 shadow-sm ${
                      isActive 
                        ? 'bg-[#C25E3A]/10 border-[#C25E3A]/40 shadow-[0_12px_24px_rgba(194,94,58,0.1)]' 
                        : isCompleted
                        ? 'bg-white/5 border-white/10'
                        : 'bg-white/[0.01] border-white/5'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                        <div className="flex items-center space-x-2">
                          <span className={`text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase font-bold tracking-widest text-white ${
                            isCompleted ? 'bg-green-600/80' : isActive ? 'bg-orange-500/80 shadow-md' : 'bg-gray-700/60'
                          }`}>
                            {m.phase}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono tracking-wider font-semibold uppercase">
                          {m.duration}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-sans text-gray-200 leading-relaxed font-light">
                        {m.task}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
