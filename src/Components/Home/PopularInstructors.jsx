import React from 'react'
import useUsers from '../../Hooks/useUsers'
import { Card } from 'react-bootstrap';

function PopularInstructors() {
  const [users] = useUsers()

  const instructors = users.filter(user=>user.role=='insrtuctor')
  console.log(users);
  return (
    <div className='container mt-md-5 pt-md-2'>
      <h2 className='text-center fw-bold'> <span className="text-success">My</span> Selected</h2>
      <div className='border-bottom w-25 mx-auto'></div>
      <div className="row mt-1 g-lg-5 g-md-3 g-2">
        {
          instructors.map(clas => <div key={clas._id} className='col-md-4   mb-3'>
            <div style={{ border: 'none card_style' }} className='bg-light card popular-hover-main text-center position-relative'>
              <Card.Img variant="top" className='w-sm-100 rounded-circle' style={{ maxHeight: "338px" }} src={clas.image} />
              <div className='w-100 h-100 popular-hover d-flex'>
                <div className='mt-auto mx-auto text-light text-bold'>
                  <h3 className=''>{clas.name}</h3>
                  <h6>{clas.email}</h6>
                </div>
              </div>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default PopularInstructors