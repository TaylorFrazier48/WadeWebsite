import NavLink from "../NavLink/NavLink";
import "./Body.css"
import Calendar from "../../images/Calendar.png"
import Diaper from "../../images/Diaper.png"
import Bed from "../../images/Bed.webp"
import Food from "../../images/Food.webp"

function Body() {
    return (
      <div className="body-container">
        <div>
            Slideshow
        </div>
        <div>
            <div className="body-nav-row">
                <NavLink color="#ff8296" image={Calendar} text="Calendar" />  
                <NavLink color="#ffca27" image={Diaper} text="Potty Tracker" />  
            </div>
            <div className="body-nav-row">
                <NavLink color="#c1d92e" image={Bed} text="Sleep Tracker"/>  
                <NavLink color="#00e1df" image={Food} text="Eating Tracker"/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Body;
  