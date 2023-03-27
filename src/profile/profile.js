import React from "react";
import PropTypes from "prop-types";
import issameljaouhari from "./issameljaouhari.jpg";


const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#4650B6",
      padding: "60px",
      margin: "400px", 
      borderRadius: "10px",
    },
    image: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "40px",
      
    },
    name: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "black",
    },
    profession: {
      fontSize: "20px",
      marginBottom: "10px",
    },
    bio: {
      fontSize: "16px",
      textAlign: "center",
      marginBottom: "20px",
    },
    button: {
      padding: "15px",
      backgroundColor: "#DAF7A6",
      color: "#4650B6",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
   
  };

  return (
    <div style={styles.container}>
      {children && <img src={children} alt="profile" style={styles.image} />}
      {!children && <img src={issameljaouhari} alt="profile" style={styles.image} />}
      <div style={styles.name}>{fullName}</div>
      <div style={styles.profession}>{profession}</div>
      <div style={styles.bio}> {bio}</div>

      <button style={styles.button} onClick={() => handleName(fullName)}>
    Alert Me
      </button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: "Issam El Jaouhari",
  bio: " Hi👋 How are you! I'm Issam El Jaouhari, known as Izzy, I made unexpected stuff when i touch the key🎹",  
  profession: "Software Developer",
  children: "",
  handleName: (name) => alert(`Hey 👋, I called  ${name}`),
};

export default Profile;
