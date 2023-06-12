import React from 'react'
import ledis from '../../assets/ledis.png'

function ExtraSection() {
  return (
    <div className='mt-5'>
        <div className="container">
            <div className="row exta-section-bg pt-5 align-items-center">
                    <div className="col-md-6 text-center">
                        <img className='w-75' src={ledis} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className='fw-bold'>Join Our Community</h2>
                        <p>Etiam semper cursus arcu vitae hendrerit. Cras gravida mollis pellentesque.</p>
                        <p>Phasellus vulputate urna quis lectus tincidunt tempor. Cras vel facilisis ex, at commodo dui. Cras non nisi gravida, sodales lacus vel, scelerisque justo.</p>
                    </div>
             
            </div>
        </div>
    </div>
  )
}

export default ExtraSection