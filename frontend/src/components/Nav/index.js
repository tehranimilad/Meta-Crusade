import { Link, useNavigate } from "react-router-dom";




function Nav() {
    return (
      <nav className="navbar mavbar-expand-lg bg-light">
          <a className="navbar-brand" href="/">Meta Crusade</a>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/learnmore" className="nav-link">Learn More</Link>
    
      </nav>
    );
  }

export default Nav;