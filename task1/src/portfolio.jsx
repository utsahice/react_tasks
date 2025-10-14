import React from 'react';
import profilePic from '/assets/u1.jpg'; 

function Portfolio({ bio }) {
  return (
    <div style={styles.container}>
      <img src={profilePic} alt="Profile" style={styles.image} />
      <h1 style={styles.name}>Utsahi Chauhan</h1>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
}

const styles = {
  
  image: {
    width: '150px',
    height: '150px',

    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    margin: '16px 0 8px',
  },
  bio: {
    fontSize: '16px',
    color: '#5e5e5e',
  },
};

export default Portfolio;
