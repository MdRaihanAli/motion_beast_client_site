import React, { useContext } from 'react'
import useMyClass from '../../Hooks/useMyClass'
import usemySelectedClass from '../../Hooks/useMyselectedClass'
import { AuthContext } from '../../provider/Provider'
import { Button, Card } from 'react-bootstrap'
import { toast } from 'react-toastify'

function MyEnrolledClasses() {
    const { user } = useContext(AuthContext)
    const [mySelectedClasses, refetch] = usemySelectedClass(user?.email)
    console.log(mySelectedClasses);

    const myEnrolClass = mySelectedClasses.filter(item=>item.select==='enrolled')
    console.log(myEnrolClass);

    // const handelDelete = (id) => {
    //     fetch(`${import.meta.env.VITE_link}/selectedItemDelete/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             toast("Class is deleted",)
    //             refetch()
                
    //         })
    // }





    if (!user) {
        return <div style={{ width: "100vh" }} className="spinner-border d-flex align-self-center justify-content-center w-100" role="status">
            <span className="visually-hidden align-self-center">Loading...</span>
        </div>
    }
    
  return (
    <div>
            <h2 className='text-center fw-bold'> <span className="text-success">My</span> Enrollment Class</h2> 
            <div className='border-bottom w-25 mx-auto'></div>
            <div className="row mt-1 g-lg-5 g-md-3 g-2">
                {
                    myEnrolClass.map(clas => <div key={clas._id} className='col-md-6   mb-3'>
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
                                    <Button variant="success shadow">You Are Successfully Enrolled</Button>
                                    
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                    )
                }
            </div>



        </div>
  )
}

export default MyEnrolledClasses