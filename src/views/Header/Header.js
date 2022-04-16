import "./Header.css"
import Pooh from "../../images/Pooh.png"
import Crab from "../../images/Crab.png"

function Header() {
  return (
    <div className="header-container">
      <img className="header-image" src={Pooh}/>
      <h1 className="header title">
          Wade's World
      </h1>
      <img className="header-image" src={Crab}/>
    </div>
  );
}

export default Header;
