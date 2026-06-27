import './Testimonial.css'

export default function Testimonial({ image, content, author, role }) {
    return (
        <div className="testimonial-component-container">
            <img src={image} alt="Testimonial Image" className='testimonial-image'/>
            <div className="testimonial-content">{content}</div>
            <div className="author-info">
                <div className="author">{author}</div>
                <div className="role">{role}</div>
            </div>
        </div>
    )
}