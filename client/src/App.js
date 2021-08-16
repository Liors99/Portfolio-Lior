import React, { useState, useEffect } from 'react';
import { Contact } from './componenets/Contact/Contact';
import { Experience } from './componenets/Experience/Experience';

import { Header } from './componenets/Header/Header';
import { Home } from './componenets/Home/Home';
import { Skills } from './componenets/Skills/Skills';

function App() {

  const [isWindowSmall, setIsWindowSmall] = useState(false);

  //Add an event listener to the window
  useEffect(() => {

    //Gets called whenever the window is resized, checks for the window size
    const resize = () => {
      if (window.innerWidth >= 960) {
        setIsWindowSmall(false);
      }
      else {
        setIsWindowSmall(true);
      }

    }

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, []);

  return (
    <div>
      <Header isSmall={isWindowSmall} />
      <Home isSmall={isWindowSmall} />
      <Experience />
      <Skills />
      <Contact isSmall={isWindowSmall} />
    </div>
  );
}

export default App;
