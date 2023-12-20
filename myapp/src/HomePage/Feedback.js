import React from 'react';

const FeedbackForm = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ padding: '16px', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '16px' }}>Feedback Form</h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '8px' }}>
            Name
            <input type="text" style={{ width: '100%', padding: '8px', marginBottom: '16px',borderRadius:"7px" }} required />
          </label>
          <label style={{ marginBottom: '8px' }}>
            Email
            <input type="email" style={{ width: '100%', padding: '8px', marginBottom: '16px' ,borderRadius:"7px" }} required />
          </label>
          <label style={{ marginBottom: '8px' }}>
            Feedback
            <textarea
              rows="4"
              style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius:"7px" }}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '7px' }}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
