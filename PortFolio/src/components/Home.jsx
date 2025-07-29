

const Home = () => {
  return (
    <main className="home-section">
      <div className="text-area">
        <h1>
          Hi, I'm <span className="highlight">Karan Kumar</span>
        </h1>
        <h2 className="typing-text">Full Stack MERN Developer</h2>
        <span className="textStyle">Always learning. Always building.</span><br />
        <button className="lets-talks" onClick={() => window.location.href = 'tel:+916202216048'}>
          <span className="text">Let's talk</span>
        </button>

      </div>

    </main>

  )
};

export default Home;