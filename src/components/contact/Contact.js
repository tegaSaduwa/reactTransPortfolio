import React, { Component } from "react";
import "./contact.css";

export class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact">
          <header id="showcase">
            <h1>Contact</h1>
          </header>
          <p className="lead" id="content">
            <tr>
              <td>
                <li>Phone: 08091677010</li>
                <li>Mail: tegasaduwa@yahoo.com</li>
              </td>
            </tr>
          </p>
        </section>
      </div>
    );
  }
}

export default Contact;
