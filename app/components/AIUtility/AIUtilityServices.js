import Image from 'next/image'
import React from 'react'

const AIUtilityServices = () => {
  return (
    <div className='py-[92px] w-full'>
        <div className='max-w-[721px] mx-auto w-full flex items-center flex-col justify-center'>
            <h2 className='text-[40px] leading-[60px] font-bold text-center text-white mb-[35px]'><span className='text-[#9442ED]'>AI Utility Services</span> for Seamless and Profitable Automation</h2>
            <Image src='/assets/ai-utility-services.webp' alt='ai-utility-services' width={721} height={583} />
        </div>
    </div>
  )
}

export default AIUtilityServices