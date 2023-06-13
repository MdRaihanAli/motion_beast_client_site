import React, { useContext } from 'react'
import useMyClass from '../../Hooks/useMyClass'
import usemySelectedClass from '../../Hooks/useMyselectedClass'
import { AuthContext } from '../../provider/Provider'
import { Button, Card } from 'react-bootstrap'
import { toast } from 'react-toastify'


// for modal 
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '../CheckOutFrom.jsx/CheckOutFrom'
const stripePromise = loadStripe(`pk_test_51NIQIfBbGexizKFDZ0V7AJy2IgMsQMxObZ5nCi0sJxZArnHi9BzTKPUzd6qSIliyeotmHg6Vb52QEfHMfe1z2rtw00GbpCwYQG`);


function MySelectedClasses() {
    const { user } = useContext(AuthContext)
    const [mySelectedClasses, refetch] = usemySelectedClass(user?.email)
    const handelDelete = (id) => {
        fetch(`${import.meta.env.VITE_link}/selectedItemDelete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Class is deleted",)
                refetch()

            })
    }


    const enroledUpdate =(id)=>{
        console.log(id);
    }


    const handelPay = (id) => {
        console.log(id);
        fetch(`${import.meta.env.VITE_link}/enrolledClass/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ select: "enrolled" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                enroledUpdate(id)
                toast(" Enroled  successfull",)
                refetch()

            })
    }

    // onClick={() => handelPay(clas._id)} 


    // for modal 
    const [deData, setData] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (data) => {
        setShow(true)
        setData(data)
    };





    if (!user) {
        return <div style={{ width: "100vh" }} className="spinner-border d-flex align-self-center justify-content-center w-100" role="status">
            <span className="visually-hidden align-self-center">Loading...</span>
        </div>
    }


    return (
        <div>
            <h2 className='text-center fw-bold'> <span className="text-success">My</span> Selected</h2>
            <div className='border-bottom w-25 mx-auto'></div>
            <div className="row mt-1 g-lg-5 g-md-3 g-2">
                {
                    mySelectedClasses.map(clas => <div key={clas._id} className='col-md-6   mb-3'>
                        <div style={{ border: 'none card_style' }} className='bg-light card skl text-center'>
                            <Card.Img variant="top" className='w-sm-100' style={{ maxHeight: "200px" }} src={clas.image} />
                            <Card.Body>
                                <Card.Title>{clas.title}</Card.Title>
                                <div className='d-flex justify-content-between '>
                                    <h6 className='shadow-sm p-2 text-success'>Enrolled: {clas.enarolled}</h6>
                                    <h6 className='shadow-sm p-2 text-success'>Available seats: {clas.range - clas.enarolled}</h6>
                                </div>
                                <Card.Text>
                                    <p>{clas.detail?.slice(0, 260)}</p>
                                </Card.Text>
                                <div className='d-flex justify-content-around'>
                                    <Button onClick={() => handleShow(clas)} variant="success shadow">Pay Now</Button>
                                    <Button onClick={() => handelDelete(clas._id)} variant="secondary shadow-lg">Delete</Button>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                    )
                }
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <Elements stripe={stripePromise} >
                        <CheckoutForm handleClose={handleClose} handelPay={handelPay} bookingInfo={deData} />
                    </Elements>





                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>
    )
}

export default MySelectedClasses