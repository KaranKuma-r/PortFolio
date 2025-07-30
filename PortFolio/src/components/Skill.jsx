import css from '../assets/css.png';
import express from '../assets/express.png';
import html from '../assets/html.svg';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongodb.png';
import node from '../assets/Node.js_logo.svg';
import react from '../assets/react.svg';
import fire from '../assets/fire.png';

export const Skill = () => {
  const images = [html,css,javascript,react,fire,node,express,mongodb];
  return (
    <>
     <h6 className="about-me">
        <span className="neon-underline">My</span> Skill
      </h6>
     <div className="scroll-container">
  <div className="scroll-track">
    {images.map((img, index) => (
      <div className="image-box" key={index}>
        <img src={img} alt={`tech-${index}`} className="scroll-img" />
      </div>
    ))}
  </div>
</div>

    </>
  )
};

