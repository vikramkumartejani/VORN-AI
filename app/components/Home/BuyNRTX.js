import React from 'react'
import SectionHeading from '../SectionHeading'
import Image from 'next/image'

const steps = [
    {
        step: "Step 01",
        title: "Create your Wallet",
        description: "If you already have a compatible wallet, proceed to Step 2. We recommend MetaMask for desktop and Trust Wallet for mobile. Download & set up your wallet to get started.",
        image: "/assets/create-your-wallet.svg",
        alt: "create-your-wallet",
        marginTop: "mt-0"
    },
    {
        step: "Step 02",
        title: "Top Up Your Wallet",
        description: "Fund your wallet with ETH, BNB, USDT or USDC to purchase VRN. If paying by Credit/debit card, you can skip this step.",
        image: "/assets/create-your-wallet.svg",
        alt: "top-up-your-wallet",
        marginTop: "mt-20"
    },
    {
        step: "Step 03",
        title: "Buy VRN Tokens",
        description: "Click 'Buy Now' and approve the transaction in your wallet. Once successful, your VRN tokens will be automatically sent to your wallet.",
        image: "/assets/create-your-wallet.svg",
        alt: "buy-vrn-tokens",
        marginTop: "mt-40"
    }
];

const BuyNRTX = () => {
    return (
        <div className=''>
            <div className='py-20' style={{ background: `radial-gradient(32.52% 50% at 50% 50%, rgba(132, 45, 255, 0.25) 0%, rgba(2, 1, 3, 0.25) 100%), linear-gradient(0deg, #000000, #000000)` }}>
                <SectionHeading text="Buy NRTX" />
                <h1 className='my-[25px] text-[40px] leading-[44px] font-bold text-white text-center'>
                    How to <span className='text-[#9442ED]'> Buy VRN Tokens</span>
                </h1>
                <p className='text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80'>
                    Buy VRN Tokens in three simple steps
                </p>

                {/* Steps Container */}
                <div className='mt-11 max-w-[1236px] w-full mx-auto flex gap-5'>
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.marginTop} relative max-w-[399px] h-[414px] rounded-[20px] p-[1px] transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6]`}
                            style={{
                                background: 'conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)',
                            }}
                        >
                            <div
                                className="rounded-[20px] p-[25px] flex items-center flex-col w-full h-full transition-shadow duration-300 hover:shadow-[0px_0px_50px_0px_#8B5CF680_inset] backdrop-blur-[10px]"
                                style={{
                                    background: 'linear-gradient(180deg, #000000 0%, #371866 100%)',
                                    boxShadow: '0px 0px 50px 0px #8B5CF680 inset',
                                }}
                            >
                                <h2 className="text-[24px] leading-[28.8px] font-semibold text-white mb-5">{item.step}</h2>
                                <h2 className="text-[24px] leading-[28.8px] font-bold text-white mb-6">{item.title}</h2>
                                <Image src={item.image} alt={item.alt} width={104} height={104} />
                                <p className="mt-[26px] text-white font-normal font-poppins text-[16px] leading-[24px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyNRTX;
