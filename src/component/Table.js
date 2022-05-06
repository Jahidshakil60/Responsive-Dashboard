import React from 'react'

function Table() {
  return (
    <div className='ml-56 font-sans  bg-gray-200'>
    <div className='p-4 '>
        <h2 className='text-2xl font-medium'>Inventory</h2>
    </div>

  <div className='h-auto w-15/16 ml-3 bg-white p-1  shadow-lg'>


    <div className='border border-solid border-slate-300 flex rounded-xl items-center overflow-x-hidden gap-1 bg-gray-100 w-48 my-3' >
        <span className='las la-search'></span>
        <input className='outline-none '  type="search" placeholder=' Search' />
    </div>

    <div>
        <table className='w-full  '>
            <thead className=' text-sm w-full h-12 bg-amber-100 '>
              
                <tr>
      
                    <td className='w-4  '><i class="las la-stop"></i></td>
                    <td className='w-28' >Date Updated <i class="las la-arrow-down"></i></td>
                    <td className='w-24'>Title <i class="las la-arrows-alt-v"></i></td>
                    <td>Details </td>
                    <td className='w-24'>Status</td>
                    <td className='w-24'>Quantity</td>
                    <td className='w-20 hidden sm:hidden md:block'>Unit Price</td>
                    <td className='w-24'>Amount <i class="las la-arrows-alt-v"></i></td>
                </tr>
             
            </thead>

            <tbody className=' text-xs'>
              <tr className='w-full h-8'>
                <td className='w-12 '><i class="las la-stop"></i></td>
                <td className='w-28' >11 NOV 2021 </td>
                <td className='w-24'>Hammer </td>
                <td >This is a hammer to do work with</td>
                <td className='w-24'> Alright<span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20 '>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >10 NOV 2021 </td>
                <td className='w-24'>Hammer </td>
                <td>This is a screw to do work with</td>
                <td className='w-24'> Alright<span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>122/230</td>
                <td className='w-20'>$10</td>
                <td className='w-24'>$1220.00</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >6 NOV 2021 </td>
                <td className='w-24'>Hammer </td>
                <td >Wood plan will be used to do woodworks, duh</td>
                <td className='w-24'> In Progress<span className=' inline-block h-2 w-2 rounded-lg bg-orange-500 ml-1'></span></td>
                <td className='w-24'>100/300</td>
                <td className='w-20 '>$1.5</td>
                <td className='w-24'>$150.00</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >28 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td >-</td>
                <td className='w-24'> Out of Stock<span className=' inline-block h-2 w-2 rounded-lg bg-red-500 ml-1'></span></td>
                <td className='w-24'>0/200</td>
                <td className='w-20 '>$10</td>
                <td className='w-24'>$0.00</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >22 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td >-</td>
                <td className='w-24'>  Out of Stock<span className=' inline-block h-2 w-2 rounded-lg bg-red-500 ml-1'></span></td>
                <td className='w-24'>0/200</td>
                <td className='w-20'>$10</td>
                <td className='w-24'>$00.0</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >16 OCT 2021 </td>
                <td className='w-24'> Hammer </td>
                <td >-</td>
                <td className='w-24'> Out of Stock<span className=' inline-block h-2 w-2 rounded-lg bg-red-500 ml-1'></span></td>
                <td className='w-24'>0/200</td>
                <td className='w-20 '>$10</td>
                <td className='w-24'>$00.0</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >9 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td>This is a hammer to do work with</td>
                <td className='w-24'> Alright<span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >5 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td >This is a hammer to do work with</td>
                <td className='w-24'> Alright<span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >1 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td >This is a hammer to do work with</td>
                <td className='w-24'> Alright<span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
                <td className='w-12'><i class="las la-stop"></i></td>
                <td className='w-28' >23 SEP 2021 </td>
                <td className='w-24'>Hammer </td>
                <td >This is a hammer to do work with</td>
                <td className='w-24'> Alright<span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
            </tbody>
        </table>
    </div>
         <div className='flex justify-between mb-4'>
            <div className='w-32 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 text-gray-500 flex justify-between items-center'>
              <p>10 items per page  </p>
              <i class="las la-angle-down"></i>
            </div>

            <div className='flex justify-between'>
              <div className='w-32 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 text-gray-500 flex justify-between items-center'>
                <p>Page 1 of 5</p>
                <i class="las la-angle-down"></i>
              </div>
              <div className='w-8 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 text-gray-500 flex justify-between items-center'>
              <i class="las la-angle-left"></i>
              </div>
              <div  className='w-8 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 text-gray-500 flex justify-between items-center'>
              <i class="las la-angle-right"></i>
              </div>
            </div>
         </div>
  </div>
</div>
  )
}

export default Table