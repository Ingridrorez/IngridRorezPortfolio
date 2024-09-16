import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/IngridRorez-CVNEW.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Document load success
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Navigate between pages
  function goToPrevPage() {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  }

  return (
    <Container fluid className="resume-section" style={{ textAlign: "center" }}>
      {/* PDF Download Button */}
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* PDF Viewer */}
      <Row className="resume" style={{ justifyContent: "center" }}>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className="d-flex justify-content-center"
        >
          <Page
            pageNumber={pageNumber}
            scale={1.5}
            className="pdf-page"
            style={{ margin: "0 auto" }} // Ensuring center alignment
          />
        </Document>
      </Row>

      {/* Pagination Controls */}
      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <Col className="text-center">
          <Button onClick={goToPrevPage} disabled={pageNumber === 1}>
            Previous
          </Button>
        </Col>
        <Col className="text-center">
          Page {pageNumber} of {numPages || "--"}
        </Col>
        <Col className="text-center">
          <Button onClick={goToNextPage} disabled={pageNumber === numPages}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;