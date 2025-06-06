import React, { useState } from 'react';

const demoVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'What is Gold?',
  },
  {
    id: 'fN4-YWgUfOY',
    title: 'How the Share Market Works',
  },
  {
    id: 'SSo_EIwHSd4',
    title: 'Blockchain Explained Simply',
  },
];

export default function LearningPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = demoVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1>Learning Center</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search for articles or videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      {/* Static Articles */}
      <div style={{ marginBottom: '40px' }}>
        <h2>Articles</h2>
        <ul>
          <li>What is Gold and Why is it Valuable?</li>
          <li>Introduction to the Share Market</li>
          <li>How Mutual Funds Work</li>
          <li>Understanding Bonds</li>
          <li>What is Blockchain Technology?</li>
        </ul>
      </div>

      {/* Simulated YouTube Video Results */}
      <div>
        <h2>Videos</h2>
        {filteredVideos.map((video) => (
          <div key={video.id} style={{ marginBottom: '30px' }}>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
        {filteredVideos.length === 0 && <p>No videos found for that search.</p>}
      </div>
    </div>
  );
}
