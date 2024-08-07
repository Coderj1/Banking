import React from 'react'
import SidebarCom from '../Component/SidebarCom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Table } from 'flowbite-react';

function Transaction() {

    const percentage = 49.6;
    const percentageyearly = 29.01

  return (
    <>
        <div className='min-h-screen flex flex-col md:flex-row'>
            <SidebarCom />
            <div className='sm:max-w-7xl sm:mx-auto'>
             <div className='flex flex-row flex-wrap mx-autojustify-between gap-8 p-4'>
                    <div className='flex flex-row flex-wrap justify-between border-2 mx-auto border-orange-500 p-4 rounded-lg bg-orange-500 hover:bg-purple-400 hover:border-purple-400 cursor-pointer'>
                        <CircularProgressbar className='w-20 h-26' value={percentage} text={`${percentage}%`} />
                        <div className='p-3'>
                        <p className='text-white'>Monthly Transactions</p>
                        <p className='text-green-500'>+1.03%</p>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap justify-between mx-auto border-2 border-orange-500 p-4 rounded-lg bg-orange-500 hover:bg-purple-400 hover:border-purple-400 cursor-pointer'>
                        <CircularProgressbar className='w-20 h-26' value={percentageyearly} text={`${percentageyearly}%`} />
                        <div className='p-3'>
                        <p className='text-white'>Yearly Transactions</p>
                        <p className='text-green-500'>+0.71%</p>
                        </div>
                    </div>
                    <div className='w-72 mx-auto border-2 border-orange-500 p-4 rounded-lg bg-orange-500 hover:bg-purple-500 hover:border-purple-500 cursor-pointer'>
                        <div className='p-1'>
                        <p className='text-white font-semibold'>Transactions</p>
                        <p className='text-white text-4xl  font-semibold'>21</p>
                        </div>
                    </div>
             </div>
             <h1 className='text-center text-black text-2xl font-semibold p-2'>Transfer History</h1>
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
            </div>
        </div>
    </>
  )
}

export default Transaction