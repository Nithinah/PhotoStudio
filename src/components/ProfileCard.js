function ProfileCard() {
    return (
      <div style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "350px",
        margin: "2rem auto",
        textAlign: "center"
      }}>
        <img 
          src="https://randomuser.me/api/portraits/men/75.jpg" 
          alt="Profile"
          style={{ borderRadius: "50%", width: "120px", height: "120px", objectFit: "cover" }}
        />
        <h2 style={{ marginTop: "1rem" }}>Nithin Sachin</h2>
        <p>Full Stack Developer | AI & ML Enthusiast</p>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0077b5",
          color: "#fff",
          borderRadius: "25px",
          textDecoration: "none"
        }}>
          View LinkedIn
        </a>
      </div>
    );
  }
  
  export default ProfileCard;
  