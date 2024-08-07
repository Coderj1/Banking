import React, { useState } from 'react'
import { Button, Modal, Table, TextInput } from 'flowbite-react'
import { BsBank2, BsCash, BsCreditCard } from 'react-icons/bs'
import SidebarCom from '../Component/SidebarCom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Home() {

  const [deposit, setDeposit] = useState(null)
  const [withdraw, setWithdraw] = useState(null)
  const [transfer, setTransfer] = useState(null)

    const handleDeposit = async () => {
        
    }

    const handleWithdraw = async () => {
        
    }

    const handleTransfer = async () => {
        
    }
    

  const percentage = 49.6;
  const percentageyearly = 29.01

  return (
    <>
      <div className='flex flex-col md:flex-row min-h-screen'>
         <SidebarCom />
         <div className='sm:max-w-7xl sm:mx-auto'>
          <div className='flex flex-row flex-wrap gap-4 justify-center m-5 scale-110'>
            <div className='flex p-5 border-2 border-gray-300 bg-blue-600 hover:bg-purple-500 hover:border-purple-500 rounded-md gap-8 h-28 hover:scale-110 cursor-pointer'>
                <span>
                  <h1 className='font-semibold text-white'>Account balance</h1>
                  <p className='font-semibold text-2xl text-white'>$5135.00</p>
                </span>
                <span>
                  <BsCash size={60} color='white' className='p-3' />
                </span>
            </div>
            <div className='flex p-5 border-2 border-blue-300 bg-blue-600 hover:bg-purple-500 hover:border-purple-500 rounded-md gap-8 h-28 hover:scale-110 cursor-pointer'>
                <span>
                  <h1 className='font-semibold text-white'>Card Number</h1>
                  <p className='font-semibold text-2xl text-white'>********</p>
                </span>
                <span>
                  <BsCreditCard color='white' size={60} className='p-3' />
                </span>
            </div>
            <div className='flex p-5 border-2 border-gray-300 bg-blue-600 hover:bg-purple-500 hover:border-purple-500 rounded-md gap-8 h-28 hover:scale-110 cursor-pointer'>
                <span>
                  <h1 className='font-semibold text-white'>Transactions</h1>
                  <p className='font-semibold text-2xl text-white'>21</p>
                </span>
                <span>
                  <BsBank2 size={60} color='white' className='p-3' />
                </span>
            </div>
          </div>
          <div className='p-5 flex fle-row flex-wrap mx-auto max-w-2xl gap-4 justify-center'>
             <Button className='bg-green-500 text-white w-32' color='palegreen' onClick={() => {setDeposit(true)}}>Deposit</Button>
             <Button className='bg-yellow-300 text-white w-32' color='paleyellow' onClick={() => {setWithdraw(true)}}>Withdraw</Button>
             <Button className='bg-orange-500 text-white w-32' color='orange' onClick={() => {setTransfer(true)}}>Transfer</Button>
          </div>
          <div className='overflow-x-scroll scrollbar sm:scrollbar-thumb-slate-500'>
              <Table hoverable>
                 <Table.Head>
                    <Table.HeadCell>
                      Date
                    </Table.HeadCell>
                    <Table.HeadCell>
                      Amount
                    </Table.HeadCell>
                    <Table.HeadCell>
                      Reference
                    </Table.HeadCell>
                    <Table.HeadCell>
                      Destination
                    </Table.HeadCell>
                    <Table.HeadCell>
                      status
                    </Table.HeadCell>
                 </Table.Head>
                 <Table.Body>
                   <Table.Row>
                     <Table.Cell>
                       09/03/2025
                     </Table.Cell>
                     <Table.Cell>
                       $412
                     </Table.Cell>
                     <Table.Cell>
                       Transfer
                     </Table.Cell>
                     <Table.Cell>
                       James Smith
                     </Table.Cell>
                     <Table.Cell>
                       Sucessful
                     </Table.Cell>
                   </Table.Row>
                   <Table.Row>
                     <Table.Cell>
                       09/03/2025
                     </Table.Cell>
                     <Table.Cell>
                       $179
                     </Table.Cell>
                     <Table.Cell>
                       Deposit
                     </Table.Cell>
                     <Table.Cell>
                       My Account
                     </Table.Cell>
                     <Table.Cell>
                       Sucessful
                     </Table.Cell>
                   </Table.Row>
                 </Table.Body>
              </Table>
          </div>
          <div className='mx-auto flex flex-row flex-wrap gap-2 p-4'>
            <div className='flex flex-row flex-wrap justify-between w-72 mx-auto border-2 border-orange-500 p-4 rounded-lg bg-orange-500 hover:bg-purple-400 hover:border-purple-400 cursor-pointer'>
                <CircularProgressbar className='w-20 h-26' value={percentage} text={`${percentage}%`} />
                <div className='p-3'>
                  <p className='text-white'>Monthly Transactions</p>
                  <p className='text-green-500'>+1.03%</p>
                </div>
            </div>
            <div className='flex flex-row flex-wrap justify-between w-72 mx-auto border-2 border-orange-500 p-4 rounded-lg bg-orange-500 hover:bg-purple-400 hover:border-purple-400 cursor-pointer'>
                <CircularProgressbar className='w-20 h-26' value={percentageyearly} text={`${percentageyearly}%`} />
                <div className='p-3'>
                  <p className='text-white'>Yearly Transactions</p>
                  <p className='text-green-500'>+0.71%</p>
                </div>
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
                 <Modal
                    show={withdraw}
                    onClose={()=> setWithdraw(false)}
                    popup size='md'
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className='mx-auto'>
                             <div className='gap-3 justify-center mb-2 p-4'>
                              <h1 className='text-center font-semibold pb-2'>Withdraw</h1>
                              <div className='mb-2'>
                                  <TextInput type='text' placeholder='Amount' />
                                  <span className='flex gap-2'>
                                    <p className='text-sm text-gray-400'>min:$5</p>
                                    <p className='text-sm text-gray-400'>max:$1000000</p>
                                  </span>
                              </div>
                                  <Button className='w-full bg-yellow-300 text-white' color='yellow'>Withdraw</Button>
                             </div>
                        </div>
                        </Modal.Body>
                 </Modal>
                 <Modal
                    show={transfer}
                    onClose={()=> setTransfer(false)}
                    popup size='md'
                    >
                        <Modal.Header />
                        <Modal.Body>
                        <div className='mx-auto'>
                             <div className='gap-3 justify-center mb-2 p-4'>
                              <h1 className='text-center font-semibold pb-2'>Transfer</h1>
                              <div className='mb-2'>
                                  <TextInput type='text' placeholder='Amount' />
                                  <span className='flex gap-2'>
                                    <p className='text-sm mx-auto text-black'>To</p>
                                  </span>
                                  <TextInput type='text' placeholder='Account Name' />
                              </div>
                                  <Button className='w-full bg-orange-500 text-white' color='red'>Withdraw</Button>
                             </div>
                        </div>
                        </Modal.Body>
                 </Modal>
      </div>
    </>
  )
}

export default Home
