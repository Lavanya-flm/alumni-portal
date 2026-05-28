import { useState } from 'react';
import buildImage from '../assets/build.png';

export default function FinalCTA() {
  return (
    <section style={{ padding: '48px 72px 64px', background: '#FAFAFA' }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        background: '#FFF8EF',
        borderRadius: 24,
        border: '1px solid #FF8C00',
        padding: '48px 64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40,
        overflow: 'hidden',
      }}>

        {/* Left — text + buttons */}
        <div style={{ flex: '1 1 auto', maxWidth: 520 }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '130%',
            color: '#FF8C00',
            marginBottom: 16,
            whiteSpace: 'nowrap',
          }}>
            Together, we build stronger careers.
          </h2>

          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            fontSize: 15,
            lineHeight: '170%',
            color: '#555555',
            marginBottom: 32,
            maxWidth: 440,
          }}>
            Share opportunities, support the community, and help the next generation 
            <br /> of Frontliners succeed.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <CTABtn primary>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Share a Referral
            </CTABtn>
            <CTABtn>Join the Community</CTABtn>
          </div>
        </div>

        {/* Right — build image */}
        <div style={{
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
          <img
            src={buildImage}
            alt="Community collaboration"
            style={{
              height: 200,
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

      </div>
    </section>
  );
}

function CTABtn({ primary, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 24px',
        borderRadius: 12,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        border: primary ? 'none' : '1px solid #FF8C00',
        background: primary
          ? (hovered ? '#F57C00' : '#FF8C00')
          : (hovered ? '#FFF3E0' : '#FFFFFF'),
        color: primary ? '#fff' : '#FF8C00',
        boxShadow: primary ? '0 4px 14px rgba(255,140,0,0.28)' : 'none',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
      }}
    >{children}</button>
  );
}
