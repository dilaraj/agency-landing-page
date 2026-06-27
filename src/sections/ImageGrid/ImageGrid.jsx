import './ImageGrid.css'

// Images
import desktopMilkBottles from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import mobileMilkBottles from '../../assets/images/mobile/image-gallery-milkbottles.jpg'

import desktopOrange from '../../assets/images/desktop/image-gallery-orange.jpg'
import mobileOrange from '../../assets/images/mobile/image-gallery-orange.jpg'

import desktopCone from '../../assets/images/desktop/image-gallery-cone.jpg'
import mobileCone from '../../assets/images/mobile/image-gallery-cone.jpg'

import desktopSugarCube from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'
import mobileSugarCube from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'



export default function ImageGrid() {
    return (
        <div className="image-grid-container">
            <picture>
                <source media="(min-width: 769px)" srcset={desktopMilkBottles} />
                <img src={mobileMilkBottles} alt="Desktop Cell Image" className='grid-images'/>
            </picture>

            <picture>
                <source media="(min-width: 769px)" srcset={desktopOrange} />
                <img src={mobileOrange} alt="Desktop Cell Image" className='grid-images'/>
            </picture>

            <picture>
                <source media="(min-width: 769px)" srcset={desktopCone} />
                <img src={mobileCone} alt="Desktop Cell Image" className='grid-images'/>
            </picture>

            <picture>
                <source media="(min-width: 769px)" srcset={desktopSugarCube} />
                <img src={mobileSugarCube} alt="Desktop Cell Image" className='grid-images'/>
            </picture>
        </div>
    )
}