import React from 'react'

function SectionHeader({preHeading,heading,subHeading}) {
  return (
    <>
    <div className=' mx-auto flex items-center justify-center flex-col gap-3 text-center'>
        <p className='text-lightBlue text-base animate__animated animate__fadeIn'>{preHeading}</p>
        <h2 className='text-deepBlue animate__animated animate__slideInRight font-bold text-4xl'>{heading}</h2>
        <p className='text-textColor animate__animated animate__slideInLeft'>{subHeading}</p>
    </div>
    </>
  )
}

export default SectionHeader