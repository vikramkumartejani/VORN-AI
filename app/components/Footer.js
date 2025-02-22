import Link from 'next/link'
import React from 'react'
import LocalizedButtonLink from './Button'
import Image from 'next/image'

const Footer = () => {
    return (
        <div
            className="border-t border-solid"
            style={{
                borderTopWidth: "1px",
                borderImageSource: "linear-gradient(270deg, rgba(139, 92, 246, 0) 0%, #9E52FE 35%, #9E52FE 50%, #9E52FE 65%, rgba(139, 92, 246, 0) 100%)",
                borderImageSlice: 1,
            }}
        >
            <div className='max-w-[1162px] mx-auto w-full py-[120px] pb-20'>
                {/* Links */}
                <div className='pb-[50px] flex items-start justify-between gap-5'>
                    <div>
                        <Image src='/assets/logo.svg' alt='logo' width={131} height={43} />
                        <p className='max-w-[373px] pt-5 pb-10 text-[14px] text-white leading-[21px] font-normal font-poppins'>VORN.AI – Powering the Future of Decentralized Intelligence AI-Driven. Infrastructure-Powered. Asset-Tokenized.</p>
                        <div className='flex items-center gap-[27px]'>
                            <Link href='/'><Image src='/assets/icons/twitter.svg' alt='twitter' width={24} height={24} /></Link>
                            <Link href='/'><Image src='/assets/icons/telegram.svg' alt='telegram' width={24} height={24} /></Link>
                            <Link href='/'><Image src='/assets/icons/m.svg' alt='m' width={24} height={24} /></Link>
                            <Link href='/'><Image src='/assets/icons/tree.svg' alt='tree' width={24} height={24} /></Link>
                        </div>
                    </div>

                    <div className='max-w-[528px] w-full flex items-start justify-between gap-5'>
                        <div className='w-full flex items-center justify-center flex-col'>
                            <h2 className='mb-6 text-white text-[16px] leading-[24px] font-bold font-poppins'>Product</h2>
                            <ul className='space-y-[14px]'>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Features</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Unified AI</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>DePIN</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>RWA</Link></li>
                            </ul>
                        </div>
                        <div className='w-full flex items-center justify-center flex-col'>
                            <h2 className='mb-6 text-white text-[16px] leading-[24px] font-bold font-poppins'>Company</h2>
                            <ul className='space-y-[14px]'>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Home</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Roadmap</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Tokenomics</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>FAQs</Link></li>
                            </ul>
                        </div>
                        <div className='w-full flex items-center justify-center flex-col'>
                            <h2 className='mb-6 text-white text-[16px] leading-[24px] font-bold font-poppins'>Resources</h2>
                            <ul className='space-y-[14px]'>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Staking</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Whitepaper</Link></li>
                                <li><Link href='/features' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Join our newsletter */}
                <div className='py-[50px] border-t border-[#8B5CF6]/20'>
                    <div className='flex items-center gap-4 justify-between'>
                        <div>
                            <h2 className='text-white text-[16px] leading-[24px] font-bold font-poppins mb-1'>Join our newsletter</h2>
                            <h3 className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Keep up to date with everything Refinance.</h3>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type='text' placeholder='Enter your email' className='text-white text-[14px] placeholder:text-white font-medium font-poppins leading-[21px] border border-[#8B5CF666] w-[400px] h-[45px] rounded-[12px] px-4 bg-transparent outline-none' />
                            <LocalizedButtonLink href='/subscribe' translationKey="Subscribe"/>
                        </div>
                    </div>
                </div>

                {/* Rights */}
                <div className='flex items-center justify-between gap-4 border-t border-[#8B5CF6]/20 pt-[50px]'>
                    <div className='flex items-center gap-[18px]'>
                        <Link href='/privacy-policy' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Privacy Policy</Link>
                        <div className='bg-[#D9D9D9] w-1 h-1 rounded-full'></div>
                        <Link href='/privacy-policy' className='text-white text-[14px] leading-[21px] font-normal font-poppins'>Term of Conditions</Link>
                    </div>
                    <h3 className='text-white text-[14px] leading-[21px] font-normal font-poppins'>© 2025, VORN AI. All rights reserved</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
