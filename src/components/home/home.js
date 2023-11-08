import React, { useState, useEffect } from 'react';
import { Image, Stack } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import pattern from '../../images/pattern.png';
import myPic from '../../images/myPic.png';
import "./home.css";







function Home  (props){

  const [showOnMobile, setShowOnMobile] = useState(false);

  useEffect(() => {
    const mobileBreakpoint = 992;

    const heandleResize = () => {
      setShowOnMobile(window.innerWidth <= mobileBreakpoint)
    };

    window.addEventListener('resize', heandleResize);

    heandleResize();

    return() => {
      window.removeEventListener('resize', heandleResize);
    };
  },[]);
  
  
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
                      <p className="like-text ms-5">Hello, I'm</p>
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
                      <p className='desc ms-5 '>This is my official portfolio website to showcase my all works realated to web development and freantend developer.</p>
                    </Col>
                    <Col>
                      <a href='/' className=' ms-5 mt-5 download-button' size="lg">
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
            <div className="image-effects">
              <div className='container-fluid'>
                
                  {showOnMobile ? (
                    <div className='mobile_img-box'>
                      <Image className='back-img' src={pattern} alt='pattern'/>
                      <Image className='main-img' src={myPic} alt='myPic'/>
                    </div>
                  ) : (
                    <>
                    <div className='img-box'>
                    <Image className='back-img' src={pattern} alt='pattern'/>
                      <Image className='main-img' src={myPic} alt='myPic'/>
                    </div>
                      
                    </>
                  )}  
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>

  );
};

export default Home;