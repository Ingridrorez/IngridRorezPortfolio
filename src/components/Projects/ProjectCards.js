import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const renderButtons = () => {
    if (props.ghLink || props.demoLink) {
      return (
        <>
          {/* Render button GitHub jika ghLink tersedia */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Render button Demo jika demoLink tersedia dan bukan Blog */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0" }} // Jarak antar tombol hanya jika ada tombol GitHub
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </>
      );
    } else {
      return <p style={{ color: "red", marginTop: "10px" }}>Internal Company App - Not Publicly Accessible</p>;
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Render buttons or internal app message */}
        {renderButtons()}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
