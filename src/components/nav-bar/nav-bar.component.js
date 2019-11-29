import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link active">
          Home <span className="sr-only">(current)</span>
        </Link>
        <Link className="nav-item nav-link" to="/revenue">
          Revenue
        </Link>
        <Link className="nav-item nav-link" to="/impresions">
          Impresions
        </Link>
        <Link className="nav-item nav-link" to="/visits">
          Visits
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
