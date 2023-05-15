import Image from 'next/image'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm
      ('message_ID', 
      'template_ID', 
      form.current, 
      'PUBLIC KEY')
        .then((result) => {
            console.log(result.text);
            console.log("Your message is sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <><footer className="">


            <section className="footer">
                <div className="footer_contacts">
                    <h4>OUR SOCIALS</h4>
                    <div className="footer-icon">
                        <a href="https://web.facebook.com/chfak.ke"><i className="fab fa-facebook"></i>
                            <span className="medialinks">Facebook</span></a>

                    </div>
                    <div className="footer-icon">
                        <a href="https://twitter.com/chfak_ke"><i className="fab fa-twitter"></i>
                            <span className="medialinks">Twitter</span></a>

                    </div>
                    <div className="footer-icon">
                        <a href="https://www.instagram.com/chfak_ke/"><i className="fab fa-instagram"></i>
                            <span className="medialinks">Instagram</span></a>

                    </div>
                    <div className="footer-icon">
                        <a href="https://www.linkedin.com/company/children-homes-founders-association-of-kenya/"><i className="fab fa-linkedin"></i>
                            <span className="medialinks">LinkedIn</span></a>

                    </div>
                </div>
                <div className="footer_contacts">
                    <h4>CONTACTS</h4>
                    <div className="footer-icon">
                        <i className="fa-solid fa-location-crosshairs"></i>
                        <span>Mogra Children&rsquo;s Centre</span>
                    </div>
                    <div className="footer-icon">
                        <i className="fa fa-phone"></i>
                        <span>+254 707 431 598 / +254 731 647 399</span>
                    </div>
                    <div className="footer-icon">
                        <i className="fa fa-envelope"></i>
                        <span>partnership@chfak.or.ke</span>
                    </div>
                </div>
                <div className="newsletter">
                    <h4>SUBSCRIBE</h4>
                    <h6>Subscribe to our newsletter</h6>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-control">
                            <label htmlFor="roll"><i className='fa fa-envelope'></i></label>
                            <input
                                className="tbox Email"
                                type="user_email"
                                // id="roll"
                                // name="roll"
                                required
                                minLength="10"
                                maxLength="20"
                                placeholder="Your Email"
                            />
                            <input className="btn" type="submit" value="SUBSCRIBE" />
                        </div>
                    </form>
                </div>
            </section>
            <hr size="0.5" width="100%" color="#616060" />
            <section className="footer1">
                <i className="fas fa straight-line"></i>
                <span className="copyright">© CHFAK 2023. | All Rights Reserved.   </span>
                <span className="right">Powered by: <a href="https://www.peniaccds.com">PDSL </a></span>
            </section>
        </footer>
            
        </>
    );
}

export default Footer