import NavLink from "../NavLink/NavLink";
import "./Body.css"
import Calendar from "../../images/Calendar.jpg"

function Body() {
    return (
      <div className="body-container">
        <div>
            Slideshow
        </div>
        <div>
            <div className="body-nav-row">
                <NavLink image={Calendar} text="Calendar" />  
                <NavLink text="Poop" />  
            </div>
            <div className="body-nav-row">
                <NavLink/>  
                <NavLink/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Body;
  