import React from 'react';

const WelcomePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // aligns items at the top
        alignItems: 'center',
        paddingTop: '60px', // space from the top
        backgroundColor: '#ecf39e',
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

      <p
        style={{
          fontSize: '1.3rem',
          maxWidth: '700px',
          animation: 'fadeIn 3s ease-in-out',
          animationDelay: '1.5s',
          animationFillMode: 'forwards',
          opacity: 0,
          lineHeight: '1.8',
          marginTop: '30px',
        }}
      >
        <strong>Anytime CA?</strong> Yes, you read that right! Anytime CA is your personal Chartered Accountant—
        always available, always reliable. <br /><br />
        Our mission is simple: help you grow your wealth by doing exactly what you're already doing.
        No extra income, no new savings strategies—just smarter choices made easier. <br /><br />
        Because when financial wisdom meets everyday life, success follows.
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
