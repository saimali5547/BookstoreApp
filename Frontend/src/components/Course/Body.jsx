// import React from 'react'
import list from '../../../public/list.json'
import Card from '../Card'
import { Link } from 'react-router-dom';



const Body = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
                <div className='pt-28 item-center justify-center text-center space-y-8 dark:bg-slate-900 dark:text-white'>
                    <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'> Here!:)</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ab accusantium itaque suscipit, corrupti eius dolore reiciendis earum voluptas sit tenetur nobis aut culpa voluptatum consequuntur odio possimus molestiae labore?</p>
                    <div className='space-y-3'>
                        <Link to="/">
                            <button className="btn bg-pink-500 hover:bg-pink-700 text-white  ">Back</button>
                        </Link>
                    </div>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                    {
                        list.map((item) => (
                            <Card item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Body