import React, { useState } from 'react';
import { Building2, UtensilsCrossed, Plane, MessageCircle, Minus, Plus, MapPin, CheckCircle2, UploadCloud } from 'lucide-react';

const HotelSection = () => {
  const [qty, setQty] = useState(1);
  const hotels = [
    'Hotel Santika Banyuwangi', 'Aston Banyuwangi', 'Ketapang Indah Hotel',
    'El Royale Banyuwangi', 'Dialoog Banyuwangi', 'Illira Hotel Banyuwangi',
    'Luminor Hotel Banyuwangi', 'Kokoon Hotel Banyuwangi', 'Mirah Hotel Banyuwangi',
    'Margo Utomo Hill View',
  ];
  const rooms = [
    { name: 'Suite Room', price: '1.850.000', benefit: 'King bed, sarapan, prioritas check-in', stock: 500, img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80' },
    { name: 'Deluxe Room', price: '1.250.000', benefit: 'Twin/king bed, sarapan, city view', stock: 320, img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80' },
    { name: 'Superior Room', price: '950.000', benefit: 'Kamar standar event, sarapan', stock: 240, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
    { name: 'Family Room', price: '1.550.000', benefit: 'Kapasitas keluarga, sarapan', stock: 120, img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32 }} className="res-grid">
      {/* Hotel list */}
      <div style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,0,0.1)', borderRadius: 12, padding: 24, overflowY: 'auto', maxHeight: 600 }}>
        <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 16, letterSpacing: 2, color: '#FF6B00', textTransform: 'uppercase', marginBottom: 20 }}>10 Hotel Partner</h3>
        {hotels.map((h, i) => (
          <div key={i} style={{
            padding: '12px 16px', borderRadius: 6, marginBottom: 6, cursor: 'pointer',
            background: i === 0 ? 'rgba(255,107,0,0.1)' : 'transparent',
            border: i === 0 ? '1px solid rgba(255,107,0,0.3)' : '1px solid transparent',
            transition: 'all 0.2s',
          }}>
            <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 13, letterSpacing: 1, color: i === 0 ? '#FF6B00' : '#777' }}>{i + 1}. {h}</span>
          </div>
        ))}
      </div>

      {/* Room cards */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div>
            <h2 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 24, color: '#fff', letterSpacing: 1, marginBottom: 6 }}>Hotel Santika Banyuwangi</h2>
            <p style={{ color: '#666', fontSize: 13 }}>Pilih tipe kamar, jumlah reservasi, lalu lanjutkan ke WhatsApp admin.</p>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 4, padding: '6px 14px' }}>
            <span style={{ width: 6, height: 6, background: '#4ADE80', borderRadius: '50%' }} />
            <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 11, letterSpacing: 2, color: '#4ADE80', textTransform: 'uppercase' }}>Real-time Update</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          {rooms.map((room, i) => (
            <div key={i} className="card-hd" style={{ overflow: 'hidden' }}>
              <div style={{ height: 160, position: 'relative' }}>
                <img src={room.img} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(255,107,0,0.3)', borderRadius: 4, padding: '4px 10px' }}>
                  <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 11, color: '#FF6B00' }}>Sisa {room.stock}</span>
                </div>
              </div>
              <div style={{ padding: 20 }}>
                <h4 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 16, color: '#fff', letterSpacing: 1, marginBottom: 4 }}>{room.name}</h4>
                <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: 16, color: '#FF6B00', marginBottom: 8 }}>Rp {room.price} <span style={{ fontSize: 11, color: '#555' }}>/ malam</span></p>
                <p style={{ fontSize: 12, color: '#666', marginBottom: 14 }}>{room.benefit}</p>
                <div style={{ height: 3, background: '#1A1A1A', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(room.stock / 600) * 100}%`, background: 'linear-gradient(90deg, #CC0000, #FF6B00)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qty + CTA */}
        <div style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,0,0.15)', borderRadius: 8, padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 13, letterSpacing: 2, color: '#aaa', textTransform: 'uppercase' }}>Jumlah Kamar</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#111', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 4, padding: '4px 8px' }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ background: 'none', border: 'none', color: '#FF6B00', cursor: 'pointer', padding: 6 }}><Minus size={16} /></button>
              <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, color: '#fff', minWidth: 20, textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ background: 'none', border: 'none', color: '#FF6B00', cursor: 'pointer', padding: 6 }}><Plus size={16} /></button>
            </div>
          </div>
          <button className="btn-hd-primary" style={{ gap: 8 }}>
            <MessageCircle size={16} />
            <span>Chat Admin WhatsApp</span>
          </button>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .res-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};

const RestaurantSection = () => (
  <div>
    <div style={{ textAlign: 'center', marginBottom: 40 }}>
      <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 28, color: '#fff', letterSpacing: 2, marginBottom: 12 }}>Reservasi Restoran Berbasis QR</h3>
      <p style={{ color: '#666', fontSize: 14, maxWidth: 560, margin: '0 auto' }}>Peserta yang sudah reservasi akan mendapatkan barcode/QR. Tanpa barcode, peserta tidak dapat melakukan verifikasi makan di restoran partner.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="res-grid">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { name: 'Grand Nusantara Culture Dinner', loc: 'Banyuwangi', val: 642, total: 900, img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80' },
          { name: 'Rider Lunch Point', loc: 'Banyuwangi', val: 211, total: 500, img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80' },
          { name: 'Evo Island Bali Dinner', loc: 'Bali', val: 388, total: 700, img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80' },
        ].map((resto, i) => (
          <div key={i} className="card-hd" style={{ display: 'flex', overflow: 'hidden' }}>
            <img src={resto.img} alt={resto.name} style={{ width: 120, objectFit: 'cover', flexShrink: 0 }} />
            <div style={{ padding: '20px 20px', flex: 1 }}>
              <h4 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 16, color: '#fff', letterSpacing: 1, marginBottom: 4 }}>{resto.name}</h4>
              <p style={{ fontSize: 12, color: '#666', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}><MapPin size={12} color="#FF6B00" /> {resto.loc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#666', marginBottom: 8 }}>
                <span>Terverifikasi</span><span style={{ color: '#FF6B00' }}>{resto.val} / {resto.total}</span>
              </div>
              <div style={{ height: 3, background: '#1A1A1A', borderRadius: 2 }}>
                <div style={{ height: '100%', width: `${(resto.val / resto.total) * 100}%`, background: 'linear-gradient(90deg, #CC0000, #FF6B00)' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,0,0.15)', borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h4 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 22, color: '#fff', letterSpacing: 2, marginBottom: 24 }}>Barcode Makan</h4>
        <div style={{ background: '#fff', padding: 16, borderRadius: 8, marginBottom: 20 }}>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=merdekaride2026" alt="QR" style={{ width: 150, height: 150 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 4, padding: '8px 16px', marginBottom: 20 }}>
          <CheckCircle2 size={14} color="#4ADE80" />
          <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 12, letterSpacing: 2, color: '#4ADE80' }}>QR VALID — BISA MASUK RESTORAN</span>
        </div>
        <button className="btn-hd-primary" style={{ width: '100%', justifyContent: 'center' }}>
          <MessageCircle size={16} />
          <span>Reservasi via WhatsApp</span>
        </button>
      </div>
    </div>
  </div>
);

const FlightSection = () => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: 40 }}>
      <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 28, color: '#fff', letterSpacing: 2, marginBottom: 12 }}>Pesanan Tiket Pesawat ke Bali</h3>
      <p style={{ color: '#666', fontSize: 14 }}>Fitur ini tersedia untuk peserta yang ingin dibantu pemesanan tiket pesawat menuju Bali.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="res-grid">
      {[
        { route: 'Jakarta → Bali', note: 'Admin bantu cek jadwal & harga' },
        { route: 'Surabaya → Bali', note: 'Tersedia sesuai kebutuhan peserta' },
      ].map((f, i) => (
        <div key={i} className="card-hd" style={{ padding: 32 }}>
          <div style={{ width: 48, height: 48, background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
            <Plane size={22} color="#FF6B00" />
          </div>
          <div style={{ display: 'inline-block', background: 'rgba(251,146,60,0.1)', border: '1px solid rgba(251,146,60,0.3)', borderRadius: 2, padding: '4px 10px', fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 2, color: '#FB923C', marginBottom: 12 }}>OPSIONAL</div>
          <h4 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 22, color: '#fff', letterSpacing: 1, marginBottom: 8 }}>{f.route}</h4>
          <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>{f.note}</p>
          <button className="btn-hd-outline" style={{ width: '100%', justifyContent: 'center' }}>
            <MessageCircle size={16} />
            <span>Tanya Admin</span>
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Reservation = () => {
  const [tab, setTab] = useState('hotel');
  const tabs = [
    { id: 'hotel', icon: Building2, title: 'Reservasi Hotel', desc: '10 hotel partner, stok kamar live' },
    { id: 'resto', icon: UtensilsCrossed, title: 'Reservasi Restoran', desc: 'Barcode/QR untuk verifikasi makan' },
    { id: 'flight', icon: Plane, title: 'Tiket Pesawat', desc: 'Pesan tiket ke Bali bila dibutuhkan' },
  ];

  return (
    <section id="reservasi" style={{ background: '#111', padding: '100px 24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="badge-hd" style={{ marginBottom: 20, display: 'inline-flex' }}>LAYANAN RESERVASI</div>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 6vw, 90px)', letterSpacing: 4, color: '#fff', margin: 0 }}>
            HOTEL, RESTORAN & <span style={{ color: '#FF6B00' }}>PENERBANGAN</span>
          </h2>
          <p style={{ color: '#555', fontSize: 15, maxWidth: 600, margin: '20px auto 0' }}>Semua reservasi diarahkan ke WhatsApp admin Ranata Tour. Stok kamar tampil live dan berkurang otomatis.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, background: '#0A0A0A', borderRadius: 8, padding: 4, marginBottom: 40, border: '1px solid rgba(255,107,0,0.1)' }} className="scrollbar-hide">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderRadius: 6,
              background: tab === t.id ? 'rgba(255,107,0,0.1)' : 'transparent',
              border: tab === t.id ? '1px solid rgba(255,107,0,0.3)' : '1px solid transparent',
              cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s',
            }}>
              <div style={{ background: tab === t.id ? '#FF6B00' : '#1A1A1A', borderRadius: 6, padding: 8, flexShrink: 0 }}>
                <t.icon size={18} color={tab === t.id ? '#fff' : '#555'} />
              </div>
              <div>
                <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 14, letterSpacing: 1, color: tab === t.id ? '#FF6B00' : '#777', textTransform: 'uppercase' }}>{t.title}</div>
                <div style={{ fontSize: 11, color: '#444', marginTop: 2 }}>{t.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ minHeight: 500 }}>
          {tab === 'hotel' && <HotelSection />}
          {tab === 'resto' && <RestaurantSection />}
          {tab === 'flight' && <FlightSection />}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
