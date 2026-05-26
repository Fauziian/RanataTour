import React from 'react';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

const steps = [
  { num: '01', title: 'Upload Bukti Pembayaran', desc: 'Peserta mengunggah bukti transfer sesuai instruksi admin Ranata Tour setelah reservasi hotel/restoran/tiket.' },
  { num: '02', title: 'Verifikasi Admin', desc: 'Admin mengecek nominal, data peserta, ketersediaan stok, dan status QR restoran bila layanan restoran dipilih.' },
  { num: '03', title: 'Struk Pembayaran', desc: 'Setelah berhasil, peserta menerima struk dan detail reservasi sebagai bukti resmi layanan event.' },
];

const PaymentFlow = () => (
  <section id="pembayaran" style={{ background: '#0A0A0A', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
    {/* Decorative */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #CC0000, transparent)' }} />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, background: 'radial-gradient(circle, rgba(204,0,0,0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

    <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 2 }}>
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <div className="badge-hd" style={{ marginBottom: 20, display: 'inline-flex' }}>ALUR PEMBAYARAN</div>
        <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(48px, 6vw, 90px)', letterSpacing: 4, color: '#fff', margin: 0 }}>
          DARI RESERVASI <span style={{ color: '#FF6B00' }}>HINGGA STRUK</span>
        </h2>
        <p style={{ color: '#555', fontSize: 15, maxWidth: 600, margin: '20px auto 0' }}>
          Setelah reservasi melalui WhatsApp, peserta mengunggah bukti pembayaran. Admin verifikasi, lalu sistem menampilkan struk pembayaran.
        </p>
      </div>

      {/* Steps */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 72, position: 'relative' }} className="steps-grid">
        {/* Connector line */}
        <div className="connector-line" style={{ position: 'absolute', top: 44, left: '16%', right: '16%', height: 1, background: 'linear-gradient(90deg, #CC0000, #FF6B00, #CC0000)', opacity: 0.3, zIndex: 0 }} />

        {steps.map((s, i) => (
          <div key={i} className="card-hd" style={{ padding: 32, textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              width: 72, height: 72, margin: '0 auto 24px',
              background: 'linear-gradient(135deg, #CC0000, #FF6B00)',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(255,107,0,0.3)',
            }}>
              <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, color: '#fff', letterSpacing: 2 }}>{s.num}</span>
            </div>
            <h3 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 18, color: '#fff', letterSpacing: 1, marginBottom: 12 }}>{s.title}</h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Upload + Receipt */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="payment-grid">
        {/* Upload */}
        <div style={{
          border: '2px dashed rgba(255,107,0,0.25)', borderRadius: 12, padding: 60,
          textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s',
          background: 'rgba(255,107,0,0.02)',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.6)'; e.currentTarget.style.background = 'rgba(255,107,0,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.25)'; e.currentTarget.style.background = 'rgba(255,107,0,0.02)'; }}
        >
          <div style={{ width: 80, height: 80, background: '#1A1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <UploadCloud size={32} color="#FF6B00" />
          </div>
          <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: 18, color: '#fff', letterSpacing: 1, marginBottom: 8 }}>Upload Bukti Pembayaran</p>
          <p style={{ fontSize: 13, color: '#555' }}>Format: JPG, PNG, atau PDF</p>
        </div>

        {/* Receipt */}
        <div style={{ background: '#111', border: '1px solid rgba(255,107,0,0.15)', borderRadius: 12, padding: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%)' }} />
          <div style={{ borderBottom: '1px solid rgba(255,107,0,0.1)', paddingBottom: 20, marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ fontFamily: '"Oswald", sans-serif', fontSize: 18, color: '#fff', letterSpacing: 1, marginBottom: 4 }}>Merdeka Ride Reservation</h4>
              <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 3, color: '#555', textTransform: 'uppercase' }}>Ranata Tour</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 4, padding: '6px 12px' }}>
              <CheckCircle2 size={14} color="#4ADE80" />
              <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 10, letterSpacing: 2, color: '#4ADE80', textTransform: 'uppercase' }}>Terverifikasi</span>
            </div>
          </div>
          {[
            { label: 'Layanan', val: 'Hotel' },
            { label: 'Event', val: 'Merdeka Ride HDCI 2026' },
            { label: 'Tanggal', val: '25–27 Juli 2026' },
            { label: 'Status', val: 'Pembayaran Berhasil', highlight: true },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: '#555' }}>{row.label}</span>
              <span style={{ fontFamily: '"Oswald", sans-serif', fontSize: 14, letterSpacing: 1, color: row.highlight ? '#4ADE80' : '#ccc' }}>{row.val}</span>
            </div>
          ))}
          <div style={{ marginTop: 24, height: 2, background: 'linear-gradient(90deg, #CC0000, #FF6B00)' }} />
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .steps-grid { grid-template-columns: 1fr !important; }
        .connector-line { display: none; }
        .payment-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default PaymentFlow;
