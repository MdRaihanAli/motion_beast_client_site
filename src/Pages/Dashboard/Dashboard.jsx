import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Dashboard.css'
import { FaBars, FaBook, FaCalendarAlt, FaCalendarCheck, FaHome, FaLeanpub, FaShoppingCart, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../../provider/Provider';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Badge } from 'react-bootstrap';
import usemySelectedClass from '../../Hooks/useMyselectedClass';
import useUsers from '../../Hooks/useUsers';

function Dashboard() {
    const { user } = useContext(AuthContext)
    const [mySelectedClasses, refetch] = usemySelectedClass(user?.email)
    const [userInfo] = useUsers()

    const defaintUser = userInfo.find(x => x.email == user.email)
    console.log(defaintUser?.role);
    // console.log(userInfo);

    const myEnrolClass = mySelectedClasses.filter(item => item.select === 'enrolled')
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className="row">

                    <div className="col-md-3 bg-success-subtle min-vh-100">
                        <div className='position-fixed navbarr'>

                            <div className=' rounded my-3 mb-4  ms-5 text-center px-2 '>
                                <img title={user?.displayName} width='60' className='rounded-circle' height='60' src={user?.photoURL} alt="" />
                                <h5 className='text-dark fw-bold'>{user?.displayName}</h5>
                            </div>


                            <li><NavLink className='bg-transparent' to='/'> <FaHome />Home</NavLink></li>

                            {
                                defaintUser?.role == 'admin' ? <>
                                    <li><NavLink className='bg-transparent df' to='allClass'> <FaBars /> Manage Classes</NavLink></li>
                                    <li><NavLink className='bg-transparent' to='manageUsers'> <FaUser />  Manage User</NavLink></li>
                                </> : defaintUser?.role == 'insrtuctor' ? <>
                                    <li><NavLink className='bg-transparent' to='addClass'> <FaBook /> Add a Class </NavLink> </li>
                                    <li><NavLink className='bg-transparent' to='myClass'> <FaCalendarCheck />  My Class</NavLink></li>
                                </> : <>
                                    <li><NavLink className='bg-transparent' to='mySelectedClasses'> <FaCalendarAlt /> My Selected Classes <Badge bg="secondary">{mySelectedClasses.length}</Badge></NavLink></li>
                                    <li><NavLink className='bg-transparent' to='myEnrolledClass'> <FaLeanpub /> My Enrolled Classes <Badge bg="secondary">{myEnrolClass.length}</Badge></NavLink></li>
                                </>
                            }
                            {/* // <li><NavLink className='bg-transparent df' to='allClass'> <FaBars /> Manage Classes</NavLink></li>
                            // <li><NavLink className='bg-transparent' to='manageUsers'> <FaUser />  Manage User</NavLink></li>

                            // <li><NavLink className='bg-transparent' to='addClass'> <FaBook /> Add a Class </NavLink> </li>
                            // <li><NavLink className='bg-transparent' to='myClass'> <FaCalendarCheck />  My Class</NavLink></li> */}
                            {/* <li><NavLink className='bg-transparent' to='mySelectedClasses'> <FaCalendarAlt /> My Selected Classes <Badge bg="secondary">{mySelectedClasses.length}</Badge></NavLink></li>
                            <li><NavLink className='bg-transparent' to='myEnrolledClass'> <FaLeanpub /> My Enrolled Classes <Badge bg="secondary">{myEnrolClass.length}</Badge></NavLink></li> */}

                        </div>




                    </div>
                    <div className="col-md-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard