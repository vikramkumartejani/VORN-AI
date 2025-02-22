import React from 'react'
import SectionHeading from '../SectionHeading'
import LocalizedButtonLink from '../Button'

const featuresData = [
    {
        id: 1,
        title: "AI - The Intelligent Brain",
        description:
            "AI in VORN.AI serves as the intelligent core, optimizing resource allocation, automating smart contracts, and enhancing network security through real-time monitoring. It predicts demand for computing and energy resources, ensuring efficient distribution and maximum utilization. AI also manages yield optimization for staking pools and supports decentralized governance by streamlining proposal analysis and voting processes.",
        videoSrc: "/assets/features-video-1.mp4",
        reversed: false,
    },
    {
        id: 2,
        title: "DePIN – The Physical Backbone",
        description:
            "DePIN provides the physical infrastructure, including computing nodes, storage devices, and energy grids, enabling users to contribute and monetize their resources. AI dynamically allocates these resources based on network needs, creating a decentralized marketplace for compute power, cloud storage, and renewable energy trading, while rewarding contributors with VRN tokens",
        videoSrc: "/assets/features-video-2.mp4",
        reversed: true,
    },
    {
        id: 3,
        title: "RWA – The Economic Engine",
        description:
            "RWA tokenization bridges real-world assets with blockchain, allowing infrastructure such as real estate, data centers, and energy grids to be converted into fractional NFTs. Users can trade, stake, and borrow against these tokenized assets, earning passive income through AI-managed yield distribution while benefiting from global liquidity and decentralized ownership.",
        videoSrc: "/assets/features-video-3.mp4",
        reversed: false,
    },
]

const OurFeatures = () => {
    return (
        <div className='pt-[70px] pb-20'>
            <SectionHeading text="Our Features" />
            <h1 className='my-[25px] text-[40px] leading-[44px] font-bold text-white text-center'>
                <span className='text-[#9442ED]'>VORN AI:</span> Unified AI + DePIN + RWA Ecosystem
            </h1>
            <p className='max-w-[698px] mx-auto text-center w-full text-[18px] leading-[27px] font-normal font-poppins text-white/80'>
                VORN AI is a self-sustaining, AI-driven ecosystem that integrates AI, DePIN , and RWA tokenization to create a fully autonomous decentralized economy.
            </p>

            <div className='mt-[50px] max-w-[1236px] mx-auto w-full'>
                {featuresData.map((feature, index) => (
                    <div
                        key={feature.id}
                        className={`${index === 1 ? 'my-5' : ''} flex items-center w-full gap-5 h-[400px]`}
                    >
                        {feature.reversed ? (
                            <>
                                <div
                                    className="relative flex-1 h-full rounded-[10px] p-[1px]"
                                    style={{
                                        background:
                                            'conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)'
                                    }}
                                >
                                    <div
                                        className="rounded-[10px] px-10 flex items-start justify-center flex-col w-full h-full"
                                        style={{
                                            background: 'linear-gradient(180deg, #000000 0%, #371866 100%)',
                                            boxShadow: "0px 0px 50px 0px #8B5CF680 inset"
                                        }}
                                    >
                                        <h2 className="text-[32px] leading-[31px] font-bold text-white mb-5">
                                            {feature.title}
                                        </h2>
                                        <p className="text-white/80 font-normal font-poppins text-[18px] leading-[27px]">
                                            {feature.description}
                                        </p>
                                        <div className="mt-5">
                                            <LocalizedButtonLink href="/learn-more" translationKey="btns.learn-more" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[472px] h-full border border-[#7E0ADB] rounded-[10px]">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover rounded-[10px]"
                                    >
                                        <source src={feature.videoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-[472px] h-full border border-[#7E0ADB] rounded-[10px]">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover rounded-[10px]"
                                    >
                                        <source src={feature.videoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div
                                    className="relative flex-1 h-full rounded-[10px] p-[1px]"
                                    style={{
                                        background:
                                            'conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)'
                                    }}
                                >
                                    <div
                                        className="rounded-[10px] px-10 flex items-start justify-center flex-col w-full h-full"
                                        style={{
                                            background: 'linear-gradient(180deg, #000000 0%, #371866 100%)',
                                            boxShadow: "0px 0px 50px 0px #8B5CF680 inset"
                                        }}
                                    >
                                        <h2 className="text-[32px] leading-[31px] font-bold text-white mb-5">
                                            {feature.title}
                                        </h2>
                                        <p className="text-white/80 font-normal font-poppins text-[18px] leading-[27px]">
                                            {feature.description}
                                        </p>
                                        <div className="mt-5">
                                            <LocalizedButtonLink href="/learn-more" translationKey="btns.learn-more" />
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

export default OurFeatures
