import React from 'react';
import Auth from "./Auth.jsx";

export default function Footer() {
    Auth();
    return (
        <div>
            <footer className="bg-dark text-light py-4" style={{ position: 'relative', bottom: 0, width: '100%', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row">
                        <div className="footer-col1 col-md-4">
                            <h5>Jewelry</h5>
                            <ul className="list-unstyled">
                                <li>Hotline: 01234</li>
                                <li>Phone: (+123) 456-7898</li>
                                <li>Email: info@gmail.com</li>
                                <li>Address: 2190 Clue, The Xronz, OZ 0038, ahmd</li>
                            </ul>
                            <div className="social-icons">
                                <a href="#"><i className="bi bi-rss"></i></a>
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-google"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="footer-col2 col-md-2">
                            <h5>Information</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">About Us</a></li>
                                <li><a href="#" className="text-light">Contact Us</a></li>
                                <li><a href="#" className="text-light">Privacy Policy</a></li>
                                <li><a href="#" className="text-light">Terms & Conditions</a></li>
                                <li><a href="#" className="text-light">Delivery Information</a></li>
                                <li><a href="#" className="text-light">Orders and Returns</a></li>
                            </ul>
                        </div>
                        <div className="footer-col3 col-md-2">
                            <h5>Customer Care</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">Help & FAQs</a></li>
                                <li><a href="#" className="text-light">My Account</a></li>
                                <li><a href="#" className="text-light">Order History</a></li>
                                <li><a href="#" className="text-light">Wishlist</a></li>
                                <li><a href="#" className="text-light">Newsletter</a></li>
                            </ul>
                        </div>
                        <div className="footer-col4 col-md-4">
                            <h5>Newsletter</h5>
                            <p>Sign up for our mailing list to get the latest updates & offers.</p>
                            <form>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-warning" type="button">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col text-center">
                            <p>&copy; 2023 ANRUEY. All Rights Reserved | Design by <a href="#" className="text-light">us</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
