import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import Contact from './Components/First';
//IMAGES
function App() {
  return (
    <div className='Contacts'>    
       <Contact 
                img={require("./images/mr-whiskerson.png")}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={require("./images/fluffykins.png")}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={require("./images/felix.png")}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={require("./images/pumpkin.png")}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
    </div>
  );
}

export default App;


