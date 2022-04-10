import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../compnents/Navbar';

const Home = () => {
   const state=useSelector(state=>state)
   console.log(state);
    return (

     <>
     <Navbar/>

     
     </>
    );
};

export default Home;