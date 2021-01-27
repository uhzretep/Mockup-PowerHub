"use strict";

class SignupModal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="signup-modal" class="modal">
                <div class="signup-modal-container">
                    <div class="signup-brand min-l">
                        <div class="logo-container">
                            <img src="images/logo.png" class="logo" alt="PowerHub"/>
                        </div>
                        <p class="slogan">Discover simple, and powerful asset management software for renewable energy.</p>
                        <img src="images/mockup-mac-1.png" class="mockup" alt="Mockup Mac 1"/>
                    </div>
                    <div class="signup-main">
                        <span id="modal-close" class="close">&times;</span>
                        <div class="signup-content-wrapper">
                            <div class="signup-header">
                                <h2 class="signup-title">Sign up for PowerHub</h2>
                            </div>
                            <div class="signup-body">
                                <form>
                                    <div class="form-field">
                                        <label for="fullname">Full Name</label>
                                        <input type="text" class="form-input" id="fullname" name="fullname" placeholder="Full Name">
                                    </div>
                                    <div class="form-field">
                                        <label for="company">Company</label>
                                        <input type="text" class="form-input" id="company" name="company" placeholder="Company">
                                    </div>
                                    <div class="form-field">
                                        <label for="email">Email Address</label>
                                        <input type="email" class="form-input" id="email" name="email" placeholder="Email Address">
                                    </div>
                                    <div class="form-field">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-input" name="password" placeholder="Password">
                                    </div>
                                    <div class="policy-confirmation">
                                        <input type="checkbox" class="policy" name="policy" id="policy">
                                        <span class="custom-checkbox"></span>
                                        <label for="policy">I’ve read and agree with the Terms of Service and Privacy Policy</label>
                                    </div>
                                    <button type="submit" class="button button-primary">Create Account</button>
                                    <div class="signin">
                                        <p>Already have an account?</p>
                                        <a href="#">Sign In</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('signup-modal-component', SignupModal);