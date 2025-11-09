import React from 'react';

const Cart = ({ items, onClose, onQty, onCheckout }) => {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/40" onClick={onClose} />
      <div className="w-full sm:w-[420px] h-full bg-white shadow-xl p-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Keranjang Belanja</h3>
          <button onClick={onClose} className="px-3 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200">Tutup</button>
        </div>
        <div className="mt-4 space-y-3">
          {items.length === 0 && <p className="text-neutral-500">Belum ada item di keranjang.</p>}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3 border rounded-lg p-2 items-center">
              <img src={it.img} alt={it.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <p className="font-semibold">{it.name}</p>
                <p className="text-sm text-neutral-500">Rp {it.price.toLocaleString('id-ID')}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => onQty(it.id, Math.max(1, it.qty - 1))} className="px-2 py-1 bg-neutral-100 rounded">-</button>
                  <span>{it.qty}</span>
                  <button onClick={() => onQty(it.id, it.qty + 1)} className="px-2 py-1 bg-neutral-100 rounded">+</button>
                </div>
              </div>
              <div className="text-right font-semibold">Rp {(it.price * it.qty).toLocaleString('id-ID')}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span className="text-orange-600">Rp {total.toLocaleString('id-ID')}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="mt-4 w-full py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 disabled:opacity-50"
          >
            Lanjutkan Pemesanan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
