import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaFacebookMessenger, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className='bg-dark text-light'>
            <div className='py-5'>
                <div className="container">
                    <div className="row g-md-4">
                        <div className="col-md-6 col-lg-3" data-aos="fade-left">
                            <div><img width='120' src={logo} alt="" /></div>
                            <hr />
                            <div><Link className='nav-link'>About Us</Link></div>
                            <div><Link className='nav-link'>Contact Us</Link></div>
                            <div><Link className='nav-link'>Terms of Service</Link></div>
                            <div><Link className='nav-link'>Refund policy</Link></div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-right">
                            <h3 className='text-bold'>Store Policies</h3>
                            <hr />
                            <div><Link className='nav-link'>Shipping & Returns Policy</Link></div>
                            <div><Link className='nav-link'>Privacy Policy</Link></div>
                            <div><Link className='nav-link'>Terms of Service</Link></div>
                            <div><Link className='nav-link'>Refund policy</Link></div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-left">
                            <h3 className='text-bold'>Subscribe</h3>
                            <hr />
                            <div><p className='nav-link'>Get Exclusive Deals & More!</p></div>
                            <div> <input className='form-control w-75' placeholder='Enter Email' type="text" /> </div>
                            <div> <button className='btn btn-light mt-2'>Send Us</button> </div>


                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-right">
                            <h3 className='text-bold'>Follow us</h3>
                            <hr />
                            <div className="midea">
                                <Link className='facebook'><FaFacebookSquare /></Link>
                                <Link className='messenger'><FaFacebookMessenger /></Link>
                                <Link className='insta text-danger'><FaInstagramSquare /></Link>
                                <Link className='youtube'><FaYoutubeSquare /></Link>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright © 2023 Toycra.</p>
        </div>
    )
}

export default Footer