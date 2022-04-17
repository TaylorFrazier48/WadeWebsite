import "./Header.css"
import Popsicles from "../../images/Popsicles.png"
import Palm from "../../images/Palm.png"

function Header() {
  return (
    <div className="header-container">
      <img className="header-image" src={Popsicles}/>
      <h1 className="header-title">
          Wade's World
      </h1>
      <img className="header-image" src={Palm}/>
    </div>
  );
}

export default Header;
