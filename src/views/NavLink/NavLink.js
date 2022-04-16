import "./NavLink.css"

function NavLink(props) {
    return (
      <div >
        <div className="nav-link-background-image" style={{
            backgroundImage: `url(${props.image})`
        }}>
            <span className="nav-link-text">
                {props.text}
            </span>
        </div>
      </div>
    );
  }
  
  export default NavLink;
  