import Image from 'next/image'
import React from 'react'

const BuyNowBox = () => {
    const infoItems = [
        {
            icon: '/assets/icons/refer-earn.svg',
            alt: 'Refer Earn',
            text: 'Refer & Earn',
        },
        {
            icon: '/assets/icons/how-to-buy.svg',
            alt: 'How to buy',
            text: 'How to buy',
        },
        {
            icon: '/assets/icons/my-wallet-wont-connect.svg',
            alt: 'My wallet wont connect!',
            text: 'My wallet won’t connect!',
        },
    ];
    return (
        <div className='text-center w-full'>
            <div className='px-[30px]'>
                <h2 className='text-[32px] leading-[38.4px] font-bold text-white'>Buy <span className='text-[#8E00FF]'>$VRN</span> Now</h2>
                <h4 className='text-white/90 text-[14px] leading-[16.8px] font-medium pt-[15px]'>Until price increase</h4>
                {/* Current & Next Price */}
                <div className='mt-5'>
                    <div className='flex items-center justify-between gap-5'>
                        <h2 className='text-white/90 text-[14px] leading-[16.8px] font-normal'>Current price:  $0.109343</h2>
                        <h2 className='text-white/90 text-[14px] leading-[16.8px] font-normal'>Next price:  $0.113461</h2>
                    </div>
                    <div className='my-2.5 bg-[#250142] rounded-[49px] w-full h-[15px]'>
                        <div className='h-full w-[180px] rounded-[11px]' style={{ background: "linear-gradient(270deg, #A052FF 0%, #440675 100%)" }}></div>
                    </div>
                    <h3 className='text-[14px] leading-[16.8px] font-normal text-[#C176FF]'><span className='text-white/90'>Raised :</span> 20000/350000</h3>
                </div>
            </div>
            {/* Stackable & Purchased VRN */}
            <div className='mt-5 w-full bg-[#7314C040]'>
                <div className='max-w-[395px] mx-auto w-full flex items-center gap-[85px] py-2.5'>
                    <div>
                        <h2 className='text-[14px] leading-[16.8px] font-medium mb-[5px]'>Stackable VRN</h2>
                        <h3 className='text-[#C176FF] text-[14px] leading-[16.8px] font-normal'>44093531</h3>
                    </div>
                    <div className='bg-[#842DFF] h-[40px] w-[0.5px]'></div>
                    <div>
                        <h2 className='text-[14px] leading-[16.8px] font-medium mb-[5px]'>Purchased VRN</h2>
                        <h3 className='text-[#C176FF] text-[14px] leading-[16.8px] font-normal'>142356276</h3>
                    </div>
                </div>
            </div>

            <div className='px-[30px]'>
                <div>
                    
                </div>
                <button className='bg-[#A052FF] w-full h-[50px] rounded-lg'>Buy Now</button>
                <div className='mt-5 flex items-center justify-between gap-3'>
                    {infoItems.map((item, index) => (
                        <div key={index} className='flex items-center gap-2.5'>
                            <Image src={item.icon} alt={item.alt} width={16} height={16} />
                            <h3 className='text-white/90 text-[14px] leading-[16.8px] font-normal'>{item.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BuyNowBox