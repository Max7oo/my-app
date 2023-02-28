import '../styling/works.css'
import '../functions/functions.js';

import arrow from '../media/arrow.svg';
import maatje from '../media/maatje.svg';

function Works() {
    return (
        <section id='work'>
            <div className='breadcrum-items'>
                <a href='#work' className='breadcrum-item'>
                    <p>SELECTED WORKS</p>
                    <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
                </a>
            </div>
            
            <div className='work'>
                <div className='work-thumbnail hover-hidden'>
                    <img src={maatje} className='work-thumbnail-image' alt='zorgrobot maatje'/>
                </div>
                
                <div className='work-items'>
                    <div className='work-item-1'>
                        <div className='work-item-image desktop-hidden'>
                            <img src={maatje} className='work-item-image' alt='zorgrobot maatje'/>
                        </div>
                        <div className='work-item-description mobile-hidden'>
                            <h2>Maatje</h2>
                            <p>Research and design of features (UX&UI), development of prototype</p>
                        </div>
                        <div className='work-item-tags'>
                            <ul>
                                <li>Research</li>
                                <li>UX&UI</li>
                                <li>Pilot</li>
                                <li>/2023</li>
                            </ul>
                            <img src={arrow} className='work-item-tags-arrow' alt='arrow down'/>
                        </div>
                    </div>

                    <div className='work-item-2'>
                        <div className='work-item-image desktop-hidden'>
                            <img src={maatje} className='work-item-image' alt='zorgrobot maatje'/>
                        </div>
                        <div className='work-item-description mobile-hidden'>
                            <h2>Maatje</h2>
                            <p>Research and design of features (UX&UI), development of prototype</p>
                        </div>
                        <div className='work-item-tags'>
                            <ul>
                                <li>Research</li>
                                <li>UX&UI</li>
                                <li>Pilot</li>
                                <li>/2023</li>
                            </ul>
                            <img src={arrow} className='work-item-tags-arrow' alt='arrow down'/>
                        </div>
                    </div>

                    <div className='work-item-2'>
                        <div className='work-item-image desktop-hidden'>
                            <img src={maatje} className='work-item-image' alt='zorgrobot maatje'/>
                        </div>
                        <div className='work-item-description mobile-hidden'>
                            <h2>Maatje</h2>
                            <p>Research and design of features (UX&UI), development of prototype</p>
                        </div>
                        <div className='work-item-tags'>
                            <ul>
                                <li>Research</li>
                                <li>UX&UI</li>
                                <li>Pilot</li>
                                <li>/2023</li>
                            </ul>
                            <img src={arrow} className='work-item-tags-arrow' alt='arrow down'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Works;