import { useState } from 'react';
import buildImage from '../assets/build.png';
import { useWindowSize } from '../hooks/useWindowSize';

export default function FinalCTA() {
  const { isMobile, isTablet } = useWindowSize();
  const pad = isMobile ? '32px 16px 48px' : isTablet ? '40px 32px 56px' : '48px 72px 64px';

  return (
    <section style={{ padding: pad, background: '#FAFAFA' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        background: '#FFF8EF', borderRadius: 24,
        border: '1px solid #FF8C00',
        padding: isMobile ? '28px 20px' : isTablet ? '36px 36px' : '48px 64px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 24 : 40,
        overflow: 'hidden',
      }}>
        {/* Left */}
        <div style={{ flex: '1 1 auto', maxWidth: isMobile ? '100%' : 520 }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 600,
            fontSize: isMobile ? 20 : isTablet ? 22 : 28,
            lineHeight: '130%', color: '#FF8C00', marginBottom: 14,
            whiteSpace: isMobile ? 'normal' : 'nowrap',
          }}>
            Together, we build stronger careers.
          </h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 300,
            fontSize: isMobile ? 13 : 15, lineHeight: '170%', color: '#555555',
            marginBottom: 28, maxWidth: 440,
          }}>
            Share opportunities, support the community, and help the next generation<br />
            of Frontliners succeed.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <CTABtn primary>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Share a Referral
            </CTABtn>
            <CTABtn href="https://chat.frontlinesedutech.com">Join the Community</CTABtn>
          </div>
        </div>

        {/* Right */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={buildImage} alt="Community collaboration"
            style={{ height: isMobile ? 140 : isTablet ? 160 : 200, width: 'auto', objectFit: 'contain', display: 'block' }} />
        </div>
      </div>
    </section>
  );
}

function CTABtn({ primary, href, children }) {
  const [hovered, setHovered] = useState(false);
  const styles = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '11px 22px', borderRadius: 12,
    fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 14,
    cursor: 'pointer', transition: 'all 0.25s ease', textDecoration: 'none',
    border: primary ? 'none' : '1px solid #FF8C00',
    background: primary ? (hovered ? '#F57C00' : '#FF8C00') : (hovered ? '#FFF3E0' : '#FFFFFF'),
    color: primary ? '#fff' : '#FF8C00',
    boxShadow: primary ? '0 4px 14px rgba(255,140,0,0.28)' : 'none',
    transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
  };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={styles}>{children}</a>;
  return <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={styles}>{children}</button>;
}
