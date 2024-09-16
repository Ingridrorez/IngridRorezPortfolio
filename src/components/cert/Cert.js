import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Particle from "../Particle";
import feImage from '../../Assets/Certt/fe.jpg';
import dicod from '../../Assets/Certt/sertidicod.png';
import pkm from '../../Assets/Certt/pkm.jpg';


// Data sertifikasi
const certifications = [
  {
    title: 'Front End with React',
    organization: 'Ruangguru',
    date: 'June 2023',
    description: 'Successfully completed an advanced Front-End Development course, mastering React to build dynamic and responsive web applications.',
    image: feImage
  },
  {
    title: 'Dasar Pemrograman Web',
    organization: 'Dicoding',
    date: 'Septembar 2023',
    description: 'Certified in web development with advanced skills in HTML, CSS, and responsive design using Flexbox for creating structured and visually compelling websites.',
    image: dicod
  },
  {
    title: 'Kominfo Penetration Testing Contribution Certificate',
    organization: 'DISKOMINFO DIY',
    date: 'September 2022',
    description: 'Certified in penetration testing with hands-on experience using advanced tools and applications at Kominfo, enhancing security protocols and vulnerability management.',
    image: pkm
  },
  
];

const Certification = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container>
        <h1 className="animated-text text-center mb-4 mt-5">Certifications</h1>
        <Row>
          {certifications.map((cert, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={cert.image} alt={cert.title} />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cert.organization} - {cert.date}
                  </Card.Subtitle>
                  <Card.Text>{cert.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Certification;
