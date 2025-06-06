import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const pieData = [
  { name: 'Food', value: 400 },
  { name: 'Rent', value: 1000 },
  { name: 'Utilities', value: 300 },
  { name: 'Entertainment', value: 200 },
  { name: 'Transportation', value: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA47BC'];

const lineData = [
  { date: 'Mon', spending: 50 },
  { date: 'Tue', spending: 75 },
  { date: 'Wed', spending: 65 },
  { date: 'Thu', spending: 80 },
  { date: 'Fri', spending: 90 },
  { date: 'Sat', spending: 70 },
  { date: 'Sun', spending: 60 },
];

const tips = [
  "Reduce dining out to save 15-20% on food expenses.",
  "Consider energy-saving appliances to lower utility bills.",
  "Use public transportation to cut down on travel costs.",
  "Track subscriptions and cancel unused ones.",
];

export default function InsightPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#fefefe', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Spending Analysis & Tips</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {/* Pie Chart */}
        <div style={{ flex: '1 1 300px', maxWidth: 400, backgroundColor: '#f9f9f9', borderRadius: 10, padding: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ textAlign: 'center' }}>Spending by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div style={{ flex: '1 1 300px', maxWidth: 600, backgroundColor: '#f9f9f9', borderRadius: 10, padding: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ textAlign: 'center' }}>Weekly Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="spending" stroke="#82ca9d" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tips Section */}
      <div style={{ marginTop: '3rem', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#e7f3fe', padding: '1.5rem 2rem', borderRadius: 10, boxShadow: '0 0 10px rgba(0,123,255,0.2)' }}>
        <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>Money Saving Tips</h3>
        <ul style={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6 }}>
          {tips.map((tip, index) => (
            <li key={index} style={{ marginBottom: '0.75rem' }}>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
