import { useState } from 'react';

const jobs = [
  {
    title: 'Software Engineer',
    company: 'Google',
    location: 'Bangalore, India',
    tags: ['3-5 Years', 'Full Time', 'On-site'],
    salary: '₹3 - ₹5LPA',
    referrer: { name: 'Sai Kiran', avatar: 1 },
  },
  {
    title: 'SDE II',
    company: 'Amazon',
    location: 'Hyderabad, India',
    tags: ['3-5 Years', 'On-site'],
    salary: '₹4 - ₹8LPA',
    referrer: { name: 'Vignesh', avatar: 2 },
  },
  {
    title: 'Product Analyst',
    company: 'Flipkart',
    location: 'Bangalore, India',
    tags: ['4-5 Years', 'Full Time'],
    salary: '₹10 - ₹15LPA',
    referrer: { name: 'Sneha', avatar: 3 },
  },
  {
    title: 'Full Stack Developer',
    company: 'Swiggy',
    location: 'Pune, India',
    tags: ['2-5 Years', 'Full Time', 'On-site'],
    salary: '₹5 - ₹9LPA',
    referrer: { name: 'Nandini', avatar: 4 },
  },
];

const tagStyle = (label) => {
  const map = {
    'Full Time':   { bg: '#E4F2EA', color: '#16A34A' },
    'On-site':     { bg: '#EAF2FF', color: '#3B82F6' },
    'Remote':      { bg: '#EAF2FF', color: '#3B82F6' },
    'Hybrid':      { bg: '#EAF2FF', color: '#3B82F6' },
  };
  // experience tags (anything with "Years")
  if (label.includes('Years') || label.includes('Year')) {
    return { bg: '#FAE9FF', color: '#A855F7' };
  }
  return map[label] || { bg: '#F5F5F5', color: '#666' };
};

function Tag({ label }) {
  const s = tagStyle(label);
  return (
    <span style={{
      fontSize: 11, fontWeight: 500, fontFamily: 'Poppins, sans-serif',
      padding: '3px 10px', borderRadius: 999,
      background: s.bg, color: s.color,
    }}>{label}</span>
  );
}

/* Bookmark / Save outline icon */
function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="#999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/* Professional headshot photos via Unsplash */
const AVATARS = {
  1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=faces&auto=format',
  2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces&auto=format',
  3: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format',
  4: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&auto=format',
};

function Avatar({ id, size = 36 }) {
  return (
    <img
      src={AVATARS[id]}
      alt="referrer"
      width={size}
      height={size}
      style={{
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
        flexShrink: 0,
        display: 'block',
      }}
    />
  );
}

function JobCard({ job }) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        borderRadius: 20,
        padding: '24px',
        border: '1px solid #EAEAEA',
        boxShadow: hovered ? '0px 10px 30px rgba(0,0,0,0.08)' : '0px 4px 20px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 600,
            fontSize: 15, color: '#111', marginBottom: 4,
          }}>{job.title}</h3>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: 13, color: '#666' }}>
            {job.company} · {job.location}
          </p>
        </div>
        {/* Bookmark icon */}
        <div style={{
          width: 38, height: 38, borderRadius: 10, background: '#F8F8F8',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          border: '1px solid #EFEFEF',
        }}>
          <BookmarkIcon />
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {job.tags.map((t, i) => <Tag key={i} label={t} />)}
      </div>

      {/* Salary */}
      <div style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 600,
        fontSize: 15, color: '#111',
      }}>{job.salary}</div>

      {/* Divider */}
      <div style={{ height: 1, background: '#F0F0F0' }} />

      {/* Referrer + Apply */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <Avatar id={job.referrer.avatar} size={36} />
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 10, color: '#999', fontWeight: 300 }}>Referred by</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 500, color: '#111' }}>{job.referrer.name}</div>
          </div>
        </div>
        <button
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            padding: '8px 20px', borderRadius: 10,
            background: btnHovered ? '#2563EB' : '#3B82F6',
            color: '#fff', border: 'none',
            fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 13,
            cursor: 'pointer', transition: 'all 0.3s ease',
          }}
        >Apply</button>
      </div>
    </div>
  );
}

export default function ReferralHub() {
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <section style={{ padding: '56px 72px 56px', background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
          <div>
            <span className="section-label">REFERRAL HUB</span>
            <h2 className="section-heading">Top Referral Opportunities</h2>
            <p className="section-subtext">
              Exclusive job opportunities shared directly by alumni from their companies.
            </p>
          </div>
          <a href="#" style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500,
            color: '#3B82F6', textDecoration: 'none', whiteSpace: 'nowrap',
          }}>View all →</a>
        </div>

        {/* Cards + floating carousel button */}
        <div style={{ position: 'relative', marginBottom: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {jobs.map((job, i) => <JobCard key={i} job={job} />)}
          </div>
          {/* Floating right chevron */}
          <button style={{
            position: 'absolute',
            right: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '1px solid #EAEAEA',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'box-shadow 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.18)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              padding: '14px 32px', borderRadius: 12,
              background: btnHovered ? '#F57C00' : '#FF8C00',
              color: '#fff', border: 'none',
              fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 15,
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(255,140,0,0.25)',
              transform: btnHovered ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Share Referral
          </button>
        </div>
      </div>
    </section>
  );
}
