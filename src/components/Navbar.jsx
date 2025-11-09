import React from 'react';
import { ShoppingCart, Home, Utensils, Star, Phone } from 'lucide-react';

const Navbar = ({ onOpenCart }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-400 to-amber-400 grid place-items-center text-white font-bold">XA</div>
          <div className="leading-tight">
            <p className="font-extrabold text-lg text-orange-500">Ximilu Ammar</p>
            <p className="text-xs text-neutral-600">Fresh & Delicious Homemade</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#beranda" className="hover:text-orange-500 flex items-center gap-1"><Home size={16}/> Beranda</a>
          <a href="#menu" className="hover:text-orange-500 flex items-center gap-1"><Utensils size={16}/> Menu</a>
          <a href="#testimoni" className="hover:text-orange-500 flex items-center gap-1"><Star size={16}/> Testimoni</a>
          <a href="#kontak" className="hover:text-orange-500 flex items-center gap-1"><Phone size={16}/> Kontak</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenCart} className="inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 transition-colors">
            <ShoppingCart size={18}/> <span className="hidden sm:inline">Keranjang</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
