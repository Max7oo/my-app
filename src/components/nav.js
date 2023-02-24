// import logo from '../media/logo.jpg';
import '../styling/nav.css';
import '../functions/nav-open-close.js';

function Nav() {
  return (
    <div className='nav-bar'>
      <a href="https://www.instagram.com/maxoo.nl/" target='_blank' rel='noreferrer'>
        {/* <img src={logo} className="nav-logo" alt="logo" /> */}
        MAX DE RUITER
      </a>

      <button className='nav-toggle-mobile' aria-controls='nav' aria-expanded="false">MENU</button>
    
      <nav>
        <ul id='nav' data-visible='false' className='nav'>
          <li className='active'>
            <a href="index.html">
              WORK
            </a>
          </li>
          <li className='active'>
            <a href="index.html">
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
  );
}

export default Nav;