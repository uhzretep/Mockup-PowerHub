"use strict";

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="bar-container">
                        <div class="footer-left">
                            <div class="powerhub-brand">
                                <img src="images/logo.png" class="logo" alt="PowerHub"/>
                                <p class="slogan">Simple, but powerful.</p>
                                <div class="powerhub-social">
                                    <span>Follow us:</span>
                                    <a href="#" class="social-icon">
                                        <i class="fab fa-linkedin social-icon"></i>
                                    </a>
                                    <a href="#" class="social-icon">
                                        <i class="fab fa-twitter social-icon"></i>
                                    </a>
                                    <a href="#" class="social-icon">
                                        <i class="fab fa-facebook social-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-right">
                            <div class="column-one">
                                <h4>Why Us</h4>
                                <ul>
                                    <li>
                                        <a href="#">Solutions</a>
                                    </li>
                                    <li>
                                        <a href="#">The PowerHub Report Card</a>
                                    </li>
                                    <li>
                                        <a href="#">??</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="column-two">
                                <h4>Working With Us</h4>
                                <ul>
                                    <li>
                                        <a href="#">Market Partners</a>
                                    </li>
                                    <li>
                                        <a href="#">How it Works</a>
                                    </li>
                                    <li>
                                        <a href="#">Packages and Pricing</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="column-three">
                                <h4>Resources</h4>
                                <ul>
                                    <li>
                                        <a href="#">Your Guide to Asset Management</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Webinars and Whitepapers</a>
                                    </li>
                                    <li>
                                        <a href="#">Case Studies</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="column-four">
                                <h4>Our Team</h4>
                            </div>
                            <div class="column-five">
                                <h4>Careers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}
 
customElements.define('footer-component', Footer);