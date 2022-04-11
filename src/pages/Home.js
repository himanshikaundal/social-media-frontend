import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../compnents/Navbar';
import Feed from '../compnents/Feed';

const Home = () => {
   const state=useSelector(state=>state)
   console.log(state);
    return (

     <>
     <Navbar/>
     <Feed/>

     
     </>
    );
};

export default Home;