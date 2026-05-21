import { useState, useMemo } from 'react';
import { Search, Flame, Leaf, Plus, Minus, Trash2, Calculator, Info, Sparkles, ShoppingBag, ExternalLink, BookOpen, ZoomIn, X } from 'lucide-react';
import { MENU_ITEMS, IMAGES } from '../data';
import { MenuItem, DietType } from '../types';

interface MenuProps {
  onPlanReservation: (guestsCount: number, selectedNotes: string) => void;
  ambiance?: 'sunset' | 'midnight';
}

export default function Menu({ onPlanReservation, ambiance = 'sunset' }: MenuProps) {
  const isMidnight = ambiance === 'midnight';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietFilter, setDietFilter] = useState<'all' | DietType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  // Cost Estimator state
  const [estimatorCart, setEstimatorCart] = useState<{ id: string; quantity: number }[]>([]);
  const [partySize, setPartySize] = useState<number>(2);

  // Filter logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchDiet = dietFilter === 'all' || item.dietType === dietFilter;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchDiet && matchSearch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  // Cart operations
  const addToCart = (id: string) => {
    setEstimatorCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing) {
        return prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setEstimatorCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c));
      }
      return prev.filter((c) => c.id !== id);
    });
  };

  const clearCart = () => {
    setEstimatorCart([]);
  };

  // Cart calculations
  const cartSummary = useMemo(() => {
    let subtotal = 0;
    const itemsList = estimatorCart.map((cartItem) => {
      const menuObj = MENU_ITEMS.find((m) => m.id === cartItem.id);
      const totalCost = menuObj ? menuObj.price * cartItem.quantity : 0;
      subtotal += totalCost;
      return {
        menuItem: menuObj,
        quantity: cartItem.quantity,
        totalCost,
      };
    }).filter((x) => x.menuItem !== undefined);

    const gst = Math.round(subtotal * 0.18); // 18% GST (9% CGST + 9% SGST)
    const serviceEstimate = Math.round(subtotal * 0.05); // optional service charge
    const total = subtotal + gst + serviceEstimate;
    const perPerson = partySize > 0 ? Math.round(total / partySize) : 0;

    return {
      itemsList,
      subtotal,
      gst,
      serviceEstimate,
      total,
      perPerson,
    };
  }, [estimatorCart, partySize]);

  // Chili helper
  const renderChilis = (count?: number) => {
    if (!count) return null;
    return (
      <span className="inline-flex items-center text-red-500 ml-1.5" title={`${count} of 3 Spiciness`}>
        {Array.from({ length: count }).map((_, i) => (
          <Flame key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </span>
    );
  };

  const triggerBookThisPlan = () => {
    const listNames = cartSummary.itemsList.map(c => `${c.menuItem?.name} x${c.quantity}`).join(', ');
    const noteStr = `Planned dishes from Meal Cost Estimator: ${listNames}`;
    onPlanReservation(partySize, noteStr);
  };

  return (
    <div className={`theme-transition transition-colors duration-500 py-20 sm:py-28 relative overflow-hidden ${isMidnight ? 'bg-[#0E0D0C] text-gray-300' : 'bg-[#FAF8F5] text-[#333333]'}`}>
      
      {/* Decorative vectors */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#C25E3A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#E4A83F]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#C25E3A] text-xs font-bold tracking-[0.25em] uppercase block">Multi-Cuisine Delights</span>
          <h2 className={`font-serif text-4xl sm:text-5xl ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} font-light leading-tight tracking-tight`}>Explore Our Masterful Recipes</h2>
          <div className="h-[1px] w-12 bg-[#C25E3A]/45 mx-auto my-3" />
          <p className={`font-sans text-sm sm:text-base ${isMidnight ? 'text-gray-400' : 'text-gray-500'} font-light leading-relaxed`}>
            Indulge in North Indian specialties, gourmet thin-crust Italian pizzas, and fresh global starters cooked under standard sanitary regulations.
          </p>
        </div>

        {/* Filter controls - Redesigned into elegant status board */}
        <div className={`p-6 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.015)] border flex flex-col xl:flex-row items-center justify-between gap-6 theme-transition ${isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-orange-100/60'}`}>
          
          {/* Categories Row */}
          <div className="flex flex-wrap items-center gap-1.5 w-full xl:w-auto">
            {[
              { id: 'all', label: 'All Dishes' },
              { id: 'starters', label: 'Starters' },
              { id: 'mains', label: 'Mains' },
              { id: 'pizzas-pastas', label: 'Pizzas & Pasta' },
              { id: 'desserts', label: 'Desserts' },
              { id: 'beverages', label: 'Drinks & Bar' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 text-xs font-semibold tracking-wide rounded-xl transition-all duration-200 uppercase cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#C25E3A] text-white shadow-md scale-102 font-bold'
                    : isMidnight
                    ? 'bg-white/[0.03] text-gray-400 hover:bg-white/5 hover:text-white border border-white/5'
                    : 'bg-orange-50/40 text-gray-600 hover:bg-orange-50/80 border border-orange-100/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Diets & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full xl:w-auto">
            {/* Diet types */}
            <div className={`flex items-center p-1 rounded-xl border justify-center shrink-0 theme-transition ${isMidnight ? 'bg-white/[0.02] border-white/5' : 'bg-gray-50/80 border-gray-150'}`}>
              <button
                onClick={() => setDietFilter('all')}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  dietFilter === 'all'
                    ? isMidnight
                      ? 'bg-white/10 text-[#FAF8F5] font-bold shadow-sm'
                      : 'bg-white text-[#1E1D1B] shadow-sm font-bold'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer ${
                  dietFilter === 'veg'
                    ? 'bg-green-100 text-green-900 shadow-sm font-bold border border-green-200/50'
                    : 'text-gray-500 hover:text-green-600'
                }`}
              >
                <Leaf className="h-3.5 w-3.5 fill-current text-green-600" />
                <span>Veg Only</span>
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer ${
                  dietFilter === 'non-veg'
                    ? 'bg-red-50 text-red-900 shadow-sm font-bold border border-red-200/50'
                    : 'text-gray-500 hover:text-red-600'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 border-[1.5px] border-white inline-block" />
                <span>Non-Veg Only</span>
              </button>
            </div>

            {/* Keyword search bar with modern layout */}
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                value={searchQuery}
                aria-label="Search dishing list"
                placeholder="Search recipe..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl text-xs sm:text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#C25E3A] transition-all theme-transition ${
                  isMidnight 
                    ? 'bg-[#1D1B1A] border-white/10 text-white placeholder-gray-550 focus:bg-[#22201F] focus:ring-opacity-40' 
                    : 'bg-gray-50/30 border-orange-100 placeholder-gray-405 focus:bg-white'
                }`}
              />
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

        </div>

        {/* Outer Split: Menu items, estimator cart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: items cards list */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredItems.length === 0 ? (
              <div className={`text-center py-20 rounded-3xl border border-dashed border-orange-200/40 p-8 ${isMidnight ? 'bg-[#181615]' : 'bg-white'}`}>
                <Info className="h-12 w-12 text-[#C25E3A]/40 mx-auto mb-4" />
                <h4 className={`font-serif text-xl font-medium ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'}`}>No dishes match your filters</h4>
                <p className="text-sm text-gray-400 mt-1.5 font-light max-w-sm mx-auto">Try adjusting your search queries or category filters above to explore gourmet items.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {filteredItems.map((item) => {
                  const cartQty = estimatorCart.find((c) => c.id === item.id)?.quantity || 0;
                  return (
                    <div 
                      key={item.id}
                      id={`menu-item-${item.id}`}
                      className={`p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.012)] border hover:border-[#E4A83F]/35 hover:shadow-[0_12px_24px_rgba(194,94,58,0.04)] transition-all duration-300 relative flex flex-col justify-between space-y-5 group theme-transition ${isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-orange-100/50'}`}
                    >
                      <div>
                        {/* Diet badge & price */}
                        <div className="flex items-center justify-between">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest border ${
                            item.dietType === 'veg' 
                              ? 'bg-green-50/50 text-green-700 border-green-200/40' 
                              : 'bg-red-50/50 text-red-700 border-red-200/40'
                          }`}>
                            {item.dietType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                          </span>
                          <span className="font-sans font-bold text-lg text-[#C25E3A]">
                            ₹{item.price}
                          </span>
                        </div>

                        {/* Heading & spice level */}
                        <h3 className={`font-serif font-medium ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} text-xl mt-3 mb-1 flex items-center flex-wrap`}>
                          {item.name}
                          {renderChilis(item.spiciness)}
                          {item.popular && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-[#E4A83F]/10 text-[9px] font-bold text-[#D3911F] rounded uppercase tracking-wider border border-[#E4A83F]/20">
                              Popular
                            </span>
                          )}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-xs text-gray-500 leading-relaxed font-light mb-1 select-text">
                          {item.description}
                        </p>
                      </div>

                      {/* Estimator Integration Counter Button */}
                      <div className="flex items-center justify-between border-t border-orange-100/30 pt-4 mt-auto">
                        <span className="text-[10px] text-gray-400 font-light italic">
                          Taxes & GST computed side
                        </span>
                        
                        {cartQty === 0 ? (
                          <button
                            onClick={() => addToCart(item.id)}
                            id={`add-btn-${item.id}`}
                            className="text-xs bg-gradient-to-r from-[#C25E3A] to-[#D36F49] hover:from-[#A94C2B] hover:to-[#C25E3A] text-white font-semibold py-2 px-4 rounded-xl flex items-center space-x-1.5 transition-all shadow-[0_4px_12px_rgba(194,94,58,0.15)] hover:shadow-[0_4px_15px_rgba(194,94,58,0.25)] hover:scale-[1.02]"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Add to Planner</span>
                          </button>
                        ) : (
                          <div className="flex items-center bg-gray-50 border border-orange-100/40 rounded-xl p-1 space-x-2">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              id={`minus-btn-${item.id}`}
                              className="p-1.5 text-gray-500 hover:text-gray-900 bg-white shadow-sm rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs font-bold px-3 font-mono">{cartQty}</span>
                            <button
                              onClick={() => addToCart(item.id)}
                              id={`plus-btn-${item.id}`}
                              className="p-1.5 text-white bg-[#C25E3A] hover:bg-[#A94C2B] shadow-sm rounded-lg cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right panel: Cost Estimator Card & Order Online stack */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Meal Cost Estimator Deluxe Card */}
            <div className="bg-[#1C1A18] text-white p-6 sm:p-7 rounded-[32px] border border-white/5 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(228,168,63,0.06)_0%,transparent_60%)] pointer-events-none" />
              
              <div className="flex items-center space-x-3 pb-2 border-b border-white/5">
                <div className="p-2.5 bg-[#E4A83F]/10 rounded-xl text-[#E4A83F] border border-[#E4A83F]/10 shadow-inner shrink-0">
                  <Calculator className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-white tracking-wide">Meal Cost Estimator</h3>
                  <p className="text-[10px] text-gray-400">Budget your reservations & dining slots</p>
                </div>
              </div>

              {/* Group scale inputs */}
              <div className="space-y-3">
                <label htmlFor="party-size-select" className="text-xs font-bold text-gray-300 uppercase tracking-widest block">Party Size for Dinner:</label>
                <div className="flex items-center bg-white/[0.03] border border-white/10 rounded-2xl p-1.5 justify-between shadow-inner">
                  <span className="text-xs text-gray-300 pl-3">Number of Guests:</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setPartySize(prev => Math.max(1, prev - 1))}
                      id="estimator-party-minus"
                      aria-label="Decrease party size"
                      className="p-2 text-[#E4A83F] bg-white/5 rounded-xl hover:bg-white/10 border border-white/5 cursor-pointer"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-base font-bold text-white px-1.5 font-mono">{partySize}</span>
                    <button
                      onClick={() => setPartySize(prev => Math.min(30, prev + 1))}
                      id="estimator-party-plus"
                      aria-label="Increase party size"
                      className="p-2 text-[#E4A83F] bg-white/5 rounded-xl hover:bg-white/10 border border-white/5 cursor-pointer"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cart Itemizations */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-300">
                  <span>Selected Dishes ({estimatorCart.length}):</span>
                  {estimatorCart.length > 0 && (
                    <button
                      onClick={clearCart}
                      id="clear-estimator"
                      className="text-[#C25E3A] hover:text-white transition-colors flex items-center space-x-1 text-[11px] font-bold tracking-widest uppercase"
                    >
                      <Trash2 className="h-4 w-4 mr-0.5" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>

                {cartSummary.itemsList.length === 0 ? (
                  <div className="p-6 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl text-center">
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      Your planner is empty. Click the <strong className="text-[#E4A83F] font-semibold">+ Add to Planner</strong> buttons on menu cards to budget your order.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {cartSummary.itemsList.map(({ menuItem, quantity, totalCost }) => {
                      if (!menuItem) return null;
                      return (
                        <div key={menuItem.id} className="flex items-center justify-between text-xs bg-white/[0.02] p-3 rounded-xl border border-white/5 shadow-sm">
                          <div className="space-y-0.5 pr-2 min-w-0">
                            <span className="font-semibold text-white block leading-tight truncate">{menuItem.name}</span>
                            <span className="text-[10px] text-gray-400 block font-mono">₹{menuItem.price} × {quantity}</span>
                          </div>
                          <div className="flex items-center space-x-3 shrink-0">
                            <span className="font-mono text-white font-semibold">₹{totalCost}</span>
                            <button
                              onClick={() => removeFromCart(menuItem.id)}
                              id={`remove-estimator-${menuItem.id}`}
                              className="text-gray-400 hover:text-red-500 p-1 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Aggregation Bill Summary */}
              {cartSummary.subtotal > 0 && (
                <div className="border-t border-white/10 pt-4 space-y-3.5 text-xs animate-fade-in animate-slide-up">
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                       <span>Menu Subtotal:</span>
                       <span className="font-mono font-medium">₹{cartSummary.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>GST (CGST 9% + SGST 9% = 18%):</span>
                      <span className="font-mono font-medium">₹{cartSummary.gst}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Est. Service Charge (5% optional):</span>
                      <span className="font-mono font-medium">₹{cartSummary.serviceEstimate}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 border-dashed pt-3.5 flex justify-between text-sm font-bold">
                    <span className="text-[#E4A83F] uppercase tracking-wider text-xs">Estimated Total:</span>
                    <span className="font-mono text-[#E4A83F] text-lg">₹{cartSummary.total}</span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-2xl text-[11px] text-center text-gray-300 flex items-center justify-center space-x-2 border border-white/15">
                    <Info className="h-4 w-4 text-[#E4A83F] shrink-0" />
                    <span>Average cost: <strong className="text-white font-bold font-mono text-xs">₹{cartSummary.perPerson}</strong> per guest.</span>
                  </div>

                  {/* Prebook actions */}
                  <button
                    onClick={triggerBookThisPlan}
                    id="book-planned-btn"
                    className="w-full mt-2 py-4 bg-gradient-to-r from-[#C25E3A] to-[#D36F49] hover:from-[#A94C2B] hover:to-[#C25E3A] text-white rounded-xl font-semibold shadow-[0_10px_20px_rgba(194,94,58,0.25)] hover:shadow-[0_12px_25px_rgba(194,94,58,0.45)] flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4 text-[#FAF8F5]" />
                    <span>Prebook with This Plan</span>
                  </button>
                </div>
              )}

            </div>

            {/* Our Printed Menu Card with high contrast interactive features */}
            <div className={`p-6 sm:p-7 rounded-[32px] border shadow-[0_8px_30px_rgba(194,94,58,0.03)] space-y-5 text-center relative overflow-hidden group theme-transition ${isMidnight ? 'bg-[#181615] border-white/5 text-white' : 'bg-white border-orange-100/80 text-[#333333]'}`}>
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-50/40 rounded-full blur-lg pointer-events-none" />
              
              <div className={`flex items-center space-x-3 pb-2 border-b ${isMidnight ? 'border-white/5' : 'border-orange-100/40'}`}>
                <div className={`p-2.5 rounded-xl shrink-0 ${isMidnight ? 'bg-orange-950/20 text-[#E4A83F]' : 'bg-orange-50 text-[#C25E3A]'}`}>
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className={`font-serif text-base font-semibold ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} tracking-wide`}>Dine-In Menu Card</h3>
                  <p className="text-[10px] text-gray-400">Authentic physical menu booklet</p>
                </div>
              </div>

              {/* Menu image thumbnail with elegant hover zoom & interactive cue */}
              <div 
                onClick={() => setIsMenuOpen(true)}
                className={`aspect-[101/169] w-full max-w-[170px] mx-auto rounded-2xl overflow-hidden shadow-md relative cursor-zoom-in group-hover:shadow-lg transition-all duration-300 border ${isMidnight ? 'border-white/10 bg-white/[0.02]' : 'border-orange-100/65 bg-gray-50/50'}`}
              >
                <img
                  src={IMAGES.menuImageCard}
                  alt="Dine-in printed menu card at The Skylight Garden"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[0.8s] group-hover:scale-[1.04] select-none"
                />
                
                {/* Overlay hover cue */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-[#1E1D1B] px-3 py-1.5 rounded-xl text-[10px] mercantile-style font-bold uppercase tracking-wider flex items-center space-x-1 shadow-md">
                    <ZoomIn className="h-3.5 w-3.5 text-[#C25E3A]" />
                    <span>View Large</span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-1 max-w-xs mx-auto">
                <p className="text-[11px] text-gray-400 font-light font-sans leading-relaxed select-text">
                  Click the booklet preview above to read our live, high-resolution original printed dishes layout.
                </p>
              </div>
            </div>

            {/* Order Dishes Online Card - Deluxe visual treatment */}
            <div className={`p-7 rounded-[32px] border shadow-[0_8px_30px_rgba(194,94,58,0.03)] space-y-6 text-center relative overflow-hidden theme-transition ${isMidnight ? 'bg-[#181615] border-white/5' : 'bg-white border-orange-100/80'}`}>
              <div className="absolute -right-12 -top-12 w-28 h-28 bg-[#E4A83F]/5 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-28 h-28 bg-[#C25E3A]/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex justify-center">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${isMidnight ? 'bg-white/[0.02] border-white/10 text-[#E4A83F]' : 'bg-orange-50/70 border-orange-100 text-[#C25E3A]'}`}>
                  <ShoppingBag className="h-6 w-6" />
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-[#C25E3A] text-[10px] font-bold tracking-[0.25em] uppercase block">
                  Lightning Fast Delivery
                </span>
                <h4 className={`font-serif text-2xl font-light ${isMidnight ? 'text-white' : 'text-[#1E1D1B]'} tracking-tight`}>
                  Order Online for Home Delivery
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xs mx-auto leading-relaxed">
                  Craving our legendary Butter Chicken or fresh tandoori appetizers? Select your platform to get instant doorstep dropoffs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3.5 pt-2">
                {/* Zomato Button */}
                <a
                  href="https://www.zomato.com/chandigarh/the-skylight-garden-chandigarh-industrial-area"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="zomato-order-cta"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-3.5 bg-[#E23744] hover:bg-[#cb202d] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Zomato</span>
                  <ExternalLink className="h-3.5 w-3.5 text-white shrink-0" />
                </a>

                {/* Swiggy Button */}
                <a
                  href="https://www.swiggy.com/restaurants/the-skylight-garden-industrial-area-phase-2-chandigarh-606241/dineout"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="swiggy-order-cta"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-3.5 bg-[#FC8019] hover:bg-[#e46d0a] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Swiggy</span>
                  <ExternalLink className="h-3.5 w-3.5 text-white shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Printed Menu Full Screen Lightbox Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0F0E0D]/95 z-[100] flex flex-col justify-between p-4 sm:p-6 select-none animate-fade-in">
          {/* Header toolbar */}
          <div className="flex items-center justify-between w-full p-2.5 bg-[#1E1D1B]/55 backdrop-blur-md rounded-xl border border-white/5 max-w-lg mx-auto z-50">
            <span className="text-[10px] sm:text-xs font-bold text-[#E4A83F] tracking-widest uppercase pl-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Dine-In Printed Booklet
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 bg-white/5 hover:bg-[#C25E3A] text-white rounded-lg transition-colors cursor-pointer"
              title="Close Lightbox"
              style={{ contentVisibility: 'auto' }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Interactive Image display */}
          <div className="flex-grow flex items-center justify-center py-6">
            <div className="relative max-h-[75vh] max-w-full aspect-[101/169] rounded-2xl overflow-hidden bg-[#1D1B1A]/40 border border-white/10 shadow-2xl">
              <img
                src={IMAGES.menuImageCard}
                alt="Full high-definition printed menu Card - The Skylight Garden"
                referrerPolicy="no-referrer"
                className="h-full w-auto max-h-[75vh] object-contain mx-auto select-none pointer-events-none rounded-2xl"
              />
            </div>
          </div>

          {/* Footer Caption */}
          <div className="text-center text-xs text-gray-500 font-light pb-4">
            <span>Standard Culinary Menu Booklet • Chandigarh Elite Rooftop Dining</span>
          </div>
        </div>
      )}

    </div>
  );
}
