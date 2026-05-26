import React from 'react';
import { Phone, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => (
  <footer style={{ background: '#000', borderTop: '1px solid rgba(255,107,0,0.15)', padding: '60px 24px 32px' }}>
    <div style={{ maxWidth: 1440, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60, marginBottom: 48 }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 36, letterSpacing: 4, color: '#fff', marginBottom: 4 }}>
            MERDEKA <span style={{ color: '#FF6B00' }}>RIDE</span>
          </div>
          <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 4, color: '#555', marginBottom: 24 }}>RANATA TOUR × HARLEY-DAVIDSON</div>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #FF6B00, #CC0000)', marginBottom: 24 }} />
          <p style={{ color: '#555', fontSize: 13, lineHeight: 1.8, maxWidth: 360 }}>
            Layanan reservasi eksklusif untuk event Harley-Davidson Merdeka Ride 2026. Hotel, restoran, dan tiket pesawat menuju Bali dalam satu platform.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {[
              { icon: MessageCircle, label: 'WhatsApp', color: '#25D366', href: 'https://wa.me/' },
              { icon: Instagram, label: 'Instagram', color: '#E1306C', href: '#' },
              { icon: Phone, label: 'Telepon', color: '#FF6B00', href: 'tel:' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{
                width: 40, height: 40, background: '#111', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color, textDecoration: 'none', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = `${s.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = '#111'; }}
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 13, letterSpacing: 3, color: '#FF6B00', textTransform: 'uppercase', marginBottom: 24 }}>Navigasi</h4>
          {['Benefit', 'Rute Perjalanan', 'Reservasi Hotel', 'Pembayaran', 'Tentang Event'].map((link, i) => (
            <a key={i} href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
              display: 'block', fontFamily: '"Oswald", sans-serif', fontSize: 13, letterSpacing: 1,
              color: '#555', textDecoration: 'none', marginBottom: 12, textTransform: 'uppercase',
              transition: 'color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FF6B00')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}
            >{link}</a>
          ))}
        </div>

        {/* Event Info */}
        <div>
          <h4 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 13, letterSpacing: 3, color: '#FF6B00', textTransform: 'uppercase', marginBottom: 24 }}>Info Event</h4>
          <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,107,0,0.1)', borderRadius: 8, padding: 20 }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, color: '#fff', letterSpacing: 2, lineHeight: 1, marginBottom: 8 }}>25 – 27 JULI 2026</div>
            <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 11, letterSpacing: 3, color: '#555', marginBottom: 16, textTransform: 'uppercase' }}>Banyuwangi → Bali</div>
            <div className="divider-hd" style={{ marginBottom: 16 }} />
            <div style={{ fontFamily: '"Oswald", sans-serif', fontSize: 12, color: '#666', letterSpacing: 1 }}>HUT RI ke-81 · National Movement</div>
          </div>
          <button className="btn-hd-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
            <Phone size={16} />
            <span>Hubungi Admin</span>
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: 12, letterSpacing: 2, color: '#333', textTransform: 'uppercase' }}>
          © 2026 MERDEKA RIDE — RANATA TOUR × HARLEY-DAVIDSON
        </p>
        <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: 12, letterSpacing: 2, color: '#333', textTransform: 'uppercase' }}>
          Bike to the Culture
        </p>
      </div>
    </div>
    <style>{`@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
  </footer>
);

export default Footer;
