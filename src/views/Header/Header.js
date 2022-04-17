import "./Header.css"
import Popsicles from "../../images/Popsicles.png"
import Chill from "../../images/Chill.png"

function Header() {
  return (
    <div className="header-container">
      <img className="header-image" src={Chill}/>
      <h1 className="header-title">
          Wade's World
      </h1>
      <img className="header-image" src={Popsicles}/>
    </div>
  );
}

export default Header;
