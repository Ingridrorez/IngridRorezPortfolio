import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import suicide from "../../Assets/Projects/suicide.png";
import hmsty from "../../Assets/Projects/hmsty.png";
import Weepy from "../../Assets/Projects/Weepy.png";
import Senyumin from "../../Assets/Projects/Senyumin.png";
import Trs from "../../Assets/Projects/trs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weepy}
              isBlog={false}
              title="Weepy"
              description={
                <>
                  <p>
                    Weepy is a learning platform that can help every student
                    prepare to take the state university entrance examination.
                    Weepy is here as a form of learning innovation in the
                    industrial era 4.0 which can be accessed anywhere and
                    anytime. All content on Weepy can be accessed and used for
                    free.
                  </p>
                  <p>This Project is built using JavaScript and Google Drive.</p>
                </>
              }
              ghLink="https://github.com/Ingridrorez/Weepy"
              demoLink="https://weepy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Senyumin}
              isBlog={false}
              title="Senyumin"
              description={
                <>
                  <p>
                  Teledentistry is a website used to assist children in carrying out physical and dental examinations. Children can carry out examinations with the help of parents who will be assessed directly for their physical examination through the system and have their teeth checked by dentists connected to this system, so that on this website there are several types of users, namely admins, doctors, parents and children.
                  </p>
                  <p>This Project is built using JavaScript (React), Artificial Intelegent, and PHP (Laravel).</p>
                </>
              }
              ghLink="https://github.com/Ingridrorez/Senyumin"
              demoLink="https://senyumin.technow.id/"
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hmsty}
              isBlog={false}
              title="Homestay Indonesia"
              description={
                <>
                  <p>
                  Homestay Indonesia is a Platform founded with the motto “Local Investment for your Next Journey” to promote crowdfunded homestay development in Indonesia.
                  </p>
                  <p>This Project is built using Wordpress and MySQL.</p>
                </>
              }
              demoLink="https://homestayindonesia.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={Trs}
              isBlog={false}
              title="Training Registration System"
              description={
                <>
                  <p>
                  The Training Registration System is a web application designed for documenting and reviewing training programs at BO Pharma.
                  </p>
                  <p>This Project is built using JavaScript (React), PHP (Laravel), and MySQL.</p>
                </>
              }
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
