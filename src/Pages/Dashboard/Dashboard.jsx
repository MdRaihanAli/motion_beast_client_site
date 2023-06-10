import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Dashboard.css'
import { FaBars, FaBook, FaCalendarAlt, FaCalendarCheck, FaHome, FaLeanpub, FaShoppingBag, FaShoppingCart, FaSms, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';
import logo from '../../assets/logo.png'

function Dashboard() {
    return (
        <div className='container'>
            <div className="row">

                <div className="col-md-3 bg-success-subtle min-vh-100">
                    <div className='position-fixed'>
                        <div className='bg-light rounded align-items-center my-5 px-2 d-flex ali '>
                            <img width='80' height='80' className='h-100' src={logo} alt="" />
                            <h3 className='text-dark fw-bold'>3D Motion</h3>
                        </div>

                        <li><NavLink className='bg-transparent' to='/'> <FaHome />Home</NavLink></li>
                        <li><NavLink className='bg-transparent' to='/menu'> <FaBars />Manage Classes</NavLink></li>

                        <li><NavLink className='bg-transparent' to='/dasboard/reservation'> <FaUtensils /> Add Item</NavLink></li>
                        <li><NavLink className='bg-transparent' to='/dasboard/mycart'> <FaBook /> Manage Boking </NavLink> </li>
                        <li><NavLink className='bg-transparent' to='/dasboard/allUser'> <FaUser /> All User</NavLink></li>

                        <li><NavLink className='bg-transparent' to='/dasboard/mycart'> <FaHome /> User Home</NavLink></li>
                        <li><NavLink className='bg-transparent' to='/dasboard/reservation'> <FaCalendarAlt /> Reservation</NavLink></li>
                        <li><NavLink className='bg-transparent' to='/dasboard/paymentHistory'> <FaWallet /> Payment History</NavLink></li>
                        <li><NavLink className='bg-transparent' to='/dasboard/mycart'> <FaShoppingCart /> My Cart <span></span></NavLink> </li>
                        <li><NavLink className='bg-transparent' to='/dasboard/addReview'> <FaLeanpub />  Add Review</NavLink></li>
                        <li><NavLink className='bg-transparent' to='/dasboard/addReview'> <FaCalendarCheck />  My Bokking</NavLink></li>
                    </div>




                </div>
                <div className="col-md-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Dashboard