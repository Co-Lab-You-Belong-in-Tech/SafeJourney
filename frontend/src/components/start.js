import React from 'react'
import Navbar from './navbar'

const Start = ({setSignup,setLogin,setStart}) => {
  return (
    <div>
      
      <div className='flex justify-center sm:my-48'>
        <div className='flex flex-col justify-center text-center'>
            
  
            <div className='sm:my-4'>Find someone to travel safely with</div>
  
            <div><button className='sm:px-2 rounded-md sm:py-1 bg-gray-200' onClick={(e)=>{
          setStart(false)
          setLogin(false)
          setSignup(true)
          }
          }>Get Started</button></div>
  
        </div>
      </div>
    </div>
  )
}

export default Start