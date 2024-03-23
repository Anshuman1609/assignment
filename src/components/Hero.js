import React from 'react';
import '../styles/Navbar.css'

const Hero = () => {
    return (
        <>
            <header className='header'>
                <div className='ls'>
                    <button className='ls-button'>
                        Beetle Beetle
                    </button>
                </div>
                <div className='ms'>
                    <div>Industries</div>
                    <div>Product</div>
                    <div>Calculator</div>
                </div>
                <div className='rs'>
                    <div>Login</div>
                    <div>
                        <button className='rs-button'>Request a Demo</button>
                    </div>
                </div>
            </header>


            <div>
                MAIN
            </div>
        </>
    )
}

export default Hero