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
                <NavLink image={Calendar} text="Calendar" />  
                <NavLink image={Diaper} text="Poop" />  
            </div>
            <div className="body-nav-row">
                <NavLink image={Bed} text="Sleep Tracker"/>  
                <NavLink image={Food} text="Eating Tracker"/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Body;
  