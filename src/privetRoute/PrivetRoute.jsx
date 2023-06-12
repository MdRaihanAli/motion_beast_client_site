import React, { useContext } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/Provider'


function PrivetRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div style={{ width: "100vh" }} className="spinner-border d-flex align-self-center justify-content-center w-100" role="status">
            <span className="visually-hidden align-self-center">Loading...</span>
        </div>
    }
    if (user) {
        return children
    }
    if (!user) {

        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

}

export default PrivetRoute