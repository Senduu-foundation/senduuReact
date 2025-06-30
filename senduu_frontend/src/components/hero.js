import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className='hero-text'>
        <h2>Make a Difference Through Donations</h2>
        <p>
            Add your project to receive donations, contribute to help fund important causes, 
            and earn NFTs for your support.
        </p>
      
        <div className="hero-buttons">
            <button className="add-project">Add a Project</button>
            <button className="donate-now">Donate Now</button>
        </div>
      </div>
    </section>
  );
}
