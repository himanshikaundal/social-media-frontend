import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../compnents/Navbar';
import Profile from '../compnents/Profile';
import Suggestion from '../compnents/Suggestion';
import Uploadpost from '../compnents/Uploadpost';

const Home = () => {
   const state=useSelector(state=>state)
   console.log(state);
    return (

     <>
      <Navbar/>
     <Profile/>  
     <Uploadpost/> 
     <Suggestion/>
     
     </>
    );
};

export default Home;