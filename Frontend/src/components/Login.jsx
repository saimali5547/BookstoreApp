import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className='dark:bg-slate-900 dark:text-white'>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal text-black ">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black ">✕</Link>

                            <h3 className="font-bold text-xl text-black">Login</h3>
                            {/* email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span> <br />
                                <input type="email" placeholder='Enter your Email' className='outline-none border rounded-md md:w-80 w-60 px-3'
                                    {...register("email", { required: true })} />
                                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span> <br />
                                <input type="password" placeholder='Enter your Password' className='outline-none border rounded-md md:w-80 w-60 px-3'
                                    {...register("password", { required: true })} />
                                    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* login button */}
                            <div className=''>
                                <div className='mt-4 flex justify-around'>
                                    <button className='border bg-pink-500 rounded-md px-2 py-1 hover:bg-pink-800 hover:text-white'>Login</button>
                                    <p>
                                        No registered?<Link to='/Signup' className='underline cursor-pointer text-blue-700'>Signup</Link>
                                    </p>
                                </div>
                            </div>
                        </form>

                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Login
