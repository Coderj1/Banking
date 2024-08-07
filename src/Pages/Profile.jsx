import React, { useState } from 'react'
import SidebarCom from '../Component/SidebarCom'
import img1 from '../img/dollars.png'
import { Button, Modal, TextInput } from 'flowbite-react'
import { BsCash } from 'react-icons/bs'

function Profile() {

  const [deposit, setDeposit] = useState(null)

    const handleDeposit = async () => {
        
    }

  return (
    <>
        <div className='flex flex-col md:flex-row min-h-screen'>
            <SidebarCom />
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-col sm:flex-row justify-between gap-2 p-8 m-8 border-4 sm:h-44 shadow-2xl hover:scale-110'>
                  <div className='flex flex-col sm:flex-row gap-2 pt-2 '>
                      <img src={img1} className='mx-auto w-24 h-24' />
                      <div className='pt-3'>
                          <p>Ramses Love</p>
                          <p>ramseslove52@gmail.com</p>
                          <p>+237679744429</p>
                      </div>
                  </div>
                  <div className='flex mx-auto'>
                  <span className='p-2'>
                    <h1 className='font-semibold text-black'>Account balance</h1>
                    <p className='font-semibold text-2xl text-black text-center mb-1'>$5135.00</p>
                    <Button className='mx-auto bg-green-400 text-white' color='green' onClick={() => {setDeposit(true)}}>Deposit</Button>
                  </span>
                  </div>
              </div>
              <div className='p-4 border-4 mb-4 bg-white shadow-2xl hover:scale-110'>
                <div className='p-2'>
                <p className='text-center font-semibold mb-2'>Profile Update</p>
                <img src={img1} className='w-32 h-32 mx-auto mb-2' />
                  <TextInput type='email' className='w-full mb-3 border-none' placeholder='Email' />
                  <TextInput type='number' className='w-full mb-3' placeholder='Contact' />
                  <TextInput type='password' className='w-full mb-3' placeholder='Password' />
                  <Button className='w-full' gradientDuoTone='pinkToOrange'>Update</Button>
                  <p className='text-center'>LogOut</p>
                </div>
              </div>
            </div>
            <Modal
                    show={deposit}
                    onClose={()=> setDeposit(false)}
                    popup size='md'
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className='mx-auto'>
                             <div className='gap-3 justify-center mb-2 p-4'>
                              <h1 className='text-center font-semibold pb-2'>Deposit</h1>
                              <div className='mb-2'>
                                  <TextInput type='text' placeholder='Amount' />
                                  <span className='flex gap-2'>
                                    <p className='text-sm text-gray-400'>min:$5</p>
                                    <p className='text-sm text-gray-400'>max:$1000000</p>
                                  </span>
                              </div>
                                  <Button className='w-full bg-green-400 text-white' color='green'>Deposit</Button>
                             </div>
                        </div>
                        </Modal.Body>
                 </Modal>
        </div>
    </>
  )
}

export default Profile