import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Educação de qualidade ao alcance de todos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione
          aspernatur perspiciatis magni autem repellendus architecto enim velit
          deserunt, esse ipsa sint dolores! Error omnis cumque reprehenderit
          tempore natus impedit.
        </p>
        <button className="btn">
          Veja Mais <img src={dark_arrow} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
