import React from 'react'
import { useSelector } from 'react-redux'
import himanshi from '../assets/images/nav-img/himanshi.jpeg'


function Suggestion() {
  const {user}= useSelector(state=>state.loginUser)
  return (
   <>
    
    <div class="overflow-scroll h-25 rounded-3 border border-2 ">
      <div>
        <p>Suggestion</p>
      
        <input type="text" className='' />
      </div>
               <ul className='px-2 pt-3'>
                  <li className='pt-2' >  
                    <img src={himanshi} width='55rem' class="rounded-circle  sm-4" alt="..."></img>
                   <span className='px-2'>{user.name}</span>
                        </li>
                        <li className='pt-2' >  
                    <img src={himanshi} width='55rem' class="rounded-circle  sm-4" alt="..."></img>
                   <span className='px-2'>{user.name}</span>
                        </li>

                        <li className='pt-2' >  
                    <img src={himanshi} width='55rem' class="rounded-circle  sm-4" alt="..."></img>
                   <span className='px-2'>{user.name}</span>
                        </li>
                        
                        
                     
               </ul>
                   
                    </div>
                           
   
   </>

  )
}

export default Suggestion
