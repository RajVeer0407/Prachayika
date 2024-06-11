import React from 'react'
import styled from 'styled-components'
import "./ContactUsStyles.css"

export const ContactUs = () => {
    const Wrapper = styled.section``;
    return (
        <Wrapper>

            <div><div class="container">
                <span class="big-circle"></span>
                <img src="../src/assets/location.png" class="square" alt="" />
                <div class="form">
                    <div class="contact-info">
                        <h3 class="title">Let's get in touch</h3>
                        <p class="text">
                            Fill out the form and a member from our team will be get back to you
                            within 24 hours.
                        </p>

                        <div class="info">
                            <div class="information">
                                <img src='https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/location.png?raw=true' class="icon" alt="" />
                                <a href="https://goo.gl/maps/CFZtXymGs3FGieyB9" className='locationmap' target="_blank" rel="noopener noreferrer">Raipur, Chhattisgarh 492014</a>
                            </div>
                            <div class="information">
                                <img src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/email.png?raw=true" class="icon" alt="" />
                                <a href="mailto:info@prachayikaevents.com" className='mail'>info@prachayikaevents.com</a>
                            </div>
                            <div class="information">
                                <img src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/phone.png?raw=true" class="icon" alt="" />
                                <a href="tel:+91 9582056738" className='contactno'>095820 56738</a>
                            </div>
                        </div>

                        <div class="social-media">
                            <p>Connect with us :</p>
                            <div class="social-icons">
                                <a href="https://www.facebook.com/Prachayikaevent/" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="/">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/prachayika__events/" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/pallavi-gupta-b9377a147/" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <span class="circle one"></span>
                        <span class="circle two"></span>

                        <form action="https://formspree.io/f/mlekljyl" method="POST" autocomplete="off">
                            <h3 class="title">Contact us</h3>
                            <div class="input-container">
                                <input type="text" name="name" placeholder="Name" class="input" />
                                {/* <label for="">Username</label>                              */}
                                <span>Username</span>
                            </div>
                            <div class="input-container">
                                <input type="email" name="email" placeholder="Email" class="input" />
                                {/* <label for="">Email</label> */}
                                <span>Email</span>
                            </div>
                            <div class="input-container">
                                <input type="tel" name="phone" placeholder="Phone" class="input" />
                                {/* <label for="">Phone</label> */}
                                <span>Phone</span>
                            </div>
                            <div class="input-container textarea">
                                <textarea name="message" placeholder="Message" class="input"></textarea>
                                {/* <label for="">Message</label> */}
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" class="btn" />
                        </form>
                    </div>
                </div>
            </div></div>
        </Wrapper>
    )
}
