import { useState } from 'react';

const mentors = [
  { name:'Sai Kiran', role:'Product Designer at Zuri', skills:['System Design','UI','UX'], photo:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#BFDBFE' },
  { name:'Kranthi Kumar', role:'Data Analyst at Google', skills:['Python','Data Analyst','Business'], photo:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#FBCFE8' },
  { name:'Jyothi', role:'Senior Software Engineer at Zoho', skills:['System Design','SQL','Java'], photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#E9D5FF' },
  { name:'Ashwini', role:'Engineering Manager at Microsoft', skills:['System Design','PM','Excel'], photo:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces&auto=format', ring:'#BBF7D0' },
];

function MentorCard({ m }) {
  const [h, setH] = useState(false);
  const [bh, setBh] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background:'#fff', borderRadius:20, padding:'24px 20px', border:'1px solid #EAEAEA', boxShadow: h?'0 10px 30px rgba(0,0,0,0.08)':'0 4px 20px rgba(0,0,0,0.04)', transform: h?'translateY(-4px)':'none', transition:'all 0.3s', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:12 }}>
      <div style={{ position:'relative' }}>
        <div style={{ width:80, height:80, borderRadius:'50%', border:`3px solid ${m.ring}`, overflow:'hidden' }}>
          <img src={m.photo} alt={m.name} width={80} height={80} style={{ display:'block', width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
        <div style={{ position:'absolute', bottom:2, right:0, width:20, height:20, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.15)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#0A66C2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </div>
      </div>
      <div>
        <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:14, color:'#111', marginBottom:4 }}>{m.name}</h3>
        <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:12, color:'#666', lineHeight:1.5, fontStyle:'italic' }}>{m.role}</p>
      </div>
      <div style={{ display:'flex', gap:5, flexWrap:'wrap', justifyContent:'center' }}>
        {m.skills.map((s,i) => <span key={i} style={{ fontFamily:'Poppins,sans-serif', fontSize:11, fontWeight:500, padding:'3px 9px', borderRadius:999, background:'#F5F5F5', color:'#555', border:'1px solid #EAEAEA' }}>{s}</span>)}
      </div>
      <button onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
        style={{ marginTop:4, padding:'9px 0', borderRadius:10, background: bh?'#3B82F6':'transparent', color: bh?'#fff':'#3B82F6', border:'1.5px solid #3B82F6', fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:13, cursor:'pointer', width:'100%', transition:'all 0.3s' }}>Book a Session</button>
    </div>
  );
}

export default function MentorConnect() {
  const [bh, setBh] = useState(false);
  return (
    <section className="section-wrap" style={{ background:'#FAFAFA' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div className="section-header">
          <div>
            <span className="section-label">MENTOR CONNECT</span>
            <h2 className="section-heading">Learn from Industry Experts</h2>
            <p className="section-subtext" style={{ maxWidth:520 }}>Connect with experienced professionals and accelerate your growth with personalized mentorship.</p>
          </div>
          <a href="#" style={{ fontFamily:'Poppins,sans-serif', fontSize:14, fontWeight:500, color:'#3B82F6', textDecoration:'none', whiteSpace:'nowrap' }}>View all →</a>
        </div>

        <div style={{ position:'relative', marginBottom:40 }}>
          <div className="cards-4-mentor">
            {mentors.map((m,i) => <MentorCard key={i} m={m} />)}
          </div>
          <button style={{ position:'absolute', right:-20, top:'50%', transform:'translateY(-50%)', width:40, height:40, borderRadius:'50%', background:'#fff', border:'1px solid #EAEAEA', boxShadow:'0 4px 16px rgba(0,0,0,0.12)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', zIndex:10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div style={{ textAlign:'center' }}>
          <button onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
            style={{ padding:'13px 28px', borderRadius:12, background: bh?'#F57C00':'#FF8C00', color:'#fff', border:'none', fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:14, cursor:'pointer', boxShadow:'0 4px 16px rgba(255,140,0,0.25)', transform: bh?'translateY(-2px)':'none', transition:'all 0.3s' }}>Become a Mentor</button>
        </div>
      </div>
    </section>
  );
}
