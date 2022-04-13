import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../compnents/Navbar';
import Profile from '../compnents/Profile';
import Uploadpost from '../compnents/Uploadpost';
import Feed from '../compnents/Feed';


const Home = () => {
    const state = useSelector(state => state)
    console.log(state);
    return (

        <>
           
            <div className='row  bg-light'>
            <Navbar />
           
                <div className=' mt-4 offset-sm-1 col-sm-3'>
                    <Profile />

                </div>
                <div className=' mt-4  col-sm-6'>
                  <div className='py-2 mb-3 border border-1 rounded'> <Uploadpost/></div>
                    <Feed />
                </div>
                <div className='col-sm-2'>


                </div>
            </div>


        </>
    );
};

export default Home;