import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentfull CMS</h1>
          <p>
            Farm-to-table put a bird on it cupping, sustainable health goth stumptown PBR&B viral
            lo-fi jianbing. Readymade VHS letterpress kitsch mumblecore gatekeep quinoa marxism
            beard. Meditation yuccie truffaut letterpress yr glossier typewriter JOMO vegan.
            Vaporware live-edge offal biodiesel, celiac PBR&B mumblecore gluten-free sustainable
            enamel pin.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
