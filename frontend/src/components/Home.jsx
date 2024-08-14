import React from 'react';
import Auth from './Auth';
import '../css/Home.css';
import i1 from '../img/back3.avif';
import i2 from '../img/back2.jpg';
import i3 from '../img/back4.jpg';
import bestseller1 from '../img/b1.jpg';
import bestseller2 from '../img/b2.jpg';
import exclusive1 from '../img/b3.jpg';
import exclusive2 from '../img/b4.jpg';

export default function Home() {
    Auth();
    return (
        <div>
            {/* Carousel Section */}
            <div id="customCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#customCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={i1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fusce Tellus</h5>
                            <p>Nulla Quis Sem At Nibh Elementum Imperdiet Lacina Arcu Eget Nulla:</p>
                            <a href="#" className="btn btn-warning">View More</a>
                            <a href="#" className="btn btn-dark">More Detail</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={i2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                            <p>Nulla Quis Sem At Nibh Elementum Imperdiet Lacina Arcu Eget Nulla:</p>
                            <a href="#" className="btn btn-warning">View More</a>
                            <a href="#" className="btn btn-dark">More Detail</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={i3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fusce Tellus</h5>
                            <p>Nulla Quis Sem At Nibh Elementum Imperdiet Lacina Arcu Eget Nulla:</p>
                            <a href="#" className="btn btn-warning">View More</a>
                            <a href="#" className="btn btn-dark">More Detail</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Features Section */}
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <i className="bi bi-truck" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-2">FAST DELIVERY</h5>
                        <p>Variations of passages of Lorem Ipsum available</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <i className="bi bi-box-seam" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-2">FREE SHIPPING</h5>
                        <p>Variations of passages of Lorem Ipsum available</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <i className="bi bi-award" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-2">BEST QUALITY</h5>
                        <p>Variations of passages of Lorem Ipsum available</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <i className="bi bi-headset" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-2">24X7 CUSTOMER SUPPORT</h5>
                        <p>Variations of passages of Lorem Ipsum available</p>
                    </div>
                </div>
            </div>

            {/* Our Capabilities Section */}
            <div className="capabilities">
                <div className="container">
                    <h2 style={{backgroundColor: "rgba(211, 211, 211, 0.616)", padding: "5px"}}>OUR CAPABILITIES</h2>
                    <p style={{ color: "black", backgroundColor: "lightgray", padding: "5px", display: "inline-block" }}>
                        The Elegan pays tribute to the tradition of fine jewelry in its most timeless form.
                    </p>
                    <div className="row text-center">
                        <div className="col-md-3 capability-item">
                            <div className="percentage">95%</div>
                            <h5>HUGE QUANTITY</h5>
                            <p>We are proud to release the best products for our beloved customers.</p>
                        </div>
                        <div className="col-md-3 capability-item">
                            <div className="percentage">85%</div>
                            <h5>ON TIME</h5>
                            <p>We are proud to release the best products for our beloved customers.</p>
                        </div>
                        <div className="col-md-3 capability-item">
                            <div className="percentage">75%</div>
                            <h5>TRUE MATERIAL</h5>
                            <p>We are proud to release the best products for our beloved customers.</p>
                        </div>
                        <div className="col-md-3 capability-item">
                            <div className="percentage">80%</div>
                            <h5>SERVICE</h5>
                            <p>We are proud to release the best products for our beloved customers.</p>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7156702714424!2d72.54130317430209!3d23.034209715895756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c03a51c46f%3A0xa17457a0a2561268!2sGovernment%20Polytechnic%20For%20Girls%20AHMEDABAD!5e0!3m2!1sen!2sin!4v1721748472396!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Our Bestseller Corner Section */}
            <div className="bestseller-corner py-5 ">
                <div className="container">
                    <h2>OUR BESTSELLER CORNER</h2>
                    <p>Check out our top-selling products that our customers love the most.</p>
                    <div className="row text-center">
                        <div className="col-md-4 mb-4 bestseller-item">
                            <a href="/product">
                                <img src={bestseller1} className="img-fluid bestseller-img"
                                    alt="Exclusive Product 1"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 bestseller-item">
                            <a href="/product">
                                <img src={bestseller2} className="img-fluid bestseller-img"
                                    alt="Exclusive Product 1"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 bestseller-item">
                            <a href="/product">
                                <img src={bestseller1} className="img-fluid bestseller-img"
                                    alt="Exclusive Product 1"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 bestseller-item">
                            <a href="/product">
                                <img src={bestseller2} className="img-fluid bestseller-img"
                                    alt="Exclusive Product 1"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 bestseller-item">
                            <a href="/product">
                                <img src={bestseller1} className="img-fluid bestseller-img"
                                    alt="Exclusive Product 1"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="col-md-4 mb-4 bestseller-item">
                            <a href="/product">
                                <img src={bestseller2} className="img-fluid bestseller-img"
                                    alt="Exclusive Product 1"
                                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Exclusive Products Section */}
            <div className="exclusive-products py-5 bg-light">
                <div className="container">
                    <h2>OUR EXCLUSIVE PRODUCTS</h2>
                    <p>Discover our exclusive range of products, designed to stand out.</p>
                    <div className="row text-center">
                        <div className="col-md-6 mb-4 exclusive-item">
                            <img
                                src={exclusive1}
                                className="img-fluid exclusive-img"
                                alt="Exclusive Product 1"
                                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                            />
                            {/* <h5 className="mt-2">Exclusive Product 1</h5> */}
                        </div>
                        <div className="col-md-6 mb-4 exclusive-item">
                            <img
                                src={exclusive2}
                                className="img-fluid exclusive-img"
                                alt="Exclusive Product 2"
                                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                            />
                            {/* <h5 className="mt-2">Exclusive Product 2</h5> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
