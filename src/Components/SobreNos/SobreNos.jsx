import React from 'react';
import sobreNosImg from '../../assets/about.png';
import playIcon from '../../assets/play-icon.png';
import './SobreNos.css';

function SobreNos() {
  return (
    <div className="sobrenos">
      <div className="esquerda">
        <img src={sobreNosImg} className="sobrenos-img" />
        <img src={playIcon} className="play-icon" />
      </div>
      <div className="direita">
        <h3>SOBRE A FACULDADE</h3>
        <h2>Falando alguma coisa sobre a faculdade</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi
          dolorem perferendis nobis nostrum aspernatur quis ratione nesciunt
          facilis quidem libero totam, odit optio. Perspiciatis earum beatae
          repudiandae quibusdam iure!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          delectus unde sapiente, in aspernatur nihil odio aliquam, voluptatibus
          doloremque labore quo sunt, numquam eius tempora rem exercitationem
          impedit corrupti reprehenderit?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In iusto
          cupiditate laboriosam quas reiciendis cumque enim omnis praesentium
          adipisci commodi? Similique possimus id sed magnam reiciendis quidem
          quisquam, consequatur assumenda.
        </p>
      </div>
    </div>
  );
}

export default SobreNos;
