import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from '../../assets/img.png'
import men1 from '../../assets/carocel/men1.png'
import men2 from '../../assets/carocel/men2.png'
import men3 from '../../assets/carocel/men3.png'
import men4 from '../../assets/carocel/men4.png'

function Carosel() {
  return (
   
      <Carousel>
        <div style={{ height: '80vh' }} className='row align-items-center p-2'>

          <div className="container mx-auto row align-items-center ">
            <div className='col-md-6 mb-5'>
              <h4>Open Your mind</h4>
              <h1 className='fw-bolder'>
                <span className="text-success fw-bolder">THE KEY TO UNLOCKING</span> <br />
                YOUT PTENTIAL
              </h1>
              <div>
                <button className='btn btn-success'>All Course</button>
                <button className='btn btn-secondary ms-4 '>todo do</button>
              </div>
            </div>

            <div className='d-flex col-md-6 overflow-hidden'>
              <div className="row">
                <div className='bg-dark rounded col'>
                  <img className='w-100' src={men1} alt="" />
                </div>
                <div className=' rounded col' >
                  <img className='w-100' src={men2} alt="" />
                </div>
                <div className='bg-success col rounded overflow-hidden'>
                  <img className='w-100' src={men4} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
        {/*  slider two  */}

        <div style={{ height: '80vh', }} className=' slider_bg1'>
        </div>

        <div style={{ height: '80vh', }} className=' slider_bg2'>
        </div>
      </Carousel>
   
  )
}

export default Carosel