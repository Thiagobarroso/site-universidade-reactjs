import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const verificar =
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      console.log(verificar);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logotipo da empresa" className="logo" />
      <ul>
        <li>Home</li>
        <li>Cursos</li>
        <li>Sobre Nós</li>
        <li>Campus</li>
        <li>Depoimentos</li>
        <li>
          <button className="btn">Contato</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
