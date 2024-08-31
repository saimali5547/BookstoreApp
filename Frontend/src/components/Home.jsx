import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../Footer'
import Banner from './Banner'
import Freebook from './Freebook'
// import '../components/Home.css'


const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <Banner />
                <Freebook />
                <Footer />
            </div>
        </>
    )
}

export default Home