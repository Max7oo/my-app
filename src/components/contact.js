import '../styling/contact.css'

import arrow from '../media/arrow.svg';
import cv from '../media/CV-MaxdeRuiter.pdf';

function Contact() {
    return (
        <section id='contact'>
            <div className='breadcrum-items'>
                <a href='#contact' className='breadcrum-item'>
                    <p>CONTACT ME</p>
                    <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
                </a>
            </div>

            <div className='contact'>
                <a href={cv} download='CV Max de Ruiter'><span><h6>Resume.pdf</h6><img src={arrow} className='contact-arrow' alt='arrow up'/></span></a>
                <a href='mailto:m.j.deruiter99@hotmail.com'><span><h6>Mail me</h6><img src={arrow} className='contact-arrow' alt='arrow up'/></span></a>
                <a href='https://www.instagram.com/maxoo.nl/'><span><h6>Instagram</h6><img src={arrow} className='contact-arrow' alt='arrow up'/></span></a>
                <a href='https://www.linkedin.com/in/max-de-ruiter-2a8871181/'><span className='contact-last'><h6>LinkedIn</h6><img src={arrow} className='contact-arrow' alt='arrow up'/></span></a>
            </div>

            <div className='contact-back-to-top-items'>
                <a href='/' className='contact-back-to-top-item'>
                    <p>BACK TO TOP</p>
                    <img src={arrow} className='contact-back-to-top-arrow' alt='arrow up'/>
                </a>
            </div>
        </section>
    );
  }
  
  export default Contact;