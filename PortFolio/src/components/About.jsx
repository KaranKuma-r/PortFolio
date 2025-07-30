import profilePic from "../assets/profile-pic-2.png";

const About = () => {
  return (
    <>
      <h6 className="about-me">
        <span className="neon-underline">About</span> Me
      </h6>
      <div className="about-section">
        <div className="image-area">
          <img src={profilePic} alt="Karan Kumar" className="profilePic" />
        </div>
        <div className="description">
          <p class="about-description">
            I’m a passionate and detail-oriented MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in designing responsive frontends and creating scalable, secure backend APIs. Whether it's building sleek user interfaces or handling server-side logic, I love turning ideas into functional, user-friendly products. I’m constantly learning, experimenting, and improving — driven by curiosity and a desire to build impactful digital experiences.
          </p>
            <button className="my-resume"><span>My Resume</span></button>
        </div>
      </div>
    </>
  )
};

export default About;