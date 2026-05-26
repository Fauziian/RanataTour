import React from 'react';

const AboutEvent = () => (
  <section id="tentang-event" style={{ background: '#0D0D0D', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
    {/* BG image */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url("https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&w=1600&q=80")`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      opacity: 0.04,
    }} />
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />

    <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
        {/* LEFT */}
        <div>
          <div className="badge-hd" style={{ marginBottom: 24, display: 'inline-flex' }}>TENTANG EVENT</div>
          <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 5vw, 80px)', letterSpacing: 4, color: '#fff', lineHeight: 1, marginBottom: 32 }}>
            BIKE TO THE <span style={{ color: '#FF6B00' }}>CULTURE</span>
          </h2>
          <p style={{ color: '#777', fontSize: 16, lineHeight: 1.9, marginBottom: 24 }}>
            Merdeka Ride dibuat sebagai perjalanan budaya, komunitas, dan national movement. Ranata Tour berperan sebagai penyedia layanan reservasi yang membantu peserta Harley-Davidson mendapatkan akomodasi terbaik.
          </p>
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.9, marginBottom: 48 }}>
            Peserta mendapatkan akses restoran terverifikasi via QR code, reservasi hotel eksklusif, serta opsi tiket pesawat menuju Bali untuk event HUT RI ke-81.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, border: '1px solid rgba(255,107,0,0.15)', borderRadius: 8, overflow: 'hidden' }}>
            {[
              { title: 'Live', desc: 'Stok & Status' },
              { title: 'QR', desc: 'Restoran Verified' },
              { title: 'Struk', desc: 'Hasil Pembayaran' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#111', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 40, color: '#FF6B00', letterSpacing: 2, lineHeight: 1 }}>{item.title}</div>
                <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 2, color: '#555', textTransform: 'uppercase', marginTop: 6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div style={{ background: '#111', border: '1px solid rgba(255,107,0,0.15)', borderRadius: 12, padding: 40, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: 'radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />

            <div style={{ display: 'inline-block', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.3)', borderRadius: 2, padding: '6px 14px', fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 3, color: '#FF6B00', textTransform: 'uppercase', marginBottom: 24 }}>
              Highlight Area
            </div>
            <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 26, color: '#fff', letterSpacing: 1, marginBottom: 16 }}>Grand Nusantara Culture Dinner</h3>
            <p style={{ color: '#666', fontSize: 14, lineHeight: 1.8, marginBottom: 32 }}>
              Banyuwangi menjadi titik akhir perjalanan sebelum Evo Island Bali, menghadirkan pengalaman budaya dan hospitality yang tertata untuk para riders.
            </p>

            {[
              { label: 'Final Destination', val: 'Banyuwangi → Bali' },
              { label: 'Puncak Event', val: 'HUT RI ke-81', highlight: true },
              { label: 'Total Jarak', val: '1.216 KM · 3 Rute' },
              { label: 'Komunitas', val: 'HDCI + Terbuka' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 6, padding: '14px 18px', marginBottom: 8 }}>
                <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 2, color: '#555', textTransform: 'uppercase' }}>{row.label}</span>
                <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 14, color: row.highlight ? '#FFD700' : '#ccc', letterSpacing: 1 }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
  </section>
);

export default AboutEvent;
