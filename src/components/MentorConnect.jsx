import { useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const mentors = [
  { name: 'Sai Kiran', role: 'Product Designer at Zuri', skills: ['System Design', 'UI', 'UX'], photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&auto=format', ringColor: '#BFDBFE' },
  { name: 'Kranthi Kumar', role: 'Data Analyst at Google', skills: ['Python', 'Data Analyst', 'Business'], photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=faces&auto=format', ringColor: '#FBCFE8' },
  { name: 'Jyothi', role: 'Senior Software Engineer at Zoho', skills: ['System Design', 'SQL', 'Java'], photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&auto=format', ringColor: '#E9D5FF' },
  { name: 'Ashwini', role: 'Engineering Manager at Microsoft', skills: ['System Design', 'PM', 'Excel'], photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces&auto=format', ringColor: '#BBF7D0' },
];

function MentorCard({ mentor }) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: '#FFFFFF', borderRadius: 20, padding: '24px 20px', border: '1px solid #EAEAEA', boxShadow: hovered ? '0px 10px 30px rgba(0,0,0,0.08)' : '0px 4px 20px rgba(0,0,0,0.04)', transform: hovered ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}>
      <div style={{ position: 'relative' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', border: `3px solid ${mentor.ringColor}`, overflow: 'hidden', flexShrink: 0 }}>
          <img src={mentor.photo} alt={mentor.name} width={80} height={80} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 2, right: 0, width: 20, height: 20, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#0A66C2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
        </div>
      </div>
      <div>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#111', marginBottom: 4 }}>{mentor.name}</h3>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 12, color: '#666', lineHeight: 1.5, fontStyle: 'italic' }}>{mentor.role}</p>
      </div>
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center' }}>
        {mentor.skills.map((s, i) => <span key={i} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 999, background: '#F5F5F5', color: '#555', border: '1px solid #EAEAEA' }}>{s}</span>)}
      </div>
      <button onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
        style={{ marginTop: 4, padding: '9px 0', borderRadius: 10, background: btnHovered ? '#3B82F6' : 'transparent', color: btnHovered ? '#fff' : '#3B82F6', border: '1.5px solid #3B82F6', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13, cursor: 'pointer', width: '100%', transition: 'all 0.3s ease' }}>Book a Session</button>
    </div>
  );
}

export default function MentorConnect() {
  const [btnHovered, setBtnHovered] = useState(false);
  const { isMobile, isTablet } = useWindowSize();
  const pad = isMobile ? '40px 16px' : isTablet ? '48px 32px' : '56px 72px';
  const cols = isMobile ? '1fr 1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <section style={{ padding: pad, background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 8 : 0, marginBottom: 28 }}>
          <div>
            <span className="section-label">MENTOR CONNECT</span>
            <h2 className="section-heading" style={{ fontSize: isMobile ? 22 : isTablet ? 26 : undefined }}>Learn from Industry Experts</h2>
            <p className="section-subtext" style={{ maxWidth: 520 }}>Connect with experienced professionals and accelerate your growth with personalized mentorship.</p>
          </div>
          <a href="#" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500, color: '#3B82F6', textDecoration: 'none', whiteSpace: 'nowrap' }}>View all →</a>
        </div>

        <div style={{ position: 'relative', marginBottom: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 14 : 20 }}>
            {mentors.map((m, i) => <MentorCard key={i} mentor={m} />)}
          </div>
          {!isMobile && (
            <button style={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: '#FFFFFF', border: '1px solid #EAEAEA', boxShadow: '0 4px 16px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
            style={{ padding: '13px 28px', borderRadius: 12, background: btnHovered ? '#F57C00' : '#FF8C00', color: '#fff', border: 'none', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 14, cursor: 'pointer', boxShadow: '0 4px 16px rgba(255,140,0,0.25)', transform: btnHovered ? 'translateY(-2px)' : 'translateY(0)', transition: 'all 0.3s ease' }}>Become a Mentor</button>
        </div>
      </div>
    </section>
  );
}
