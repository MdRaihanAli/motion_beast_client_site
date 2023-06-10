import React from 'react'
import useClasses from '../../Hooks/useClasses'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllClass() {
    const [allClasses, refetch] = useClasses()
    console.log(allClasses);

    const handelAprove=(id)=>{
        fetch(`${import.meta.env.VITE_link}/class/${id}`,{
            method:'PATCH',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({role: "approve"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast("Wow so easy!")
            refetch()
        })
    }




  return (
    <div className='container'>
            <h1 className='fw-bold my-4 text-center'>All  <span className="text-success">Class</span> </h1>
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
                                <button disabled={clas.role == 'approve'} onClick={()=>handelAprove(clas._id)} className='btn btn-success btn-sm w-100'>Approve</button>
                                <button className='btn btn-danger btn-sm  w-100 my-2'>Deny </button>
                                <button className='btn btn-secondary btn-sm  w-100'>feedback</button>
                                </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
  )
}

export default AllClass