import React from "react";

const Header = () => {
  return (
    <main>
      <div className="nav-container">
        <nav>
          <h1 id="logo">S<span style={{ color: "orange" }}>.</span></h1>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Header;
