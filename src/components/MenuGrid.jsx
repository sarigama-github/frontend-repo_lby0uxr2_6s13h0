import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleMenu = [
  { id: '1', name: 'Dimsum Ayam', price: 18000, img: 'https://images.unsplash.com/photo-1625944528103-5a2b6f2a4444?q=80&w=1200&auto=format&fit=crop', category: 'Dimsum', stock: 24 },
  { id: '2', name: 'Donat Cokelat', price: 6000, img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop', category: 'Donat', stock: 40 },
  { id: '3', name: 'Ximilu Signature', price: 16000, img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop', category: 'Ximilu', stock: 12 },
  { id: '4', name: 'Croffle Honey', price: 15000, img: 'https://images.unsplash.com/photo-1619532221111-740bd8e6af80?q=80&w=1200&auto=format&fit=crop', category: 'Croffle', stock: 20 },
  { id: '5', name: 'Banana Roll Keju', price: 12000, img: 'https://images.unsplash.com/photo-1568051243858-389d0887011d?q=80&w=1200&auto=format&fit=crop', category: 'Banana Roll', stock: 18 },
];

const categories = ['Semua', 'Dimsum', 'Donat', 'Ximilu', 'Croffle', 'Banana Roll'];

const MenuGrid = ({ onAdd }) => {
  const [active, setActive] = useState('Semua');
  const [query, setQuery] = useState('');

  const filtered = sampleMenu.filter((item) =>
    (active === 'Semua' || item.category === active) &&
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">Menu Favorit</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari menu..."
          className="w-full md:w-72 px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full border transition-colors text-sm ${
              active === c
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-neutral-700 border-orange-200 hover:bg-orange-50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={item.img} alt={item.name} className="h-36 w-full object-cover" />
              <div className="p-3">
                <p className="text-sm text-green-600">{item.category}</p>
                <h3 className="font-bold text-neutral-900">{item.name}</h3>
                <p className="text-orange-600 font-semibold mt-1">Rp {item.price.toLocaleString('id-ID')}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-neutral-500">Stok: {item.stock}</span>
                  <button
                    onClick={() => onAdd(item)}
                    className="px-3 py-1.5 text-sm rounded-md bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuGrid;
