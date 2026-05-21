import { useState } from 'react';
import { MapPin, Phone, Clock, ChevronDown, Compass, Info } from 'lucide-react';
import { FAQS } from '../data';

interface ContactProps {
  ambiance?: 'sunset' | 'midnight';
}

export default function Contact({ ambiance = 'sunset' }: ContactProps) {
  const isMidnight = ambiance === 'midnight';
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<string | null>('f1');
  const [faqCategory, setFaqCategory] = useState<string>('all');

  const filteredFaqs = faqCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === faqCategory);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  return (
    <div className={`theme-transition transition-colors duration-500 py-16 sm:py-24 ${isMidnight ? 'bg-[#0E0D0C] text-gray-300' : 'bg-[#FAF8F5] text-[#333333]'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title structure */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#C25E3A] text-xs font-bold tracking-[0.25em] uppercase block">Connect With Us</span>
          <h2 className={`font-serif text-3xl sm:text-4xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-medium tracking-tight`}>Lobby & Reservations Helpdesk</h2>
          <p className="font-sans text-sm text-gray-500 font-light max-w-md mx-auto">
            Find us opposite the Porsche showroom in Chandigarh, or connect directly via our telephone lines.
          </p>
        </div>

        {/* Centered Location & Info Card */}
        <div className="max-w-2xl mx-auto">
          <div className={`p-6 sm:p-10 rounded-[32px] border shadow-[0_8px_30px_rgb(0,0,0,0.01)] space-y-8 theme-transition pb-8 sm:pb-11 ${
            isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-gray-200/60'
          }`}>
            
            <div className={`space-y-1.5 border-b pb-5 text-center ${isMidnight ? 'border-white/5' : 'border-gray-100'}`}>
              <h3 className={`font-serif text-2xl font-light ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`} id="dining-office">Our Location & Hours</h3>
              <p className="text-xs text-gray-400 font-light">Located on the second-floor rooftop terrace of The Fern Residency.</p>
            </div>

            {/* Detail Items */}
            <div className="space-y-8 text-left">
              
              {/* Map/Address */}
              <div className="flex items-start space-x-4 select-text">
                <div className="p-3 bg-[#C25E3A]/10 text-[#C25E3A] rounded-2xl shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold uppercase tracking-wider text-[11px] ${isMidnight ? 'text-[#E4A83F]' : 'text-[#1E1D1B]'}`}>Hotel Address</h4>
                  <address className={`not-italic text-sm ${isMidnight ? 'text-gray-300' : 'text-gray-650'} font-light mt-1.5 leading-relaxed`}>
                    2nd Floor, 2 Purv Marg, <br />
                    Industrial Area Phase II, <br />
                    Chandigarh, 160002, India
                  </address>
                  <a 
                    href="https://maps.app.goo.gl/PoQC2h1ktRRe6qmHA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`mt-3.5 inline-flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded-xl border font-medium transition-colors cursor-pointer ${
                      isMidnight 
                        ? 'bg-orange-950/20 text-[#E4A83F] border-orange-900/40 hover:bg-[#C25E3A] hover:text-white' 
                        : 'bg-[#E4A83F]/10 text-[#C25E3A] hover:bg-[#C25E3A] hover:text-white border border-[#E4A83F]/20'
                    }`}
                  >
                    <Compass className="h-3.5 w-3.5 text-[#E4A83F]" />
                    <span>Opposite Porsche Showroom (View on Google Maps)</span>
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-4 select-text">
                <div className="p-3 bg-[#E4A83F]/10 text-[#E4A83F] rounded-2xl shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold uppercase tracking-wider text-[11px] ${isMidnight ? 'text-[#E4A83F]' : 'text-[#1E1D1B]'}`}>Phone Reservations</h4>
                  <div className="mt-1.5 space-y-1">
                    <p className={`text-sm ${isMidnight ? 'text-gray-300' : 'text-gray-605'} font-light`}>
                      Direct Line: <a href="tel:+919216585140" className="font-semibold text-[#C25E3A] hover:underline">+91 92165 85140</a>
                    </p>
                    <p className="text-xs text-gray-500 font-light">
                      Hotel Desk: <a href="tel:01725043333" className="hover:underline">0172-5043-333</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-4 select-text">
                <div className="p-3 bg-[#C25E3A]/10 text-[#C25E3A] rounded-2xl shrink-0 mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold uppercase tracking-wider text-[11px] ${isMidnight ? 'text-[#E4A83F]' : 'text-[#1E1D1B]'}`}>Dining Hours</h4>
                  <p className={`text-sm ${isMidnight ? 'text-gray-300' : 'text-gray-605'} font-light mt-1.5`}>
                    Open Daily: <strong className={`font-semibold ${isMidnight ? 'text-[#E4A83F]' : 'text-[#1E1D1B]'}`}>11:00 AM – 11:00 PM</strong>
                  </p>
                  <p className="text-[10px] text-gray-400 font-light font-mono uppercase mt-1">
                    (Timings are identical on Sundays & Public holidays)
                  </p>
                </div>
              </div>

            </div>

            {/* Mini Transit tips */}
            <div className={`p-5 rounded-2xl border space-y-1.5 pt-4 text-left theme-transition ${
              isMidnight 
                ? 'bg-orange-950/20 border-orange-900/30 text-gray-300' 
                : 'bg-amber-50/50 border-amber-100/50'
            }`}>
              <h5 className={`text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5 ${isMidnight ? 'text-[#E4A83F]' : 'text-amber-800'}`}>
                <Info className="h-3.5 w-3.5" />
                <span>Parking & Accessibility Status</span>
              </h5>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Complementary secured space is provided under hotel surveillance. Dedicated lobby elevators provide quick wheelchair-accessible pathways to the rooftop garden terrace on the second floor.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Section: Interactive accordion for Frequently Asked Questions */}
        <div className={`space-y-8 p-6 sm:p-10 rounded-3xl border shadow-sm max-w-3xl mx-auto theme-transition ${
          isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-gray-200'
        }`}>
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className={`font-serif text-2xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-light`}>Frequently Asked Questions</h3>
            <p className="text-xs text-gray-500 font-light">Explore billing policies, accessibility information, and reservation parameters.</p>
          </div>

          {/* FAQ categories controls */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'general', label: 'General & Parking' },
              { id: 'reservations', label: 'Booking & Parties' },
              { id: 'food', label: 'Menu & Customizations' },
              { id: 'billing', label: 'Billing & Pricing' }
            ].map((col) => (
              <button
                key={col.id}
                onClick={() => setFaqCategory(col.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  faqCategory === col.id
                    ? 'bg-[#E4A83F]/10 text-[#C25E3A] border border-[#C25E3A]/30 font-bold shadow-sm'
                    : isMidnight
                    ? 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-500 border border-gray-100'
                }`}
              >
                {col.label}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="space-y-3 text-left">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  id={`faq-${faq.id}`}
                  className={`rounded-2xl border overflow-hidden theme-transition ${
                    isMidnight ? 'bg-[#1A1817] border-white/5' : 'bg-gray-50/50 border-gray-150'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-label={`Toggle FAQ: ${faq.question}`}
                    id={`faq-toggle-${faq.id}`}
                    className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif font-medium text-sm sm:text-base focus:outline-none transition-colors cursor-pointer ${
                      isMidnight ? 'text-white hover:bg-[#201E1D]' : 'text-[#1E1D1B] hover:bg-gray-50'
                    }`}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronDown className="h-4 w-4 text-[#C25E3A] shrink-0 rotate-180 transition-transform duration-200" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200" />}
                  </button>

                  {isOpen && (
                    <div className={`px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed font-light border-t border-gray-100/40 font-sans select-text ${
                      isMidnight ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
