import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
function Comment() {
const{user}=useSelector(state=>state.loginUser);

const[state,setstate]=useState({});

const dispatch=useDispatch();

function handleChange(e){
setstate([{state:e.target.value}]);

}

function handelSubmit(e){
    let values={
        comment:state,    
    }
    
    dispatch()
}
  return (

  <form onSubmit={handelSubmit}>
  <input type='text' value='state' onChange={handleChange} width='50rem' name='comment' placeholder='Write a comment......' className='rounded-pill  opacity-75 px-2 border border-2 sm-4 w-100' />
  <input type='submit'  />
  </form>
  )
}

export default Comment