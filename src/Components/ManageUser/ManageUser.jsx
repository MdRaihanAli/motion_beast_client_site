import React, { useContext } from 'react'
import useUsers from '../../Hooks/useUsers';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/Provider';
import usemySelectedClass from '../../Hooks/useMyselectedClass';



function ManageUser() {
    const [users, refetch] = useUsers()
    const { user } = useContext(AuthContext)
    const [mySelectedClasses, ] = usemySelectedClass(user?.email)
    // const [userInfo] = useUsers()

    const defaintUser = users.find(x => x.email == user.email)
    
    const handelAprove = (id, text) => {
        fetch(`${import.meta.env.VITE_link}/user/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ role: text })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("User sturus is Updated",)
                refetch()
            })
    }

    if (defaintUser?.role=='insrtuctor') {
        return
    }
    if (defaintUser?.role=='student') {
        return
    }

    return (
        <div className='contaienr'>
            <h1 className='fw-bold my-4 text-center'>Manage <span className="text-success">All  Class</span> </h1>

            <Table striped  hover>
                <thead>
                    <tr>
                        
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Acction</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((clas, index) => <tr key={index}>
                            
                            <td> <img style={{maxHeight:"100px"}} className='rounded w-100 h-100' src={clas.image} alt="" /></td>

                            <td><h6>{clas.name}</h6></td>
                            <td>{clas.email}</td>
                            <td>{clas.role}</td>

                            <td>
                                <button disabled={clas.role == 'admin'} onClick={() => handelAprove(clas._id, "admin")} className='btn btn-success btn-sm w-100'>Make Admin</button>
                                <button disabled={clas.role == 'insrtuctor'} onClick={() => handelAprove(clas._id, "insrtuctor")} className='btn btn-danger btn-sm  w-100 my-2'>Make Instructor </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default ManageUser