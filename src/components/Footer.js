import React from 'react';
import '../styles/Footer.css';
import beetle from '../imges/200.png';
import fb from '../imges/fb.jpg';
import twitter from '../imges/twitter.jpg';
import linkedin from '../imges/linkedin.jpg';
import emote from '../imges/emote.jpg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="left">
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
                    <img className='footer-beetle' src={beetle} alt="..." />
                    <p>The Relationship Intelligence and Deal <br /> Flow CRM Designed by Ex-Investors</p>
                </div>
                <div className='link-images'>
                    <img className='link-image' src={fb} alt="..." />
                    <img className='link-image' src={twitter} alt="..." />
                    <img className='link-image' src={emote} alt="..." />
                    <img className='link-image' src={linkedin} alt="..." />
                </div>
            </div>
            <div className="right">
                <div className="footer-about" style={{ display: 'flex', flexDirection: 'column',rowGap: '2px', marginTop : '1px' }}>
                    <h5>About</h5>
                    <p>About Us</p>
                    <p>Career</p>
                    <p>Privacy Policy</p>
                    <p>Contacts</p>
                </div>
                <div className="footer-resources" style={{ display: 'flex', flexDirection: 'column',rowGap: '2px', marginBottom  : '80px' }}>
                    <h5>Resources</h5>
                    <p>Blog</p>
                    <p>Content Library</p>
                    <p>Customer Services</p>
                </div>
                <div className="footer-industries" style={{ display: 'flex', flexDirection: 'column' , rowGap: '2px', marginBottom : '-40px'  }}>
                    <h5>Industries</h5>
                    <p>Venture Capital</p>
                    <p>Private Equity</p>
                    <p>Mergers & Acquisition</p>
                    <p>Investment Banking</p>
                    <p>Commercial Realestate</p>
                    <p>Consulting</p>
                </div>
                <div className="footer-products" style={{ display: 'flex', flexDirection: 'column', rowGap: '2px' ,marginBottom : '-40px' }}>
                    <h5>Product</h5>
                    <p>CRM</p>
                    <p>Reporting</p>
                    <p>Mobile</p>
                    <p>integrations</p>
                    <p>Salesforce</p>
                    <p>Relationship intelligence</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;