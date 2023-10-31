import React from 'react';
import { Image, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import "./home.css";





function Home  (){
  const name = "Lakhan Kumar Bhardwaj";
  
  return (
    <>
      <Container fluid className='home'>
        <Row>
          <Col md={7} lg={7}>
            <div className="character-effects third-effect">
              <div className="container-fluid">
                <div className='letter-effect'>
                  <p className="like-text ms-5">Hello, I'm</p>
                  <div className="popup-effect">
                    <p className="like-text popup-text">
                      <span>L</span>
                      <span>A</span>
                      <span>K</span>
                      <span>H</span>
                      <span>A</span>
                      <span>N</span>
                      KUMAR BHARDWAJ
                    </p>
                  </div>
                  <p className='desc ms-5 '>This is my official portfolio website to showcase my all works realated to web development and freantend developer.</p>
                  <Button className='ms-5 mt-3 download-button' size="lg">
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} lg={5}>
            <div className='img-box'>
              <Image className='back-img' src='assets/images/pattern.png' alt=''/>
              <Image className='main-img' src='assets/images/myPic.png' alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default Home;