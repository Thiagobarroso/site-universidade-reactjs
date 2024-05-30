import React from 'react';
import './Cursos.css';
import curso1 from '../../assets/program-1.png';
import curso2 from '../../assets/program-2.png';
import curso3 from '../../assets/program-3.png';
import cursosIcon1 from '../../assets/program-icon-1.png';
import cursosIcon2 from '../../assets/program-icon-2.png';
import cursosIcon3 from '../../assets/program-icon-3.png';

function Cursos() {
  return (
    <div className="cursos">
      <div className="curso">
        <img src={curso1} />
        <div className="legenda">
          <img src={cursosIcon1} />
          <p>Graduação</p>
        </div>
      </div>
      <div className="curso">
        <img src={curso2} />
        <div className="legenda">
          <img src={cursosIcon2} />
          <p>Pós Graduação</p>
        </div>
      </div>
      <div className="curso">
        <img src={curso3} />
        <div className="legenda">
          <img src={cursosIcon3} />
          <p>Mestrado</p>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
