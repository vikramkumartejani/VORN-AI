import Image from 'next/image'
import React from 'react'

const PoweringVORNAI = () => {
  return (
    <div className='pt-[99px] pb-[200px] lg:py-[140px] bg-[#020103] w-full px-6 sm:px-10'>
      <h1 className='px-10 max-w-[650px] mx-auto w-full text-[32px] md:text-[40px] leading-[38px] md:leading-[60px] font-bold text-white text-center'><span className='text-[#9442ED]'>Powering VORN AI</span> with Decentralized Infrastructure</h1>
      {/* Desktop Design */}
      <div className='mt-[161px] lg:flex hidden max-w-[1300px] mx-auto w-full'>

      </div>
      {/* Mobile Design */}
      <div className='mt-[50px] lg:hidden block'>
        <div className='flex items-center flex-col md:flex-row gap-6'>
          <Image src='/assets/de-pin/decentralized-ai-compute-nodes.png' alt='image' width={557} height={437} className='flex-1' />
          <div className='text-center md:text-left flex-1'>
            <h2 className='text-white text-[28px] leading-[33.6px] font-bold mb-5'>Decentralized AI Compute Nodes</h2>
            <p className='text-white/80 text-[18px] leading-[27px] font-normal font-poppins'>Share your computing power for AI tasks, with AI optimizing workloads. Earn VRN tokens based on your contribution.</p>
          </div>
        </div>

        <div className='mt-[50px] flex items-center flex-col md:flex-row-reverse gap-6'>
          <Image src='/assets/de-pin/decentralized-cloud-storage.png' alt='image' width={557} height={437} className='flex-1' />
          <div className='text-center md:text-left flex-1'>
            <h2 className='text-white text-[28px] leading-[33.6px] font-bold mb-5'>Decentralized Cloud Storage</h2>
            <p className='text-white/80 text-[18px] leading-[27px] font-normal font-poppins'>Provide secure, decentralized storage with AI handling encryption and retrieval. Get rewarded in VRN tokens.</p>
          </div>
        </div>

        <div className='mt-[50px] flex items-center flex-col md:flex-row gap-6'>
          <Image src='/assets/de-pin/decentralized-energy-grid.png' alt='image' width={557} height={437} className='flex-1' />
          <div className='text-center md:text-left flex-1'>
            <h2 className='text-white text-[28px] leading-[33.6px] font-bold mb-5'>Decentralized Energy Grid</h2>
            <p className='text-white/80 text-[18px] leading-[27px] font-normal font-poppins'>Tokenize and trade renewable energy while AI balances grid loads. Earn VRN tokens for contributing energy resources.</p>
          </div>
        </div>

        <div className='mt-[50px] flex items-center flex-col md:flex-row-reverse gap-6'>
          <Image src='/assets/de-pin/iot-smart-cities-integration.png' alt='image' width={557} height={437} className='flex-1' />
          <div className='text-center md:text-left flex-1'>
            <h2 className='text-white text-[28px] leading-[33.6px] font-bold mb-5'>IoT & Smart Cities Integration</h2>
            <p className='text-white/80 text-[18px] leading-[27px] font-normal font-poppins'>AI processes real-time IoT data for smart applications like traffic and environment monitoring. Device operators earn VRN tokens.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PoweringVORNAI