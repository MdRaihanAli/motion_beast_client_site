import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaFacebookMessenger, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className='bg-dark text-light mt-5'>
            <div className='py-5'>
                <div className="container">
                    <div className="row g-md-4">
                        <div className="col-md-6 col-lg-3" data-aos="fade-left">
                            <div><img width='120' src={logo} alt="" /></div>
                            
                            <div><Link className='nav-link mt-3'>About Us</Link></div>
                            <div><Link className='nav-link mt-1 '>Contact Us</Link></div>
                            <div><Link className='nav-link mt-1'>Terms of Service</Link></div>
                            <div><Link className='nav-link mt-1'>Refund policy</Link></div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-right">
                            <h3 className='text-bold'>Coruse Policies</h3>
                            <hr />
                            <div><Link className='nav-link mt-1'>Shipping & Returns Policy</Link></div>
                            <div><Link className='nav-link mt-1'>Privacy Policy</Link></div>
                            <div><Link className='nav-link mt-1'>Terms of Service</Link></div>
                            <div><Link className='nav-link mt-1'>Refund policy</Link></div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-left">
                            <h3 className='text-bold'>Subscribe</h3>
                            <hr />
                            <div><p className='nav-link mt-1'>Get Exclusive Deals & More!</p></div>
                            <div> <input className='form-control w-75' placeholder='Enter Email' type="text" /> </div>
                            <div> <button className='btn btn-light mt-2'>Subscribe </button> </div>


                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-right">
                            <h3 className='text-bold'>Follow us</h3>
                            <hr />
                            <div className="midea display-6 text-light">
                                <Link className='facebook me-2 text-light'><FaFacebookSquare /></Link>
                                <Link className='messenger me-2'><FaFacebookMessenger /></Link>
                                <Link className='insta text-danger me-2'><FaInstagramSquare /></Link>
                                <Link className='youtube me-2'><FaYoutubeSquare /></Link>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright © 2023 3D Motion</p>
        </div>
    )
}

export default Footer