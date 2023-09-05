import './App.css';
import React, { useState } from 'react';
import Data from './Components/Data';
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero"
import Card from "./Components/Card"


//Map Experiences data into Components
function App() {
  const cards = Data.map((i) => {
    return (
      <Card
        key={i.id}
        img={i.coverImg}
        rating={i.stats.rating}
        reviewCount={i.stats.reviewCount}
        location={i.location}
        title={i.title}
        price={i.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  );
}

export default App;


