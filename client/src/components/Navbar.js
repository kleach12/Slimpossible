// This will hold all of the nav icons and routes for the app
// Possible routes will be dasbhoard, profile, friends, and settings
import "./Navbar.css";

import { AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineTeam } from "react-icons/ai";
export default function Navbar() {
  return (
    <nav id="navbar">
      {/* Dashboard Icon */}
      <AiOutlineHome className="nav-icon" />
      {/* Profile Icon */}
      <AiOutlineUser className="nav-icon" />
      {/* Friends Icon */}
      <AiOutlineTeam className="nav-icon" />
      {/* Settings Icon */}
      <AiOutlineSetting className="nav-icon" />
    </nav>
  );
}
