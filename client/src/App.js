import React, { useState, useEffect } from 'react';
import { Contact } from './componenets/Contact/Contact';
import { Experience } from './componenets/Experience/Experience';

import { Header } from './componenets/Header/Header';
import { Home } from './componenets/Home/Home';
import { Skills } from './componenets/Skills/Skills';
import { Projects } from './componenets/Projects/Projects';
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
      <div className="app-container" style={{ direction: (isWindowSmall ? 'rtl' : 'ltr') }} >
        <div className="app-container-inner">
          <Home isSmall={isWindowSmall} />
          <Experience isSmall={isWindowSmall} />
          <Skills />
          <Projects isSmall={isWindowSmall} />
          <Contact isSmall={isWindowSmall} />
        </div>

      </div>

    </div >
  );
}

export default App;
