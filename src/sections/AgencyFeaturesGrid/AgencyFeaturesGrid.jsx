import './AgencyFeaturesGrid.css'

// Components
import ImageCell from '../../components/AgencyFeatureCell/ImageCell/ImageCell'
import InfoCell from '../../components/AgencyFeatureCell/InfoCell/InfoCell'
import ImageInfoCell from '../../components/AgencyFeatureCell/ImageInfoCell/ImageInfoCell'

// Images
import desktopEgg from '../../assets/images/desktop/image-transform.jpg'
import mobileEgg from '../../assets/images/mobile/image-transform.jpg'
import desktopCup from '../../assets/images/desktop/image-stand-out.jpg'
import mobileCup from '../../assets/images/mobile/image-stand-out.jpg'
import desktopCherry from '../../assets/images/desktop/image-graphic-design.jpg'
import mobileCherry from '../../assets/images/mobile/image-graphic-design.jpg'
import desktopOrange from '../../assets/images/desktop/image-photography.jpg'
import mobileOrange from '../../assets/images/mobile/image-photography.jpg'

export default function AgencyFeaturesGrid() {
    return (
        <div className="agency-features-grid-container">
            <div className="cell cell1">
                <ImageCell 
                    desktopImg={desktopEgg}
                    mobileImg={mobileEgg}
                />
            </div>
            <div className="cell cell2">
                <InfoCell 
                    heading={'Transform your brand'}
                    bodyText={'We are a full-service creative agency specialising in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'} 
                />
            </div>
            <div className="cell cell3">
                <ImageCell 
                    desktopImg={desktopCup}
                    mobileImg={mobileCup}
                />
            </div>
            <div className="cell cell4">
                <InfoCell 
                    heading={'Stand out to the right audience'}
                    bodyText={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."} 
                />
            </div>
            <div className="cell cell5">
                <ImageInfoCell 
                    desktopImg={desktopCherry}
                    mobileImg={mobileCherry}
                    infoHeading={'Graphic Design'}
                    textColor={'hsl(167, 40%, 24%)'}
                    infoBody={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention"}
                />
            </div>
            <div className="ccell ell6">
                <ImageInfoCell 
                    desktopImg={desktopOrange}
                    mobileImg={mobileOrange}
                    infoHeading={'Photography'}
                    textColor={'hsl(198, 62%, 26%)'}
                    infoBody={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."}
                />
            </div>
        </div>
    )
}