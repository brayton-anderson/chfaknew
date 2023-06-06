import Image from 'next/image'
import Head from 'next/head';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/footer';
import Header from '../components/header';


function Contacts(){   

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm
      ('service_36c53b1', 
      'template_0d1unrg', 
      form.current, 
      'cH8HyDujSGPSFC30m')
        .then((result) => {
            console.log(result.text);
            console.log("Your message is sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
            <Head>
          <title>Children Homes Founders Association of Kenya</title>
          <link rel="shortcut icon" href="/assets/CHFAK1.jpg"/>
          <meta name="description" content="Generated by create next app" />
          <meta charset="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          
      </Head>
            
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

            <Header />



            {/* <!-- Contacts --> */}
            <section className="about-us">
                {/* <!-- <div class="about">
            <h2>Get To Know Us</h2>
        </div> --> */}
            </section>

            <section className="contacts" id="contacts">
                <div className="contacts-contents ">
                    <div className="column-left">
                        {/* <!-- <div class="text">Get in Touch</div> --> */}

                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-home"></i>
                                <div className="info">
                                    <div className="head">Location</div>
                                    <div className="sub-title">Mogra Children&rsquo;s Home,</div>
                                    <div className="sub-title">Muthaiga North, Off Kiambu Rd,</div>
                                    <div className="sub-title">Nairobi, Kenya.</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-phone"></i>
                                <div className="info">
                                    <div className="head">Phone No</div>
                                    <div className="sub-title">+254 707 431598</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">P.O BOX 78754 - 00507<br />Nairobi, Kenya</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">partnership@chfak.or.ke</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-right">
                        <div className="contactForm">
                            <div className="text">Message us</div>
                            
                            <form  ref={form} onSubmit={sendEmail}>
                                <div className="fields">
                                    <div className="field name">
                                    <input type="text" name="name" placeholder="Enter your name"  required autoComplete="off" />
                                    
                                    </div>
                                    <div className="field email">
                                    <input type="text" name="user_email" placeholder="Enter email address" required autoComplete="off" />
                                    </div>

                                </div>
                                <div className="field Project">
                                <input type="text" name="subject" placeholder="Subject" required autoComplete="off" />
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" 
                                        rows="10" 
                                        
                                        name="message" placeholder="Enter your message" required>

                                    </textarea>
                                </div>
                                <div className="button">
                                    <button type="submit"
                                            
                                        >SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Google map --> */}
            <section className="maps">
                <div className="map-maps">
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8907596468007!2d36.84245461427455!3d-1.
                2354940359201732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1641bd1ea751%3A0xb7a2444dc1a1edd6!2s
                Mogra%20Children&#39;s%20Home!5e0!3m2!1sen!2ske!4v1655250879664!5m2!1sen!2ske" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                </div>
            </section>


            <Footer />
        </>
    );
}

export default Contacts

//   Contacts().catch(console.error);