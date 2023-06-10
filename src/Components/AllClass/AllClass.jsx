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
        // console.log(defaultId, textData);

        fetch(`${import.meta.env.VITE_link}/class/${defaultId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({role: "deny", feedback : textData })
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
            <Table striped bordered hover>
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
                            <td> <img className='rounded' width='80' height='80' src={clas.image} alt="" /></td>
                            <td>{clas.title}</td>
                            <td>
                                <span>{clas.name}</span> <br />
                                <span>{clas.email}</span>
                            </td>
                            <td>{clas.range}</td>
                            <td>{clas.price}</td>
                            <td>{clas.role}</td>
                            <td>
                                <button disabled={clas.role == 'approve'} onClick={() => handelAprove(clas._id, "approve")} className='btn btn-success btn-sm w-100'>Approve</button>
                                <button disabled={clas.role == 'deny'} onClick={() => handelAprove(clas._id, "deny")} className='btn btn-danger btn-sm  w-100 my-2'>Deny </button>
                                <button disabled={clas.role == 'approve' || clas.role == 'pending' } onClick={() => handleShow(clas._id)} className='btn btn-secondary btn-sm  w-100'>feedback</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" name='feedback' ref={feedback} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handelFidBack}>
                        Save Feedback
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AllClass