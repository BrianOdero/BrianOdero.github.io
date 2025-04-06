"use client"

import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data/index'
import { companies } from '@/data/index'

const Clients = () => {
  return (
    <div className='py-20' id = "testimonials">
        <h1 className="text-4xl font-bold text-center">
            Kind words from {''}
            <span className='text-purple-300'>
                satisfied clients
            </span>
        </h1>

        {/**for showing the infinite moving cards*/}
        <div className = "flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            <div>
                <InfiniteMovingCards 
                    items={testimonials} 
                    direction="right" 
                    speed="slow" 
                    pauseOnHover={true}
                />

                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                    {companies.map(({id,name,img,nameImg}) => (
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2 '>
                            <img src={img} alt={name} className='md:w-10 w-5' />
                            <img src={nameImg} alt={name} className='md:w-24 w-20' />

                        </div>

                    ))}

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Clients