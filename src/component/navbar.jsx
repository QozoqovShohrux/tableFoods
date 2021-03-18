import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";
import { Link } from "react-router-dom";
const menu = [
  {path: "/home", title : "Home", exact : true},
  {path: "/login", title : "Login", exact : true},
  {path: "/register", title : "Register", exact : true},
]
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand mx-2" href="#1" to="/foods" >
            Foods
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ml-auto aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="800"
            >
             {menu.map(({path,title}) => (
                <li className="nav-item" key={path}>
                <Link className="nav-link mx-2"  to={path}>
                  {title}
                </Link>
              </li>
             ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
