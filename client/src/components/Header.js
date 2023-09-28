// This component is the header for the app it will be the top dashboard which will
// allow for user login and sign up and will also show the logo for the app

import "./Header.css";

export default function Header() {
  return (
    <nav id="header">
      {/* logo */}
      <button id="go-pro-btn" className="header-item">
        {" "}
        Go Pro{" "}
      </button>
      {/* Sign up text */}
      <p className="header-item"> Sign Up</p>
      {/* Login text */}
      <p className="header-item"> Login</p>
    </nav>
  );
}
