// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { createComment } from '../redux/actions/comment';
// function Comment() {
//   const { token } = useSelector(state => state.loginUser);

//   const feed = useSelector(state => state.feed);
//   const feeds = feed.post;
//   console.log(feeds[0]._id);

//   const [state, setstate] = useState(' ');

//   const dispatch = useDispatch();

//   function handleChange(e) {

//     setstate(e.target.value);

//   }
//   function handelSubmit(e) {
//     e.preventDefault();
  

//   }
//   return (

//     <form onSubmit={handelSubmit}>
//       <input type='text' value={state} name='state' onChange={handleChange}  name='comment' placeholder='Write a comment......' className='rounded-pill  opacity-75 px-2 border border-2 sm-4 w-100' />
//       <input type='submit' />
//     </form>
//   )
// }

// export default Comment