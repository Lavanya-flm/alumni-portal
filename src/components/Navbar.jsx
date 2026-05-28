import { useState } from 'react';
import logoImg from '../assets/Link.svg';

export default function Navbar() {
  return (
    <nav style={{
      background: '#FFFFFF',
      borderBottom: '1px solid #EAEAEA',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 72px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo image */}
        <img
          src={logoImg}
          alt="Frontliners"
          style={{ height: 36, width: 'auto', objectFit: 'contain', display: 'block' }}
        />

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 36 }}>
          {['Home', 'Referrals', 'Mentors', 'Events', 'Community'].map(item => (
            <NavLink key={item} label={item} />
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 12 }}>
          <NavBtn outline>Log In</NavBtn>
          <NavBtn>Sign Up</NavBtn>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 14, fontWeight: 400, fontFamily: 'Poppins, sans-serif',
        color: hovered ? '#FF8C00' : '#555',
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
    >{label}</a>
  );
}

function NavBtn({ outline, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '8px 20px',
        borderRadius: 10,
        border: outline ? '1px solid #FF8C00' : 'none',
        background: outline
          ? (hovered ? '#FFF3E0' : 'transparent')
          : (hovered ? '#F57C00' : '#FF8C00'),
        color: outline ? '#FF8C00' : '#fff',
        fontWeight: 500,
        fontSize: 14,
        fontFamily: 'Poppins, sans-serif',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >{children}</button>
  );
}

