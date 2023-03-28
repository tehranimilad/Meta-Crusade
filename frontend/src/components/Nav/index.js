import { Link } from "react-router-dom";

function Nav() {
    return (

      <nav className="navbar mavbar-expand-lg navbar-light bg-light">
      <div className="navbar-header">
      <a className="navbar-brand" href="/">Meta Crusade</a>
      </div>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/learnmore" className="nav-link">Learn More</Link>
    
      </nav>
    );
  }

export default Nav;