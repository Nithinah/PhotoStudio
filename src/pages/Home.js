import ProfileCard from '../components/ProfileCard';

function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <section>
        <h2>Welcome to PhotoStudio</h2>
        <p>Capture your memories with us!</p>
      </section>
      <ProfileCard />
    </main>
  );
}

export default Home; // ✅ This is the fix!
