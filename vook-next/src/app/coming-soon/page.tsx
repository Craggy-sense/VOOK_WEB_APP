import React from 'react';

export default function ComingSoonPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--primary-dark)',
      color: 'var(--accent-cream)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ 
        fontSize: 'clamp(2rem, 5vw, 4rem)', 
        marginBottom: '1.5rem',
        color: 'var(--accent-red)',
        fontWeight: 'bold',
        lineHeight: '1.2'
      }}>
        Maintenance mode is on.
      </h1>
      <p style={{ 
        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        Site will be available soon. Thank you for your patience.
      </p>
    </div>
  );
}
