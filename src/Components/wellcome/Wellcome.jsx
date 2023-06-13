import React from 'react'
import { FaCanadianMapleLeaf, FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Wellcome() {
  return (
    <div className='error_container bg_color d-flex align-items-center justify-content-center'>
      <div className='text-center'>
        <h1 style={{ fontSize: '8rem' }} className='text-danger' > <FaCanadianMapleLeaf /> </h1>
        <h1 className='text-center display-3 fw-bold text-muted'> <span className='text-success'>WellCome</span> 3D Motion</h1>
       
      </div>
    </div>
  )
}

export default Wellcome