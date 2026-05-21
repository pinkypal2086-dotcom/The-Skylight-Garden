import { Sparkles, Clock, Calendar, MessageSquare, ExternalLink } from 'lucide-react';

interface ReservationsProps {
  preplannedGuests?: number;
  preplannedNotes?: string;
  clearPreplanned: () => void;
  ambiance?: 'sunset' | 'midnight';
}

export default function Reservations({ preplannedGuests, preplannedNotes, clearPreplanned, ambiance = 'sunset' }: ReservationsProps) {
  const isMidnight = ambiance === 'midnight';
  const whatsappNumber = "+919216585140";
  const displayPhone = "+91 92165 85140";
  const googleReserveUrl = "https://www.google.com/maps/reserve/v/dine/c/xp2mr6cQggk?source=pa&opi=89978449&hl=en-IN&gei=XssOaq_gE-WY4-EPhfqfuAI&sourceurl=https://www.google.com/search?gs_ssp%3DeJzj4tVP1zc0TKqsSIuPL0gzYLRSNagwtjRIS01OTTQ1STFKMTOxtDKoSDNJSUlOSTJPSzIzSTU1MfISLslIVSjOrszJTM8oUUhPLEpJzQMAZz4X7g%26q%3Dthe%2Bskylight%2Bgarden%26oq%3Dthe%2Bsky%26gs_lcrp%3DEgZjaHJvbWUqEggBEC4YQxivARjHARiABBiKBTIPCAAQABhDGOMCGIAEGIoFMhIIARAuGEMYrwEYxwEYgAQYigUyBggCEEUYOTINCAMQLhivARjHARiABDIMCAQQABhDGIAEGIoFMgcIBRAAGIAEMgcIBhAuGIAEMg0IBxAuGK8BGMcBGIAEMg0ICBAuGK8BGMcBGIAEMgcICRAAGIAE0gEJOTA4MGowajE1qAIIsAIB8QWuA_lyyDpA-_EFrgP5csg6QPs%26sourceid%3Dchrome%26ie%3DUTF-8";

  // Create customized WhatsApp message based on presence of preplanned cost estimation data
  let defaultMessage = "Hello! I would like to book a table reservation at The Skylight Garden, Chandigarh.";
  if (preplannedNotes) {
    const guestInfo = preplannedGuests ? ` for ${preplannedGuests} guests` : "";
    defaultMessage = `Hello! I would like to book a table reservation at The Skylight Garden${guestInfo}.\n\nPlanned Meal Menu Selection:\n${preplannedNotes}`;
  }

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/919216585140?text=${encodedMessage}`;

  return (
    <div className={`theme-transition transition-colors duration-500 py-16 sm:py-24 flex flex-col justify-center ${isMidnight ? 'bg-[#0E0D0C] text-gray-300' : 'bg-[#FAF8F5] text-[#333333]'}`}>
      <div className="max-w-2xl mx-auto px-4 w-full">
        
        {/* Core Reservation card */}
        <div id="whatsapp-reservation-card" className={`rounded-[32px] p-8 sm:p-12 border shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-8 text-center relative overflow-hidden theme-transition ${isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-[#C25E3A]/10'}`}>
          
          {/* Subtle Decorative Backdrop Element */}
          <div className="absolute -right-24 -top-24 w-48 h-48 bg-[#C25E3A]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-[#E4A83F]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Icons Header */}
          <div className="flex justify-center space-x-3">
            <div className="h-14 w-14 bg-[#4285F4]/10 text-[#4285F4] rounded-full flex items-center justify-center border border-[#4285F4]/20 shadow-[0_4px_12px_rgba(66,133,244,0.1)]">
              <span className="font-bold text-lg font-serif">G</span>
            </div>
            <div className="h-14 w-14 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center border border-[#25D366]/20 shadow-[0_4px_12px_rgba(37,211,102,0.1)]">
              <svg 
                className="h-6 w-6 fill-current" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.004 2C6.48 2 2 6.48 2 12c0 1.762.463 3.417 1.277 4.856L2 22l5.302-1.39A9.953 9.953 0 0012.004 22c5.523 0 10-4.48 10-10s-4.477-10-10-10zm0 1.833c4.514 0 8.167 3.653 8.167 8.167 0 4.514-3.653 8.167-8.167 8.167a8.125 8.125 0 01-4.225-1.18l-.304-.18-3.138.822.836-3.056-.197-.314A8.13 8.13 0 013.837 12c0-4.514 3.653-8.167 8.167-8.167zm-3.64 3.633c-.15 0-.395.056-.602.28-.207.225-.79.77-.79 1.878 0 1.107.807 2.176.919 2.326.113.15 1.556 2.376 3.77 3.333 1.841.795 2.217.637 2.612.6.395-.038 1.278-.52 1.458-1.02.181-.5.181-.933.128-1.02-.053-.088-.196-.138-.415-.248-.219-.11-1.278-.63-1.478-.7-.2-.072-.346-.11-.497.114-.15.226-.583.73-.715.88-.13.15-.262.169-.481.06a6.068 6.068 0 01-1.785-1.102 6.69 6.69 0 01-1.233-1.536c-.219-.376-.023-.58.174-.775.177-.175.395-.46.594-.69.199-.23.265-.395.398-.658.13-.263.066-.493-.033-.693-.1-.2-.88-2.12-.113-2.658-.331-.3-.66-.431-.9-.451zm0 0" />
              </svg>
            </div>
          </div>

          {/* Heading context */}
          <div className="space-y-3 font-sans">
            <span className="text-[#C25E3A] text-xs font-bold tracking-[0.25em] uppercase block">
              Table Reservations
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-light leading-tight`}>
              Select Your Booking Method
            </h2>
            <p className={`text-sm ${isMidnight ? 'text-gray-400' : 'text-gray-500'} font-light max-w-sm mx-auto leading-relaxed`}>
              We offer two simple, direct ways to book your table. Choose the one that works best for you.
            </p>
          </div>

          {/* Cost Plan Injection Feature integration if they configured items in estimator */}
          {preplannedNotes && (
            <div id="meal-selection-recap" className={`border p-5 rounded-2xl text-left space-y-2 animate-fade-in ${
              isMidnight 
                ? 'bg-orange-950/20 border-orange-900/30 text-[#FAF8F5]' 
                : 'bg-[#E4A83F]/10 border-[#E4A83F]/25 text-[#333333]'
            }`}>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-[#E4A83F]" />
                <h4 className="text-xs font-bold text-[#E4A83F] uppercase tracking-wider">
                  Dishes details loaded
                </h4>
              </div>
              <p className={`text-xs ${isMidnight ? 'text-gray-300' : 'text-[#333333]'} leading-relaxed font-light select-text`}>
                Your pre-budgeted custom food selection list is active. If you select the WhatsApp option, we will automatically attach these dishes to your chat!
              </p>
              <div className={`text-[11px] p-3 rounded-xl border font-mono max-h-24 overflow-y-auto leading-normal select-text ${
                isMidnight 
                  ? 'bg-white/[0.02] border-white/10 text-gray-300' 
                  : 'bg-white/70 border-[#E4A83F]/15 text-gray-500'
              }`}>
                {preplannedNotes}
              </div>
              <button 
                id="clear-meal-selection"
                onClick={clearPreplanned}
                className="text-[10px] text-red-600 underline font-medium hover:text-red-800 transition-colors block cursor-pointer"
              >
                Clear food selection & book default table
              </button>
            </div>
          )}

          {/* Two Primary Action Triggers */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 pt-2">
            
            {/* Google Reserve Button */}
            <a
              href={googleReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="google-reserve-cta"
              className={`inline-flex items-center justify-center space-x-3 px-6 py-4 font-sans font-semibold rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex-1 cursor-pointer ${
                isMidnight 
                  ? 'bg-gradient-to-r from-[#C25E3A] to-[#E4A83F] text-white hover:opacity-90' 
                  : 'bg-[#1E1D1B] text-white hover:bg-[#C25E3A]'
              }`}
            >
              <ExternalLink className="h-4.5 w-4.5 shrink-0 text-[#E4A83F]" />
              <span>Reserve via Google</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-reserve-cta"
              className="inline-flex items-center justify-center space-x-3 px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] active:bg-[#075E54] text-white font-sans font-semibold rounded-2xl shadow-[0_4px_16px_rgba(37,211,102,0.1)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.2)] hover:-translate-y-0.5 transition-all duration-200 flex-1 cursor-pointer"
            >
              <MessageSquare className="h-4.5 w-4.5 shrink-0" />
              <span>Connect on WhatsApp</span>
            </a>

          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-400 select-text font-light">
              Prefer calling? Connect with the host: <a href={`tel:${whatsappNumber}`} className="text-[#C25E3A] hover:underline font-medium">{displayPhone}</a>
            </p>
          </div>

          {/* Meta guidelines - clean design guidelines */}
          <div className={`border-t pt-6 grid grid-cols-2 gap-4 text-left ${isMidnight ? 'border-white/5' : 'border-gray-100'}`}>
            <div className="flex items-start space-x-2 px-2">
              <Clock className="h-4 w-4 text-[#C25E3A] shrink-0 mt-0.5" />
              <div>
                <span className={`text-xs font-semibold block ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`}>Response Time</span>
                <span className={`text-[11px] block font-light ${isMidnight ? 'text-gray-400' : 'text-gray-500'}`}>Instant or under 5 mins</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-2 px-2">
              <Calendar className="h-4 w-4 text-[#C25E3A] shrink-0 mt-0.5" />
              <div>
                <span className={`text-xs font-semibold block ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`}>Available Slots</span>
                <span className={`text-[11px] block font-light ${isMidnight ? 'text-gray-400' : 'text-gray-500'}`}>Daily 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
