import React from 'react';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-neutral-900 text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <p className="font-extrabold text-xl text-orange-400">Ximilu Ammar</p>
          <p className="mt-2 text-neutral-300">Cemilan homemade yang selalu fresh. Hubungi kami untuk pemesanan acara dan partai besar.</p>
        </div>
        <div>
          <p className="font-semibold text-neutral-200">Kontak</p>
          <ul className="mt-2 space-y-1 text-neutral-300">
            <li>WhatsApp: <a className="text-green-400" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">+62 812-3456-7890</a></li>
            <li>Instagram: <a className="text-pink-300" href="https://instagram.com/" target="_blank" rel="noreferrer">@ximilu.ammar</a></li>
            <li>Lokasi: Bandung, Jawa Barat</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-neutral-200">Jam Operasional</p>
          <p className="mt-2 text-neutral-300">Senin - Minggu: 09.00 - 21.00</p>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-neutral-400">© {new Date().getFullYear()} Ximilu Ammar. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
