import { Footer } from 'flowbite-react'
import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import img1 from '../img/coin.png'

function FooterCom() {
  return (
    <>
      <div>
            <Footer container className='border border-t-5 border-blue-500'>
            <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <div to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white'>
                        <img src={img1} width={70} height={70} />
                </div>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                    <Footer.Title title='ABOUT' />
                    <Footer.LinkGroup col>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Web
                    </Footer.Link>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Mobile App
                    </Footer.Link>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Desktop
                    </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='FOLLOW US' />
                    <Footer.LinkGroup col>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Facebook
                    </Footer.Link>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Whatsapp
                    </Footer.Link>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Instagram
                    </Footer.Link>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Twitter
                    </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='LEGAL' />
                    <Footer.LinkGroup col>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Terms & Conditions
                    </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright  href='/' by='TransCoin@' year={new Date().getFullYear()}/>
                    <div className=' flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='/' icon={BsFacebook} />
                    <Footer.Icon href='/' icon={BsInstagram} />
                    <Footer.Icon href='/' icon={BsTwitter} />
                    <Footer.Icon href='/' icon={BsGithub} />
                    </div>
            </div>
            </div>
        </Footer>
      </div>
    </>
  )
}

export default FooterCom
