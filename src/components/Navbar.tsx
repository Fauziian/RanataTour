import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Benefit', 'Rute', 'Reservasi', 'Pembayaran', 'Tentang Event'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,107,0,0.2)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, letterSpacing: 4, color: '#fff', lineHeight: 1 }}>
              MERDEKA <span style={{ color: '#FF6B00' }}>RIDE</span>
            </span>
            <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 9, letterSpacing: 4, color: '#888', marginTop: 2 }}>
              RANATA TOUR × HARLEY-DAVIDSON
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex" style={{ gap: 40 }}>
            {links.map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{ fontFamily: '"Oswald", sans-serif', fontSize: 13, letterSpacing: 2, color: '#aaa', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6B00')}
                onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}
              >{item}</a>
            ))}
          </div>

          {/* CTA */}
          <a href="#reservasi" className="btn-hd-primary hidden sm:inline-flex" style={{ textDecoration: 'none' }}>
            <Calendar size={16} />
            <span>Reservasi Sekarang</span>
          </a>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: '#FF6B00', cursor: 'pointer' }}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: '#111', borderTop: '1px solid rgba(255,107,0,0.2)', padding: '20px 24px' }}>
            {links.map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontFamily: '"Oswald", sans-serif', fontSize: 16, letterSpacing: 2, color: '#ccc', textDecoration: 'none', textTransform: 'uppercase', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >{item}</a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
