import React from 'react'
import Navbar from './navbar'

const Email = () => {
  return (
   <div>
      <Navbar />
      <div className='flex justify-center sm:my-32 '>
        <div className='flex flex-col sm:w-[30%] '>
            
  
            <div className='sm:my-4 text-center'>Enter your Email</div>
  
            <div>
                <form>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Email</label>
                        <input type='email' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Email' />
                    </div>
                     
                    <div className='text-center py-2 rounded-md my-4 bg-gray-200'><button>Continue</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Email