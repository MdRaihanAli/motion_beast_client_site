import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useClasses from '../../Hooks/useClasses'
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/Provider';
import { Navigate, useNavigate } from 'react-router-dom';

function PopularClasses() {
    const [classd] = useClasses()
    const { user } = useContext(AuthContext)
    const navigator = useNavigate()



    const handelSelect = (item) => {
        if (!user) {
         return  toast('you have to login for select')
        }

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
        <div className='bg-light pb-3'>
            <div className='container'>
                <h2 className='text-center fw-bold pt-2'> <span className="text-success">Popular</span> Classes</h2>
                <div className='border-bottom w-25 mx-auto'></div>
                <div className="row mt-1 g-lg-5 g-md-3 g-2">
                    {
                        classd.slice(0,6).map(clas => <div className='col-md-6  col-lg-4 mb-3'>
                             <div style={{border:'none card_style'}} className='bg-light card skl text-center'>
                            <Card.Img variant="top" className='w-sm-100' style={{maxWidth:"338px", maxHeight:"190px"}} src={clas.image} />
                            <Card.Body>
                                <Card.Title>{clas.title}</Card.Title>
                                <div className='d-flex justify-content-between '>
                                <h6 className='shadow-sm p-2 text-success'>Enrolled: {clas.enarolled}</h6>
                                <h6 className='shadow-sm p-2 text-success'>Available seats: {clas.range - clas.enarolled}</h6>
                                </div>
                                <Card.Text>
                                  {clas.detail}
                                </Card.Text>
                                <Button onClick={() => handelSelect(clas)} variant="success shadow">Select Now</Button>
                            </Card.Body>
                        </div>
                        </div>
                         )
                    }
                </div>


            </div>



        </div>
    )
}

export default PopularClasses