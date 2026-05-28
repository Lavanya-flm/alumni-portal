import { useState } from 'react';
import buildImage from '../assets/build.png';

export default function FinalCTA() {
  return (
    <section className="cta-wrap" style={{ background:'#FAFAFA' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div className="cta-inner" style={{ background:'#FFF8EF', borderRadius:24, border:'1px solid #FF8C00', overflow:'hidden' }}>
          <div style={{ flex:'1 1 auto', minWidth:0 }}>
            <h2 className="cta-h2" style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, lineHeight:'130%', color:'#FF8C00', marginBottom:14 }}>
              Together, we build stronger careers.
            </h2>
            <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:15, lineHeight:'170%', color:'#555', marginBottom:28, maxWidth:440 }}>
              Share opportunities, support the community, and help the next generation<br/>of Frontliners succeed.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <CTABtn primary>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Share a Referral
              </CTABtn>
              <CTABtn href="https://chat.frontlinesedutech.com">Join the Community</CTABtn>
            </div>
          </div>
          <div style={{ flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <img src={buildImage} alt="Community" className="cta-img" style={{ width:'auto', objectFit:'contain', display:'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABtn({ primary, href, children }) {
  const [h, setH] = useState(false);
  const s = { display:'inline-flex', alignItems:'center', gap:8, padding:'11px 22px', borderRadius:12, fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:14, cursor:'pointer', transition:'all 0.25s', textDecoration:'none', border: primary?'none':'1px solid #FF8C00', background: primary?(h?'#F57C00':'#FF8C00'):(h?'#FFF3E0':'#fff'), color: primary?'#fff':'#FF8C00', boxShadow: primary?'0 4px 14px rgba(255,140,0,0.28)':'none', transform: h?'translateY(-1px)':'none' };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={s}>{children}</a>;
  return <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={s}>{children}</button>;
}
