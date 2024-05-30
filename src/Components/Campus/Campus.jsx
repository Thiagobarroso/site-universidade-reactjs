import React from 'react';
import './Campus.css';
import galeria1 from '../../assets/gallery-1.png';
import galeria2 from '../../assets/gallery-2.png';
import galeria3 from '../../assets/gallery-3.png';
import galeria4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

function Campus() {
  return (
    <div className="campus">
      <div className="galeria">
        <img src={galeria1} />
        <img src={galeria2} />
        <img src={galeria3} />
        <img src={galeria4} />
      </div>
      <button className="btn dark-btn">
        Veja mais aqui <img src={white_arrow} />
      </button>
    </div>
  );
}

export default Campus;
