import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section id="home">
            <div class="box"></div>
            <header id="showcase">
              <h1>Welcome</h1>
            </header>

            <p className="lead" id="content">
              Hello, i'm tega a frontend developer still exploring my skills...
            </p>

            <a href="/about" class="btn">
              skills
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
