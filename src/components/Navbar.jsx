// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // in react use link-to and html use anchor tag.
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="toggle-button">☰</button>
        <div className="logo">
          <img
            src="https://tango.me/images/31fe8a5fe128339779c5-brand-logo.svg"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 32 32"
          class="Y9_Ey"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M6.828 15.785a7.985 7.985 0 1 1 15.97 0 7.985 7.985 0 0 1-15.97 0M14.813 6.2a9.585 9.585 0 1 0 0 19.17c2.223 0 4.27-.758 5.897-2.029l3.724 3.725a.8.8 0 1 0 1.132-1.132l-3.681-3.68a9.55 9.55 0 0 0 2.512-6.47A9.585 9.585 0 0 0 14.813 6.2"
            clip-rule="evenodd"
          ></path>
        </svg>
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-center">
        <Link to="/foryou">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path
              fill-rule="evenodd"
              d="M9.895 12.493H6a1 1 0 0 0-1 1V25.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.133l.1.07.096.063a6.3 6.3 0 0 0 3.417 1h5.124a3.26 3.26 0 0 0 2.781-1.543l3.857-6.175a4.112 4.112 0 0 0-3.483-6.29h-3.768l.176-1.5.348-2.966a3.103 3.103 0 0 0-2.425-3.458A3.1 3.1 0 0 0 13.6 6.737l-.57 2.012a8.8 8.8 0 0 1-2.414 3.975.98.98 0 0 0-.616-.231zm-.645 1.5H6.5V25h2.75V13.993m1.5 9.38v-8.71l.898-.85a10.3 10.3 0 0 0 2.823-4.651l.001-.003.57-2.008a1.601 1.601 0 0 1 2.845-.47c.232.332.33.739.275 1.14l-.002.015-.002.015-.524 4.467-.196 1.675h5.454a2.607 2.607 0 0 1 2.607 2.679c-.012.466-.149.92-.396 1.315l-3.857 6.176-.003.004a1.76 1.76 0 0 1-1.5.833H14.61a4.8 4.8 0 0 1-2.669-.805l-.09-.062z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>ForYou</span>
        </Link>
        <Link to="/following">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12.975 10.498c0-1.63 1.306-2.937 2.902-2.937s2.902 1.308 2.902 2.937c0 1.63-1.306 2.937-2.902 2.937s-2.902-1.308-2.902-2.937M15.877 6c-2.472 0-4.463 2.02-4.463 4.498 0 2.477 1.991 4.498 4.463 4.498s4.463-2.02 4.463-4.498C20.34 8.021 18.35 6 15.877 6M9.683 21.991a6.849 6.849 0 0 1 12.274 0l.144.29a.494.494 0 0 1-.443.714H9.982a.494.494 0 0 1-.443-.714zm6.137-5.37A8.41 8.41 0 0 0 8.284 21.3l-.144.29a2.055 2.055 0 0 0 1.842 2.967h11.676a2.055 2.055 0 0 0 1.841-2.968l-.143-.29a8.41 8.41 0 0 0-7.536-4.676m6.623-2.937c0-1.042.835-1.875 1.85-1.875s1.85.833 1.85 1.875a1.863 1.863 0 0 1-1.85 1.875 1.863 1.863 0 0 1-1.85-1.875m1.85-3.435c-1.89 0-3.41 1.545-3.41 3.435s1.52 3.436 3.41 3.436 3.411-1.545 3.411-3.436c0-1.89-1.52-3.435-3.41-3.435m2.06 14.306h-1.106a4.2 4.2 0 0 0 .522-1.561h.584c.588 0 .962-.63.68-1.147a2.96 2.96 0 0 0-1.792-1.43l-.02-.042a10.5 10.5 0 0 0-1.002-1.63h.22c1.653 0 3.174.904 3.965 2.355.849 1.557-.278 3.455-2.052 3.455M7.56 11.809c1.015 0 1.85.833 1.85 1.875a1.863 1.863 0 0 1-1.85 1.875 1.863 1.863 0 0 1-1.85-1.875c0-1.042.835-1.875 1.85-1.875m3.411 1.875c0-1.89-1.52-3.436-3.41-3.436s-3.412 1.546-3.412 3.436S5.67 17.12 7.56 17.12s3.411-1.545 3.411-3.436m2.484 7.23h-.039l.026-.016zm-6.034-2.169q-.57.76-1.002 1.63l-.03.06a2.95 2.95 0 0 0-1.73 1.412.776.776 0 0 0 .68 1.147h.532a4.2 4.2 0 0 0 .521 1.56H5.34c-1.773 0-2.9-1.897-2.052-3.454a4.51 4.51 0 0 1 3.965-2.355z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Following</span>
        </Link>
        <Link to="/explore">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path
              fill-rule="evenodd"
              d="M7.278 15.785a7.535 7.535 0 1 1 15.07 0 7.535 7.535 0 0 1-15.07 0M14.813 5.75c-5.543 0-10.035 4.493-10.035 10.035S9.27 25.819 14.813 25.819a10 10 0 0 0 5.854-1.884l3.45 3.449a1.25 1.25 0 0 0 1.767-1.768L22.5 22.233a10 10 0 0 0 2.346-6.448c0-5.542-4.492-10.035-10.035-10.035"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Explore</span>
        </Link>
        <Link to="/chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M20.473 24.232a1.5 1.5 0 0 0-1.06-.08A8.5 8.5 0 0 1 17 24.5h-2a8.5 8.5 0 0 1 0-17h2a8.5 8.5 0 0 1 8.5 8.5 8.46 8.46 0 0 1-2.013 5.493 1.5 1.5 0 0 0-.353 1.07l.2 3.005zM15 6C9.477 6 5 10.477 5 16s4.477 10 10 10h2c.986 0 1.939-.143 2.839-.409l3.628 1.694a1 1 0 0 0 1.42-.973l-.256-3.849A9.96 9.96 0 0 0 27 16c0-5.523-4.477-10-10-10zm-3 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.25-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Chat</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/newpage" className="nav-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M12 26.401v-9.9a.1.1 0 0 1 .1-.1h7.8a.1.1 0 0 1 .1.1v9.9m-8 0h8m-8 0H6.1a.1.1 0 0 1-.1-.1v-6.8a.1.1 0 0 1 .1-.1h3.4m10.5 7h5.9a.1.1 0 0 0 .1-.1v-4.8a.1.1 0 0 0-.1-.1h-3.4M14.34 7.186l-2.927.634a.1.1 0 0 0-.054.164l1.996 2.234a.1.1 0 0 1 .025.077l-.302 2.98a.1.1 0 0 0 .14.102l2.742-1.208a.1.1 0 0 1 .08 0l2.742 1.208a.1.1 0 0 0 .14-.101l-.302-2.981a.1.1 0 0 1 .025-.077l1.996-2.234a.1.1 0 0 0-.053-.164l-2.928-.634a.1.1 0 0 1-.066-.048L16.086 4.55a.1.1 0 0 0-.172 0l-1.508 2.588a.1.1 0 0 1-.066.048Z"
            ></path>
          </svg>
        </Link>
        <button className="circular-toggle">
          <img src="public/assets/catlogo.png" alt="Image" />
        </button>
        <button className="signin-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            class="aN7H8"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M21 25.75A3.75 3.75 0 0 0 24.75 22V10A3.75 3.75 0 0 0 21 6.25h-5a.75.75 0 0 0 0 1.5h5A2.25 2.25 0 0 1 23.25 10v12A2.25 2.25 0 0 1 21 24.25h-5a.75.75 0 0 0 0 1.5zM9.47 10.53a.75.75 0 1 1 1.06-1.06l6 6 .53.53-.528.528-.002.002-.002.002-5.998 5.998a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h10.19z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
