import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import DebitCardDemoPage from './pages/DebitCardDemoPage';
import InsightPage from './pages/InsightPage';
import InvestmentPage from './pages/InvestmentPage';
import LearningPage from './pages/LearningPage';

const pages = ['/', '/debit-demo', '/insight', '/investment', '/learning'];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [currentIndex, setCurrentIndex] = useState(pages.indexOf(location.pathname));
  const containerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Sync currentIndex with URL on location change
  useEffect(() => {
    const idx = pages.indexOf(location.pathname);
    if (idx !== -1 && idx !== currentIndex) {
      setCurrentIndex(idx);
    }
  }, [location.pathname]);

  // Smooth scroll to page on index change (triggered by sidebar/dots click or URL change)
  useEffect(() => {
    if (!containerRef.current) return;

    const scrollToPosition = currentIndex * window.innerHeight;
    isAnimatingRef.current = true;

    containerRef.current.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });

    const timeoutId = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  // When user scrolls manually inside container, update currentIndex accordingly
  const onScroll = () => {
    if (isAnimatingRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const newIndex = Math.round(scrollTop / window.innerHeight);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < pages.length) {
      setCurrentIndex(newIndex);
      navigate(pages[newIndex], { replace: true });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleIndicatorClick = (idx) => {
    if (idx === currentIndex) return;
    isAnimatingRef.current = true; // Prevent onScroll during programmatic scroll
    setCurrentIndex(idx);
    navigate(pages[idx]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Left Sidebar */}
      <div
        style={{
          width: sidebarOpen ? 200 : 50,
          transition: 'width 0.3s ease',
          backgroundColor: '#ddd',
          overflow: 'hidden',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content container */}
      <div
        ref={containerRef}
        onScroll={onScroll}
        style={{
          marginLeft: sidebarOpen ? 200 : 50,
          height: '100vh',
          width: '100%',
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          backgroundColor: '#ecf39e',
          position: 'relative',
        }}
      >
        {/* Pages stacked vertically */}
        <div style={{ height: `${pages.length * 100}vh`, position: 'relative' }}>
          <div
            style={{
              height: '100vh',
              overflowY: 'auto',
              scrollSnapAlign: 'start',
            }}
          >
            <LandingPage />
          </div>
          <div
            style={{
              height: '100vh',
              overflowY: 'auto',
              scrollSnapAlign: 'start',
            }}
          >
            <DebitCardDemoPage />
          </div>
          <div
            style={{
              height: '100vh',
              overflowY: 'auto',
              scrollSnapAlign: 'start',
            }}
          >
            <InsightPage />
          </div>
          <div
            style={{
              height: '100vh',
              overflowY: 'auto',
              scrollSnapAlign: 'start',
            }}
          >
            <InvestmentPage />
          </div>
          <div
            style={{
              height: '100vh',
              overflowY: 'auto',
              scrollSnapAlign: 'start',
            }}
          >
            <LearningPage />
          </div>
        </div>

        {/* Right side progress indicator */}
        <div
          style={{
            position: 'fixed',
            top: '50%',
            right: 20,
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            zIndex: 1100,
          }}
        >
          {pages.map((_, idx) => (
            <div
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              style={{
                width: 15,
                height: 15,
                borderRadius: '50%',
                backgroundColor: idx === currentIndex ? '#444' : '#bbb',
                cursor: 'pointer',
                border: '2px solid #999',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
