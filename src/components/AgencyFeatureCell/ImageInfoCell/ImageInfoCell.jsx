import './ImageInfoCell.css'

export default function ImageInfoCell({desktopImg, mobileImg, infoHeading, textColor, infoBody}) {
    return (
        <div className="image-info-cell-container">
            <picture>
                <source media="(min-width: 769px)" srcSet={desktopImg} />
                <img src={mobileImg} alt="Desktop Cell Image" className='image-cell-background-img'/>
            </picture>
            <div className="info-container" style={{color: textColor}}>
                <div className="info-heading">{infoHeading}</div>
                <div className="info-body">{infoBody}</div>
            </div>
        </div>
    )
}