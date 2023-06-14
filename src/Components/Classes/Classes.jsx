import React, { useContext } from 'react'
import useClasses from '../../Hooks/useClasses'
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../provider/Provider';
import { toast } from 'react-toastify';
import useUsers from '../../Hooks/useUsers';

function Classes() {
    const [allClass] = useClasses()
    const approvedClass = allClass.filter(x=>x.role=='approved')
    const { user } = useContext(AuthContext)

    const [userInfo] = useUsers()

    const defaintUser = userInfo.find(x => x.email == user?.email)
   


    const handelSelect = (item) => {
        item.select = 'select'
        item.student_email = user?.email

        const selectdeClas = {
            class_id: item._id,
            title: item.title,
            name: user.displayName,
            email: user.email,
            image: item.image,
            price: item.price,
            range: item.range,
            p_photo: user.photoURL,
            enarolled: 0,
            detail: item.detail,
            select: "select",
            role: "pending",
            feedback: ""
        }


        

        fetch(`${import.meta.env.VITE_link}/selectClass`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(selectdeClas)
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
                        <th scope="col">Total seats</th>
                        <th scope="col">Price</th>
                        <th scope="col">Acction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        approvedClass.map((clas, index) => <tr key={index} style={{backgroundColor:"red"}}>
                            <th >{index + 1}</th>
                            <td> <img className='w-100 rounded ' height='40' src={clas.image} alt="" /></td>
                            <td>{clas.title}</td>
                            <td>{clas.name}</td>
                            <td>{clas.range - clas.enarolled}</td>
                            <td>{clas.range }</td>
                            <td>{clas.price}</td>
                            <td > <button disabled={defaintUser?.role== 'admin' || defaintUser?.role== 'insrtuctor' || !user } onClick={() => handelSelect(clas)} className='btn btn-success'>Select</button></td>
                        </tr>)
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default Classes