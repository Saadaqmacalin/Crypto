import React from 'react';
import { Link } from 'react-router'; // ✅ Correct import

const NotFoundPage = () => {
  const Styles = {
    container: {
      textAlign: 'center',
      padding: '80px 20px',
      color: '#000', // default text color
    },
    title: {
      fontSize: '72px',
      marginBottom: '20px',
      color: '#000000', // ✅ fixed hex color
    },
    message: {
      fontSize: '24px',
      marginBottom: '30px',
    },
    link: {
      textDecoration: 'none',
      color: '#007bff',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={Styles.container}>
      <h1 style={Styles.title}>404</h1>
      <p style={Styles.message}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to='/' style={Styles.link}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
