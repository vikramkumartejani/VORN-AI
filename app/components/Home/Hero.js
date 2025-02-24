import React, { useState } from 'react'
import BuyNowBox from './BuyNowBox'
import styles from "../../styling/StakingButton.module.css";
import Image from 'next/image';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='flex items-start justify-between gap-5'>
            <div className='max-w-[609px] text-white'>
                <div
                    className="mb-[30px] max-w-[271px] h-[42px] bg-[#170326] rounded-[50px] border border-[#FFFFFF26] flex items-center gap-2 justify-center animate-pulse-shadow"
                >
                    <div className="bg-[#9B59FF] w-[34px] h-[18px] rounded-[40px] flex items-center justify-center inter text-black text-[10px] leading-[26px] tracking-[-0.01em] font-bold">
                        NEW
                    </div>
                    <h2 className="text-[#9B59FF] text-[16px] leading-[26px] font-normal tracking-[-0.01em]">
                        Next-Gen Integration is Live!
                    </h2>
                </div>

                <h1
                    className="text-[54px] leading-[74px] font-bold bg-clip-text text-transparent"
                    style={{
                        background: "linear-gradient(291.9deg, #FFFFFF 62.65%, #000000 108.48%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Powering the Future: AI, DePIN & RWA in One Unified Grid
                </h1>

                <p className='my-[30px] text-[18px] leading-[30px] font-normal font-poppins text-white/80 max-w-[496px]'>AI-driven compute power, tokenized assets, and decentralized infrastructure in one ecosystem.</p>

                <div className='flex items-center gap-[30px]'>
                    <button
                        className={`${styles.stakingButtonAudit}  ${isHovered ? styles.hovered : ""}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={styles.gradientBorder} />
                        <div className={styles.buttonContentAudit}>
                            <Image src='/assets/icons/audit.svg' alt='Audit' width={18} height={18} />
                            Audit
                        </div>
                        <div className={styles.glowEffectAudit} />
                    </button>
                    <button
                        className="relative text-[16px] leading-[19.2px] font-medium w-[134px] h-[47px] rounded-xl text-white transition-all duration-300 shadow-[0px_21px_39.3px_rgba(132,0,255,0.33),0px_0px_6px_1px_#9B59FF_inset]"
                        style={{
                            background: "radial-gradient(50.91% 97.54% at 50% 2.46%, rgba(160, 82, 255, 0.01) 0%, rgba(115, 0, 255, 0.01) 100%)",
                        }}
                    >
                        Whitepaper
                        <span
                            className="absolute inset-0 rounded-xl p-[1px] pointer-events-none"
                            style={{
                                background: "linear-gradient(180deg, #440675 0%, #CDA4FF 100%)",
                                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                maskComposite: "exclude",
                                WebkitMaskComposite: "xor",
                            }}
                        ></span>
                    </button>
                </div>
            </div>

            <div className='h-[735px] py-[30px] w-[504px] rounded-[20px] bg-[#15012D0D] border border-[#842DFF]' style={{ backdropFilter: "blur(100px)" }}>
                <BuyNowBox />
            </div>
        </div>
    )
}

export default Hero