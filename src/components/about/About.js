import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  render() {
    return (
      <div>
        <section id="about" style={{ paddingBottom: "50%" }}>
          <header id="showcase">
            <h1>Skills</h1>
          </header>
          <p className="lead" id="content">
            <tr>
              <td>
                <li>HTML, CSS, Javascript, React, Node.js, laravel</li>
              </td>
            </tr>
          </p>
        </section>
      </div>
    );
  }
}

export default About;
