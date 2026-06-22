import './Header.css'
import menuIcon from '../../assets/images/icon-hamburger.svg'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useState } from 'react'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="header-container">
             <div className="header-main">
                <div className="company-name">sunnyside</div>
                <div className="menu-container">
                    <button onClick={() => setIsVisible(!isVisible)}>
                        <img src={menuIcon} alt="Menu Hamburger Icon" className="menu-icon" />
                    </button>
                    <div className="desktop-menu-links">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Projects</a>
                        <a href="#" className='contact-btn'>Contact</a>
                    </div>
                </div>
             </div>

             {isVisible && <div className='menu-items'><MobileMenu /></div>}
        </div>
    )
}