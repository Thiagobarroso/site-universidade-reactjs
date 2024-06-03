import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Main/Hero';
import Cursos from './Components/Cursos/Cursos';
import Titulo from './Components/Titulo/Titulo';
import SobreNos from './Components/SobreNos/SobreNos';
import Campus from './Components/Campus/Campus';
import Depoimentos from './Components/Depoimentos/Depoimentos';
import Contato from './Components/Contato/Contato';
import '/global.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Titulo subtitulo="o que nós oferecemos" titulo="nossos cursos" />
        <Cursos />
        <SobreNos />
        <Titulo subtitulo="Nosso Campus" titulo="Galeria" />
        <Campus />
        <Titulo subtitulo="O Que Os Alunos Falam" titulo="Depoimentos" />
        <Depoimentos />
        <Titulo subtitulo="Entre em contato" titulo="Contate-nos" />
        <Contato />
      </div>
    </div>
  );
}

export default App;
