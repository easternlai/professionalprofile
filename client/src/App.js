import React from 'react';
import useSticky from './components/hooks/useSticky';
import Welcome from './components/layout/welcome/Welcome';
import Navbar from './components/layout/navbar/Navbar';
import About from './components/layout/about/About';
import Skills from './components/layout/Skills/Skills';
import Experience from './components/layout/experience/Experience';
import './App.scss';

function App() {
  const {isSticky, element } = useSticky();
  return (
    <>
    <Navbar sticky={isSticky} />
    <Welcome element={element} />
    <About />
    <Skills />
    <Experience />
    </>
  );
}

export default App;
