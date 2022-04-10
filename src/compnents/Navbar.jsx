import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/login/TO_THE_NEW_Logo.jpg'
import himanshi from '../assets/images/nav-img/himanshi.jpeg'

function Navbar() {
    return (
        <>
            <nav className="navbar  navbar-light bg-light shadow">
                <div className="container-fluid">
                    <div>
                        <Link  to='/' className="navbar-brand" >
                            <img src={logo} alt="" className='nav-img' />

                        </Link>
                    </div>

                    <div>
                        <img src={himanshi} width='55rem' class="rounded-circle  sm-4" alt="..."></img>
                        <span>Himanshi Kaundal</span>
                       
                       <div className='d-inline rounded-circle sm-4' >
                       <i></i>
                       </div>
                       <div className='d-inline rounded-circle sm-4' >

                       </div>
                        
                    </div>
                </div>



            </nav>


        </>
    )
}

export default Navbar