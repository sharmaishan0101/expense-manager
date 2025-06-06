import React, { useState } from 'react';

const fakeTransactions = [
  { id: 1, date: '2025-06-01', merchant: 'Amazon', amount: -54.99 },
  { id: 2, date: '2025-06-03', merchant: 'Starbucks', amount: -4.75 },
  { id: 3, date: '2025-06-05', merchant: 'Salary', amount: 2500.0 },
  { id: 4, date: '2025-06-06', merchant: 'Netflix', amount: -12.99 },
];

export default function DebitCardDemoPage() {
  const [connected, setConnected] = useState(false);

  const connectBank = () => setConnected(true);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h2>Debit/Credit Card Transactions</h2>
      {!connected ? (
        <button
          onClick={connectBank}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Connect Bank (Demo)
        </button>
      ) : (
        <>
          <p><i>Showing sample transactions from your connected bank account:</i></p>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '20px',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #444' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Date</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Merchant</th>
                <th style={{ textAlign: 'right', padding: '8px' }}>Amount ($)</th>
              </tr>
            </thead>
            <tbody>
              {fakeTransactions.map(({ id, date, merchant, amount }) => (
                <tr key={id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '8px' }}>{date}</td>
                  <td style={{ padding: '8px' }}>{merchant}</td>
                  <td
                    style={{
                      padding: '8px',
                      textAlign: 'right',
                      color: amount < 0 ? 'red' : 'green',
                    }}
                  >
                    {amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#555' }}>
            * This is sample data to demonstrate how transactions would appear after secure connection.
          </p>
        </>
      )}
    </div>
  );
}
