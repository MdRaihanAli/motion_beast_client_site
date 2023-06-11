import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/Provider'
import { Button, Modal, Table } from 'react-bootstrap'
import useMyClass from '../../Hooks/useMyClass'
import { toast } from 'react-toastify'

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
        const title = e.target.title.value
        const price = e.target.price.value
      


        fetch(`${import.meta.env.VITE_link}/updateClass/${singleData._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ title: title, price: price })
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
                                <button onClick={() => handleShow(clas)} className='btn btn-success btn-sm w-100'>Update</button>

                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handelUpdate}>
                        <input className='form-control' defaultValue={singleData.title}   type="text" name='title' />
                        <div className='d-flex gap-3 mt-4'>
                            <input className='form-control w-50' defaultValue={singleData.price} type="number" name='price' />
                            <Button type='submit'>
                                Save Feedback
                            </Button>
                        </div>


                    </form>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default MyClass