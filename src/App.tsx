import { useState, useTransition } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ActiveTab } from './types';
import { Compass, Phone, Clock, Star, Instagram, Flame, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isPending, startTransition] = useTransition();
  const [ambiance, setAmbiance] = useState<'sunset' | 'midnight'>('sunset');

  // State to bridge Meal Cost Estimator selections directly into Reservations
  const [preplannedGuests, setPreplannedGuests] = useState<number | undefined>(undefined);
  const [preplannedNotes, setPreplannedNotes] = useState<string | undefined>(undefined);

  const handlePlanReservation = (guestsCount: number, notesText: string) => {
    setPreplannedGuests(guestsCount);
    setPreplannedNotes(notesText);
    startTransition(() => {
      setActiveTab('reservations');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearPreplanned = () => {
    setPreplannedGuests(undefined);
    setPreplannedNotes(undefined);
  };

  const changeTab = (tab: ActiveTab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div className={`min-h-screen flex flex-col theme-transition ${ambiance === 'sunset' ? 'bg-[#FAF8F5] text-[#32302E]' : 'bg-[#0F0D0C] text-gray-300'} selection:bg-[#C25E3A] selection:text-white`}>
      
      {/* Upper Promotional Alert Banner */}
      <div 
        id="top-discount-banner" 
        className="bg-[#C25E3A] text-[#FAF8F5] py-2.5 px-4 text-center text-[11px] sm:text-xs font-medium tracking-wider flex items-center justify-center space-x-2 select-none border-b border-[#FAF8F5]/10"
      >
        <span className="bg-white/15 px-2 py-0.5 rounded uppercase font-bold text-[9px] animate-pulse">Prebook Deal</span>
        <span className="font-light">Get up to <strong className="font-bold text-white">15% off</strong> dining slots when preordering via phone – mention code <strong className="font-bold text-[#E4A83F]">SKYLIGHT15</strong></span>
      </div>

      {/* Main sticky navigation bar with ambiance controller */}
      <Navbar activeTab={activeTab} setActiveTab={changeTab} ambiance={ambiance} setAmbiance={setAmbiance} />

      {/* Primary views section router with simple transition opacity class */}
      <main id="main-content-flow" className={`flex-grow transition-opacity duration-300 ${isPending ? 'opacity-40' : 'opacity-100'}`}>
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={changeTab} ambiance={ambiance} />
            <About ambiance={ambiance} />
            <Menu onPlanReservation={handlePlanReservation} ambiance={ambiance} />
            <Testimonials ambiance={ambiance} />
            <Contact ambiance={ambiance} />
          </>
        )}
        {activeTab === 'about' && <About ambiance={ambiance} />}
        {activeTab === 'menu' && <Menu onPlanReservation={handlePlanReservation} ambiance={ambiance} />}
        {activeTab === 'reservations' && (
          <Reservations 
            preplannedGuests={preplannedGuests} 
            preplannedNotes={preplannedNotes}
            clearPreplanned={handleClearPreplanned}
            ambiance={ambiance}
          />
        )}
        {activeTab === 'gallery' && <Gallery ambiance={ambiance} />}
        {activeTab === 'testimonials' && <Testimonials ambiance={ambiance} />}
        {activeTab === 'contact' && <Contact ambiance={ambiance} />}
      </main>

      {/* Premium Footer Segment */}
      <footer id="skylight-footer" className="bg-[#1E1D1B] text-white border-t border-[#C25E3A]/20 pt-16 pb-8 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Brand description details */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-[#C25E3A] rounded-lg">
                  <Compass className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-serif font-semibold text-base tracking-wider block">
                    THE SKYLIGHT GARDEN
                  </span>
                  <span className="font-sans font-medium text-[10px] text-[#E4A83F] tracking-[0.25em] uppercase block">
                    Rooftop Restaurant & Bar
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-gray-400 leading-relaxed font-light select-text">
                Nestled on the scenic 2nd Floor of The Fern Residency (opposite Porsche Showroom), we curate Chandigarh's ultimate fine-dining open terrace experience, blending North Indian heritage with modern gastronomy.
              </p>

              {/* Verified Badge info */}
              <div className="flex items-center space-x-2 text-[10px] text-[#E4A83F] bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 inline-block pointer-events-none">
                <Star className="h-3 w-3 fill-current" />
                <span>Verified 4.6 ★ Restaurant on Swiggy and Swiggy Pay</span>
              </div>
            </div>

            {/* Column 2: Quick Slugs Links */}
            <div className="md:col-span-2 space-y-3.5">
              <h4 className="text-xs uppercase font-bold text-[#E4A83F] tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'Our Story' },
                  { id: 'menu', label: 'The Menu' },
                  { id: 'reservations', label: 'Reservations' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'testimonials', label: 'Diner Reviews' },
                  { id: 'contact', label: 'Contact Us' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id as ActiveTab);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors duration-250 text-left focus:outline-none"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact quick desk detail */}
            <div className="md:col-span-3 space-y-3.5 select-text">
              <h4 className="text-xs uppercase font-bold text-[#E4A83F] tracking-widest">Reservation Desk</h4>
              <div className="space-y-3 text-xs text-gray-400">
                <p className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 text-[#C25E3A] shrink-0 mt-0.5" />
                  <span>
                    Primary: <a href="tel:+919216585140" className="text-white font-medium hover:underline">+91 92165 85140</a> <br />
                    Lobby Line: <a href="tel:01725043333" className="hover:underline">0172-5043-333</a>
                  </span>
                </p>
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-[#C25E3A] shrink-0 mt-0.5" />
                  <span>
                    Daily Hours: <br />
                    <span className="text-white font-medium">11:00 AM – 11:00 PM</span> <br />
                    <span className="text-[10px] uppercase text-gray-500 font-mono">No holiday closures</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Column 4: Social, Landmark and Accessibility reminders */}
            <div className="md:col-span-3 space-y-3.5 select-text">
              <h4 className="text-xs uppercase font-bold text-[#E4A83F] tracking-widest">Connect & Follow</h4>
              
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href="https://www.instagram.com/skylightchandigarh/"
                  id="footer-social-insta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="p-2.5 bg-white/5 rounded-xl hover:bg-[#C25E3A] hover:text-white transition-all text-gray-300"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>

                <a
                  href="https://www.zomato.com/chandigarh/the-skylight-garden-chandigarh-industrial-area"
                  id="footer-zomato-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Order on Zomato"
                  className="text-[10px] uppercase font-bold tracking-wider px-3 py-2.5 bg-white/5 hover:bg-[#E23744] hover:text-white rounded-xl transition-all border border-white/5 text-gray-300"
                >
                  Zomato
                </a>

                <a
                  href="https://www.swiggy.com/restaurants/the-skylight-garden-industrial-area-phase-2-chandigarh-606241/dineout"
                  id="footer-swiggy-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Order on Swiggy"
                  className="text-[10px] uppercase font-bold tracking-wider px-3 py-2.5 bg-white/5 hover:bg-[#FC8019] hover:text-white rounded-xl transition-all border border-white/5 text-gray-300"
                >
                  Swiggy
                </a>
              </div>

              <div className="space-y-2 text-xs pt-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase block tracking-wider">Timing & Landmark:</span>
                <p className="text-gray-400 font-light text-[11px] leading-tight">
                  Adjacent to the main Purv Marg highway corridors, opposite the prominent Porsche Showroom in Chandigarh Industrial Area Phase II.
                </p>
                <a 
                  href="https://maps.app.goo.gl/PoQC2h1ktRRe6qmHA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E4A83F] hover:text-white hover:underline text-[11px] font-medium inline-flex items-center space-x-1 mt-1 transition-colors"
                >
                  <span>📍 Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Sub bottom divider: Legal, copyright, disclaimers */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
            <div className="space-y-1 text-center md:text-left select-text">
              <p>© 2026 The Skylight Garden. All rights reserved. Managed under hotel hospitality rules.</p>
              <p className="text-[10px] text-gray-600 leading-normal font-light">
                Disclaimer: Menu selection items, pricing aggregates (₹800–2,700 for two), and service timings are subject to seasonal revisions. Wheelchair-accessible elevators and ramps are maintained by The Fern Residency lobby team.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 shrink-0 pointer-events-none">
              <span className="inline-flex items-center space-x-1 uppercase text-[9px] tracking-widest bg-white/5 text-gray-400 px-2 py-1 rounded">
                <Flame className="h-3 w-3 text-orange-500 fill-current" />
                <span>Fine-Dining</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium">Place ID (ChIJSdbSVOrsDzkRQuVk-7fN3fQ)</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
