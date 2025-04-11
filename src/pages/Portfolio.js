function Portfolio() {
    return (
      <main style={{ padding: '2rem' }}>
        <h2>Portfolio</h2>
        <p>Here’s a glimpse of our best work over the years.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/300x200/?wedding,photography,${i}`}
              alt={`Portfolio ${i}`}
              style={{ borderRadius: '8px', width: '300px', height: '200px', objectFit: 'cover' }}
            />
          ))}
        </div>
      </main>
    );
  }
  
  export default Portfolio;
  