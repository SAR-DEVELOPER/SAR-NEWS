import Link from "next/link"

export default function Footer3({footerClass, logoWhite}) {
    return (
        <>
            <footer className={`footer-area ${footerClass}`} >
                {/* <div className="newsletter-style-two style-three pt-80 pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-6 col-xl-7 col-lg-8">
                                <div className="newsletter__title text-center mb-35">
                                    <div className="newsletter__title-icon">
                                        <i className="fas fa-envelope-open-text" />
                                    </div>
                                    <span className="sub-title">newsletter</span>
                                    <h4 className={`title ${logoWhite && "text-white"}`}>Get notified of the best deals on <br /> our WordPress Themes</h4>
                                </div>
                                <div className="newsletter__form-wrap text-center">
                                    <form action="#" className="newsletter__form">
                                        <div className="newsletter__form-grp">
                                            <input type="email" placeholder="Email address" required />
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    I agree that my submitted datLink is being collected and stored.
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn" type="submit">
                                            <span className="text">Subscribe</span>
                                            <i className="fas fa-paper-plane" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="footer__logo-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center m-2">
                                <div className="footer__logo logo">
                                    <Link href="/" className="logo-dark"><img src={`assets/img/logo/${logoWhite ? "logo":"logo"}.png`} alt="Logo" /></Link>
                                    <Link href="/" className="logo-light"><img src="assets/img/logo/logo.png" alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center m-2">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div className="footer__widget">
                                            <h4 className="fw-title">SAR Tax & Management Consultant</h4>
                                            <ul className="list-wrap">
                                                <li><Link href="#">U.N.</Link></li>
                                                <li><Link href="#">Conflicts</Link></li>
                                                <li><Link href="#">Terrorism</Link></li>
                                                <li><Link href="#">Disasters</Link></li>
                                                <li><Link href="#">Global Economy</Link></li>
                                                <li><Link href="#">Environment</Link></li>
                                                <li><Link href="#">Religion</Link></li>
                                                <li><Link href="#">Scandals</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div className="footer__widget">
                                            <h4 className="fw-title">Sarana Solusi Nawala Consulting</h4>
                                            <ul className="list-wrap">
                                                <li><Link href="#">U.N.</Link></li>
                                                <li><Link href="#">Conflicts</Link></li>
                                                <li><Link href="#">Terrorism</Link></li>
                                                <li><Link href="#">Disasters</Link></li>
                                                <li><Link href="#">Global Economy</Link></li>
                                                <li><Link href="#">Environment</Link></li>
                                                <li><Link href="#">Religion</Link></li>
                                                <li><Link href="#">Scandals</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div className="footer__widget">
                                            <h4 className="fw-title">Padjadjaran Karya Mandiri</h4>
                                            <ul className="list-wrap">
                                                <li><Link href="#">U.N.</Link></li>
                                                <li><Link href="#">Conflicts</Link></li>
                                                <li><Link href="#">Terrorism</Link></li>
                                                <li><Link href="#">Disasters</Link></li>
                                                <li><Link href="#">Global Economy</Link></li>
                                                <li><Link href="#">Environment</Link></li>
                                                <li><Link href="#">Religion</Link></li>
                                                <li><Link href="#">Scandals</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 m-2">
                                <div className="footer__social">
                                    <ul className="list-wrap justify-content-center">
                                        <li><Link href="https://www.facebook.com/people/SAR-Tax-Management-Consultant/100069784571838/"><i className="fab fa-facebook-f" /> Facebook 
                                        {/* <span>25K</span> */}
                                        </Link></li>
                                        <li><Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsartaxmgt"><i className="fab fa-twitter" /> Twitter 
                                        {/* <span>44K</span> */}
                                        </Link></li>
                                        <li><Link href="https://www.instagram.com/sartaxmanagement/"><i className="fab fa-instagram" /> Instagram 
                                        {/* <span>91K</span> */}
                                        </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
