import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jordi Gonzalez </span>
            from <span className="purple"> Barcelona.</span>
            <br />I am a Padawan learning code with a Blaster side me.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Design, Draw
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Drums, Listen Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jordi</footer>
          
          <p style={{ color: "rgb(155 126 172)" }}>
          “Try not. Do or do not. There is no try.”{" "}
          </p>
          <footer className="blockquote-footer">Yoda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
