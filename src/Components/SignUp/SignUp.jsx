import { useForm } from "react-hook-form";
import googleImg from "../../assets/google.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/Provider";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";




function SignUp() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [err, setErr] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        if (data.password !== data.confirmpassword) {
            return setErr('Password is don"t mach')
        }
        if (data.password.length < 6) {
            return setErr('enter Password minmum six charecter')
        }
        if (!/[A-Z]/.test(data.password)) {
            return setErr('Password must include at least one capital letter');
        }
        if (!/[!@#$%^&*]/.test(data.password)) {
            return setErr('Password must include at least one special character');
        }

        createUser(data.email, data.password)
            .then(res => {
                updateUserProfile(data.name, data.photo)
                    .then((result) => {
                        navigate('/')
                        console.log(result);
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
                console.log(res)
                setErr('')
            })
            .catch(err => {
                console.log(err);
            })


    };

    const { signInWithGoogle } = useContext(AuthContext)

    const handelGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                <Navigate to='/' replace={true}></Navigate>
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return (
        <div className='row p-5 bg-success'>
            <div className="col-md-5 mx-auto">
                <form className="card p-5 shadow " onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center mb-4 fw-bold"> <span className="text-success">Sign Up</span> Here</h2>
                    <div className="mb-2">
                        <label className="form-label">Your Name</label>
                        <input type="text" {...register("name", { required: true })} className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Email address</label>
                        <input type="email" {...register("email", { required: true })} className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Photo Url</label>
                        <input type="url" {...register("photo", { required: true })} className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-2 position-relative">
                        <span onClick={() => setShow(!show)} className="position-absolute top-50 end-0 pointer me-2 mt-1">{show ? <FaEyeSlash /> : <FaEye />}</span>

                        <label className="form-label">Password</label>
                        <input type={show ? 'text' : 'password'} {...register("password", { required: true })} className="form-control" id="exampleInputPassword1" />
                        {errors.password && <span className="text-danger">Password is required </span>}

                    </div>
                    <div className="mb-2 position-relative">
                        <span onClick={() => setShow2(!show2)} className="position-absolute top-50 end-0 pointer me-2 mt-1">{show2 ? <FaEyeSlash /> : <FaEye />}</span>
                        <label className="form-label">Confirm Password</label>
                        <input type={show2 ? 'text' : 'password'} {...register("confirmpassword", { required: true })} className="form-control" id="exampleInputPassword1" />
                        {errors.confirmpassword && <span className="text-danger">This field is required</span> || <small className="text-danger">{err}</small>}


                    </div>
                    <div className="mb-3">
                        <small>I Have An Account!! <Link to='/login'>Sign In Here.</Link></small>

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

export default SignUp