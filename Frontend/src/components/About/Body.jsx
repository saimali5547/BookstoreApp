import React from 'react'
import Benner2 from '../../../public/Benner2.jpg'

const Body = () => {
    return (
        <>
            <div className='min-h-screen p-28 '>
                <h1 className='font-bold'>About</h1>
                <div className='mt-5'>
                    <img src={Benner2} className='w-[200px] h-[200px]' alt="#" />
                    <h1 className='mt-5 text-pink-500'>Comedy Book</h1><br />
                    <p>Sure, I'd be happy to help with that! Could you give me a bit more detail about the comedy book? For example, what's the title, who’s the author, and what’s the general premise or theme of the book? Any specific aspects you'd like to highlight in the description?</p>

                </div>
                <div className='mt-5'>
                    <img src={Benner2} className='w-[200px] h-[200px]' alt="#" />
                    <h1 className='mt-5 text-pink-500'>Sports Book</h1><br />
                    <p>In the world of competitive sports, there are champions, there are underdogs, and then there are the characters in "The Underachievers." Meet a motley crew of misfits, dreamers, and well-meaning klutzes who form the most hilariously dysfunctional sports team ever to hit the field. <br />

                        From the moment coach Dave "Slick" Stevens accidentally recruits a group of out-of-shape office workers instead of elite athletes, it’s clear this season will be anything but ordinary. With a playbook full of questionable strategies and a roster that includes an ex-ballet dancer with two left feet, a computer programmer who thinks "quarterback sneak" involves stealthily avoiding touchdowns, and a retiree convinced she's still in her prime, this team is set for a comedic ride.</p>
                </div>


            </div>
        </>
    )
}

export default Body