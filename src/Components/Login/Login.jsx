import React, { useState } from "react";
import { useForm } from "react-hook-form";
import googleImg from "../../assets/google.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/Provider";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";


function Login() {
    const { signInWithGoogle, signIn } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(res => {
                navigate(from, { replace: true })
                console.log(res)
            })
            .catch(err => console.log(err))
    };
   


    const handelGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                // console.log(res);
                fetch(`${import.meta.env.VITE_link}/user`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ name: res.user.displayName, email: res.user.email, image: res.user.photoURL, role: "student" })
                })
                    .then(result => result.json())
                    .then(data => console.log(data))
                navigate(from, { replace: true })

            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className='row p-5 bg-success'>
            <div className="col-md-5 mx-auto">
                <form className="card p-5 shadow " onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center mb-4 fw-bold"> <span className="text-success"> Login</span> Here</h2>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" {...register("email", { required: true })} className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3 position-relative">
                        <span onClick={() => setShow(!show)} className="position-absolute top-50 end-0 pointer me-2 mt-1">{show ? <FaEyeSlash /> : <FaEye />}</span>
                        <label className="form-label">Password</label>
                        <input type={show ? 'text' : 'password'} {...register("password", { required: true })} className="form-control" id="exampleInputPassword1" />
                        {errors.password && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <small>I'm New !! <Link to='/signup'>Sign Up Here.</Link></small>

                    </div>
                    <div className='text-end'><button type="submit" className="btn btn-success ">Sign Up Now</button></div>
                    <hr />
                    <div>
                        <button onClick={handelGoogleLogin} className="btn btn-success"> <img width='40' src={googleImg} alt="" /> SignUp With Google</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login