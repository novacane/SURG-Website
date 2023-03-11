import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        
        <div className = 'FooterWrap'>
            <div className = 'FooterContainer'>
                <div className = 'footer-item'>Berkeley, CA</div>
            </div>
            <div className = 'FooterContainer'>
                {/* Change to a tag and add email later */}
                <div className = 'footer-item'>
                    <a href="mailto:xsustainabilityreview.berkeley@gmail.com  ">Email</a>
                </div>
            </div>
            <div className = 'FooterContainer'>
                <div className = 'footer-item'>
                    <a href="https://surg.berkeley.edu/"  target="_blank" rel="noreferrer">SURG</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;