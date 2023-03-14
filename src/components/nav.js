// import logo from '../media/logo.jpg';
import '../styling/nav.css';
import '../functions/functions.js';

function Nav() {
  return (
    <section id='top'>
      <div className='nav-bar'>
        <a href="/" rel='noreferrer'>
          MAX DE RUITER
        </a>

        <button className='nav-toggle-mobile' aria-controls='nav' aria-expanded="false">MENU</button>
      
        <nav>
          <ul id='nav' data-visible='false' className='nav'>
            <li className='active'>
              <a href="#work">
                WORK
              </a>
            </li>
            <li className='active'>
              <a href="#about">
                ABOUT ME
              </a>
            </li>
            <li className='active'>
              <a href="index.html">
                BLOG
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Nav;