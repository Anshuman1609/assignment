import React from 'react';
import '../styles/Navbar.css';
import { ArrowRight} from 'lucide-react';
import beetleimage from '../imges/200.png';
import Main from './Main';
import CustomDropdown from './Dropdown';


const Hero = () => {
    return (
        <>
            <nav className="navbar pt-4 navbar-expand-lg navbar-expand-md" style={{ backgroundColor: '#180932' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex" style={{ columnGap: '220px' }}>
                            <li className="nav-item">
                                <a className="nav-link px-3" aria-current="page" href="/"><img className='beetle-image' src={beetleimage} alt="Beetle Beetle" /></a>
                            </li>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex" style={{ columnGap: '38px' }}>
                                {/* <li className="nav-item">
                                    <button className="nav-link nav-colors" style={{ color: 'white' }}>Industries<ChevronDown /></button>
                                </li> */}
                                {/* <li className="nav-item">
                                    <button className="nav-link nav-colors" style={{ color: 'white' }}>Products<ChevronDown /></button>
                                </li> */}
                                <li className="nav-item">
                                    <CustomDropdown name='Industries' />
                                </li>
                                <li className="nav-item">
                                    <CustomDropdown name='Products' />
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-colors" href='/'>Calculator</a>
                                </li>
                            </ul>
                        </ul>
                        <ul className="form-inline my-2 my-lg-0 d-flex mx-5" style={{ columnGap: '20px' }}>
                            <h6 className="nav-item">
                                <a className="nav-link nav-colors" style={{ marginTop: '9px' }} href='/'>Log in</a>
                            </h6>
                            <p className="nav-item" style={{ marginBottom: '0' }}>
                                <button className="nav-link nav-colors right-section-button" style={{ color: 'white' }}>Request a Demo <ArrowRight /></button>
                            </p>
                        </ul>
                    </div>
                </div>
            </nav>
            <Main />
        </>
    )
}

export default Hero