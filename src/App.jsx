import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const changeQty = (id, qty) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const handleCheckout = () => {
    const text = items
      .map((it) => `• ${it.name} x${it.qty} = Rp ${(it.qty * it.price).toLocaleString('id-ID')}`)
      .join('%0A');
    const total = items.reduce((s, it) => s + it.qty * it.price, 0);
    const message = `Halo Ximilu Ammar, saya ingin pesan:%0A${text}%0A%0ATotal: Rp ${total.toLocaleString('id-ID')}`;
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const itemCount = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  return (
    <div className="min-h-screen bg-amber-50 text-neutral-900">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <MenuGrid onAdd={addToCart} />

      <section id="testimoni" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold">Apa kata pelanggan</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-orange-100 p-4 shadow-sm">
              <p className="text-sm text-neutral-600">“Rasanya enak banget, anak-anak suka! Pengiriman cepat dan kemasan rapi.”</p>
              <p className="mt-3 font-semibold text-orange-600">Aulia</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {cartOpen && (
        <Cart
          items={items}
          onClose={() => setCartOpen(false)}
          onQty={changeQty}
          onCheckout={handleCheckout}
        />
      )}

      {/* Floating cart counter */}
      {itemCount > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-20 right-4 rounded-full bg-orange-500 text-white px-4 py-3 shadow-lg"
        >
          Keranjang ({itemCount})
        </button>
      )}
    </div>
  );
}

export default App;
