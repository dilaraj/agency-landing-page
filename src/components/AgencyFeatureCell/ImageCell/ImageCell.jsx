import './ImageCell.css'

export default function ImageCell({ desktopImg, mobileImg}) {
    return (
        <picture>
            <source media="(min-width: 769px)" srcset={desktopImg} />
            <img src={mobileImg} alt="Desktop Cell Image" className='cell-background-img'/>
        </picture>
    )
}