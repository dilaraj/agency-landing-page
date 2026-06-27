import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-heading">sunnyside</div>
            <div className="footer-links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>

            <div className="footer-social-links">
                <a href="#">
                    <FontAwesomeIcon icon={faSquareFacebook} className='social-icons'/>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram} className='social-icons'/>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faTwitter} className='social-icons'/>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faPinterest} className='social-icons'/>
                </a>
            </div>
        </div>
    )
}