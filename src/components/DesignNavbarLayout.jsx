import React from 'react';

const Navbar = ({
  logoSrc = 'logo.png',
  logoAlt = 'Company',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaText = 'Get Started',
  ctaHref = '/signup',
}) => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '80px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  };

  const logoStyle = {
    height: '48px',
    objectFit: 'contain',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'color 0.2s',
  };

  const linkHoverStyle = {
    color: '#000',
  };

  const ctaStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s, transform 0.1s',
  };

  const ctaHoverStyle = {
    backgroundColor: '#005bb5',
    transform: 'translateY(-1px)',
  };

  return (
    <header style={headerStyle}>
      <a href="/">
        <img src={logoSrc} alt={logoAlt} style={logoStyle} />
      </a>
      <nav>
        <ul style={navStyle}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href={ctaHref}
        style={ctaStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = ctaHoverStyle.backgroundColor;
          e.currentTarget.style.transform = ctaHoverStyle.transform;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = ctaStyle.backgroundColor;
          e.currentTarget.style.transform = 'none';
        }}
      >
        {ctaText}
      </a>
    </header>
  );
};

export default Navbar;