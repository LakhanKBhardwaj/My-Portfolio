import React from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { Image } from 'react-bootstrap';
import './App.css';


const App = () => {

 

  return (
    <div className="App">
      <Image className='main-img' src={'./logo192.png'} alt=''/>
      <Header title="Lakhan K. Bhardwaj"/>
      <main>
        <div className='home'>
          <Home name='Kumar Bhardwaj'/>
        </div>
        <div className='about'>
          <About />
        </div>
        <div className='project'>
          <Projects />
        </div>
        <div className='contact'>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
