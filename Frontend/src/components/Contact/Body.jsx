import React from 'react'

const Body = () => {
    return (
        <>
            <div className='h-screen flex justify-center items-center '>
                <form action="#">
                    <h1 className='text-2xl font-bold'>Contact us</h1>
                    <div className='mt-3 space-y-2'>
                        <span>Name</span> <br />
                        <input type="text" placeholder='Enter your Name' className='outline-none border-[1px] rounded-md w-80 p-1 pl-3 dark:bg-slate-500 dark-text-white' />
                    </div>
                    <div className='mt-3 space-y-2'>
                        <span>Email</span> <br />
                        <input type="email" placeholder='Enter your Email' className='outline-none border-[1px] rounded-md w-80 p-1 pl-3 dark:bg-slate-500 dark-text-white' />
                    </div>
                    <div className='mt-3 space-y-2'>
                        <span>Message</span> <br />
                        <textarea name="message" id="" placeholder='Type your message' className='w-80 border-[1px] outline-none rounded-md pl-3 dark:bg-slate-500 dark-text-white' rows='4'></textarea>
                    </div>
                    <div className='mt-3'>
                        <button className='border bg-blue-600 px-3 py-1 rounded-md text-white hover:bg-blue-900'>Submint</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Body
