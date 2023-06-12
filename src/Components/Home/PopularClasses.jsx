import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useClasses from '../../Hooks/useClasses'

function PopularClasses() {
    const [classd] = useClasses()

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
                                <Button variant="success shadow">Enroll Now</Button>
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