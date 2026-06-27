import './Testimonials.css'
import Testimonial from '../../components/Testimonial/Testimonial'

// Images
import thomas from '../../assets/images/image-thomas.jpg'


export default function Testimonials() {
    return (
        <div className="testimonial-master-container">
            <div className="testimonial-header">client testimonials</div>
            <div className="testiminals-container">
                <Testimonial 
                    image={thomas}
                    content={"We put our trust in Sunnyside and they delievered, making sure our needs were met and deadlines were always hit."}
                    author={'Emily R.'}
                    role={'Marketing Director'}
                />
                <Testimonial 
                    image={thomas}
                    content={"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."}
                    author={"Thomas S."}
                    role={"Chief Operating Officer"}
                />
                <Testimonial 
                    image={thomas}
                    content={"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"}
                    author={"Jennie F."}
                    role={"Business Owner"}
                />
            </div>
        </div>
    )
}