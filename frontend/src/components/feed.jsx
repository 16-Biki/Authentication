import React from 'react';

function Feed({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, {user.name}!</h1>

      <div style={{ marginTop: '20px' }}>
        <h3>Your Details:</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
      </div>

      <button
        onClick={handleLogout}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Feed;
