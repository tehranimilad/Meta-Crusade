import { Link, useNavigate } from "react-router-dom";




function Nav(props) {
  
  const navigate = useNavigate()


    return (
      <nav className="navbar mavbar-expand-lg navbar-light bg-light">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Meta Crusade</a>
        </div>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/cryptocurrencies" className="nav-link">Crypto Prices</Link>
        <Link to="/learnmore" className="nav-link">Account</Link>
    
      </nav>
    );
  }

export default Nav;