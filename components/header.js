"use strict";

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar-container">
                    <div class="navbar-left">
                        <a href="index.html">
                            <img src="images/logo.png" class="logo" alt="PowerHub"/>
                        </a>
                    </div>
                    <div class="navbar-mid min-l">
                        <ul class="navbar-menu">
                            <li class="menu-item dropdown">
                                <a href="#">Why Us</a>
                                <div class="dropdown-content">
                                    <ul class="dropdown-nav">
                                        <li><a href="#">Working With Us</a></li>
                                        <li><a href="#">The PowerHub Report Card</a></li>
                                        <li><a href="#">Case Studies</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item dropdown">
                                <a href="#">Getting Started</a>
                                <div class="dropdown-content">
                                    <ul class="dropdown-nav">
                                        <li><a href="#">Solutions</a></li>
                                        <li><a href="#">Packages and Pricing</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item dropdown">
                                <a href="#">Resources</a>
                                <div class="dropdown-content">
                                    <ul class="dropdown-nav">
                                        <li><a href="#">All Resources</a></li>
                                        <li><a href="#">Whitepapers</a></li>
                                        <li><a href="#">Infographics</a></li>
                                        <li><a href="#">Articles</a></li>
                                        <li><a href="#">Webinars</a></li>
                                        <li><a href="#">Guides</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item dropdown">
                                <a href="#">Blog</a>
                                <div class="dropdown-content">
                                    <ul class="dropdown-nav">
                                        <li><a href="#">Company and Products</a></li>
                                        <li><a href="#">Asset Management</a></li>
                                        <li><a href="#">Solar Energy</a></li>
                                        <li><a href="#">Wind Energy</a></li>
                                        <li><a href="#">Renewable Energy</a></li>
                                        <li><a href="#">Featured Articles</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="#">Our Team</a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-right">
                        <div class="min-m">
                            <a class="button button-secondary">Log In</a>&nbsp;&nbsp;
                            <a class="button button-primary">Request Demo</a>
                        </div>
                        <a id="navbar-toggle" class="navbar-toggle max-m" href="#">    
                            <span><i class="fas fa-bars menu-icon"></i></span>
                        </a>
                    </div>
                </nav>
            </header>
        `
    }
}

customElements.define('header-component', Header);


class MobileNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="mobile-navbar" class="mobile-navbar">
                <div class="mobile-navbar-container">
                    <div class="mobile-navbar-header">
                        <a href="index.html">
                            <img src="images/logo.png" class="logo" alt="PowerHub"/>
                        </a>
                        <span id="mobile-navbar-close" class="close">&times;</span>
                    </div>
                    <ul class="mobile-navbar-menu">
                        <li>
                            <div class="dropdown-header">
                                <a href="#">Blog</a>
                                <span><i class="fas fa-caret-down mobile-dropdown-icon"></i></span>
                            </div>
                            <div class="dropdown-content">
                                <ul class="dropdown-nav">
                                    <li><a href="#">All</a><li>
                                    <li><a href="#">Company and Products</a></li>
                                    <li><a href="#">Asset Management</a></li>
                                    <li><a href="#">Solar Energy</a></li>
                                    <li><a href="#">Wind Energy</a></li>
                                    <li><a href="#">Renewable Energy</a></li>
                                    <li><a href="#">Featured Articles</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <a class="button button-primary">Request Demo</a>
                    <a class="login">Log In</a>
                </div>
            </div>
        `
    }
}

customElements.define('mobile-navbar', MobileNavbar);