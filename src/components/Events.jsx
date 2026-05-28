import { useState } from 'react';

const events = [
  { badge:'Webinar', bg:'#FF8C00', title:'System Design Deep Dive', date:'25th May 2026 · 7:00 PM', loc:'Online' },
  { badge:'Meet up', bg:'#05A400', title:'Alumni Meetup Hyderabad', date:'31st May 2026 · 10:00 AM', loc:'Offline' },
  { badge:'Session', bg:'#FF8C00', title:'Resume Building Workshop', date:'08th Jun 2026 · 4:00 PM', loc:'Online' },
  { badge:'Webinar', bg:'#FF8C00', title:'Career Growth Roadmap', date:'15th Jun 2026 · 7:00 PM', loc:'Online' },
];

function EventCard({ ev }) {
  const [h, setH] = useState(false);
  const [bh, setBh] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background:'#fff', borderRadius:20, padding:'20px', border:'1px solid #EAEAEA', boxShadow: h?'0 10px 30px rgba(0,0,0,0.08)':'0 4px 20px rgba(0,0,0,0.04)', transform: h?'translateY(-4px)':'none', transition:'all 0.3s', display:'flex', flexDirection:'column', gap:12 }}>
      <span style={{ display:'inline-block', alignSelf:'flex-start', fontFamily:'Poppins,sans-serif', fontSize:11, fontWeight:600, padding:'4px 12px', borderRadius:6, background:ev.bg, color:'#fff' }}>{ev.badge}</span>
      <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:14, color:'#111', lineHeight:1.4 }}>{ev.title}</h3>
      <div style={{ display:'flex', alignItems:'center', gap:6 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#05A400" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
        <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:400, fontSize:12, color:'#444' }}>{ev.date}</span>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:6 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF0090" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:400, fontSize:12, color:'#444' }}>{ev.loc}</span>
      </div>
      <button onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
        style={{ marginTop:4, padding:'9px 0', borderRadius:10, background: bh?'#2563EB':'#3B82F6', color:'#fff', border:'none', fontFamily:'Poppins,sans-serif', fontWeight:500, fontSize:13, cursor:'pointer', width:'100%', transition:'all 0.3s' }}>Register Now</button>
    </div>
  );
}

export default function Events() {
  return (
    <section className="section-wrap" style={{ background:'#FAFAFA' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div className="section-header">
          <div>
            <span className="section-label">UPCOMING EVENTS</span>
            <h2 className="section-heading">Don't miss our upcoming events</h2>
            <p className="section-subtext" style={{ maxWidth:560 }}>Join exciting meetups, webinars, and networking sessions with the Frontliners alumni community.</p>
          </div>
          <a href="#" style={{ fontFamily:'Poppins,sans-serif', fontSize:14, fontWeight:500, color:'#3B82F6', textDecoration:'none', whiteSpace:'nowrap' }}>View all →</a>
        </div>

        <div style={{ position:'relative' }}>
          <div className="cards-4">
            {events.map((e,i) => <EventCard key={i} ev={e} />)}
          </div>
          <button style={{ position:'absolute', right:-20, top:'50%', transform:'translateY(-50%)', width:40, height:40, borderRadius:'50%', background:'#fff', border:'1px solid #EAEAEA', boxShadow:'0 4px 16px rgba(0,0,0,0.12)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', zIndex:10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
