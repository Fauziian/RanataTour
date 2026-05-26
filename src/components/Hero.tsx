import React from 'react';
import { Calendar, Play, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="benefit" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0800 40%, #0A0A0A 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 80,
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80")`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.12,
      }} />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.97) 40%, rgba(10,10,10,0.3) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 300, background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      {/* Decorative glow */}
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '30%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(204,0,0,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* LEFT */}
        <div>
          <div className="badge-hd" style={{ marginBottom: 24, animation: 'fade-up 0.6s ease forwards' }}>
            <span style={{ width: 6, height: 6, background: '#FF6B00', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            EVENT SPESIAL HARLEY-DAVIDSON 2026
          </div>

          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(64px, 8vw, 120px)', letterSpacing: 4, lineHeight: 0.95, color: '#fff', marginBottom: 8 }}>
            MERDEKA
          </div>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(64px, 8vw, 120px)', letterSpacing: 4, lineHeight: 0.95, background: 'linear-gradient(135deg, #CC0000, #FF6B00, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 32 }}>
            RIDE
          </div>

          <div style={{ width: 80, height: 3, background: 'linear-gradient(90deg, #FF6B00, #FFD700)', marginBottom: 28 }} />

          <p style={{ color: '#aaa', fontSize: 16, lineHeight: 1.8, maxWidth: 500, marginBottom: 40 }}>
            Ranata Tour menghadirkan layanan reservasi lengkap untuk hotel, restoran, dan tiket pesawat opsional menuju Bali. Nikmati perjalanan nyaman, terorganisir, dan berkesan bersama komunitas Harley-Davidson.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            <a href="#reservasi" className="btn-hd-primary" style={{ textDecoration: 'none' }}>
              <Calendar size={18} />
              <span>Reservasi Sekarang</span>
            </a>
            <a href="#rute" className="btn-hd-outline" style={{ textDecoration: 'none' }}>
              <Play size={18} />
              <span>Lihat Rute</span>
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,107,0,0.15)', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,107,0,0.2)' }}>
            {[
              { num: '1.000+', label: 'Riders' },
              { num: '1.216', label: 'Kilometer' },
              { num: '3', label: 'Rute Nasional' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#111', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 32, color: '#FF6B00', letterSpacing: 2 }}>{s.num}</div>
                <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 2, color: '#666', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,107,0,0.2)', boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(255,107,0,0.08)' }}>
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=90"
              alt="Harley Davidson Rider"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'brightness(0.7) contrast(1.1)' }}
            />
            {/* Gradient overlay on image */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)' }} />

            {/* LIVE badge */}
            <div style={{
              position: 'absolute', top: 20, right: 20,
              background: '#CC0000', color: '#fff',
              fontFamily: '"Oswald", sans-serif', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
              padding: '8px 16px', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 0 20px rgba(204,0,0,0.5)',
            }}>
              <span style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%', animation: 'pulse 1.5s infinite' }} />
              LIVE EVENT
            </div>

            {/* Date card */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: 24,
              backdropFilter: 'blur(12px)',
              background: 'rgba(10,10,10,0.7)',
              borderTop: '1px solid rgba(255,107,0,0.2)',
            }}>
              <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 4, color: '#FF6B00', textTransform: 'uppercase', marginBottom: 8 }}>Event Date</div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 36, letterSpacing: 3, color: '#fff', marginBottom: 12 }}>25 – 27 JULI 2026</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <MapPin size={14} color="#FF6B00" />
                <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 12, letterSpacing: 3, color: '#aaa', textTransform: 'uppercase' }}>
                  Banyuwangi → Bali
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
