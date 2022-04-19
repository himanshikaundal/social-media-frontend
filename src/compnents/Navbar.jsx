import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/login/TO_THE_NEW_Logo.jpg'
import himanshi from '../assets/images/nav-img/himanshi.jpeg'


import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../redux/actions/login'
import { useEffect } from 'react'

function Navbar() {
    let {user} = useSelector(state => state.loginUser)
    const dispatch=useDispatch();
    const navigate=useNavigate();

   function logouthandler(){
   
      dispatch(logout());
    //   localStorage.clear();
       navigate('/');
   }
    return (
        <>
        
            <nav className="navbar  navbar-light bg-light shadow">
                <div className="container-fluid ">
                    <div>
                        <Link to='/' className="navbar-brand" >
                            <img src={logo} alt="" className='nav-img' />

                        </Link>
                    </div>

                    <div>
                        <img src={himanshi} width='55rem' class="rounded-circle  sm-4" alt="..."></img>
                        <span >{user.name}</span>


                        <button type="button" class=" d-inline border border-0 px-3 sm-4 position-relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='blue' fillOpacity='0.5' height='2rem' viewBox="0 0 512 512"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" /></svg><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">+99 <span class="visually-hidden">unread messages</span></span>
                        </button>
                        <button type="button" class=" d-inline border border-0 px-3 sm-4 position-relative">
                        
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">3 <span class="visually-hidden">unread messages</span></span>
                        </button>
                         
                         <button type='button' onClick={logouthandler} className='border border-0' > <svg xmlns="http://www.w3.org/2000/svg" height='2rem' fill='blue'   viewBox="0 0 512 512"><path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/></svg> </button>
                       

                    </div>
                </div>



            </nav>


        </>
    )
}

export default Navbar