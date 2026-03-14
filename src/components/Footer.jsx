import React from 'react';
import { footerLinks } from '../constants/index.js';

const Footer = () => {
    return (
        <footer>
            <div className='info'>
                <p>More ways to shop: Find an Apple store or other retailer near you. Or all 0080 040 1966</p>
                <img src="/logo.svg" alt="Appe Logo" />
            </div>
            <hr />
            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
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