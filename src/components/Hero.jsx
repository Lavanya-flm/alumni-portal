import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-layout">
          {/* Left content */}
          <div className="hero-content">
            <div className="hero-text-wrap">
              <span className="hero-h1 hero-h1-main">From Learning Together To</span>
              <span className="hero-h1 hero-h1-accent">Winning Together.</span>
            </div>
            <p className="hero-description">
              A powerful alumni community where Frontliners connect, grow, refer opportunities, mentor students, and build successful careers together.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Share a Referral
              </button>
              <a href="https://chat.frontlinesedutech.com" target="_blank" rel="noopener noreferrer" className="hero-btn secondary">
                Join the Community
              </a>
            </div>
          </div>

          {/* Right image — hidden on mobile via CSS */}
          <div className="hero-image">
            <img src={heroImage} alt="Community illustration" className="hero-img" />
          </div>
        </div>
      </div>

      {/* Stats card */}
      <div className="stats-wrap">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className={`stats-item${i < stats.length - 1 ? ' stats-item-border' : ''}`}>
                <div className="stats-icon" style={{ background: s.bg }}>{s.icon}</div>
                <div>
                  <div className="stats-value">{s.v}</div>
                  <div className="stats-label">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    v: '5,000+', l: 'Alumni Community', bg: '#EFF6FF',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    v: '2,000+', l: 'Referrals Shared', bg: '#FFF7ED',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="none"/></svg>
  },
  {
    v: '150+', l: 'Active Mentors', bg: '#FAF5FF',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
  },
  {
    v: '50+', l: 'Events Conducted', bg: '#FDF2F8',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
  },
];
