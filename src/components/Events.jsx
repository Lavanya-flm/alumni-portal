import { useState } from 'react';

const events = [
  {
    badge: 'Webinar',
    badgeBg: '#FF8C00', badgeColor: '#FFFFFF',
    title: 'System Design Deep Dive',
    date: '25th May 2026 · 7:00 PM',
    location: 'Online',
  },
  {
    badge: 'Meet up',
    badgeBg: '#05A400', badgeColor: '#FFFFFF',
    title: 'Alumni Meetup Hyderabad',
    date: '31st May 2026 · 10:00 AM',
    location: 'Offline',
  },
  {
    badge: 'Session',
    badgeBg: '#FF8C00', badgeColor: '#FFFFFF',
    title: 'Resume Building Workshop',
    date: '08th Jun 2026 · 4:00 PM',
    location: 'Online',
  },
  {
    badge: 'Webinar',
    badgeBg: '#FF8C00', badgeColor: '#FFFFFF',
    title: 'Career Growth Roadmap',
    date: '15th Jun 2026 · 7:00 PM',
    location: 'Online',
  },
];

function CalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#05A400" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF0090" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function EventCard({ event }) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        borderRadius: 20,
        padding: '24px',
        border: '1px solid #EAEAEA',
        boxShadow: hovered ? '0px 10px 30px rgba(0,0,0,0.08)' : '0px 4px 20px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      {/* Badge — slightly rounded rectangle, not full pill */}
      <span style={{
        display: 'inline-block', alignSelf: 'flex-start',
        fontFamily: 'Poppins, sans-serif', fontSize: 11, fontWeight: 600,
        padding: '5px 14px', borderRadius: 6,
        background: event.badgeBg,
        color: event.badgeColor,
      }}>{event.badge}</span>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 600,
        fontSize: 15, color: '#111', lineHeight: 1.4,
      }}>{event.title}</h3>

      {/* Date — plain text, green icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <CalIcon />
        <span style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 13, color: '#444',
        }}>
          {event.date}
        </span>
      </div>

      {/* Location — plain text, pink icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <PinIcon />
        <span style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: 13, color: '#444',
        }}>
          {event.location}
        </span>
      </div>

      {/* Button */}
      <button
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          marginTop: 4, padding: '10px 0', borderRadius: 10,
          background: btnHovered ? '#2563EB' : '#3B82F6',
          color: '#fff', border: 'none',
          fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13,
          cursor: 'pointer', width: '100%',
          transition: 'all 0.3s ease',
        }}
      >Register Now</button>
    </div>
  );
}

export default function Events() {
  return (
    <section style={{ padding: '56px 72px 56px', background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
          <div>
            <span className="section-label">UPCOMING EVENTS</span>
            <h2 className="section-heading">Don't miss our upcoming events</h2>
            <p className="section-subtext" style={{ maxWidth: 560 }}>
              Join exciting meetups, webinars, and networking sessions with the Frontliners alumni community.
            </p>
          </div>
          <a href="#" style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500,
            color: '#3B82F6', textDecoration: 'none', whiteSpace: 'nowrap',
          }}>View all →</a>
        </div>

        {/* Cards + floating carousel button */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {events.map((e, i) => <EventCard key={i} event={e} />)}
          </div>

          {/* Floating right chevron button — attached outside right edge of last card */}
          <button style={{
            position: 'absolute',
            right: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '1px solid #EAEAEA',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'box-shadow 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.18)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
