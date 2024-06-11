import styled from "styled-components";
import "./ContactFormStyles.css"

function ContactForm() {
    const Wrapper = styled.section`padding: 9rem 0 5rem 0;`;

    return (
        <Wrapper>
            <h2 className="common-heading">Feel Free to Contact us</h2>

            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/mlekljyl"
                        method="POST"
                        className="contact-inputs">
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            autoComplete="off"
                            required
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="E-mail"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            required></textarea>

                        <input type="submit" value="send" />
                    </form>                   
                </div>
            </div>
        </Wrapper>
    );
};
export default ContactForm