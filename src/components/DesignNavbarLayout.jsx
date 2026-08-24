import React, { useState } from 'react';

/*
  Font Choices:
    - Primary Font: 'Inter', sans-serif (used for logo and navigation links)
    - Fallback Font: system-ui

  Color Palette:
    - Primary Background: #1F2937 (gray-800)
    - Primary Text: #F9FAFB (gray-50)
    - Accent Color: #3B82F6 (blue-500) for hover/active states
    - Mobile Menu Background: #111827 (gray-900)
*/

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = ['Home', 'Features', 'Pricing', 'About', 'Contact'];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">MyApp</div>
        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <style jsx>{`
        .navbar {
          font-family: 'Inter', system-ui, sans-serif;
          background-color: #1f2937;
          color: #f9fafb;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }
        .nav-links li a {
          color: #f9fafb;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links li a:hover {
          color: #3b82f6;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .hamburger .bar {
          width: 24px;
          height: 2px;
          background-color: #f9fafb;
          transition: background-color 0.2s;
        }
        .hamburger:hover .bar {
          background-color: #3b82f6;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #111827;
            flex-direction: column;
            align-items: center;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
          }
          .nav-links.open {
            max-height: 300px; /* enough to show all links */
            transition: max-height 0.4s ease-in;
          }
          .nav-links li {
            width: 100%;
            text-align: center;
            padding: 0.75rem 0;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;