function Packages() {
    return (
      <main style={{ padding: '2rem' }}>
        <h2>Our Packages</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={cardStyle}>
            <h3>Basic</h3>
            <p>₹5,000</p>
            <ul>
              <li>2 Hour Photoshoot</li>
              <li>20 Edited Photos</li>
              <li>Online Gallery</li>
            </ul>
          </div>
          <div style={cardStyle}>
            <h3>Premium</h3>
            <p>₹15,000</p>
            <ul>
              <li>4 Hour Photoshoot</li>
              <li>50 Edited Photos</li>
              <li>Photo Album</li>
              <li>Online Gallery</li>
            </ul>
          </div>
          <div style={cardStyle}>
            <h3>Luxury</h3>
            <p>₹30,000</p>
            <ul>
              <li>Full Day Coverage</li>
              <li>Unlimited Photos</li>
              <li>Album + Framed Prints</li>
              <li>Drone Footage</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
  
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    width: '300px',
    backgroundColor: '#f9f9f9'
  };
  
  export default Packages;
  