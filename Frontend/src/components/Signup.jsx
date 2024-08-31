import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className='flex h-screen items-center justify-center  '>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <div className="md:w-[600px] w-[300px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black ">✕</Link>
                            <h3 className="font-bold text-xl text-black">Signup</h3>
                            {/* name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span> <br />
                                <input type="text" placeholder='Enter your Name' className='outline-none border rounded-md md:w-80 w-60 px-3'
                                {...register("name", { required: true })} />
                                {errors.name && <span className='text-sm text-red-500' >This field is required</span>}
                            </div>
                            {/* username */}
                            <div className='mt-4 space-y-2'>
                                <span>Username</span> <br />
                                <input type="username" placeholder='Enter your username' className='outline-none border rounded-md md:w-80 w-60 px-3'
                                {...register("username", { required: true })} />
                                {errors.username && <span className='text-sm text-red-500' >This field is required</span>}
                            </div>
                            {/* email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span> <br />
                                <input type="email" placeholder='Enter your Email' className='outline-none border rounded-md md:w-80 w-60 px-3' 
                                {...register("email", { required: true })}/>
                                {errors.email && <span className='text-sm text-red-500' >This field is required</span>}
                            </div>
                            {/* password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span> <br />
                                <input type="password" placeholder='Enter your Password' className='outline-none border rounded-md md:w-80 w-60 px-3'
                                {...register("password", { required: true })} />
                                {errors.password && <span className='text-sm text-red-500' >This field is required</span>}
                            </div>
                            {/* login button */}
                            <div className=''>
                                <div className='mt-4 flex justify-around'>
                                    <button className='border bg-pink-500 rounded-md px-2 py-1 hover:bg-pink-800 hover:text-white'>Signup</button>
                                    <p className=''>
                                        Have account?<button className='underline cursor-pointer text-blue-700'
                                            onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                                        <Login />
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
