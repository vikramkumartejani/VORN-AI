import React from 'react';
import Image from 'next/image';

const Timeline = () => {
    const TimelinePoint = () => (
        <div className='absolute left-1/2 -translate-x-1/2 bg-[#6C38F31F] w-[56px] h-[56px] rounded-[300px] p-1 flex items-center justify-center z-10'>
            <div className='w-[48px] h-[48px] rounded-[300px] flex items-center justify-center' style={{
                background: "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)",
                boxShadow: `0px 1px 3px 0px #6C39F41A, 0px 5px 5px 0px #6C39F417, 0px 12px 7px 0px #6C39F40D, 0px 20px 8px 0px #6C39F403, 0px 32px 9px 0px #6C39F400`
            }}>
                <Image src='/assets/icons/star.svg' alt='star' width={24} height={24} />
            </div>
        </div>

    );

    const TimelineCard = ({ title, description }) => (
        <div className="max-w-[578px] rounded-[10px] p-[1px]"
            style={{
                background: "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)"
            }}>
            <div
                className='rounded-[9px] py-[39px] pl-[33px] pr-[23px]'
                style={{
                    background: "linear-gradient(180deg, #000000 0%, #371866 100%)",
                    boxShadow: '0px 0px 50px 0px #8B5CF680 inset'
                }}
            >
                <h2 className="text-white text-[32px] font-bold leading-[31px] mb-5">{title}</h2>
                <p className="text-white/80 text-[18px] leading-[27px] font-normal font-poppins">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-[#020103] pt-[54px] pb-[200px] relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-[300px] bottom-[400px] w-[2px] bg-[#252525] -translate-x-1/2" />

            <div className="max-w-[1240px] mx-auto px-4">
                <div className="space-y-32">
                    {/* First timeline item */}
                    <div className="relative grid grid-cols-2 gap-16 items-center">
                        <TimelinePoint />
                        <div className="flex justify-end mr-1">
                            <TimelineCard
                                title="AI-Powered Compute Grid:"
                                description="This service manages decentralized GPU/CPU resources, dynamically allocating AI and machine learning workloads to the most suitable nodes, ensuring cost-effective compute solutions for developers and rewards for resource providers."
                            />
                        </div>
                        <div className="flex justify-start">
                            <Image
                                src="/assets/ai-powere-compute-grid.png"
                                alt="AI-Powered Compute Grid"
                                width={715}
                                height={453}
                            />
                        </div>
                    </div>

                    {/* Second timeline item */}
                    <div className="relative grid grid-cols-2 gap-16 items-center">
                        <TimelinePoint />
                        <div className="flex justify-end">
                            <Image
                                src="/assets/ai-yield-management-system.png"
                                alt="AI Yield Management System"
                                width={521}
                                height={539}

                            />
                        </div>
                        <div className="flex justify-start">
                            <TimelineCard
                                title="AI Yield Management System:"
                                description="The AI yield management system adjusts staking rewards in real-time based on network performance, asset utilization, and liquidity needs, offering users optimized passive income opportunities through AI-managed staking pools."
                            />
                        </div>
                    </div>

                    {/* Third timeline item */}
                    <div className="relative grid grid-cols-2 gap-16 items-center">
                        <TimelinePoint />
                        <div className="flex justify-end">
                            <TimelineCard
                                title="AI-Optimized Energy Marketplace:"
                                description="The AI-optimized energy marketplace balances supply and demand for selected renewable energy by predicting cycles and consumption, dynamically pricing trading profits, and facilitating peer-to-peer energy trading."
                            />
                        </div>
                        <div className="flex justify-start">
                            <Image
                                src="/assets/ai-optimized-energy-marketplace.png"
                                alt="AI-Optimized Energy Marketplace"
                                width={705}
                                height={499}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;