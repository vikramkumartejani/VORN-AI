import Image from 'next/image'
import React from 'react'
import LocalizedButtonLink from '../Button';

const featuresData = [
    {
        id: 1,
        title: "RWA Tokenization Platform",
        description: "This platform facilitates the conversion of real-world infrastructure into NFT-backed tokens, allowing asset owners to tokenize and fractionalize their assets for global investment and income generation.",
        imageSrc: "/assets/white-image.png",
        reversed: false,
    },
    {
        id: 2,
        title: " RWA Marketplace",
        description: "The RWA marketplace is a decentralized exchange for buying, selling, and trading tokenized assets like real estate and energy credits, with AI ensuring accurate valuations, fraud prevention, and instant liquidity.",
        imageSrc: "/assets/white-image.png",
        reversed: true,
    },
    {
        id: 3,
        title: " RWA Staking Pools",
        description: "RWA staking pools allow users to stake tokenized assets and earn yields generated from the underlying real-world assets, with AI managing yield distribution based on performance and market conditions.",
        imageSrc: "/assets/white-image.png",
        reversed: false,
    },
    {
        id: 4,
        title: "RWA Collateralization & Lending",
        description: "RWA collateralization and lending services provide liquidity by enabling users to lock their tokenized assets as collateral for loans, with AI assessing risk, managing interest rates, and ensuring secure transactions.",
        imageSrc: "/assets/white-image.png",
        reversed: true,
    },
];


const RWAContent = () => {
    return (
        <div className='px-5'>
            <div className='py-[50px] md:py-[80px] lg:py-[113px] max-w-[986px] mx-auto w-full flex items-center justify-between lg:flex-row flex-col gap-10 lg:gap-4'>
                <Image src='/assets/white-image.png' alt='white-image' width={425} height={410} className='rounded-[10px]' />
                <div className='lg:max-w-[488px] lg:text-left text-center'>
                    <h2 className='text-white text-[32px] leading-[48px] font-bold mb-5'>Unlocking Real-World Assets for Everyone.</h2>
                    <p className='text-white/80 text-[18px] leading-[27px] font-normal font-poppins'>RWA Core revolutionizes asset ownership by tokenizing infrastructure into blockchain assets, enabling fractional ownership for small-scale investors. With automated yield distribution providing passive income and a P2P marketplace for seamless global trading, RWA Core makes high-value assets accessible to all.</p>
                </div>
            </div>

            <h1 className='pt-[80px] lg:pt-0 max-w-[650px] mx-auto w-full text-center text-white text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-bold'><span className='text-[#9442ED]'>Bridging Real-World Assets</span> with Blockchain-Powered Utility.</h1>

            <div className='mt-[100px] max-w-[1236px] w-full mx-auto pb-[300px] h-full'>
                {featuresData.map((feature, index) => (
                    <div
                        key={feature.id}
                        className={`${index === 1 ? "my-6 lg:flex-row flex-col-reverse gap-6" : "mt-5  last:lg:flex-row last:flex-col-reverse"
                            } flex items-center lg:items-start lg:flex-row flex-col w-full gap-6 lg:h-[450px] `}
                    >
                        {feature.reversed ? (
                            <>
                                <div
                                    className="relative lg:flex-1 h-full rounded-[10px] p-[1px]"
                                    style={{
                                        background:
                                            "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)",
                                    }}
                                >
                                    <div
                                        className="rounded-[10px] py-[25px] sm:py-[40px] md:py-[60px] px-4 md:px-10 flex items-start justify-center flex-col w-full h-full"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, #000000 0%, #371866 100%)",
                                            boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                                        }}
                                    >
                                        <h2 className="text-[28px] sm:text-[32px] leading-[31px] font-bold text-white mb-5">
                                            {feature.title}
                                        </h2>
                                        <p className="text-white/80 font-normal font-poppins text-[18px] leading-[27px]">
                                            {feature.description}
                                        </p>
                                        <div className="mt-5">
                                            <LocalizedButtonLink
                                                href="/staking"
                                                translationKey="Stake Now"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Image src={feature.imageSrc} alt='image' width={472} height={400} className='rounded-[10px] border border-[#7E0ADB]' />
                            </>
                        ) : (
                            <>
                                <Image src={feature.imageSrc} alt='image' width={472} height={400} className='rounded-[10px] border border-[#7E0ADB]' />
                                <div
                                    className="relative flex-1 h-full rounded-[10px] p-[1px]"
                                    style={{
                                        background:
                                            "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)",
                                    }}
                                >
                                    <div
                                        className="rounded-[10px] py-[25px] sm:py-[40px] md:py-[60px] px-4 md:px-10 flex items-start justify-center flex-col w-full h-full"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, #000000 0%, #371866 100%)",
                                            boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                                        }}
                                    >
                                        <h2 className="text-[28px] sm:text-[32px] leading-[31px] font-bold text-white mb-5">
                                            {feature.title}
                                        </h2>
                                        <p className="text-white/80 font-normal font-poppins text-[18px] leading-[27px]">
                                            {feature.description}
                                        </p>
                                        <div className="mt-5">
                                            <LocalizedButtonLink
                                                href="/staking"
                                                translationKey="Stake Now"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RWAContent