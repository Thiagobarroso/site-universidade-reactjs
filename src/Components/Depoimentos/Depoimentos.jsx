import React from 'react';
import './Depoimentos.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

function Depoimentos() {
  return (
    <div className="depoimentos">
      <img src={next_icon} className="next-btn" />
      <img src={back_icon} className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} />
                <div>
                  <h3>Thiago Barroso</h3>
                  <span>Rio de Janeiro, Brasil</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                facere, corporis iusto sint est molestiae incidunt quibusdam
                obcaecati cumque doloribus iure ducimus similique dolore
                reprehenderit nostrum totam labore rerum vel.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} />
                <div>
                  <h3>Thiago Barroso</h3>
                  <span>Rio de Janeiro, Brasil</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                facere, corporis iusto sint est molestiae incidunt quibusdam
                obcaecati cumque doloribus iure ducimus similique dolore
                reprehenderit nostrum totam labore rerum vel.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} />
                <div>
                  <h3>Thiago Barroso</h3>
                  <span>Rio de Janeiro, Brasil</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                facere, corporis iusto sint est molestiae incidunt quibusdam
                obcaecati cumque doloribus iure ducimus similique dolore
                reprehenderit nostrum totam labore rerum vel.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} />
                <div>
                  <h3>Thiago Barroso</h3>
                  <span>Rio de Janeiro, Brasil</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                facere, corporis iusto sint est molestiae incidunt quibusdam
                obcaecati cumque doloribus iure ducimus similique dolore
                reprehenderit nostrum totam labore rerum vel.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} />
                <div>
                  <h3>Thiago Barroso</h3>
                  <span>Rio de Janeiro, Brasil</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                facere, corporis iusto sint est molestiae incidunt quibusdam
                obcaecati cumque doloribus iure ducimus similique dolore
                reprehenderit nostrum totam labore rerum vel.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Depoimentos;
