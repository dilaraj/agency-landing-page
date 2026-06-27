import './Hero.css'
import Header from '../../components/Header/Header'

import heroDesktopImg from '../../assets/images/desktop/image-header.jpg'
import heroMobileImg from '../../assets/images/mobile/image-header.jpg'
import heroArrow from '../../assets/images/icon-arrow-down.svg'

export default function Hero() {
    return (
        <div className="hero-container">
            <picture>
                <source media="(min-width: 769px)" srcset={heroDesktopImg} />
                <img src={heroMobileImg} alt="Desktop Background Image" className='hero-background-img'/>
            </picture>

            <div className="header"><Header /></div>
            
            <div className="hero-content">
                <span>we are creatives</span>
                <a href="#target-section" className='scroll-btn'>
                    <img src={heroArrow} alt="Hero Down" className="hero-arrow" />
                </a>
            </div>
        </div>
    )
}