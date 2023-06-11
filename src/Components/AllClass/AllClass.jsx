import React, { useRef } from 'react'
import useClasses from '../../Hooks/useClasses'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AllClass() {
    const [allClasses, refetch] = useClasses()
    console.log(allClasses);

    const handelAprove = (id, text) => {
        fetch(`${import.meta.env.VITE_link}/class/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ role: text, })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Class sturus is Updated",)
                refetch()
            })
    }


    //  modal
    const [defaultId, setdefaultId] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setdefaultId(id)
        setShow(true)
    };

    const feedback = useRef()
    const handelFidBack = () => {
        const textData = feedback.current.value

        fetch(`${import.meta.env.VITE_link}/classfeedback/${defaultId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ feedback: textData })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Class sturus is Updated",)
                refetch()
                handleClose()
            })
    }


    return (

        <div className='container'>
            <h1 className='fw-bold my-4 text-center'>Manage <span className="text-success">All  Class</span> </h1>
            <Table striped hover>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Available seats</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Acction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allClasses.map((clas, index) => <tr key={index}>
                            <th >{index + 1}</th>
                            <td> <img className='rounded w-100 ' height='100' src={clas.image} alt="" /></td>
                            <td>{clas.title}</td>
                            <td>
                                <span>{clas.name}</span> <br />
                                <span>{clas.email}</span>
                            </td>
                            <td>{clas.range}</td>
                            <td>{clas.price}</td>
                            <td>{clas.role}</td>
                            <td>
                                <button disabled={clas.role == 'approved' || clas.role == 'denied'} onClick={() => handelAprove(clas._id, "approved")} className='btn btn-success btn-sm w-100'>Approve</button>
                                <button disabled={clas.role == 'denied' || clas.role == 'approved'} onClick={() => handelAprove(clas._id, "denied")} className='btn btn-danger btn-sm  w-100 my-2'>Deny </button>
                                <button onClick={() => handleShow(clas._id)} className='btn btn-outline-secondary btn-sm  w-100'>feedback</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea className='form-control' placeholder='Writer Your Feedback' type="text" name='feedback' ref={feedback} />
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="success" onClick={handelFidBack}>
                        Save Feedback
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AllClass