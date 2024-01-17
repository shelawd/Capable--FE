import React from "react";
import "./class.css";
import "./class";
import { Row, Col, Navbar, Button, Modal, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

const Class = () => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {/* navbar class page */}
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="#">Class Video</Navbar.Brand>
          <Button className="flat" variant="flat" onClick={handleShow}>
            Search Modul/Content CTRL/
          </Button>
        </div>
      </Navbar>
      {/* end navbar class page */}
      {/* jumbotron */}
      <Container fluid>
        <Row className="mt-5">
          <Col className="ms-auto d-flex justify-content-center max-w-md " sm={8}>
            <Col sm={8}>
              <div className="">
                <ReactPlayer className="video" url="https://www.youtube.com/embed/kRsq3HxZX_U" controls />
              </div>
              <div className="mt-2">
                <Button className="">Oncam</Button>
              </div>
              <div className="">
                <h1 className="heading-class">Getting Started</h1>
                <p className="text-class">Welcome to Capable Academy. Before starting the learning in this class, your child needs to know the stages and methods of learning, along with the available facilities to make the learning process more effective.</p>
              </div>
              <div className="">
                <h2 className="heading-class">Example Heading</h2>
                <p>The materials in this class consist of videos and texts. Why is that? Because we have found that in the learning process in the field of mathematics, the most effective form of learning materials to be remembered, understood, and most importantly, practiced for your child is in the form of videos.</p>
              </div>
            </Col>
          </Col>
          <Col sm={4} className="">
            <div>
                <h4>Module List</h4>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Getting Started
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <a href="">example heading</a>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/value" className="btn btn-primary">Finish</Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* Isi konten modal di sini */}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Class;
