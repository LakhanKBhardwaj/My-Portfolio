import React from 'react';
import { Image, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';





const Home = () => {

  return (
    <>
      <Container fluid className='home'>
        <Row>
          <Col md={6}>
            <div className='intro'>
                <h1>I`m <span>Lakhan</span> Kumar Bhardwaj</h1>
                <p>This is my offcial portfolio wevsite to showcase my all works related to wed <br/>development and UI design.</p>
                <Button>Download CV</Button>
            </div>
          </Col>
          <Col md={6}>aljs</Col>
        </Row>
      </Container>
    </>

  );
};

export default Home;