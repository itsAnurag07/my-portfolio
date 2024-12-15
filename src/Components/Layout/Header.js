

export default function Header() {
   return (
      <>
      {/* <!--====== Start Preloader ======-->  */}
        {/* <div className="preloader">
            <div className="loader">
                <div className="pre-shadow"></div>
                <div className="pre-box"></div>
            </div>
        </div> */}
        {/* <!--====== End Preloader ======--> */}
        {/* <!--====== offcanvas-panel ======-->  */}
       <div className="offcanvas-panel">
            <div className="panel-overlay"></div>
            <div className="z-panel-inner">
                <div className="panel-logo">
                    <a href="index-2.html"><img src="assets/images/logo/logo-1.png" alt="Logo"></img></a>
                </div>
                <div className="about-us">
                    <h5 className="panel-widget-title">About Us</h5>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam alias quae cupiditate quas, neque eum magni impedit asperiores.
                    </p>
                </div>
                <div className="contact-us">
                    <h5 className="panel-widget-title">Contact Us</h5>
                    <ul>
                        <li>
                            <i className="fal fa-map-marker-alt"></i>
                            121 King St, Melbourne VIC 3000, Australia.
                        </li>
                        <li>
                            <i className="fal fa-envelope-open"></i>
                            <a href="mailto:hello@barky.com"> hello@barky.com</a>
                            <a href="mailto:info@barky.com">info@barky.com</a>
                        </li>
                        <li>
                            <i className="fal fa-phone"></i>
                            <a href="tel:(312)-895-9800">(312) 895-9800</a>
                            <a href="tel:(312)-895-9888">(312) 895-9888</a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="panel-close"><i className="fal fa-times"></i></a>
            </div>
        </div> 
        {/* <!--====== offcanvas-panel ======-->
        <!--====== Start Header Section ======--> */}
        <header className="theme-header transparent-header">
            {/* <!-- header Navigation --> */}
            <div className="header-navigation navigation-style-v1">
                <div className="nav-overlay"></div>
                <div className="container-fluid">
                    <div className="primary-menu">
                        <div className="site-branding">
                            <a href="/" className="brand-logo"><img src="assets/images/logo/logo-1.png" alt="Site Logo"></img></a>
                        </div>
                        <div className="nav-menu">
                            {/* <!-- Navbar Close --> */}
                            <div className="navbar-close"><i className="far fa-times"></i></div>
                            {/* <!-- Nav Search --> */}
                            <div className="nav-search">
                                <form>
                                    <div className="form_group">
                                        <input type="email" className="form_control" placeholder="Search Here" name="email" required></input>
                                        <button className="search-btn"><i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu">
                                <ul>
                                    <li className="menu-item has-children"><a href="#" className="active nav-link">Demos</a>
                                        <ul className="sub-menu">
                                            <li className="has-children"><a href="#">Multipage</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index-2.html">Creative Agency</a></li>
                                                    <li><a href="index-3.html">Digital Agency</a></li>
                                                    <li><a href="index-4.html">Design Studio</a></li>
                                                    <li><a href="index-3-dark.html">Design Studio Dark</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children"><a href="#">Onepage</a>
                                                <ul className="sub-menu">
                                                    <li><a href="onepage-index-1.html">Creative Agency</a></li>
                                                    <li><a href="onepage-index-2.html">Digital Agency</a></li>
                                                    <li><a href="onepage-index-3.html">Design Studio</a></li>
                                                    <li><a href="onepage-index-3-dark.html">Design Studio Dark</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children"><a href="#" className="nav-link">Services</a>
                                        <ul className="sub-menu">
                                            <li><a href="services">Our Service</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children"><a href="#" className="nav-link">Portfolio</a>
                                        <ul className="sub-menu">
                                            <li><a href="portfolio">Our Portfolio</a></li>
                                            <li><a href="project-details.html">Portfolio Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children"><a href="#" className="nav-link">Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="about">About Us</a></li>
                                            <li><a href="team.html">Our Team</a></li>
                                            <li><a href="team-details.html">Team Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children"><a href="#" className="nav-link">Blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="blogs">Our Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="contact" className="nav-link">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                       <div className="header-right-nav">
                            <ul>
                                <li className="bar-item"><a href="#"><img src="assets/images/dot.png" alt="dot"></img></a></li>
                                <li className="navbar-toggle-btn">
                                    <div className="navbar-toggler">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        /</header>
        {/* <!--====== End Header Section ======--> */}
      </>
   )
}