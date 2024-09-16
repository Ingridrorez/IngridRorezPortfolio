import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hey! I’ve just wrapped up my studies and am currently chilling in Yogyakarta while freelancing in tech. When I’m not busy with cybersecurity or coding, you can probably find me exploring new places or hitting the gym. Always up for new adventures, whether it's in the digital world or the real one!
          </p>
         

          <p style={{ color: "rgb(57, 147, 231, 0.959)" }}>
          "If you say I’m cool, you’d be spot on! <i> (Wink, wink!) </i>"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
