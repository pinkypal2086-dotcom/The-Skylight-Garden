import { useState } from 'react';
import { Menu, X, Phone, Compass, Sparkles, ShoppingBag, ExternalLink } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  ambiance: 'sunset' | 'midnight';
  setAmbiance: (ambiance: 'sunset' | 'midnight') => void;
}

export default function Navbar({ activeTab, setActiveTab, ambiance, setAmbiance }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'menu', label: 'The Menu' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1E1D1B] border-b border-[#C25E3A]/20 shadow-lg select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand / Title */}
          <div 
            className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            <div className="p-2 sm:p-2.5 bg-[#C25E3A] rounded-lg transition-transform duration-300 group-hover:rotate-12">
              <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <span className="font-serif font-semibold text-sm sm:text-lg tracking-wider text-white block">
                THE SKYLIGHT
              </span>
              <span className="font-sans font-medium text-[9px] sm:text-xs text-[#E4A83F] tracking-[0.15em] sm:tracking-[0.25em] block uppercase whitespace-nowrap">
                Garden • Chandigarh
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-sans font-medium tracking-wide rounded-md transition-all duration-300 ${
                    isActive
                      ? 'text-[#E4A83F] bg-white/5 border border-[#E4A83F]/20'
                      : 'text-[#FAF8F5]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Quick Actions (Visible only on screens < md) */}
          <div className="flex md:hidden items-center space-x-1.5 sm:space-x-2">
            {/* Ambient Lighting Switcher Button for Mobile */}
            <button
              onClick={() => setAmbiance(ambiance === 'sunset' ? 'midnight' : 'sunset')}
              id="mobile-nav-ambient-switch"
              className="p-1.5 sm:p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-white cursor-pointer"
              title="Toggle Rooftop Lighting Atmosphere"
            >
              {ambiance === 'sunset' ? (
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                </span>
              ) : (
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
                </span>
              )}
            </button>

            {/* Quick Delivery Shortcuts for Mobile */}
            <div className="flex items-center space-x-1 bg-white/5 border border-white/10 p-0.5 rounded-lg">
              <a
                href="https://www.zomato.com/chandigarh/the-skylight-garden-chandigarh-industrial-area"
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-quick-zomato"
                className="w-5 h-5 flex items-center justify-center rounded bg-[#E23744] hover:bg-[#cb202d] text-[9px] font-extrabold text-white transition-all uppercase"
                title="Google Zomato Delivery"
              >
                Z
              </a>
              <a
                href="https://www.swiggy.com/restaurants/the-skylight-garden-industrial-area-phase-2-chandigarh-606241/dineout"
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-quick-swiggy"
                className="w-5 h-5 flex items-center justify-center rounded bg-[#FC8019] hover:bg-[#e46d0a] text-[9px] font-extrabold text-white transition-all uppercase"
                title="Google Swiggy Delivery"
              >
                S
              </a>
            </div>

            {/* Phone Quick Call */}
            <a
              href="tel:+919216585140"
              id="mobile-nav-quick-call"
              className="p-1.5 sm:p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all cursor-pointer"
              title="Call Restaurant Desk"
            >
              <Phone className="h-3.5 w-3.5 text-[#E4A83F]" />
            </a>

            {/* Quick Reservation button */}
            <button
              onClick={() => handleNavClick('reservations')}
              id="mobile-nav-quick-reserve"
              className="px-2.5 py-1.5 bg-[#C25E3A] hover:bg-[#E4A83F] font-sans font-semibold text-[10px] sm:text-xs text-white rounded-lg transition-all border border-[#C25E3A] cursor-pointer flex items-center space-x-1"
            >
              <Sparkles className="h-3 w-3 text-[#E4A83F]" />
              <span>Book</span>
            </button>
          </div>

          {/* Call Reservation CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Ambiance switch button */}
            <button
              onClick={() => setAmbiance(ambiance === 'sunset' ? 'midnight' : 'sunset')}
              id="desktop-ambiance-switcher"
              className="flex items-center space-x-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 text-xs text-white/90 select-none cursor-pointer hover:border-[#E4A83F]/30"
              title="Toggle Rooftop Lighting Atmosphere"
            >
              {ambiance === 'sunset' ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)] animate-pulse inline-block" />
                  <span className="font-sans font-medium text-[11px] tracking-wide">Sunset Theme</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.9)] animate-pulse inline-block" />
                  <span className="font-sans font-medium text-[11px] tracking-wide text-[#E4A83F]">Starry Night</span>
                </>
              )}
            </button>

            <div className="flex items-center space-x-2 border border-white/10 bg-white/5 p-1 rounded-xl">
              <a
                href="https://www.zomato.com/chandigarh/the-skylight-garden-chandigarh-industrial-area"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-nav-order-zomato"
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#E23744] hover:bg-[#cb202d] text-white transition-all"
              >
                <ShoppingBag className="h-3 w-3" />
                <span>Zomato</span>
              </a>
              <a
                href="https://www.swiggy.com/restaurants/the-skylight-garden-industrial-area-phase-2-chandigarh-606241/dineout"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-nav-order-swiggy"
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#FC8019] hover:bg-[#e46d0a] text-white transition-all"
              >
                <ShoppingBag className="h-3 w-3" />
                <span>Swiggy</span>
              </a>
            </div>
            <a
              href="tel:+919216585140"
              id="cta-nav-call"
              className="flex items-center space-x-2 text-sm font-medium text-[#FAF8F5]/80 hover:text-white transition-colors py-2 px-3 hover:bg-white/5 rounded-lg"
            >
              <Phone className="h-4 w-4 text-[#E4A83F]" />
              <span>+91 92165 85140</span>
            </a>
            <button
              onClick={() => handleNavClick('reservations')}
              id="cta-nav-reserve"
              className="relative px-5 py-2.5 text-sm font-medium text-white bg-[#C25E3A] rounded-lg overflow-hidden group shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-[#C25E3A]"
            >
              <span className="relative z-10 flex items-center space-x-1">
                <Sparkles className="h-3.5 w-3.5 text-[#E4A83F]" />
                <span>Reserve a Table</span>
              </span>
              <div className="absolute inset-0 bg-[#E4A83F] translate-y-full transition-transform duration-300 group-hover:translate-y-0 -z-0" />
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-nav-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 text-[#FAF8F5] hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#1E1D1B] border-t border-[#C25E3A]/10 animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-[#E4A83F] bg-white/5 pl-6 border-l-4 border-[#C25E3A]'
                      : 'text-[#FAF8F5]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Mobile Ambiance Switcher */}
            <div className="mx-4 my-3 px-3 py-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400">Rooftop Ambiance</span>
              <button
                onClick={() => setAmbiance(ambiance === 'sunset' ? 'midnight' : 'sunset')}
                id="mobile-ambiance-switcher"
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-xs text-white"
              >
                {ambiance === 'sunset' ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)] animate-pulse inline-block" />
                    <span className="font-sans font-semibold text-[10px]">Sunset Theme</span>
                  </>
                ) : (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)] animate-pulse inline-block" />
                    <span className="font-sans font-semibold text-[10px] text-[#E4A83F]">Starry Night</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-4 pb-2 px-4 border-t border-white/5 flex flex-col space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.zomato.com/chandigarh/the-skylight-garden-chandigarh-industrial-area"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-nav-order-zomato"
                  className="flex items-center justify-center space-x-1.5 py-2.5 bg-[#E23744] active:bg-[#cb202d] text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>Order Zomato</span>
                </a>
                <a
                  href="https://www.swiggy.com/restaurants/the-skylight-garden-industrial-area-phase-2-chandigarh-606241/dineout"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-nav-order-swiggy"
                  className="flex items-center justify-center space-x-1.5 py-2.5 bg-[#FC8019] active:bg-[#e46d0a] text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>Order Swiggy</span>
                </a>
              </div>
              <a
                href="tel:+919216585140"
                id="mobile-nav-call"
                className="flex items-center justify-center space-x-2 py-3 border border-[#E4A83F]/30 rounded-lg text-[#E4A83F] text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Call Restaurant: +91 92 1658 5140</span>
              </a>
              <button
                onClick={() => handleNavClick('reservations')}
                id="mobile-nav-reserve"
                className="w-full py-3 bg-[#C25E3A] text-white text-sm font-medium rounded-lg shadow-md flex items-center justify-center space-x-2"
              >
                <Sparkles className="h-4 w-4 text-[#E4A83F]" />
                <span>Book Rooftop Table</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
