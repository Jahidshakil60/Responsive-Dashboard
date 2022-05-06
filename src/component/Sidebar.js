import React from 'react'

function Sidebar() {
  return (
    <div className='  '>
    <ul className='h-12 sm:h-screen w-full  md:w-56 sm:w-12  bg-gray-200 p-0 sm:p-1 md:p-4  flex justify-between sm:justify-start sm:flex-col sm:gap-4 border-r-2 border-gray-300  sm:fixed  bottom-0 sm:top-16'>
        <li className='flex gap-3 items-center   h-10 w-48 p-2'>
        <i class="las la-home"></i>
            <span className='hidden sm:hidden md:block '>Dashboard</span>
        </li>
        <li  className='mr-8 sm:mr-0 flex gap-3 items-center h-10 sm: w-8 md:w-48 p-2 bg-white text-green-500 shadow-lg rounded '>
        <i class="las la-file-alt"></i>
            <span className='hidden sm:hidden md:block '>Inventory</span>
        </li>
        <li className='mr-8 sm:mr-0 flex gap-3 items-center  h-10 w-48 p-2'>
        <i class="las la-file-word"></i>
            <span className='hidden sm:hidden md:block '>Document</span>
        </li>
        <li className='flex gap-3 items-center  h-10 w-48 p-2'>
        <i class="las la-cog"></i>
            <span className='hidden sm:hidden md:block '>Settings</span>
        </li>
    </ul>
</div>
  )
}

export default Sidebar