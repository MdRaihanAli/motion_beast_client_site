import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/Provider'
import { Button, Modal, Table } from 'react-bootstrap'
import useMyClass from '../../Hooks/useMyClass'

function MyClass() {
    const { user } = useContext(AuthContext)
    const [myAllClass, refetch] = useMyClass(user?.email)
    const handleClose = () => setShow(false);

    const [singleData, setSingleData] = useState([])
    const [show, setShow] = useState(false);
    const handleShow = (data) => {
        setSingleData(data)
        setShow(true)
    };




    const handelUpdate = (e) => {
        e.preventDefault()
        const name = e.target.title.value
        console.log(name);


        // fetch(`${import.meta.env.VITE_link}/classfeedback/${defaultId}`, {
        //     method: 'PUT',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify({ feedback: textData })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         toast("Class sturus is Updated",)
        //         refetch()
        //         handleClose()
        //     })
    }


    return (
        <div className='container'>
            <h1 className='fw-bold my-4 text-center'>My <span className="text-success">Class</span> </h1>
            <Table striped hover>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>

                        <th scope="col">enarolled</th>
                        <th scope="col">Status</th>
                        <th scope="col">Feedback</th>
                        <th scope="col">Acction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAllClass.map((clas, index) => <tr key={index}>
                            <th >{index + 1}</th>
                            <td> <img style={{ maxWidth: '150px' }} className='rounded w-100 h-100' src={clas.image} alt="" /></td>
                            <td>{clas.title}</td>
                            <td>{clas.enarolled}</td>
                            <td>{clas.role}</td>
                            <td>{clas.feedback}</td>
                            <td>
                                <button onClick={() => handleShow(clas)} className='btn btn-success btn-sm w-100'>Approve</button>

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
                    <form onSubmit={handelUpdate}>
                        <input className='form-control' placeholder='Writer Your Feedback' type="text" name='title' />

                        <Button type='submit'>
                            Save Feedback
                        </Button>
                    </form>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default MyClass