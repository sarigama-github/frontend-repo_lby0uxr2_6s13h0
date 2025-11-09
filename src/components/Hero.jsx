import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight"
          >
            Fresh & Delicious Homemade by <span className="text-orange-600">Ximilu Ammar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-neutral-700 text-lg"
          >
            Dimsum, Donat, Ximilu, Croffle, Banana Roll dan banyak lagi. Dibuat dengan bahan berkualitas, rasa istimewa, dan siap dikirim!
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#menu" className="px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors">Pesan Sekarang</a>
            <a href="#testimoni" className="px-5 py-3 rounded-lg bg-white text-orange-600 border border-orange-200 hover:bg-orange-50 font-semibold transition-colors">Lihat Testimoni</a>
          </div>
        </div>
        <div className="relative">
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1601050690597-9d37f3a4b4d2?q=80&w=1200&auto=format&fit=crop"
            alt="Dimsum"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur rounded-xl p-4 shadow border border-orange-100">
            <p className="text-sm text-neutral-600">Promo Spesial</p>
            <p className="font-bold text-orange-600">Diskon 15% semua menu donat!</p>
          </div>
        </div>
      </div>
      <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="fixed right-4 bottom-4 z-50">
        <span className="px-4 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-600 transition-colors">Pesan via WhatsApp</span>
      </a>
    </section>
  );
};

export default Hero;
