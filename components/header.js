import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Component } from 'react'

class Header extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <link rel="shortcut icon" href="/CHFAK1.jpg"></link>
                <Script src="https://kit.fontawesome.com/a076d05399.js" />
                <Script src="https://code.jquery.com/jquery-3.5.1.min.js" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" />
                <header className="">
                    <div className="scroll-up-btn">
                        <i className="fas fa-angle-up"></i>
                    </div>

                    <nav className="navbar-one flex">
                        <div className="left flex">
                            <div className="email">
                                <i className="fa fa-envelope"></i>
                                <span>partnership@chfak.or.ke</span>
                            </div>
                            <div className="call">
                                <i className="fa fa-phone"></i>
                                <span>+254 707 431 598</span>
                            </div>
                        </div>
                        <div className="right flex">
                            <div className="facebook">
                                <Link href="https://web.facebook.com/chfak.ke"><i className="fab fa-facebook"></i>
                                </Link>
                            </div>
                            <div className="instagram">
                                <Link href="https://www.instagram.com/chfak_ke/"><i className="fab fa-instagram"></i>
                                </Link>
                            </div>
                            <div className="twitter">
                                <Link href="https://twitter.com/chfak_ke"><i className="fab fa-twitter"></i>
                                </Link>
                            </div>
                            <div className="linkedin">
                                <Link href="https://www.linkedin.com/company/children-homes-founders-association-of-kenya/"><i className="fab fa-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <nav className="navbar-second flex" id="navbar">
                        <Link href="/"><Image src="/assets/log.png" alt="Vercel Logo" width={105} height={105} /></Link>
                        <ul id="menu-nav" className={this.state.clicked ? "#menu-nav active" : "#menu-nav"}>
                            <li className="active" >
                                <Link href="/" >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    ABOUT US
                                </Link>
                            </li>
                            <li>
                                <Link href="/members">
                                    MEMBER HOMES
                                </Link>
                            </li>
                            {/* <!-- <li><a href="#" class="has_dropdown">MEMBERSHIP <i class="fas fa-caret-down"></i></a>
                                        <div class="sub-menu-1">
                                            <ul>

                                js code form
                                            yarn add prettier -D --save-exact
                                                <li>
                                                    <a href="benefits.html">BENEFITS</a>
                                                </li>
                                                <li>
                                                    <a href="join.html">HOW TO JOIN</a>
                                                </li>
                                                <li>
                                                    <a href="member-homes.html">MEMBER HOMES</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </li> --> */}
                            <li>
                                <Link href="/gallery">
                                    PICTORIAL
                                </Link>
                            </li>
                            <li>
                                <Link href="/donations">
                                    DONATE
                                </Link>
                            </li>
                            {/* <!-- <li><a href="#" class="has_dropdown">SUPPORT <i class="fas fa-caret-down" id="fas_support"></i></a>
                                <div class="sub-menu-1">
                                    <ul>
                                        <li>
                                            <a href="partner.html">PARTNER</a>
                                        </li>
                                        <li>
                                            <a href="volunteer.html">VOLUNTEER</a>
                                        </li>
                                        <li>
                                            <a href="donate.html">DONATE</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> --> */}
                            <li>
                                <Link href="/contacts">
                                    CONTACTS
                                </Link>
                            </li>
                        </ul>
                        <div className="btn-button">
                            <Link href="/c4c">
                                C4C CAMPAIGN
                            </Link>
                        </div>
                        <div id="mobile" onClick={this.handleClick}>
                            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        {/* <div className="menu-btn">
                        <i className="fa fa-bars"></i>
                    </div>  */}
                    </nav>
                </header>
            </>
        );
    }
}
export default Header;