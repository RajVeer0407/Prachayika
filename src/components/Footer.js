import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Prachayika</h1>
                    <p>Make It Awesome</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/Prachayikaevent/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/prachayika__events/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Branches</h4>
                    <a href="/">Delhi</a>
                    <a href="/">Raipur</a>
                    <a href="/">Goa</a>
                    <a href="/">Mumbai</a>
                </div>

                <div>
                    <h4>Quick Link</h4>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Service</a>
                    <a href="/">Gallery</a>
                </div>

                <div>
                    <h4>Contact Info</h4>
                    <a href="tel:+91 9582056738" className='contactno'>+91 9582056738</a>
                    <a href="mailto:info@prachayikaevents.com" className='mail'>info@prachayikaevents.com</a>
                </div>
            </div>
            <div className="credit"> Prachayika Events - All Rights Reserved | Created by | Rajveer shaw </div>
        </div>
    )
}

export default Footer;