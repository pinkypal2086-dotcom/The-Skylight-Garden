import { useState } from 'react';
import { Star, MessageSquare, Heart, Smile } from 'lucide-react';
import { REVIEWS } from '../data';

interface TestimonialsProps {
  ambiance?: 'sunset' | 'midnight';
}

export default function Testimonials({ ambiance = 'sunset' }: TestimonialsProps) {
  const isMidnight = ambiance === 'midnight';
  const [activePlatform, setActivePlatform] = useState<string>('all');

  // Filter reviews
  const filteredReviews = activePlatform === 'all'
    ? REVIEWS
    : REVIEWS.filter((x) => x.source.toLowerCase() === activePlatform.toLowerCase());

  // Platform metrics
  const platformStats = [
    { name: 'Google Stars', rating: '4.6/5', count: '500+ reviews', url: '#' },
    { name: 'Zomato Rating', rating: '4.6/5', count: '210+ ratings', url: '#' },
    { name: 'Swiggy Pay', rating: '4.6/5', count: '140+ votes', url: '#' },
    { name: 'MagicPin Rating', rating: '4.6/5', count: '85+ scores', url: '#' }
  ];

  const ratingMetrics = [
    { label: 'Rooftop Ambiance', score: 4.8, progressWidth: 'w-[96%]' },
    { label: 'Food Quality & Portions', score: 4.6, progressWidth: 'w-[92%]' },
    { label: 'Table Presentation', score: 4.7, progressWidth: 'w-[94%]' },
    { label: 'Valet & Guard Services', score: 4.5, progressWidth: 'w-[90%]' },
  ];

  return (
    <div className={`theme-transition transition-colors duration-500 py-16 sm:py-24 ${isMidnight ? 'bg-[#0E0D0C] text-gray-300' : 'bg-[#FAF8F5] text-[#333333]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 col-span-3">
          <span className="text-[#C25E3A] text-xs font-bold tracking-[0.25em] uppercase">User Reviews</span>
          <h2 className={`font-serif text-3xl sm:text-4xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-light`}>Loved by Chandigarh Diners</h2>
          <p className={`font-sans text-sm ${isMidnight ? 'text-gray-400' : 'text-gray-500'} font-light`}>
            With 500+ verified ratings, The Skylight Garden stands premier for group celebrations, corporate dinners, and quiet romantic culinary dates.
          </p>
        </div>

        {/* Brand Rating Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {platformStats.map((stat, i) => (
            <div key={i} className={`p-5 rounded-2xl shadow-sm border text-center space-y-1.5 hover:shadow-md transition-shadow theme-transition ${isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center justify-center space-x-1.5 text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <h4 className={`text-sm font-semibold ${isMidnight ? 'text-gray-300' : 'text-gray-800'}`}>{stat.name}</h4>
              <p className={`text-2xl font-serif font-semibold ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`}>{stat.rating}</p>
              <span className="text-[10px] text-gray-400 block tracking-wide uppercase font-medium">{stat.count}</span>
            </div>
          ))}
        </div>

        {/* Split Section: Metrics vs Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Metrics side (Left) */}
          <div className={`lg:col-span-4 p-6 rounded-3xl border shadow-sm space-y-6 theme-transition ${isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-gray-200'}`}>
            <div className="space-y-1.5 text-left">
              <div className="flex items-center space-x-2">
                <Smile className="h-4 w-4 text-[#C25E3A]" />
                <h3 className={`font-serif text-lg font-light ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`}>Category Breakdown</h3>
              </div>
              <p className="text-xs text-gray-400 font-light">Aggregated benchmarks from recent dining surveys.</p>
            </div>

            <div className="space-y-4 text-left">
              {ratingMetrics.map((elem, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className={`font-medium ${isMidnight ? 'text-gray-300' : 'text-gray-700'}`}>{elem.label}</span>
                    <span className="font-mono font-bold text-[#E4A83F]">{elem.score} / 5.0</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isMidnight ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <div className="bg-[#E4A83F] h-full rounded-full transition-all duration-[1s]" style={{ width: elem.progressWidth.match(/\d+/)?.[0] ? `${elem.progressWidth.match(/\d+/)?.[0]}%` : '80%' }} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-4 rounded-2xl border flex items-start space-x-3 text-xs leading-relaxed text-left theme-transition ${
              isMidnight 
                ? 'bg-orange-950/15 border-orange-900/40' 
                : 'bg-orange-50/50 border-orange-100'
            }`}>
              <Heart className="h-5 w-5 text-[#C25E3A] shrink-0 mt-0.5 fill-current" />
              <div>
                <h4 className={`font-semibold ${isMidnight ? 'text-[#E4A83F]' : 'text-[#C25E3A]'}`}>Host Accolades:</h4>
                <p className={`font-light mt-0.5 ${isMidnight ? 'text-gray-300' : 'text-gray-600'}`}>
                  Guest reviews frequently praise table hosts <strong>Abhishek</strong>, <strong>Shubhash</strong>, and <strong>Gulshan</strong> for their quick, warm tableside hospitality, even during peak sunset reservation slots.
                </p>
              </div>
            </div>
          </div>

          {/* Real Quotes list (Right) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Toggles for quote platform source */}
            <div className={`flex items-center p-1 rounded-xl justify-start max-w-sm theme-transition ${isMidnight ? 'bg-white/[0.03] border border-white/5' : 'bg-gray-100'}`}>
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'google', label: 'Google' },
                { id: 'zomato', label: 'Zomato' },
                { id: 'swiggy', label: 'Swiggy' },
                { id: 'magicpin', label: 'MagicPin' },
              ].map((plat) => (
                <button
                  key={plat.id}
                  onClick={() => setActivePlatform(plat.id)}
                  className={`flex-1 text-center py-2 text-[11px] font-medium rounded-lg transition-all cursor-pointer ${
                    activePlatform === plat.id
                      ? isMidnight
                        ? 'bg-white/10 text-white shadow-sm font-bold'
                        : 'bg-white text-[#1E1D1B] shadow-sm font-bold'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {plat.label}
                </button>
              ))}
            </div>

            {/* Testimonial list */}
            <div className="space-y-4">
              {filteredReviews.map((rev) => (
                <div 
                  key={rev.id}
                  id={`review-${rev.id}`}
                  className={`p-6 rounded-2xl border shadow-sm relative space-y-3 hover:translate-y-[-1px] transition-transform duration-300 select-text text-left theme-transition ${
                    isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-gray-100'
                  }`}
                >
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 ${isMidnight ? 'border-white/5' : 'border-gray-50'}`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#1E1D1B] text-[#E4A83F] font-serif rounded-full flex items-center justify-center font-bold text-sm">
                        {rev.name[0]}
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`}>{rev.name}</h4>
                        <span className="text-[10px] text-gray-450">Verified Diner review</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-yellow-500 space-x-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(rev.rating) ? 'fill-current' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider font-mono">
                        via {rev.source}
                      </span>
                    </div>
                  </div>

                  {/* Quote sentence */}
                  <blockquote className={`font-sans text-sm ${isMidnight ? 'text-gray-300' : 'text-gray-650'} leading-relaxed italic font-light`}>
                    “{rev.quote}”
                  </blockquote>

                  {/* Highlights tag */}
                  {rev.tag && (
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] bg-amber-50 text-[#C25E3A] px-2.5 py-0.5 rounded-full font-semibold border border-amber-200 shadow-sm uppercase tracking-wider">
                        {rev.tag}
                      </span>
                      <span className="text-[10px] text-gray-400 font-light">Reviewed on {rev.date}</span>
                    </div>
                  )}

                  {/* Absolute double quotes element decoration */}
                  <MessageSquare className={`absolute right-4 bottom-4 h-12 w-12 pointer-events-none opacity-20 -z-0 ${isMidnight ? 'text-white/5' : 'text-gray-50'}`} />
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
