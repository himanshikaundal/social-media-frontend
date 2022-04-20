import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import himanshi from "../assets/images/nav-img/himanshi.jpeg";
import { uploadPost } from '../redux/actions/uploadpost';

function Uploadpost() {
  const dispatch= useDispatch();
  const {token}=useSelector(state=>state.loginUser);
 const initialstate='hello';
  const[content,setContent]=useState(initialstate);

  useEffect(()=>{
    

  },[content]);

function changeHandler(e){

    setContent(e.target.value);

  }
  function submitHandler(e){
    e.preventDefault();
    console.log(content)
    dispatch(uploadPost(content,token));
   
  
  }
  return (
    <div className=' container-fluid  border border-1 sm-4 bg-light '>
      <div className=' row  ' >
        <div className='col-sm-2 '>
       <img src={himanshi}   class="rounded-circle w-50" alt="..." /> 
      
          </div>
          <div className='col-sm-7 pt-2'> 
          <form onSubmit={submitHandler} >
          <input type='text'  onChange={changeHandler} name='content' value={content} placeholder='start a post.....' className='rounded-pill   border border-1  h-75 w-100 rounded-3 bg-light  ' />
           <button  type='submit'> post </button>

          </form>
          {content}
          </div>
        
        <div className='col-sm-3 d-flex align-items-center' >
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="30px" fill='green' viewBox="0 0 640 512">
        <path d="M352 432c0 8.836-7.164 16-16 16H176c-8.838 0-16-7.164-16-16L160 128H48C21.49 128 .0003 149.5 .0003 176v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48L512 384h-160L352 432zM104 439c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9V439zM104 335c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9V335zM104 231c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30C56 196 60.03 192 65 192h30c4.969 0 9 4.031 9 9V231zM408 409c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9v30c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9V409zM591.1 0H239.1C213.5 0 191.1 21.49 191.1 48v256c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-256C640 21.49 618.5 0 591.1 0zM303.1 64c17.68 0 32 14.33 32 32s-14.32 32-32 32C286.3 128 271.1 113.7 271.1 96S286.3 64 303.1 64zM574.1 279.6C571.3 284.8 565.9 288 560 288H271.1C265.1 288 260.5 284.6 257.7 279.3C255 273.9 255.5 267.4 259.1 262.6l70-96C332.1 162.4 336.9 160 341.1 160c5.11 0 9.914 2.441 12.93 6.574l22.35 30.66l62.74-94.11C442.1 98.67 447.1 96 453.3 96c5.348 0 10.34 2.672 13.31 7.125l106.7 160C576.6 268 576.9 274.3 574.1 279.6z" />
        </svg> */}
        <span>
        <input  type='file' name='IMAGE' className=' form-control-file s ' /> 
        <input type='submit'/>
        </span>
       
       
          <p className='pt-3 px-1 sm-4'> Photo/videos </p>
        </div>
      </div>
    </div>
  )
}

export default Uploadpost