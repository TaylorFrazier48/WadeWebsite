import "./NavLink.css"

function NavLink(props) {
    return (
      <div >
        <div className="nav-link-background-image" style={{
            backgroundImage: `url(${props.image})`
        }}>
          <div className="nav-link-text">
            <span>
                  {props.text}
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default NavLink;
  