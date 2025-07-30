import personal from "../assets/s1.png";
import sugar from "../assets/s2.png";

const Projects = () => {
  return (
    <>
      <h6 className="about-me">
        <span className="neon-underline">Proj</span>ects
      </h6>

      <div className="project-div">

        <div className="container-project">
          <div className="project-description">
            <p className="project-heading">Personal Finance Tracker</p>
            <p>
              Personal Finance Tracker is a web-based application designed to help users manage their income and expenses with ease. It also utilizes localStorage to persist user data, making it possible to retain financial records across sessions without requiring a backend. This project demonstrates effective use of DOM manipulation, event handling, and structured UI design to deliver a functional and visually appealing personal finance solution.
            </p>
            <a href="https://karankuma-r.github.io/Personal_Finance_Tracker/" target="_blank" rel="noreferrer">
              <span className="live">Live</span>
            </a>
          </div>
          <div className="project-screenshot">
            <img src={personal} alt="Finance Tracker Screenshot" className="image-project" />
          </div>
        </div>

        <div className="container-project">
          <div className="project-description">
            <p className="project-heading"> Sugar Cosmetics Clone </p>
            <p>
             The Sugar Cosmetics Clone is a web-based static product display page built to mimic the core shopping experience of Sugar Cosmetics. It features fixed-size product cards with sliced images, basic details, and a functional "Add to Cart" button that stores selected items locally. Additionally, users can sort the displayed products by price in ascending or descending order to help with product comparisons.
            </p>
            <a href="https://curious-sopapillas-ffbc28.netlify.app/" target="_blank" rel="noreferrer">
              <span className="live">Live</span>
            </a>
          </div>
          <div className="project-screenshot">
            <img src={sugar} alt="Finance Tracker Screenshot" className="image-project" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
