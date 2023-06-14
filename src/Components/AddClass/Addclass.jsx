import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/Provider';
import { toast } from 'react-toastify';


function Addclass() {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const IMG_Api = import.meta.env.VITE_IMG_apiKey
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${IMG_Api}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {

                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { title, price, range, detail } = data;
                    const newItem = {
                        title,
                        image: imgURL,
                        price: parseFloat(price),
                        range: parseFloat(range),
                        name: user.displayName,
                        email: user.email,
                        p_photo: user.photoURL,
                        enarolled: 0,
                        detail: detail,
                        stutus: "pendeng",
                        role: "pending",
                        feedback: ""
                    }


                    fetch(`${import.meta.env.VITE_link}/addClass`, {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(newItem)
                    })
                        .then(result => result.json())
                        .then(data => {
                            toast('class succsfully add')
                                console.log(data);
                        
                        })
                }
            })
    }




    return (
        <div className='row p-5 bg-success'>
            <div className=" mx-auto">
                <form className="card p-5 shadow " onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center mb-4 fw-bold"> <span className="text-success">Sign Up</span> Here</h2>

                    <div className="mb-2">
                        <label className="form-label">title</label>
                        <input type="text" {...register("title", { required: true })} className="form-control" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-2">
                        <label className="form-label">image</label>
                        <input type="file" {...register("image", { required: true })} className="form-control" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="d-flex gap-3">
                        <div className="mb-2 w-100">
                            <label className="form-label">Available seats</label>
                            <input type="number" {...register("range", { required: true })} className="form-control" />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="mb-2  w-100">
                            <label className="form-label">Price</label>
                            <input type="number" {...register("price", { required: true })} className="form-control" />
                            {errors.title && <span className="text-danger">This field is required</span>}
                        </div>

                    </div>
                    <div className="mb-2  w-100">
                        <label className="form-label">Details</label>
                        <textarea type="number" {...register("detail", { required: true })} className="form-control" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                    </div>




                    <div className='text-end'><button type="submit" className="btn btn-success ">Add A Class</button></div>
                    <hr />

                </form>
            </div>

        </div>
    )
}

export default Addclass