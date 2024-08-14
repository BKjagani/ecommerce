import React from 'react';
import '../css/Contact.css';
import border from '../img/border.png';
import Auth from "./Auth.jsx";

export default function Contact() {
    Auth();
    return (
        <>
            <div className='contact-body'>
                <div className="container-fluid box">
                    <div className="row mt-5" style={{ display: 'flex', paddingLeft: '90px' }}>
                        <div className="col-sm-6"><h2>Contact</h2></div>
                        <div className="col-sm-6" style={{ textAlign: 'right', color: 'gray' }}>
                            <h5>You are here: <a href="/" style={{ color: 'gray' }}>Home</a>/Contact</h5>
                        </div>
                    </div>
                    <div className="row tab mt-5">
                        <div className="col-5 map" style={{ paddingLeft: '90px' }}>
                            <h1>Address</h1>
                            <p>
                                154 Jayantpark, Vishramnagar<br />
                                Ahmedabad - 380052<br />
                                <i className="bi bi-telephone-forward"></i>: 123456789
                            </p>
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.035985092941!2d72.54554997477018!3d23.02245091633377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4853c0001%3A0xcaaf3422be95a142!2sTechmicra%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1719995808343!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="col-5 form">
                            <form>
                                <h2>Get in Touch</h2>
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="examplefullname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-info hibtn">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5" style={{ justifyContent: 'space-evenly', backgroundColor: 'lightgrey' }}>
                        <div className="col-5">
                            <h2>Ready to Plan your up-coming events with us?</h2>
                        </div>
                        <div className="col-5">
                            <button type="button" className="btn btn-info hibtn">Contact us</button>
                        </div>
                    </div>
                    <div className="row" style={{ justifyContent: 'space-evenly', backgroundColor: 'lightgrey' }}>
                        <div className="col-md-4" style={{ paddingLeft: '90px' }}>
                            <br /><h2>Los Angeles</h2>
                            <img src={border} alt="Los Angeles" />
                            <h6>123 Virginia Drive Nottingham<br />
                                Los Angeles 12345<br /><br /></h6>
                            <h6>+123 444-12xy<br />
                                info@gmail.com</h6>
                        </div>
                        <div className="col-md-4">
                            <br /><h2>London</h2>
                            <img src={border} alt="London" />
                            <h6>123 Virginia Drive Nottingham<br />
                                Los Angeles 12345<br /><br /></h6>
                            <h6>+123 444-12xy<br />
                                info@gmail.com</h6>
                        </div>
                        <div className="col-md-4">
                            <br /><h2>New York</h2>
                            <img src={border} alt="New York" />
                            <h6>123 Virginia Drive Nottingham<br />
                                Los Angeles 12345<br /><br /></h6>
                            <h6>+123 444-12xy<br />
                                info@gmail.com<br /><br /></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
