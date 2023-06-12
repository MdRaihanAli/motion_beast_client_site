import React from 'react'
import { FaMinusCircle , FaArrowCircleLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';

function ErrorPase() {
  return (
    <div className='error_container bg_color d-flex align-items-center justify-content-center'>
        <div className='text-center'>
        <h1 style={{fontSize:'8rem'}} className='text-danger' > <FaMinusCircle /> </h1>
        <h1 className='text-center display-3 fw-bold text-muted'>404</h1>
        <h4 className='text-center fw-bold text-muted'>this Pase is Not Found</h4>
        <Link to="/"><button className='btn '> <FaArrowCircleLeft /> Go back</button></Link>
        </div>
    </div>
  )
}

export default ErrorPase