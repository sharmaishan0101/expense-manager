import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/debit-demo', label: 'Debit Card Demo' },
    { to: '/insight', label: 'Insight' },
    { to: '/investment', label: 'Investments' },
    { to: '/learning', label: 'Learning' },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fffffc',
        padding: '10px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        style={{
          fontSize: '24px',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          marginBottom: '20px',
        }}
        aria-label="Toggle Sidebar"
      >
        &#9776;
      </button>

      {/* Navigation Links */}
      <nav style={{ flexGrow: 1 }}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              display: 'block',
              padding: isOpen ? '10px' : '10px 5px',
              backgroundColor: location.pathname === to ? '#bbb' : 'transparent',
              textDecoration: 'none',
              color: 'black',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: isOpen ? 'auto' : '0',
              opacity: isOpen ? 1 : 0,
              transition: 'width 0.3s ease, opacity 0.3s ease',
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
