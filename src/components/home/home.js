import React, {  } from 'react';
import { Image, Stack } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import pattern from '../../images/pattern.png';
import myPic from '../../images/myPic.png';
import "./home.css";







function Home(props) {


  return (
    <>
      <Container fluid className='home'>
        <Row>
          <Col sm={12} md={12} lg={7}>
            <div className="character-effects third-effect">
              <div className="container-fluid">
                <div className='letter-effect'>
                  <Stack gap={3}>
                    <Col>
                      <p className="like-text">Hello, I'm</p>
                    </Col>
                    <Col className="popup-effect">
                      <p className="like-text popup-text">
                        <span>L</span>
                        <span>A</span>
                        <span>K</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        {props.name}
                      </p>
                    </Col>
                    <Col>
                      <p className='desc'>This is my official portfolio website to showcase my all works realated to web development and freantend developer.</p>
                    </Col>
                    <Col>
                      <a href='/' className='mt-5 download-button' size="lg">
                        <div>
                          <span className='bg'></span>
                          <span className='base'></span>
                          <span className='text'>Download CV</span>
                        </div>
                      </a>
                    </Col>
                  </Stack>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={5} >


            {/* {showOnMobile ?  (
              <div className="mobile_image-effects">
                <div className='mobile_img-box'>
                  <Image className='back-img' src={pattern} alt='pattern' />
                  <Image className='main-img' src={myPic} alt='myPic' />
                </div>
              </div>
            ) : (
              <> */}
                <div className="image-effects">
                  <div className='img-box'>
                    <Image className='back-img' src={pattern} alt='pattern' />
                    <Image className='main-img' src={myPic} alt='myPic' />
                  </div>
                </div>
              {/* </>
            )} */}

          </Col>
        </Row>
      </Container>

    </>

  );
};

export default Home;