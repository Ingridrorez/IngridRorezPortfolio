import React from "react";
import bp from "../../Assets/bp.png";
import Nmap from "../../Assets/NMAP.png";
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiGooglechrome,
  SiLinux,
  SiVisualstudiocode,
  SiKalilinux,
  SiPostman,
  SiWireshark,
  // SiPostman,
  // SiHeroku,
  // SiVercel,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bp} style={{ width: '80px', height: '80px', objectFit: 'cover' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Nmap} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
      </Col>
     

      
    </Row>
  );
}

export default Toolstack;
