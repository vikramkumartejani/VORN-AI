'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import styles from "../../styling/StakingButton.module.css";

const tabs = [
    { id: "ETH", label: "ETH", icon: "/assets/icons/eth.svg" },
    { id: "BNB", label: "BNB", icon: "/assets/icons/bnb.svg" },
];

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

const currencies = [
    { name: "ETH", icon: "/assets/icons/eth.svg" },
    { name: "USDC", icon: "/assets/icons/eth.svg" },
    { name: "USDT", icon: "/assets/icons/eth.svg" },
];

const BuyNowBox = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeTab, setActiveTab] = useState("ETH");
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                <div className="my-5 border border-[#8616DF] rounded-[9px] p-[5px] flex items-center justify-between">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`h-[50px] w-full rounded-lg flex items-center justify-center gap-2.5 ${activeTab === tab.id ? "border border-[#FFFFFF26]" : ""
                                }`}
                            style={
                                activeTab === tab.id
                                    ? { background: "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)" }
                                    : {}
                            }
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <Image src={tab.icon} alt={tab.label} width={24} height={24} />
                            <span className="text-[16px] leading-[19.2px] font-normal">
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>

                <div className='w-full justify-center flex items-center gap-4'>
                    <Image src="/assets/heading-arrow.svg" alt='arrow' width={110} height={1} />
                    <div
                        className='px-2.5 py-1 bg-[#9442ED80] rounded-[99px] flex items-center justify-center border border-[#9442ED80]'
                        style={{ backdropFilter: 'blur(5px)' }}
                    >
                        <h2 className='text-nowrap text-white text-[14px] leading-[16.8px] font-normal'>Listing price:  $0.12343</h2>
                    </div>
                    <Image src="/assets/heading-arrow.svg" alt='arrow' width={110} height={1} className='rotate-180' />
                </div>

                {/* Choose amount & $VRN you receive */}
                <div className='mt-5 flex items-center gap-5'>
                    <div className='w-full h-[50px] rounded-lg border border-[#8616DF] flex items-center justify-between gap-3 pl-4 pr-[5px]'>
                        <input type='text' placeholder='0.00' className='w-full bg-transparent outline-none placeholder:text-white/80 text-white text-base font-normal' />
                        {/* Dropdown */}
                        <div ref={dropdownRef} className="relative inline-block">
                            {/* Dropdown Button */}
                            <div
                                className={`h-10 max-w-[100px] min-w-[94px] flex items-center gap-2 justify-between px-1.5 py-2 rounded-t-[10px] ${isOpen ? "rounded-b-none" : "rounded-[10px]"
                                    } bg-[#762CC5] border border-[#A66CFD] cursor-pointer`}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <div className="flex items-center">
                                    <Image src={selectedCurrency.icon} alt={selectedCurrency.name} width={22} height={22} />
                                    <h3 className="text-white text-[14px] leading-[18px] font-normal ">{selectedCurrency.name}</h3>
                                </div>
                                <Image src="/assets/icons/caret-down.svg" alt="arrow" width={14} height={14} />
                            </div>

                            {/* Dropdown List */}
                            {isOpen && (
                                <div className="absolute top-[40px] space-y-[9px] left-0 w-full bg-[#762CC5] border border-t-0 border-[#A66CFD] py-3 rounded-t-none rounded-[10px] text-white shadow-lg z-10">
                                    {currencies.map((currency) => (
                                        <div
                                            key={currency.name}
                                            className="flex items-center gap-2 px-3 cursor-pointer space-y-2"
                                            onClick={() => {
                                                setSelectedCurrency(currency);
                                                setIsOpen(false);
                                            }}
                                        >
                                            <span className='text-[15px] leading-[18px] font-light'>{currency.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='w-full h-[50px] rounded-lg border border-[#8616DF] flex items-center justify-between px-4 gap-5'>
                        <input type='text' placeholder='0.00' className='w-full bg-transparent outline-none placeholder:text-white/80 text-white text-base font-normal' />
                        <Image src='/assets/icons/meta.svg' alt='meta' width={24} height={24} />
                    </div>
                </div>


                {/* Available Bonus */}
                <div className='my-5 space-y-[11px]'>
                    <h3 className='text-white text-[14px] leading-[16.8px] font-bold text-left'>Available Bonus</h3>
                    <div className='grid grid-cols-3 gap-2.5'>
                        <div className='border border-[#FFFFFF26] rounded-lg p-[7px] text-[14px] font-medium' style={{ background: "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)" }}>5%</div>
                        <div className='border border-[#FFFFFF26] rounded-lg p-[7px] text-[14px] font-medium'>10%</div>
                        <div className='border border-[#FFFFFF26] rounded-lg p-[7px] text-[14px] font-medium'>15%</div>
                    </div>
                    <p className='text-white/90 text-[14px] font-normal leading-[16.8px] text-left'>Spend $299.90 more to get 10% bonus tokens</p>
                </div>

                <button
                    className={`${styles.stakingButtonBuyNow} ${isHovered ? styles.hovered : ""}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className={styles.gradientBorder} />
                    <div className={styles.buttonContentBuyNow}>
                        Buy Now
                    </div>
                    <div className={styles.glowEffectBuyNow} />
                </button>

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