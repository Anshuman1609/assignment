import React from 'react';
import '../styles/Navbar.css';
import { ArrowRight } from 'lucide-react';
import beetleimage from '../imges/200.png';


const Hero = () => {
    return (
        <>
            <header className='header'>
                <div className='first-section'>
                    <img className='beetle-image' src={beetleimage} alt="Beetle Beetle" />
                </div>
                <div className="second-section">
                    <div className='middle-section'>
                        <div className='industries'>Industries</div>
                        <div className='product'>Product</div>
                        <div className='calc'>Calculator</div>
                    </div>
                    <div className='right-section'>
                        <div className='login'>Login</div>
                        <div className='request'>
                            <button className='right-section-button'>Request a Demo <ArrowRight /></button>
                        </div>
                    </div>
                </div>
            </header>
            <div className='main-page'>
                Hello
            </div>
        </>
    )
}

export default Hero