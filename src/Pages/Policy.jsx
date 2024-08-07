import React from 'react'
import img1 from '../img/coin.png'
import img2 from '../img/visa.png'
import img3 from '../img/mastercard.png'
import img4 from '../img/paypal.png'
import img5 from '../img/applepay.png'

function Policy() {
  return (
    <>
        <div className='min-h-screen'>
            <div className='max-w-5xl mx-auto p-4 pt-20 text-justify'>
              <img src={img1} className='w-40 h-40 p-2 mx-auto' />
               <h1 className='text-3xl text-center font-semibold'>System Policy</h1>
                <p>1.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text.</p>
                <p>2.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text.</p>
                <p>3.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text.</p>
                <p>4.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text.</p>
                <p>5.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text.</p>
                <p>6.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text.</p>
                <div className='flex flex-wrap'>
                    <img src={img2} className='w-36 h-20 p-2 mx-auto' />
                    <img src={img3} className='w-20 h-20 mx-auto' />
                    <img src={img4} className='w-16 h-16 p-2 mx-auto' />
                    <img src={img5} className='w-28 h-20 p-2 mx-auto' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Policy