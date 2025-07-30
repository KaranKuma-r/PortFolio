import contri from "../assets/port.jpg"
export const Contribution = () =>{
    return (
        <>
         <h6 className="about-me">
        <span className="neon-underline">Contri</span>bution
      </h6>

      <div className="contribution-div">
        <img src={contri} alt="" />
      </div>
        </>
    )
}