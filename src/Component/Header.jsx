import { Button, Modal, Navbar, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import img1 from '../img/coin.png'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { HiUser } from 'react-icons/hi2'

function Header() {

    const path = useLocation().pathname

    const [login, setLogin] = useState(null)

    const handleLogin = async () => {
        
    }

    const [register, setRegister] = useState(null)

    const handleRegister = async () => {
        
    }


  return (
    <>
       <Navbar className='border-b-2 border-teal-400'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <img src={img1} height={50} width={50} className='rounded-full' />
        </Link>
        
      <div className='flex gap-2 md:order-2'>

              <Button className='p-0' outline gradientDuoTone='purpleToBlue' onClick={() => {setLogin(true)}}>
                Log In
              </Button>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
           <Navbar.Link active={ path === '/'} as={'div'}>
              <Link to='/'>
                Home
              </Link>
           </Navbar.Link>
           <Navbar.Link active={ path === '/transactions'} as={'div'}>
              <Link to='/Transactions'>
                Transactions
              </Link>
           </Navbar.Link>
           <Navbar.Link active={ path === '/card'} as={'div'}>
              <Link to='/card'>
                Card
              </Link>
           </Navbar.Link>
           <Navbar.Link active={ path === '/profile'} as={'div'}>
              <Link to='/profile'>
                Profile
              </Link>
           </Navbar.Link>
           <Navbar.Link active={ path === '/policy'} as={'div'}>
              <Link to='/policy'>
                Policy
              </Link>
           </Navbar.Link>
        </Navbar.Collapse> 

                <Modal className='sm:justify-center'
                    show={login}
                    onClose={()=> setLogin(false)}
                    popup size='md'
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className='text-center mx-auto'>
                           <HiUser color='blue' className='h-14 w-14 mx-auto'/>
                             <div className='gap-3 justify-center mb-2 p-4'>
                                <TextInput type='email' placeholder='Email' className='mb-3' />
                                <TextInput type='password' placeholder='Password' className='mb-3' />
                                <Button className='w-full'>Sign In</Button>
                                <p>I don't have an account...<span className='cursor-pointer' onClick={() => {setRegister(true), setLogin(false)}}>join us</span></p>
                                <p className='text-red-500 text-sm'>Forgotten password</p>
                             </div>
                        </div>
                        </Modal.Body>
                 </Modal>

                 <Modal
                    show={register}
                    onClose={()=> setRegister(false)}
                    popup size='md'
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className='text-center mx-auto'>
                           <HiUser color='blue' className='h-14 w-14 mx-auto'/>
                             <div className='gap-3 justify-center mb-2 p-4'>
                                <TextInput type='text' placeholder='Full Name' className='mb-3' />
                                <TextInput type='email' placeholder='Email' className='mb-3' />
                                <TextInput type='text' placeholder='Contact No' className='mb-3' />
                                <TextInput type='password' placeholder='Password' className='mb-3' />
                                <Button className='w-full'>Sign Up</Button>
                                <p>I don't have an account...<span className='cursor-pointer' onClick={() => {setRegister(false), setLogin(true)}}>login</span></p>
                             </div>
                        </div>
                        </Modal.Body>
                 </Modal>
        </Navbar>
       
    </>
  )
}

export default Header
