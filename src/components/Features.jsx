const features = [
  { icon:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>, bg:'#FFF7ED', title:'Referral Network', desc:'Get internal job referrals from trusted alumni working in top companies.' },
  { icon:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, bg:'#EFF6FF', title:'Mentorship', desc:'Book 1:1 mentorship sessions with industry experts and accelerate your career growth.' },
  { icon:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="3"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>, bg:'#FAF5FF', title:'Startup Hiring', desc:'Discover startup opportunities shared by Frontliners and founders.' },
  { icon:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/><circle cx="8.5" cy="14" r="1.2" fill="#22C55E"/><circle cx="12" cy="14" r="1.2" fill="#22C55E"/><circle cx="15.5" cy="14" r="1.2" fill="#22C55E"/></svg>, bg:'#F0FDF4', title:'Meetups & Events', desc:'Attend webinars, networking sessions, alumni meetups, and career workshops.' },
  { icon:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, bg:'#FDF2F8', title:'Peer Community', desc:'Collaborate, discuss ideas, and grow together with like-minded Frontliners.' },
];

export default function Features() {
  return (
    <section className="features-wrap">
      <div className="section-inner">
        <div className="features-header">
          <span className="section-label">WHAT YOU CAN DO</span>
          <h2 className="section-heading">Everything you need to grow together</h2>
          <p className="section-subtext">Explore opportunities, connect with experts, and build your professional network.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card${i === 0 ? ' first' : ''}`}>
              <div className="feature-icon" style={{ background: f.bg }}>{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
