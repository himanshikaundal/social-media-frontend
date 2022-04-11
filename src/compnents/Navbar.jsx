import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/login/TO_THE_NEW_Logo.jpg'
import himanshi from '../assets/images/nav-img/himanshi.jpeg'

function Navbar() {
    return (
        <>
            <nav className="navbar  navbar-light bg-light shadow">
                <div className="container-fluid ">
                    <div>
                        <Link  to='/' className="navbar-brand" >
                            <img src={logo} alt="" className='nav-img' />

                        </Link>
                    </div>

                    <div>
                        <img src={himanshi} width='55rem' class="rounded-circle  sm-4" alt="..."></img>
                        <span >Himanshi Kaundal</span>
                       
                       <div className='d-inline rounded-circle px-1 sm-4' >
                       <svg xmlns="http://www.w3.org/2000/svg" fill='grey' fillOpacity='0.5' height='2rem' viewBox="0 0 512 512"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>
                       </div>
                       <div className=' d-inline rounded-circle px-1 sm-4' >
                       <svg xmlns="http://www.w3.org/2000/svg" height='2rem' fill='grey' fillOpacity='0.5' viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
                       </div>
                        
                    </div>
                </div>



            </nav>


        </>
    )
}

export default Navbar