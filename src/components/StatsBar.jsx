const stats = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill="#A855F7" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="8" r="3" fill="#A855F7" opacity="0.5" />
        <path d="M19 15c2.5.5 4 2 4 5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    value: '5,000+',
    label: 'Alumni Community',
    color: '#A855F7',
    bg: '#F3E8FF',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="5" r="3" fill="#3B82F6" />
        <circle cx="6" cy="12" r="3" fill="#3B82F6" />
        <circle cx="18" cy="19" r="3" fill="#3B82F6" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    value: '2,000+',
    label: 'Referrals Shared',
    color: '#3B82F6',
    bg: '#EFF6FF',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF9800" />
      </svg>
    ),
    value: '150+',
    label: 'Active Mentors',
    color: '#FF9800',
    bg: '#FFF7ED',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="#22C55E" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" stroke="#22C55E" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="14" r="1.5" fill="#22C55E" />
        <circle cx="12" cy="14" r="1.5" fill="#22C55E" />
        <circle cx="16" cy="14" r="1.5" fill="#22C55E" />
      </svg>
    ),
    value: '50+',
    label: 'Events Conducted',
    color: '#22C55E',
    bg: '#F0FDF4',
  },
];

export default function StatsBar() {
  return (
    <div style={{
      maxWidth: 1100,
      margin: '-56px auto 0',
      padding: '0 32px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 10px 40px rgba(0,0,0,0.10)',
        display: 'flex',
        overflow: 'hidden',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            flex: 1,
            padding: '28px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            borderRight: i < stats.length - 1 ? '1px solid #EAEAEA' : 'none',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: s.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {s.icon}
            </div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 700, color: '#111', lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#666', marginTop: 3 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
