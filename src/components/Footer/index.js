

import React from 'react';

function Footer() {
    return (
        <div className="page-footer font-small unique-color-dark">
            <div style={{ backgroundColor: '#d2d2d2' }}>
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a href="https://www.google.com" className="fb-ic">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a href="https://www.google.com" className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a href="https://www.google.com" className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            <a href="https://www.google.com" className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a href="https://www.google.com" className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Company name</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur
                  adipisicing elit.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                        <p>
                            <a href="https://www.google.com">MDBootstrap</a>
                        </p>
                        <p>
                            <a href="https://www.google.com">MDWordPress</a>
                        </p>
                        <p>
                            <a href="https://www.google.com">BrandFlow</a>
                        </p>
                        <p>
                            <a href="https://www.google.com">Bootstrap Angular</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                        <p>
                            <a href="https://www.google.com">Your Account</a>
                        </p>
                        <p>
                            <a href="https://www.google.com">Become an Affiliate</a>
                        </p>
                        <p>
                            <a href="https://www.google.com">Shipping Rates</a>
                        </p>
                        <p>
                            <a href="https://www.google.com">Help</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
                        <p>
                            <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p>
                            <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
            <img src="../../../assets/images/ecologo.png" style={{width:'50px'}} alt="..." />
            <br/><br/>
            <p> © 2020 Copyright: Ecosoft</p>
            </div>
        </div>
    );
}

export default Footer;