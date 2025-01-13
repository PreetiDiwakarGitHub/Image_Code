import React, { useState } from "react";
import { Link } from "react-router-dom";


function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="footer">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={menuOpen ? "menu active" : "menu"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Winter">Winter</Link></li>
          <li><Link to="/Summer">Summer</Link></li>
          <li><Link to="/Spring">Spring</Link></li>
          <li><Link to="/Autumn">Autumn</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
