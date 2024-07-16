// import React from "react";
// import CommonNavbar from "../Shared/CommonNavbar";
// import { QARoutes } from "../../constants";

// export default function QANavbar() {
//   return (
//     <CommonNavbar
//       wrapperClass="left-navbar"
//       menuItemClass="nav-button"
//       routes={QARoutes}
//       isSubMenu={false}
//     />
//   );
// }

import React, { useState, useEffect } from "react";
import CommonNavbar from "../Shared/CommonNavbar";
import "../../css/global-styles.css";
import { useUser } from "../../UserContext";
import axios from "axios";
import { QARoutes } from "../../constants";

interface UserProfile {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  id?: number;
}

export default function QANavbar() {
  const { userId } = useUser();
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [editProfile, setEditProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [profile, setProfile] = useState<UserProfile>({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    axios
      .post("https://axs2459.uta.cloud/profile.php", {
        user_id: userId,
      })
      .then((response) => {
        if (response.data.error) {
          console.error(response.data.error);
        } else {
          setUser(response.data);
          setProfile({
            firstname: response.data.fname,
            lastname: response.data.lname,
            email: response.data.email,
            phone: response.data.phone,
            id: response.data.id,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching user details: ", error);
      });
  }, [userId]);

  useEffect(() => {
    setEditProfile({
      firstname: profile.firstname,
      lastname: profile.lastname,
      email: profile.email,
      phone: profile.phone || "",
    });
  }, [profile]);

  const handleEditProfileSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('firstname', editProfile.firstname);
    formData.append('lastname', editProfile.lastname);
    formData.append('email', editProfile.email);
    formData.append('phone', editProfile.phone);

    fetch('https://axs2459.uta.cloud/updateProfile.php', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error('Error updating profile:', data.error);
        } else {
          setProfile(prev => ({
            ...prev,
            firstname: data.name,
            lastname: data.lname,
            email: data.email,
            phone: data.phone,
          }));
          setShowEditProfile(false);
        }
      })
      .catch(error => {
        console.error('There was an error updating the profile:', error);
      });
  };


  return (

    <div>
      <button type="submit" onClick={() => setShowProfile(!showProfile)}>
        View Profile
      </button>
      <button type="submit" onClick={() => setShowEditProfile(true)}>
        Edit Profile
      </button>
      {showProfile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#007bff",
              padding: "20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setShowProfile(false)}
                style={{
                  background: "white",
                  borderRadius: "5px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                X
              </button>

            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              
              <p style={{ margin: 0 }}>Fake User ID: {profile.id}</p>
              <p style={{ margin: 0 }}>First Name: {profile.firstname}</p>
              <p style={{ margin: 0 }}>Last Name: {profile.lastname}</p>
              <p style={{ margin: 0 }}>Email: {profile.email}</p>
              <p style={{ margin: 0 }}>Phone Number: {profile.phone}</p>

              {/* Include any other profile details you wish to display */}
            </div>
          </div>
        </div>
      )}
      {showEditProfile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#007bff",
              padding: "20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setShowEditProfile(false)}
                style={{
                  background: "white",
                  borderRadius: "5px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
            <form onSubmit={handleEditProfileSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: 'center'
                }}
              >
                {/* Input fields for edit form */}
                <input type="text" value={editProfile.firstname} onChange={(e) => setEditProfile({ ...editProfile, firstname: e.target.value })} placeholder=" Edit First Name"
                  style={{ borderRadius: "10px", width: '80%', height: '40px' }} />
                <input type="text" value={editProfile.lastname} onChange={(e) => setEditProfile({ ...editProfile, lastname: e.target.value })} placeholder=" Edit Last Name"
                  style={{ borderRadius: "10px", width: '80%', height: '40px' }} />
                <input type="email" value={editProfile.email} onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })} placeholder=" Edit Email"
                  style={{ borderRadius: "10px", width: '80%', height: '40px' }} />
                <input type="tel" value={editProfile.phone} onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })} placeholder=" Edit Phone Number"
                  style={{ borderRadius: "10px", width: '80%', height: '40px' }} />
                <button type="submit" style={{ width: '40%', backgroundColor: 'whitesmoke', color: 'black' }}>Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <CommonNavbar
        isSubMenu={false}
        wrapperClass="left-navbar"
      menuItemClass="nav-button"
        routes={QARoutes}
      />
    </div>
  );
}