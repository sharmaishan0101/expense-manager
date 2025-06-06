// src/pages/InvestmentPage.jsx
import React from 'react';

export default function InvestmentPage() {
  const investments = [
    { title: 'Stocks / Shares', description: 'Explore equity markets and listed companies' },
    { title: 'Cryptocurrency', description: 'Invest in digital currencies like Bitcoin, Ethereum' },
    { title: 'Mutual Funds', description: 'Pooled investment funds managed by professionals' },
    { title: 'Bonds', description: 'Low-risk government and corporate bond options' },
    { title: 'Real Estate', description: 'Property investments and REITs (Real Estate Investment Trusts)' },
    { title: 'Gold & Commodities', description: 'Invest in gold, oil, and other physical assets' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ecf39e',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Investment Options</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {investments.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              padding: '15px',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
