import './InfoCell.css'

export default function InfoCell({ heading, bodyText, link }) {
    return (
        <div className="info-cell-container">
            <div className="heading">{heading}</div>
            <div className="bodyText">{bodyText}</div>
            <a href={link} className='link'>learn more <div className="underline"></div></a>
        </div>
    )
}