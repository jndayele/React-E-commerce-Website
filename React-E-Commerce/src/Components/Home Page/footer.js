import React from "react";
import "./footer.css";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="wrapper">
                        <div className="row">
                            <h4>Company</h4>
                            <ul className="list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <h4>Resources</h4>
                            <ul className="list">
                                <li><a href="#">Start</a></li>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Case</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <h4>Community</h4>
                            <ul className="list">
                                <li><a href="#">Discord</a></li>
                                <li><a href="#">Event</a></li>
                                <li><a href="#">FAQS</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <h3>Subscribe to our newsletter</h3>
                            <p>Join our community to get weekly updates and unique gifts every friday</p>
                            <input type="email" placeholder="Email Address"></input>
                            <div className="btn">
                                <button type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                <div className="wrapper">
                    <p class="mini-text">© 2024 Company, Inc. All right reserved.</p>
                    <div class="socials">
                        <ul>
                            <li><a href="#"><FaXTwitter /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><SiFacebook /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;