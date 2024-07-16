import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve email from local storage
    const userEmail = localStorage.getItem('userEmail'); 

    if (userEmail) {
      axios.get(`https://axs2459.uta.cloud/getUserDetails.php?email=${userEmail}`)
        .then(response => setUser(response.data))
        .catch(error => console.error(error));
    }
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p><strong>First Name:</strong> {user.fname}</p>
          <p><strong>Last Name:</strong> {user.lname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Role:</strong> {user.role}</p>
          {/* ... other user details ... */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
