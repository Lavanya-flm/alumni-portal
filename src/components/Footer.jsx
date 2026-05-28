import logoImg from '../assets/Link.svg';

export default function Footer() {
  return (
    <footer style={{
      background: '#F9F9F9',
      borderTop: '1px solid #EAEAEA',
      fontFamily: 'Poppins, sans-serif',
    }}>
      {/* Main content */}
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '52px 72px 36px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1.2fr 1.5fr 1.5fr',
          gap: 40,
          alignItems: 'flex-start',
        }}>

          {/* Col 1 — Brand */}
          <div>
            <img
              src={logoImg}
              alt="Frontlines EduTech"
              style={{ height: 44, width: 'auto', objectFit: 'contain', display: 'block', marginBottom: 16 }}
            />
            <p style={{
              fontSize: 13, fontWeight: 300, color: '#666',
              lineHeight: 1.8, maxWidth: 240,
            }}>
              Frontlines Edutech delivers high-quality, practical education in Telugu, helping
              students overcome barriers, build real-world skills, and become confident,
              job-ready professionals connected to the right opportunities.
            </p>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 20 }}>Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
              {['Referral', 'Mentor', 'Events', 'Community'].map(link => (
                <li key={link}>
                  <a href="#" style={{
                    fontSize: 13, fontWeight: 300, color: '#666',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#FF8C00'}
                    onMouseLeave={e => e.target.style.color = '#666'}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Policies & Company */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 20 }}>Policies & Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
              {['Cancellation Policy', 'Refund Policy', 'About Us'].map(link => (
                <li key={link}>
                  <a href="#" style={{
                    fontSize: 13, fontWeight: 300, color: '#666',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#FF8C00'}
                    onMouseLeave={e => e.target.style.color = '#666'}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Address */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 20 }}>Address</h4>

            {/* Location */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                background: '#FFB900', border: '1px solid #FFB900',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: 1,
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, color: '#666', lineHeight: 1.7, margin: 0 }}>
                1st Floor, Central Plaza, Durga Nagar Colony, Somajiguda, Hyderabad, Telangana 500082
              </p>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                background: '#FFB900', border: '1px solid #FFB900',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <a href="mailto:support@frontlinesedutech.com" style={{
                fontSize: 13, fontWeight: 300, color: '#666',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#FF8C00'}
                onMouseLeave={e => e.target.style.color = '#666'}
              >support@frontlinesedutech.com</a>
            </div>
          </div>

          {/* Col 5 — Reach out */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 20 }}>Reach out Us here at</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['+91 8333077727', '+91 8333071727'].map((num, i) => (
                <a key={i} href={`tel:${num.replace(/\s/g, '')}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#22C55E', color: '#fff',
                  padding: '8px 14px', borderRadius: 8,
                  fontSize: 13, fontWeight: 500, textDecoration: 'none',
                  transition: 'background 0.2s',
                  width: 'fit-content',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#16A34A'}
                  onMouseLeave={e => e.currentTarget.style.background = '#22C55E'}
                >
                  {num}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Social icons — no divider line above */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          marginTop: 40,
        }}>
          <SocialBtn href="#" label="Instagram">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="#E1306C" stroke="none" />
            </svg>
          </SocialBtn>

          <SocialBtn href="#" label="YouTube">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="#FF0000" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
          </SocialBtn>

          <SocialBtn href="#" label="LinkedIn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SocialBtn>

          <SocialBtn href="#" label="WhatsApp">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
          </SocialBtn>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #EAEAEA' }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '14px 72px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: 13, fontWeight: 300, color: '#888', fontFamily: 'Poppins, sans-serif' }}>
            All rights reserved 2026 © Frontlines EduTech
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms & Conditions'].map(link => (
              <a key={link} href="#" style={{
                fontSize: 13, fontWeight: 400, color: '#666',
                textDecoration: 'none', fontFamily: 'Poppins, sans-serif',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#FF8C00'}
                onMouseLeave={e => e.target.style.color = '#666'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: 38, height: 38, borderRadius: '50%',
        background: '#F3F4F6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none',
        transition: 'transform 0.2s, background 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.background = '#E5E7EB'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#F3F4F6'; }}
    >
      {children}
    </a>
  );
}

