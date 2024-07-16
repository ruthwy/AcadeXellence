import React, { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  useEffect(() => {
    // Call the logout API
    axios.get('https://axs2459.uta.cloud/logout.php')
      .then(response => {
        if (response.data === 'success') {
          // Clear local storage and redirect to login page
          localStorage.removeItem('userId');
          window.location.href = '/login';
        } else {
          console.error("Failed to logout");
        }
      })
      .catch(error => {
        console.error("Error during logout: ", error);
      });
  }, []);

  return null;
};

export default Logout;
