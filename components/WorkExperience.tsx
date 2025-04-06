"use client"

import React from 'react'
import { workExperience } from '@/data/index'
import { Button } from './ui/MovingBorder'

const WorkExperience = () => {
  return (
    <div className='py-20' id = "testimonials">
        <h1 className="text-4xl font-bold text-center">
            My {''}
            <span className='text-purple-300'>
                Work Experiences
            </span>
        </h1>

        {/**for showing the infinite moving cards*/}
        <div className = "w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((work) => (
                <Button 
                    key={work.id} 
                    borderRadius='1.75rem'
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    >
                    <div className='flex lg:flex-row flex-row p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={work.thumbnail} alt={work.thumbnail} className='lg:w-32 md:w-20 w-16' />
                        <div className='lg:ms-5 flex flex-col lg:flex-1/2'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>{work.title}</h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>{work.desc}</p>
                            <h2 className='text-start text-purple-300 mt-3 font-semibold'>{work.company}</h2>


                        </div>

                    </div>
                </Button>
            ))}

        </div>
    </div>
  )
}

export default WorkExperience