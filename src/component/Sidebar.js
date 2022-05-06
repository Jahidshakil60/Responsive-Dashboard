import React from 'react'

function Sidebar() {
  return (
    <div className='  '>
            <ul className='h-screen  w-56  bg-gray-200 p-4 flex flex-col gap-4 border-r-2 border-gray-300 fixed'>
                <li className='flex gap-3 items-center   h-10 w-48 p-2'>
                <i class="las la-home"></i>
                    <span>Dashboard</span>
                </li>
                <li  className='flex gap-3 items-center h-10 w-48 p-2 bg-white text-green-500 shadow-lg rounded '>
                <i class="las la-file-alt"></i>
                    <span >Inventory</span>
                </li>
                <li className='flex gap-3 items-center  h-10 w-48 p-2'>
                <i class="las la-file-word"></i>
                    <span >Document</span>
                </li>
                <li className='flex gap-3 items-center  h-10 w-48 p-2'>
                <i class="las la-cog"></i>
                    <span >Settings</span>
                </li>
            </ul>
        </div>
  )
}

export default Sidebar