import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              <a href="/about">Skills</a>
            </li>
            {/* <li>
                <a href="#service">Service</a>
              </li> */}
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="https://github.com/tegaSaduwa">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
