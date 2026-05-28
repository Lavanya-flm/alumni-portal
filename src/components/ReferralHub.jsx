import { useState } from 'react';

const jobs = [
  { title:'Software Engineer', company:'Google', location:'Bangalore, India', tags:['3-5 Years','Full Time','On-site'], salary:'₹3 - ₹5LPA', ref:{ name:'Sai Kiran', av:1 } },
  { title:'SDE II', company:'Amazon', location:'Hyderabad, India', tags:['3-5 Years','On-site'], salary:'₹4 - ₹8LPA', ref:{ name:'Vignesh', av:2 } },
  { title:'Product Analyst', company:'Flipkart', location:'Bangalore, India', tags:['4-5 Years','Full Time'], salary:'₹10 - ₹15LPA', ref:{ name:'Sneha', av:3 } },
  { title:'Full Stack Developer', company:'Swiggy', location:'Pune, India', tags:['2-5 Years','Full Time','On-site'], salary:'₹5 - ₹9LPA', ref:{ name:'Nandini', av:4 } },
];

const tagStyle = l => {
  if (l.includes('Year')) return { bg:'#FAE9FF', c:'#A855F7' };
  return ({ 'Full Time':{bg:'#E4F2EA',c:'#16A34A'}, 'On-site':{bg:'#EAF2FF',c:'#3B82F6'}, 'Remote':{bg:'#EAF2FF',c:'#3B82F6'}, 'Hybrid':{bg:'#EAF2FF',c:'#3B82F6'} })[l] || { bg:'#F5F5F5', c:'#666' };
};

const AVATARS = {
  1:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=faces&auto=format',
  2:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces&auto=format',
  3:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format',
  4:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&auto=format',
};

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-top">
        <div>
          <h3 style={{ fontFamily:'Poppins,sans-serif', fontWeight:600, fontSize:14, color:'#111', marginBottom:3 }}>{job.title}</h3>
          <p style={{ fontFamily:'Poppins,sans-serif', fontWeight:300, fontSize:12, color:'#666' }}>{job.company} · {job.location}</p>
        </div>
        <div className="job-bookmark">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </div>
      </div>
      <div className="job-tags">
        {job.tags.map((t,i) => {
          const s = tagStyle(t);
          return <span key={i} className="job-tag" style={{ background:s.bg, color:s.c }}>{t}</span>;
        })}
      </div>
      <div className="job-salary">{job.salary}</div>
      <div className="job-divider" />
      <div className="job-footer">
        <div className="job-referrer">
          <img src={AVATARS[job.ref.av]} alt="" width={32} height={32} className="job-referrer-img" />
          <div>
            <div className="job-referrer-label">Referred by</div>
            <div className="job-referrer-name">{job.ref.name}</div>
          </div>
        </div>
        <button className="job-apply-btn">Apply</button>
      </div>
    </div>
  );
}

export default function ReferralHub() {
  return (
    <section className="section-wrap">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <span className="section-label">REFERRAL HUB</span>
            <h2 className="section-heading">Top Referral Opportunities</h2>
            <p className="section-subtext">Exclusive job opportunities shared directly by alumni from their companies.</p>
          </div>
          <a href="#" className="section-view-all">View all →</a>
        </div>

        <div className="cards-relative">
          <div className="cards-4">
            {jobs.map((j,i) => <JobCard key={i} job={j} />)}
          </div>
          <button className="carousel-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="section-cta">
          <button className="section-cta-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Share Referral
          </button>
        </div>
      </div>
    </section>
  );
}
