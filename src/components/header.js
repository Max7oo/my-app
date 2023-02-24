import '../styling/header.css'
import logo from '../media/logo.jpg';

function Header() {
    return (
        <header>
            <div className='header-intro'>
                <div className='header-hidden'>
                   <h2>I am Max de Ruiter</h2> 
                </div>
                <h1>HUMAN-CENTRED DESIGNER</h1>
                <h3>Available for work</h3>
            </div>
            <div className='header-profile'>
                <img src={logo} className='header-profile-image' alt='logo' />
            </div>    
        </header>
    );
  }
  
  export default Header;
  