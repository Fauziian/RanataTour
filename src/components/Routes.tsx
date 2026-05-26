import React from 'react';
import { Flag } from 'lucide-react';
import RouteMapImage from '../assets/images/image.png';

const routes = [
  {
    code: 'J1', title: 'Main National Flow',
    riders: '±300 Riders — HDCI', dist: '±1.100 km',
    color: '#CC0000', route: ['Jakarta', 'Cirebon', 'Semarang', 'Solo', 'Surabaya', 'Banyuwangi', 'Bali'],
  },
  {
    code: 'J2', title: 'Cultural Variation',
    riders: '±300 Riders — HDCI', dist: '±1.050 km',
    color: '#1E3A8A', route: ['Bandung', 'Tasikmalaya', 'Purwokerto', 'Solo', 'Surabaya', 'Banyuwangi', 'Bali'],
  },
  {
    code: 'J3', title: 'Evoria Rally Heritage',
    riders: '±400 Riders — Terbuka', dist: '1.216 km',
    color: '#FF6B00', route: ['Bandung', 'Cilacap', 'Gn. Kidul', 'Pacitan', 'Malang', 'Banyuwangi', 'Bali'],
  },
];

const Routes = () => (
  <section id="rute" style={{ background: '#0D0D0D', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
    {/* BG accent */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />

    <div style={{ maxWidth: 1440, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div className="badge-hd" style={{ marginBottom: 20, display: 'inline-flex' }}>3 RUTE NASIONAL</div>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: 4, color: '#fff', margin: 0, lineHeight: 1 }}>
          ROUTE <span style={{ color: '#FF6B00' }}>JOURNEY</span>
        </h2>
        <p style={{ color: '#666', fontSize: 15, maxWidth: 600, margin: '20px auto 0', lineHeight: 1.7 }}>
          Rute dibuat mengikuti konsep journey Merdeka Ride: J1 Main National Flow, J2 Cultural Variation, dan J3 Evoria Rally Heritage.
        </p>
      </div>

      {/* Route Map */}
      <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 64, border: '1px solid rgba(255,107,0,0.2)', boxShadow: '0 0 60px rgba(255,107,0,0.05)' }}>
        <img src={RouteMapImage} alt="Route Map Journey" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* Route Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="routes-grid">
        {routes.map((item, idx) => (
          <div key={idx} className="card-hd" style={{ padding: 32 }}>
            {/* Code */}
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 72, color: item.color, letterSpacing: 2, lineHeight: 1, marginBottom: 4 }}>{item.code}</div>
            <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing: 1, marginBottom: 24 }}>{item.title}</h3>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
              {[{ label: 'RIDERS', val: item.riders }, { label: 'DISTANCE', val: item.dist }].map((s, i) => (
                <div key={i} style={{ background: 'rgba(255,107,0,0.05)', border: '1px solid rgba(255,107,0,0.1)', borderRadius: 4, padding: '12px 14px' }}>
                  <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 9, letterSpacing: 2, color: '#FF6B00', textTransform: 'uppercase', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 13, color: '#ccc' }}>{s.val}</div>
                </div>
              ))}
            </div>

            {/* Route list */}
            <div style={{ position: 'relative', paddingLeft: 20 }}>
              <div style={{ position: 'absolute', left: 7, top: 4, bottom: 4, width: 1, background: 'rgba(255,107,0,0.2)' }} />
              {item.route.map((city, ci) => (
                <div key={ci} style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 10 }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
                    background: ci === item.route.length - 1 ? item.color : 'transparent',
                    border: `2px solid ${ci === item.route.length - 1 ? item.color : 'rgba(255,107,0,0.3)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginLeft: -7,
                  }}>
                    {ci === item.route.length - 1 && <Flag size={6} color="#fff" />}
                  </div>
                  <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 13, letterSpacing: 1, color: ci === item.route.length - 1 ? '#fff' : '#666', fontWeight: ci === item.route.length - 1 ? 600 : 400 }}>{city}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) { .routes-grid { grid-template-columns: 1fr !important; } }
      @media (max-width: 1200px) and (min-width: 900px) { .routes-grid { grid-template-columns: 1fr 1fr !important; } }
    `}</style>
  </section>
);

export default Routes;
