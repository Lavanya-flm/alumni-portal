import { useState } from 'react';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <div style={{ background:'#FAFAFA', paddingBottom:56 }}>
      <div style={{ background:'#FFF9F1', border:'2px solid #FFFFFF', boxShadow:'0px 4px 24px 0px #00000014', borderRadius:'0px 0px 48px 48px', overflow:'hidden' }}>
        {/* hero-layout controls flex-direction, padding via CSS */}
        <div className="hero-layout">
          {/* Left content */}
          <div style={{ flex:'1 1 auto', minWidth:0 }}>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <span className="hero-h1" style={{ fontFamily:'Poppins,sans-serif', fontWeight:500, lineHeight:'110%', color:'#000' }}>
                From Learning Together To
              </span>
              <span className="hero-h1" style={{ fontFamily:'Poppins,sans-serif', fontWeight:500, lineHeight:'110%', color:'#FF8C00' }}>
                Winning Together.
              </span>
            </div>
            <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:15, lineHeight:'175%', color:'#484848', maxWidth:500, marginTop:20, marginBottom:32 }}>
              A powerful alumni community where Frontliners connect, grow, refer opportunities, mentor students, and build successful careers together.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <PrimaryBtn />
              <SecondaryBtn href="https://chat.frontlinesedutech.com" />
            </div>
          </div>

          {/* Right — hero-image class hides on mobile via CSS */}
          <div className="hero-image">
            <img src={heroImage} alt="Community"
              style={{ width:'100%', height:'auto', objectFit:'contain', animation:'float 4s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      {/* Stats card */}
      <div className="stats-wrap">
        <div style={{ background:'#fff', border:'0.4px solid #C3DAFF', boxShadow:'0px 0px 24px 0px #3B82F61A', borderRadius:24 }}>
          {/* stats-grid controls layout via CSS */}
          <div className="stats-grid">
            {stats.map((s,i) => (
              <div key={i} className={`stats-item${i < stats.length-1 ? ' stats-item-border' : ''}`}
                style={{ paddingLeft:i>0?28:0, paddingRight:i<stats.length-1?28:0 }}>
                <div style={{ width:36, height:36, borderRadius:10, background:s.bg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:18, color:'#000' }}>{s.v}</div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:12, color:'#777', marginTop:4 }}>{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>
    </div>
  );
}

function PrimaryBtn() {
  const [h,setH] = useState(false);
  return (
    <button onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ background:h?'#F57C00':'#FF8C00', color:'#fff', borderRadius:12, padding:'12px 22px', fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:14, border:'none', display:'flex', alignItems:'center', gap:8, cursor:'pointer', transition:'all 0.3s', transform:h?'translateY(-2px)':'none', boxShadow:h?'0 6px 20px rgba(255,140,0,0.35)':'0 2px 8px rgba(255,140,0,0.2)' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      Share a Referral
    </button>
  );
}

function SecondaryBtn({ href }) {
  const [h,setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ background:h?'#FFF3E0':'#fff', border:'1px solid #FF8C00', color:'#FF8C00', borderRadius:12, padding:'12px 22px', fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:14, textDecoration:'none', display:'inline-block', transition:'all 0.3s', cursor:'pointer' }}>
      Join the Community
    </a>
  );
}

const stats = [
  { v:'5,000+', l:'Alumni Community', bg:'#EFF6FF', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { v:'2,000+', l:'Referrals Shared', bg:'#FFF7ED', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="none"/></svg> },
  { v:'150+', l:'Active Mentors', bg:'#FAF5FF', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg> },
  { v:'50+', l:'Events Conducted', bg:'#FDF2F8', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg> },
];
