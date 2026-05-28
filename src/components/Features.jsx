import { useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const features = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>, iconBg: '#FFF7ED', title: 'Referral Network', desc: 'Get internal job referrals from trusted alumni working in top companies.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, iconBg: '#EFF6FF', title: 'Mentorship', desc: 'Book 1:1 mentorship sessions with industry experts and accelerate your career growth.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="3" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" /></svg>, iconBg: '#FAF5FF', title: 'Startup Hiring', desc: 'Discover startup opportunities shared by Frontliners and founders.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /><circle cx="8.5" cy="14" r="1.2" fill="#22C55E" /><circle cx="12" cy="14" r="1.2" fill="#22C55E" /><circle cx="15.5" cy="14" r="1.2" fill="#22C55E" /></svg>, iconBg: '#F0FDF4', title: 'Meetups & Events', desc: 'Attend webinars, networking sessions, alumni meetups, and career workshops.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><line x1="20" y1="8" x2="20" y2="13" strokeDasharray="1.5 1.5" /></svg>, iconBg: '#FDF2F8', title: 'Peer Community', desc: 'Collaborate, discuss ideas, and grow together with like-minded Frontliners.' },
];

export default function Features() {
  const { isMobile, isTablet } = useWindowSize();
  const cols = isMobile ? '1fr 1fr' : isTablet ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)';
  const pad = isMobile ? '32px 16px 40px' : isTablet ? '36px 32px 48px' : '40px 72px 56px';

  return (
    <section style={{ padding: pad, background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#FF8C00', display: 'block', marginBottom: 12 }}>WHAT YOU CAN DO</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: isMobile ? 22 : isTablet ? 26 : 32, lineHeight: '130%', color: '#111111', marginBottom: 10 }}>Everything you need to grow together</h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 14, lineHeight: '170%', color: '#666666', maxWidth: 540 }}>
            Explore opportunities, connect with experts, and build your professional network.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 12 : 14 }}>
          {features.map((f, i) => <FeatureCard key={i} {...f} isFirst={i === 0} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, iconBg, title, desc, isFirst }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: isFirst ? '#FFFFFF' : '#FAFAFA',
        borderRadius: 20, padding: '24px 20px 28px',
        boxShadow: hovered ? '0px 12px 32px rgba(0,0,0,0.09)' : '0px 2px 14px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease', cursor: 'default',
        border: '1px solid #EFEFEF', display: 'flex', flexDirection: 'column', minHeight: 200,
      }}>
      <div style={{ width: 48, height: 48, borderRadius: 14, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, flexShrink: 0 }}>{icon}</div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#111111', marginBottom: 8, lineHeight: '140%' }}>{title}</h3>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 13, color: '#666666', lineHeight: '165%', margin: 0 }}>{desc}</p>
    </div>
  );
}
