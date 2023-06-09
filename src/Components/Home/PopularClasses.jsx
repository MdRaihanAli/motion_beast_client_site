import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useClasses from '../../Hooks/useClasses'

function PopularClasses() {
    const [classd] = useClasses()
    console.log(classd);

    return (
        <div>
            <div className='container'>
                <h2 className='text-center fw-bold'> <span className="text-success">Popular</span> Classes</h2>
                <div className='border-bottom w-25 mx-auto'></div>
                <div className="row mt-1
                
                g-lg-5 g-md-3 g-2">
                    {
                        classd.map(clas => <div className='col-md-6  col-lg-4'>
                             <Card style={{border:'none card_style'}} className='bg-light text-center'>
                            <Card.Img variant="top" src={clas.image} />
                            <Card.Body>
                                <Card.Title>{clas.title}</Card.Title>
                                <div className='d-flex justify-content-between '>
                                <h6 className='shadow-sm p-2 text-success'>Enrolled {clas.enarolled}</h6>
                                <h6 className='shadow-sm p-2 text-success'>Available seats {clas.range - clas.enarolled}</h6>
                                </div>
                                <Card.Text>
                                  {clas.detail}
                                </Card.Text>
                                <Button variant="success shadow">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        </div>
                         )
                    }
                </div>


            </div>



        </div>
    )
}

export default PopularClasses