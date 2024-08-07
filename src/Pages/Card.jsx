import React from 'react'
import img1 from '../img/dollars.png'
import img2 from '../img/chip.png'
import SidebarCom from '../Component/SidebarCom'

function Card() {
  return (
    <>
        <div className='min-h-screen flex flex-col md:flex-row'>
          <SidebarCom />
            <div className='bg-img2 min-h-screen bg-cover w-full'>
                <div className='max-w-xl mx-auto p-4 pt-44'>
                 <h1 className='text-3xl text-center text-black font-bold pb-2'>Card</h1>
                    <div className='border-2 border-blue-400 rounded-lg p-2 bg-img4 bg-cover h-64 text-white hover:scale-110 hover:bg-img1'>
                        <div className='flex justify-between'>
                        <span className='p-2'>
                            <h1 className='text-2xl font-semibold'>Ramses Love</h1>  
                            <h1 className='font-semibold'>Banker</h1>
                        </span>
                        </div>
                        <img src={img2} className='w-24 h-16' />
                        <div className='flex justify-between p-2'>
                            <div className='sm:pl-2'>
                              <p className='font-semibold'>Card Number</p>
                              <p className='font-semibold tracking-extra-tight sm:tracking-extra-wide text-xl sm:text-3xl'>109301932013</p>
                            </div>
                            <span className='pr-3 font-semibold text-xl'>
                                <p>CV</p>
                                <p className='pl-1'>32</p>
                            </span>
                        </div>
                        <p className='pl-3 pt-1'>Zenit Bank</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card