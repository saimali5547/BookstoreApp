import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../Footer'
import Body from './Body'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Body />
            </div>
            <Footer />
        </>
    )
}

export default Contact
