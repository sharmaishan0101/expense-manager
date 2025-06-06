import React, { useState } from 'react';

const SpendingForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.amount || !formData.date) return;
    onAdd(formData);
    setFormData({ category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '5px' }}>Add</button>
    </form>
  );
};

export default SpendingForm;
