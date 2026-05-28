const mentors = [
  { name:'Sai Kiran', role:'Product Designer at Zuri', skills:['System Design','UI','UX'], photo:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#BFDBFE' },
  { name:'Kranthi Kumar', role:'Data Analyst at Google', skills:['Python','Data Analyst','Business'], photo:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#FBCFE8' },
  { name:'Jyothi', role:'Senior Software Engineer at Zoho', skills:['System Design','SQL','Java'], photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#E9D5FF' },
  { name:'Ashwini', role:'Engineering Manager at Microsoft', skills:['System Design','PM','Excel'], photo:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#BBF7D0' },
];

function MentorCard({ m }) {
  return (
    <div className="mentor-card">
      <div className="mentor-avatar-wrap">
        <div className="mentor-avatar" style={{ width:80, height:80, border:`3px solid ${m.ring}` }}>
          <img src={m.photo} alt={m.name} width={80} height={80} />
        </div>
        <div className="mentor-linkedin">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#0A66C2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </div>
      </div>
      <div>
        <h3 className="mentor-name">{m.name}</h3>
        <p className="mentor-role">{m.role}</p>
      </div>
      <div className="mentor-skills">
        {m.skills.map((s,i) => <span key={i} className="mentor-skill">{s}</span>)}
      </div>
      <button className="mentor-book-btn">Book a Session</button>
    </div>
  );
}

export default function MentorConnect() {
  return (
    <section className="section-wrap">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <span className="section-label">MENTOR CONNECT</span>
            <h2 className="section-heading">Learn from Industry Experts</h2>
            <p className="section-subtext">Connect with experienced professionals and accelerate your growth with personalized mentorship.</p>
          </div>
          <a href="#" className="section-view-all">View all →</a>
        </div>

        <div className="cards-relative">
          <div className="cards-4-mentor">
            {mentors.map((m,i) => <MentorCard key={i} m={m} />)}
          </div>
          <button className="carousel-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="section-cta">
          <button className="section-cta-btn">Become a Mentor</button>
        </div>
      </div>
    </section>
  );
}
