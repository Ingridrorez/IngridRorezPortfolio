import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AKCAKEP.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <b>  LET ME <span className="blue"> INTRODUCE </span> MYSELF </b>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
            I fell in love with cybersecurity and programming, and along the way, I’ve picked up quite a bit—I think... 🤷‍♂️
              <br />
              <br />  My name is Ingrid Rorez Dialusi Sinurat. I am a Fresh Graduate from <b className="blue">Internet Engineering Technology, Universitas Gadjah Mada</b>. 
              <br />
               <br /> I am a committed and passionate individual who loves exploring new things. I have a strong interest in developing my skills in <b className="blue">Cybersecurity and IT development</b>, particularly in <b className="blue"> Web Development</b>. With certifications from <b className="blue"> Dicoding, Ruangguru, and Cisco</b>, I’m eager to continue embracing new challenges and contributing to innovative, secure tech projects.
               </p>

            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid profile" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ingridrorez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/IngridRorez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ingridrorez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ingridrorez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
