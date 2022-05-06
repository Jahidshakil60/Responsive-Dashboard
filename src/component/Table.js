import React from 'react'

function Table() {
  return (
    <div className='ml-0 sm:ml-12 md:ml-56 font-sans  bg-gray-200'>
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
                    <td className='w-32 py-4 hidden sm:block md:block' ><i class="las la-stop"></i> Date Updated <i class="las la-arrow-down"></i></td>
                    <td className='w-24'>Title <i class="las la-arrows-alt-v"></i></td>
                    <td className=' py-4 hidden sm:hidden md:block'>Details </td>
                    <td className='w-24 '><span className='hidden sm:block md:block'>Status</span></td>
                    <td className='w-24'><span className='hidden sm:hidden md:block'>Quantity</span></td>
                    <td className='w-20   hidden sm:hidden md:block'>Unit Price</td>
                    <td className='w-24'>Amount <i class="las la-arrows-alt-v"></i></td>
                </tr>
             
            </thead>

            <tbody className=' text-xs'>
              <tr className='w-full h-8'>
                
                <td className='w-32 py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 11 NOV 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>This is a hammer to do work with</td>
                <td className='w-24'><span  className='hidden sm:inline-block md:inline-block'> Alright</span> <span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20   hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
               
                <td className='w-32  py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 10 NOV 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>This is a screw to do work with</td>
                <td className='w-24'><span  className='hidden sm:inline-block md:inline-block'> Alright</span> <span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>122/230</td>
                <td className='w-20 h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$1220.00</td>
              </tr>
              <tr className='w-full h-8'>
               
                <td className='w-32  py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 6 NOV 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>Wood plan will be used to do woodworks, duh</td>
                <td className='w-24'><span  className='hidden sm:inline-block md:inline-block'> In Progress</span> <span className=' inline-block h-2 w-2 rounded-lg bg-orange-500 ml-1'></span></td>
                <td className='w-24'>100/300</td>
                <td className='w-20  h-0.5 hidden sm:hidden md:block'>$1.5</td>
                <td className='w-24'>$150.00</td>
              </tr>
              <tr className='w-full h-8'>
                
                <td className='w-32  py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 28 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>-</td>
                <td className='w-24'><span  className='hidden sm:inline-block md:inline-block'> Out Of Stock</span> <span className=' inline-block h-2 w-2 rounded-lg bg-red-500 ml-1'></span></td>
                <td className='w-24'>0/200</td>
                <td className='w-20  h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$0.00</td>
              </tr>
              <tr className='w-full h-8'>
                
                <td className='w-32  py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 22 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>-</td>
                <td className='w-24'> <span  className='hidden sm:inline-block md:inline-block'> Out Of Stock</span> <span className=' inline-block h-2 w-2 rounded-lg bg-red-500 ml-1'></span></td>
                <td className='w-24'>0/200</td>
                <td className='w-20  h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$00.0</td>
              </tr>
              <tr className='w-full h-8'>
               
                <td className='w-32 py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 16 OCT 2021 </td>
                <td className='w-24'> Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>-</td>
                <td className='w-24'> <span  className='hidden sm:inline-block md:inline-block'> Out Of Stock</span> <span className=' inline-block h-2 w-2 rounded-lg bg-red-500 ml-1'></span></td>
                <td className='w-24'>0/200</td>
                <td className='w-20  h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$00.0</td>
              </tr>
              <tr className='w-full h-8'>
               
                <td className='w-32 py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 9 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>This is a hammer to do work with</td>
                <td className='w-24'> <span  className='hidden sm:inline-block md:inline-block'> Alright</span> <span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20  h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
               
                <td className='w-32  py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 5 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>This is a hammer to do work with</td>
                <td className='w-24'><span  className='hidden sm:inline-block md:inline-block'> Alright</span> <span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20  h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
            
                <td className='w-32 py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 1 OCT 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>This is a hammer to do work with</td>
                <td className='w-24'><span  className='hidden sm:inline-block md:inline-block'> Alright</span> <span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20 h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
              <tr className='w-full h-8'>
                
                <td className='w-32  py-4 hidden sm:block md:block' ><i class="las la-stop"></i> 23 SEP 2021 </td>
                <td className='w-24'>Hammer </td>
                <td className=' py-4 hidden sm:hidden md:block'>This is a hammer to do work with</td>
                <td className='w-24'><span  className='hidden sm:inline-block md:inline-block'> Alright</span> <span className=' inline-block h-2 w-2 rounded-lg bg-green-500 ml-1'></span></td>
                <td className='w-24'>200/300</td>
                <td className='w-20 h-0.5 hidden sm:hidden md:block'>$10</td>
                <td className='w-24'>$2000.00</td>
              </tr>
            </tbody>
        </table>
    </div>
         <div className='flex justify-between mb-4'>
            <div className=' hidden sm:block md:block w-32 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 text-gray-500 flex justify-between items-center'>
              <p className='inline-block mr-2'>10 items per page  </p>
              <i class="las la-angle-down"></i>
            </div>

            <div className='flex justify-between '>
              <div className='w-32 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 rounded text-gray-500 flex justify-between items-center'>
                <p>Page 1 of 5</p>
                <i class="las la-angle-down"></i>
              </div>
              <div className='w-8 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 rounded text-gray-500 flex justify-between items-center'>
              <i class="las la-angle-left"></i>
              </div>
              <div  className='w-8 h-6 text-xs ml-2 mt-4 p-1 border border-solid border-gray-400 rounded text-gray-500 flex justify-between items-center'>
              <i class="las la-angle-right"></i>
              </div>
            </div>
         </div>
  </div>
</div>
  )
}

export default Table