import { useState } from 'react';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <div style={{ background: '#FAFAFA', paddingBottom: 56 }}>
      {/* Hero Container */}
      <div style={{
        background: '#FFF9F1',
        border: '2px solid #FFFFFF',
        boxShadow: '0px 4px 24px 0px #00000014',
        borderRadius: '0px 0px 48px 48px',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '64px 72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
        }}>
          {/* Left — Content */}
          <div style={{ flex: '0 0 auto', maxWidth: 560 }}>
            {/* Heading */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: 40,
                lineHeight: '100%',
                letterSpacing: 0,
                color: '#000000',
              }}>
                From Learning Together To
              </span>
              <span style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: 40,
                lineHeight: '100%',
                letterSpacing: 0,
                color: '#FF8C00',
              }}>
                Winning Together.
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              fontSize: 16,
              lineHeight: '175%',
              letterSpacing: 0,
              color: '#484848',
              maxWidth: 580,
              marginTop: 24,
              marginBottom: 36,
            }}>
              A powerful alumni community where Frontliners connect, grow, refer
              opportunities, mentor students, and build successful careers together.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <PrimaryButton />
    <SecondaryButton href="https://chat.frontlinesedutech.com" />
            </div>
          </div>

          {/* Right — Illustration */}
          <div style={{
            flex: '0 0 auto',
            width: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src={heroImage}
              alt="Community illustration"
              style={{
                width: '100%',
                maxWidth: 500,
                height: 'auto',
                objectFit: 'contain',
                animation: 'float 4s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Stats Card */}
      <StatsCard />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

function PrimaryButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#F57C00' : '#FF8C00',
        color: '#FFFFFF',
        borderRadius: 12,
        padding: '14px 24px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 15,
        border: 'none',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 6px 20px rgba(255,140,0,0.35)' : '0 2px 8px rgba(255,140,0,0.2)',
      }}
    >
      <ShareIcon />
      Share a Referral
    </button>
  );
}

function SecondaryButton({ href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#FFF3E0' : '#FFFFFF',
        border: '1px solid #FF8C00',
        color: '#FF8C00',
        borderRadius: 12,
        padding: '14px 24px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: 15,
        backdropFilter: 'blur(4px)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      Join the Community
    </a>
  );
}

function ShareIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

/* ── Floating Stats Card ── */
const stats = [
  {
    value: '5,000+',
    label: 'Alumni Community',
    iconBg: '#EFF6FF',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '2,000+',
    label: 'Referrals Shared',
    iconBg: '#FFF7ED',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" fill="none" />
      </svg>
    ),
  },
  {
    value: '150+',
    label: 'Active Mentors',
    iconBg: '#FAF5FF',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    value: '50+',
    label: 'Events Conducted',
    iconBg: '#FDF2F8',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="3" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </svg>
    ),
  },
];

function StatsCard() {
  return (
    <div style={{
      maxWidth: 1200,
      margin: '-40px auto 0',
      padding: '0 40px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        background: '#FFFFFF',
        border: '0.4px solid #C3DAFF',
        boxShadow: '0px 0px 24px 0px #3B82F61A',
        borderRadius: 24,
        padding: '28px 36px',
        display: 'flex',
        alignItems: 'center',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            paddingLeft: i > 0 ? 32 : 0,
            paddingRight: i < stats.length - 1 ? 32 : 0,
            borderRight: i < stats.length - 1 ? '1px solid #EAEAEA' : 'none',
          }}>
            {/* Icon */}
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: s.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {s.icon}
            </div>
            {/* Text */}
            <div>
              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '100%',
                color: '#000000',
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: 13,
                lineHeight: '150%',
                color: '#777777',
                marginTop: 6,
              }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
