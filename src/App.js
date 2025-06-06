import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import DebitCardDemoPage from './pages/DebitCardDemoPage';  // moved here
import InsightPage from './pages/InsightPage';
import InvestmentPage from './pages/InvestmentPage';
import LearningPage from './pages/LearningPage';

const pages = ['/', '/debit-demo', '/insight', '/investment', '/learning'];  // reordered

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [currentIndex, setCurrentIndex] = useState(pages.indexOf(location.pathname));
  const isScrollingRef = useRef(false);

  // Sync currentIndex with URL on location change
  useEffect(() => {
    const idx = pages.indexOf(location.pathname);
    if (idx !== -1) setCurrentIndex(idx);
  }, [location.pathname]);

  // Scroll handler with smooth scroll animation
  const handleWheel = (e) => {
    if (isScrollingRef.current) return; // prevent multiple triggers while scrolling

    if (e.deltaY > 0 && currentIndex < pages.length - 1) {
      isScrollingRef.current = true;
      setCurrentIndex((prev) => {
        const next = prev + 1;
        navigate(pages[next]);
        return next;
      });
      setTimeout(() => { isScrollingRef.current = false; }, 800);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      isScrollingRef.current = true;
      setCurrentIndex((prev) => {
        const next = prev - 1;
        navigate(pages[next]);
        return next;
      });
      setTimeout(() => { isScrollingRef.current = false; }, 800);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleIndicatorClick = (idx) => {
    if (idx === currentIndex) return;
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
        onWheel={handleWheel}
        style={{
          marginLeft: sidebarOpen ? 200 : 50,
          height: '100vh',
          flexGrow: 1,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#f3e6d3',
        }}
      >
        {/* Pages stacked vertically */}
        <div
          style={{
            height: '500vh', // 5 pages * 100vh each
            width: '100%',
            transform: `translateY(-${currentIndex * 100}vh)`,
            transition: 'transform 0.7s ease-in-out',
          }}
        >
          <div style={{ height: '100vh', overflowY: 'auto' }}>
            <LandingPage />
          </div>
          <div style={{ height: '100vh', overflowY: 'auto' }}>
            <DebitCardDemoPage />
          </div>
          <div style={{ height: '100vh', overflowY: 'auto' }}>
            <InsightPage />
          </div>
          <div style={{ height: '100vh', overflowY: 'auto' }}>
            <InvestmentPage />
          </div>
          <div style={{ height: '100vh', overflowY: 'auto' }}>
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
