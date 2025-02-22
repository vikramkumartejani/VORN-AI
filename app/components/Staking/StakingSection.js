import React from 'react'

const stakingOptions = [
    { period: "30 Days", apr: "50%", bgColor: "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)", textColor: "text-white" },
    { period: "90 Days", apr: "90%", bgColor: "#1C0035", textColor: "text-[#C176FF]" },
    { period: "180 Days", apr: "120%", bgColor: "#1C0035", textColor: "text-[#C176FF]" },
    { period: "365 Days", apr: "200%", bgColor: "#1C0035", textColor: "text-[#C176FF]" }
];

const StakingSection = () => {
    return (
        <div className="mt-[25px] rounded-[20px] bg-[#0B0015] border border-[#440675] p-[30px]">
            <h2 className="text-white text-[24px] leading-[28.8px] font-bold">Staking</h2>
            <div className="staking-section mt-6 rounded-[12px] border border-[#440675] bg-[#1C0035] py-[22px] px-5" style={{}}>
                <h2 className='text-[#FFFFFF] text-[20px] leading-[24px] font-normal mb-[5px]'>Total Staking</h2>
                <h3 className='text-white text-[32px] leading-[38.4px] font-normal'>0</h3>
            </div>

            <div className="my-[30px] grid grid-cols-4 gap-[27px]">
                {stakingOptions.map((option, index) => (
                    <div
                        key={index}
                        className="border border-[#9442ED] rounded-xl w-[284px] px-[15px] py-5"
                        style={{ backdropFilter: "blur(30px)", background: option.bgColor }}
                    >
                        <div className="flex items-center justify-between gap-2 mb-[22px]">
                            <h2 className="text-white text-[20px] leading-[24px] font-normal">Staking period</h2>
                            <h2 className="text-white text-[20px] leading-[24px] font-normal">{option.period}</h2>
                        </div>
                        <h3 className={`text-[20px] leading-[24px] font-medium ${option.textColor}`}>APR {option.apr}</h3>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-2 gap-[30px]'>
                <div className='w-full border border-[#7209C5] h-[66px] py-4 px-5 rounded-xl flex items-center justify-between gap-3'>
                    <input type='text' placeholder='10,000.00 VRN' className='h-full bg-transparent outline-none w-full text-white text-[18px] leading-[27px] font-normal font-poppins placeholder:text-white' />
                    <button className='underline text-[#C176FF] text-[18px] leading-[27px] font-normal font-poppins'>MAX</button>
                </div>
                <button className='w-full h-[66px] bg-[#8400FF54] rounded-xl'>STAKE NOW</button>
            </div>

            <div className='mt-[30px] grid grid-cols-2 gap-[27px]'>
                <div className='w-full border border-[#440675] bg-[#1C0035] rounded-xl px-5 py-[18px] text-white space-y-[12px]' style={{ backdropFilter: "blur(30px)" }}>
                    <div className='flex items-center justify-between gap-4'>
                        <h2 className='text-[18px] leading-[21.6px] font-medium'>Stake amount</h2>
                        <h2 className='text-[18px] leading-[21.6px] font-normal'>10,000.00 VRN</h2>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <h2 className='text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer'>Estimated Profit</h2>
                        <h2 className='text-[#C176FF] text-[18px] leading-[21.6px] font-normal'>200.00 VRN</h2>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <h2 className='text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer'>Total</h2>
                        <h2 className='text-[#C176FF] text-[18px] leading-[21.6px] font-normal'>10,200.00 VRN</h2>
                    </div>
                </div>
                <div className='w-full border border-[#440675] bg-[#1C0035] rounded-xl px-5 py-[18px] text-white space-y-[12px]' style={{ backdropFilter: "blur(30px)" }}>
                    <div className='flex items-center justify-between gap-4'>
                        <h2 className='text-[18px] leading-[21.6px] font-medium'>LCAI to be locked</h2>
                        <h2 className='text-[18px] leading-[21.6px] font-normal'>10,000.00</h2>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <h2 className='text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer'>Duration</h2>
                        <h2 className='text-[18px] leading-[21.6px] font-normal'>12 Weeks</h2>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <h2 className='text-white/70 text-[18px] leading-[21.6px] font-normal underline cursor-pointer'>Unlock On</h2>
                        <h2 className='text-[18px] leading-[21.6px] font-normal'>May 14 2025, 16:12</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StakingSection