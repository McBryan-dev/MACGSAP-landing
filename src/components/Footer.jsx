import React from 'react';
import { footerLinks } from '../constants/index.js';

const Footer = () => {
    return (
        <footer>
            <div className='info'>
                <p>More ways to shop: Find an Apple store or other retailer near you. Or call 0080 040 1966</p>
                <img src="/logo.svg" alt="Apple Logo" />
            </div>
            <hr /> 
            <div className="links">
                <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
                <ul>
                    {footerLinks.map(({label, link}) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;