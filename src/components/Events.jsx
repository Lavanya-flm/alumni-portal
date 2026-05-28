import { useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const events = [
  { badge: 'Webinar', badgeBg: '#FF8C00', badgeColor: '#FFFFFF', title: 'System Design Deep Dive', date: '25th May 2026 · 7:00 PM', location: 'Online' },
  { badge: 'Meet up', badgeBg: '#05A400', badgeColor: '#FFFFFF', title: 'Alumni Meetup Hyderabad', date: '31st May 2026 · 10:00 AM', location: 'Offline' },
  { badge: 'Session', badgeBg: '#FF8C00', badgeColor: '#FFFFFF', title: 'Resume Building Workshop', date: '08th Jun 2026 · 4:00 PM', location: 'Online' },
  { badge: 'Webinar', badgeBg: '#FF8C00', badgeColor: '#FFFFFF', title: 'Career Growth Roadmap', date: '15th Jun 2026 · 7:00 PM', location: 'Online' },
];

function EventCard({ event }) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: '#FFFFFF', borderRadius: 20, padding: '20px', border: '1px solid #EAEAEA', boxShadow: hovered ? '0px 10px 30px rgba(0,0,0,0.08)' : '0px 4px 20px rgba(0,0,0,0.04)', transform: hovered ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <span style={{ display: 'inline-block', alignSelf: 'flex-start', fontFamily: 'Poppins, sans-serif', fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 6, background: event.badgeBg, color: event.badgeColor }}>{event.badge}</span>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#111', lineHeight: 1.4 }}>{event.title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#05A400" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 12, color: '#444' }}>{event.date}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF0090" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 12, color: '#444' }}>{event.location}</span>
      </div>
      <button onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
        style={{ marginTop: 4, padding: '9px 0', borderRadius: 10, background: btnHovered ? '#2563EB' : '#3B82F6', color: '#fff', border: 'none', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13, cursor: 'pointer', width: '100%', transition: 'all 0.3s ease' }}>Register Now</button>
    </div>
  );
}

export default function Events() {
  const { isMobile, isTablet } = useWindowSize();
  const pad = isMobile ? '40px 16px' : isTablet ? '48px 32px' : '56px 72px';
  const cols = isMobile ? '1fr 1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <section style={{ padding: pad, background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 8 : 0, marginBottom: 28 }}>
          <div>
            <span className="section-label">UPCOMING EVENTS</span>
            <h2 className="section-heading" style={{ fontSize: isMobile ? 22 : isTablet ? 26 : undefined }}>Don't miss our upcoming events</h2>
            <p className="section-subtext" style={{ maxWidth: 560 }}>Join exciting meetups, webinars, and networking sessions with the Frontliners alumni community.</p>
          </div>
          <a href="#" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500, color: '#3B82F6', textDecoration: 'none', whiteSpace: 'nowrap' }}>View all →</a>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 14 : 20 }}>
            {events.map((e, i) => <EventCard key={i} event={e} />)}
          </div>
          {!isMobile && (
            <button style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: '#FFFFFF', border: '1px solid #EAEAEA', boxShadow: '0 4px 16px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
