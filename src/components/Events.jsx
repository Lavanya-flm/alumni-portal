const events = [
  { badge:'Webinar', bg:'#FF8C00', title:'System Design Deep Dive', date:'25th May 2026 · 7:00 PM', loc:'Online' },
  { badge:'Meet up', bg:'#05A400', title:'Alumni Meetup Hyderabad', date:'31st May 2026 · 10:00 AM', loc:'Offline' },
  { badge:'Session', bg:'#FF8C00', title:'Resume Building Workshop', date:'08th Jun 2026 · 4:00 PM', loc:'Online' },
  { badge:'Webinar', bg:'#FF8C00', title:'Career Growth Roadmap', date:'15th Jun 2026 · 7:00 PM', loc:'Online' },
];

function EventCard({ ev }) {
  return (
    <div className="event-card">
      <span className="event-badge" style={{ background: ev.bg }}>{ev.badge}</span>
      <h3 className="event-title">{ev.title}</h3>
      <div className="event-meta">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#05A400" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
        <span>{ev.date}</span>
      </div>
      <div className="event-meta">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF0090" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>{ev.loc}</span>
      </div>
      <button className="event-register-btn">Register Now</button>
    </div>
  );
}

export default function Events() {
  return (
    <section className="section-wrap">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <span className="section-label">UPCOMING EVENTS</span>
            <h2 className="section-heading">Don't miss our upcoming events</h2>
            <p className="section-subtext">Join exciting meetups, webinars, and networking sessions with the Frontliners alumni community.</p>
          </div>
          <a href="#" className="section-view-all">View all →</a>
        </div>

        <div className="cards-relative">
          <div className="cards-4">
            {events.map((e,i) => <EventCard key={i} ev={e} />)}
          </div>
          <button className="carousel-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
