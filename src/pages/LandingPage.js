import React from 'react';

const WelcomePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',  // aligns items at the top
        alignItems: 'center',
        paddingTop: '60px',             // space from the top
        backgroundColor: '#f3e6d3',
        color: '#333',
        paddingLeft: '20px',
        paddingRight: '20px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          animation: 'fadeIn 2s ease-in-out',
        }}
      >
        Welcome to AnytimeCA
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          maxWidth: '600px',
          animation: 'fadeIn 3s ease-in-out',
          animationDelay: '0.5s',
          animationFillMode: 'forwards',
          opacity: 0,
        }}
      >
        Turn your spending into saving and expenses into investment.
      </p>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default WelcomePage;
