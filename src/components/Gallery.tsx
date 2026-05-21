import { useState } from 'react';
import { Camera, ChevronRight, ChevronLeft, X, Sparkles, Compass, ExternalLink } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

interface GalleryProps {
  ambiance?: 'sunset' | 'midnight';
}

export default function Gallery({ ambiance = 'sunset' }: GalleryProps) {
  const isMidnight = ambiance === 'midnight';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  // Filter lists
  const filteredImages = GALLERY_IMAGES.filter((img) => {
    return activeCategory === 'all' || img.category === activeCategory;
  });

  const handleOpenLightbox = (imgId: string) => {
    const originalIndex = GALLERY_IMAGES.findIndex((x) => x.id === imgId);
    if (originalIndex !== -1) {
      setLightboxImageIndex(originalIndex);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxImageIndex(null);
  };

  const handleNextImage = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((prev) => (prev! + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrevImage = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <div className={`theme-transition transition-colors duration-500 py-20 sm:py-28 relative overflow-hidden ${isMidnight ? 'bg-[#0E0D0C] text-gray-300' : 'bg-[#FAF8F5] text-[#333333]'}`}>
      
      {/* Decorative vector backdrops */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(228,168,63,0.035)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(194,94,58,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10 animate-fade-in">
        
        {/* Title sections */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#C25E3A] text-xs font-bold tracking-[0.25em] uppercase block">Visual Journey</span>
          <h2 className={`font-serif text-4xl sm:text-5xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-light leading-tight tracking-tight`}>Experience The Ambience</h2>
          <div className="h-[1px] w-12 bg-[#C25E3A]/40 mx-auto my-3" />
          <p className={`font-sans text-sm sm:text-base ${isMidnight ? 'text-gray-400' : 'text-gray-500'} font-light leading-relaxed`}>
            Take a visual tour through our romantic open-air layout, copper-lit indoor bar lounge, private DJ events, and masterfully dressed foods.
          </p>
        </div>

        {/* Categories togglers in custom high-end Segmented layout */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto pb-4">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'ambiance', label: 'Ambiance & Views' },
            { id: 'dishes', label: 'Signature Dishes' },
            { id: 'drinks', label: 'Mocktails & Spirits' },
            { id: 'events', label: 'Private Gatherings' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-sans font-semibold tracking-wider rounded-xl transition-all duration-300 uppercase shadow-[inset_0_1px_rgba(255,255,255,0.4)] cursor-pointer ${
                activeCategory === cat.id
                  ? isMidnight
                    ? 'bg-gradient-to-r from-[#C25E3A] to-[#E4A83F] text-white shadow-md scale-102 border border-transparent font-bold'
                    : 'bg-[#1E1D1B] text-[#E4A83F] shadow-md scale-102 border border-transparent'
                  : isMidnight
                  ? 'bg-white/[0.03] text-gray-400 hover:bg-white/5 hover:text-white border border-white/5'
                  : 'bg-white hover:bg-gray-50 text-gray-600 border border-orange-100/40 hover:border-orange-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Beautiful Polaroid-Boutique Style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              id={`gallery-item-${image.id}`}
              onClick={() => handleOpenLightbox(image.id)}
              className={`p-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.015)] cursor-pointer group hover:shadow-[0_12px_30px_rgba(194,94,58,0.05)] hover:-translate-y-1 transition-all duration-300 overflow-hidden theme-transition ${
                isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-orange-100/30'
              }`}
            >
              <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-50">
                <img
                  src={image.src}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating Glass tag */}
                <div className="absolute top-3 left-3 bg-[#11100F]/80 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] text-[#E4A83F] tracking-widest font-bold uppercase border border-white/5">
                  {image.category === 'ambiance' ? 'Ambience' : image.category === 'dishes' ? 'Cuisine' : image.category === 'drinks' ? 'Bar Menu' : 'Events'}
                </div>

                {/* Elegant Tint Hover overlay */}
                <div className="absolute inset-0 bg-[#C25E3A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="p-3 bg-white text-[#C25E3A] rounded-full scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <Camera className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Caption and meta with beautiful margins and typography */}
              <div className="pt-4 pb-2 px-1 space-y-1 text-left">
                <p className={`text-xs sm:text-sm font-sans ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} leading-snug font-medium select-text truncate`}>
                  {image.caption}
                </p>
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <span className="font-light italic">The Skylight Garden</span>
                  <span className="text-[#C25E3A] font-bold uppercase tracking-wider">Chandigarh</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Immersive 360° Virtual Walkthrough Section */}
        <div className={`mt-24 pt-16 border-t ${isMidnight ? 'border-white/5' : 'border-orange-100/40'}`}>
          <div className={`rounded-3xl overflow-hidden border shadow-[0_12px_45px_rgba(194,94,58,0.035)] grid grid-cols-1 lg:grid-cols-12 gap-0 theme-transition ${
            isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-orange-100/30'
          }`}>
            {/* Interactive Virtual Viewport */}
            <div className="lg:col-span-8 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto w-full min-h-[380px] sm:min-h-[460px] relative bg-[#1E1D1B] overflow-hidden">
              {/* Responsive Iframe embedding the actual 360 Google street view photo sphere */}
              <iframe
                title="Google Street View 360 Photosphere - The Skylight Garden"
                src="https://www.google.com/maps/embed?pb=!4v1716301234567!6m8!1s3MPdN6Zw5SfohmYpjY3f1A!2i320!3i120"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Floating Status / Interactive indicator with glowing overlay */}
              <div className="absolute top-4 left-4 bg-[#1E1D1B]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[9.5px] text-[#E4A83F] tracking-widest font-bold uppercase flex items-center gap-1.5 shadow-lg select-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live 360° Interactive View
              </div>
            </div>

            {/* Information Control Panel */}
            <div className={`lg:col-span-4 p-8 sm:p-10 flex flex-col justify-center space-y-6 text-left theme-transition ${
              isMidnight 
                ? 'bg-gradient-to-br from-[#181615] to-[#121110]' 
                : 'bg-gradient-to-br from-white via-white to-orange-50/15'
            }`}>
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${
                  isMidnight 
                    ? 'bg-orange-950/20 text-[#E4A83F] border border-orange-900/40' 
                    : 'bg-orange-50 border border-orange-100 text-[#C25E3A]'
                }`}>
                  <Compass className="h-3.5 w-3.5 text-[#E4A83F]" />
                  Virtual Walkthrough
                </div>
                <h3 className={`font-serif text-2xl sm:text-3xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-light leading-tight tracking-tight`}>
                  Stroll Around <br />
                  <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#C25E3A] to-[#E4A83F]">The Garden</span>
                </h3>
              </div>

              <div className={`space-y-4 text-sm ${isMidnight ? 'text-gray-400' : 'text-gray-500'} font-light leading-relaxed select-text`}>
                <p>
                  Step directly onto our beautiful botanical rooftop terrace in Chandigarh. Drag your screen to spin the panorama, pinch or scroll to zoom, and explore our meticulously designed open-air layout.
                </p>
                <p>
                  Take in the warm, ambient light strings, elegant timber pergolas, and cozy table setups that make every evening at <strong className={`font-medium ${isMidnight ? 'text-[#FAF8F5]' : 'text-gray-850'}`}>The Skylight Garden</strong> feel truly magical.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/local/place/fid/0x390fecea54d2d649:0xf4ddcdb7fb64e542/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3D3MPdN6Zw5SfohmYpjY3f1A%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D320.52792%26pitch%3D0%26thumbfov%3D100&ik=CAISFjNNUGRONlp3NVNmb2htWXBqWTNmMUE%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-sans font-semibold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-md group ${
                    isMidnight ? 'bg-[#1E1D1B] hover:bg-[#2A2928] hover:text-[#E4A83F] text-white border border-white/5' : 'bg-[#1E1D1B] text-white hover:bg-[#33312E] hover:text-[#E4A83F]'
                  }`}
                >
                  <span>Open Fullscreen 3D</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal overlay - High contrast gorgeous layout */}
        {lightboxImageIndex !== null && (
          <div className="fixed inset-0 bg-[#0F0E0D]/95 z-50 flex flex-col justify-between p-4 sm:p-6 animate-fade-in select-none">
            {/* Header controls with luxury borders */}
            <div className="flex items-center justify-between text-white py-2 border-b border-white/10 max-w-7xl mx-auto w-full">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4.5 w-4.5 text-[#E4A83F]" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
                  Photo View ({lightboxImageIndex + 1} of {GALLERY_IMAGES.length})
                </span>
              </div>
              <button
                onClick={handleCloseLightbox}
                id="close-lightbox"
                className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none border border-white/5 bg-white/5 cursor-pointer"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Core Image Viewer with navigation triggers */}
            <div className="flex-1 flex items-center justify-center relative max-w-5xl mx-auto w-full group/lightbox">
              {/* Prev Button with background glow */}
              <button
                onClick={handlePrevImage}
                id="prev-lightbox"
                aria-label="Previous image"
                className="absolute left-2 md:-left-16 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all cursor-pointer z-10 shadow-lg hover:scale-105"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="max-h-[70vh] max-w-full relative flex flex-col items-center">
                <img
                  src={GALLERY_IMAGES[lightboxImageIndex].src}
                  alt={GALLERY_IMAGES[lightboxImageIndex].alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] md:max-h-[70vh] max-w-full object-contain rounded-xl border border-white/15 shadow-2xl"
                />
              </div>

              {/* Next Button with background glow */}
              <button
                onClick={handleNextImage}
                id="next-lightbox"
                aria-label="Next image"
                className="absolute right-2 md:-right-16 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all cursor-pointer z-10 shadow-lg hover:scale-105"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Caption bottom bar details */}
            <div className="text-center text-white space-y-2 py-4 border-t border-white/10 max-w-2xl mx-auto w-full select-text">
              <p className="text-base font-serif font-light text-gray-200">
                {GALLERY_IMAGES[lightboxImageIndex].caption}
              </p>
              <div className="inline-flex items-center space-x-2 capitalize text-xs text-[#E4A83F]">
                <span className="font-bold tracking-wider uppercase text-[10px]">Category:</span>
                <span className="font-semibold">{GALLERY_IMAGES[lightboxImageIndex].category}</span>
                <span>•</span>
                <span className="text-gray-400 font-light">The Fern Residency Rooftop</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
