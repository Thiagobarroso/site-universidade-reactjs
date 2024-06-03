import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div className="contato">
      <div className="contato-col">
        <h3>Envie uma mensagem</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          rem. Delectus vitae quis, earum sapiente iusto aliquam fuga? Soluta
          ipsum praesentium suscipit dignissimos quas molestiae veniam nobis
          necessitatibus. Fuga, dolore!
        </p>
        <ul>
          <li>thiagoo.silva@live.live</li>
          <li>+55 21 96615-4418</li>
          <li>
            Rua Uberaba, 179 <br />
            Belford Roxo - Rio de janeiro
          </li>
        </ul>
      </div>
      <div className="contato-col"></div>
    </div>
  );
}

export default Contato;
