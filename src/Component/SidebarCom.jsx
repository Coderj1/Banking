import { Sidebar } from 'flowbite-react'
import React from 'react'
import { BiSolidUserDetail } from 'react-icons/bi'
import { BsClipboard, BsTransparency } from 'react-icons/bs'
import { FaCreditCard } from 'react-icons/fa'
import { GrTransaction } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function SidebarCom() {
  return (
    <div>
      <Sidebar>
         <Sidebar.ItemGroup className='p-4'>
         <Link to='/'>
            <Sidebar.Item
            className='mb-3'
            icon={BsClipboard}
            >
             Dashboard    
            </Sidebar.Item>
         </Link>
         <Link to='/transactions'>
            <Sidebar.Item
            className='mb-3'
            icon={GrTransaction}
            >
             Transactions    
            </Sidebar.Item>
         </Link>
         <Link to='/card'>
            <Sidebar.Item
            className='mb-3'
            icon={FaCreditCard}
            >
             Card    
            </Sidebar.Item>
         </Link>
         <Link to='/profile'>
            <Sidebar.Item
            className='mb-3'
            icon={BiSolidUserDetail}
            >
             Profile    
            </Sidebar.Item>
         </Link>
         </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  )
}

export default SidebarCom
