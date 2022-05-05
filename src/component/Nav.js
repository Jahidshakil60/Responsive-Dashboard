import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import john from '../img/john doe.jpg'


function Nav() {
  return (
    <div className='flex justify-between p-4 bg-slate-50 shadow-lg h-16'>
      <div className='flex justify-between w-2/5'>
        <div >
            <h4 className='font-medium'>Starbucks <FontAwesomeIcon icon = {faCaretDown}/></h4>
            
        </div>
        <div className='border border-solid border-slate-300 flex rounded-xl items-center overflow-x-hidden gap-1 bg-gray-100' >
            <span className='las la-search'></span>
            <input className='outline-none '  type="search" placeholder=' Search' />
        </div>
      </div>

        <div className='flex items-center gap-2 mr-4'>
            <span className='  h-5 w-5'> <i className="fa-regular fa-bell"></i> </span>
            
            <img  className='w-8 h-8 rounded-2xl' src={john} alt="" />
            
            <h4 className='font-medium'>John Doe <FontAwesomeIcon icon = {faCaretDown}/></h4>

        </div>
    </div>
  )
}

export default Nav