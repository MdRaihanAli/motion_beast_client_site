import React, { useContext } from 'react'
import useClasses from '../../Hooks/useClasses'
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../provider/Provider';
import { toast } from 'react-toastify';

function Classes() {
    const [allClass] = useClasses()
    const { user } = useContext(AuthContext)


    const handelSelect = (item) => {
        item.select = 'select'
        item.student_email = user.email

        fetch(`${import.meta.env.VITE_link}/selectClass`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                toast("this class is selected",)
            })
    }

    return (
        <div className='container'>
            <h1 className='fw-bold my-4 text-center'>Find Your <span className="text-success">Favorite</span> Class</h1>
            <Table striped hover>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Available seats</th>
                        <th scope="col">Price</th>
                        <th scope="col">Acction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allClass.map((clas, index) => <tr key={index} className=''>
                            <th >{index + 1}</th>
                            <td> <img className='w-100 rounded ' height='40' src={clas.image} alt="" /></td>
                            <td>{clas.title}</td>
                            <td>{clas.name}</td>
                            <td>{clas.range - clas.enarolled}</td>
                            <td>{clas.price}</td>
                            <td> <button onClick={() => handelSelect(clas)} className='btn btn-success'>Select</button></td>
                        </tr>)
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default Classes