import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GrTasks, GrTask } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { PiTelevisionFill } from "react-icons/pi";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-window-container">
          <ul className="ul-container">
            <li className="nav-item">
              <NavLink to="/" className="nav-link-window">
                <MdDashboard size={20} className="nav-items-icon" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/active" className="nav-link-window">
                <GrTasks size={18} className="nav-items-icon" />
                Active Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/complete" className="nav-link-window">
                <GrTask size={19} className="nav-items-icon" />
                Completed Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mashhad" className="nav-link-window">
                <PiTelevisionFill size={22} className="nav-items-icon" />
                Al Mashhad
              </NavLink>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleMenu}>
            {menu ? (
              <AiOutlineClose size={30} color="white" />
            ) : (
              <HiOutlineMenuAlt1 size={30} color="white" />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`mobile-menu ${
          menu ? "block" : "hidden"
        } bg-gray-900 fixed top-12 w-full py-2 text-center transition-transform duration-300 transform ${
          menu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="navbar-nav navbar-mobile">
          <li className="nav-item" onClick={closeMenu}>
            <NavLink to="/" className="nav-link">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <NavLink to="/active" className="nav-link">
              Active Tasks
            </NavLink>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <NavLink to="/complete" className="nav-link">
              Completed Tasks
            </NavLink>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <NavLink to="/mashhad" className="nav-link">
              Al mashhad
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
