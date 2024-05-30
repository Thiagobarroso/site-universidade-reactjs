import React from 'react';
import './Titulo.css';

function Titulo({ titulo, subtitulo }) {
  return (
    <div className="titulo">
      <p>{titulo}</p>
      <h2>{subtitulo}</h2>
    </div>
  );
}

export default Titulo;
