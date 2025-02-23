import Image from 'next/image'
import React from 'react'

const IntelligentAutomation = () => {
    return (
        <div className='bg-[#020103] w-full'>
            <div className='mt-1 max-w-[1130px] w-full mx-auto flex items-center gap-[72px]'>
                <div>  
                    <Image src='/assets/ai.svg' alt="ai" width={569} height={550} />
                </div>
                <div className='max-w-[488px] '>
                    <h2 className='text-white text-[32px] leading-[48px] font-bold mb-5'>Intelligent Automation for Efficient, Secure & Decentralized Operations</h2>
                    <p className='text-white/80 text-[18px] leading-[27px] font-normal font-poppins'>VORN.AI enhances computing efficiency, automates smart contracts, predicts market trends, strengthens security against fraud, and optimizes governance to ensure seamless and trustless decentralized operations.</p>
                </div>
            </div>
        </div>
    )
}

export default IntelligentAutomation