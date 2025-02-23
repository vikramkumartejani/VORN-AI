import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Referral = () => {
    const referralLink = "https://vronai.net/dashboard/?ref=JXNRMRMHXT";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-[30px] border border-[#440675] bg-[#0B0015] rounded-[20px] p-[30px] text-white">
            <h1 className="text-[24px] leading-[28.8px] font-bold mb-[25px]">Referral</h1>

            <div className="staking-section border-[#440675] border bg-[#1C0035] py-[22px] px-5 rounded-xl">
                <h2 className="text-[20px] leading-[24px] font-normal mb-[5px]">Total Referrals</h2>
                <h3 className="text-[32px] leading-[38.4px] font-normal">0</h3>
            </div>

            <div className="mt-[21px] staking-section border-[#440675] border bg-[#1C0035] py-[22px] px-5 rounded-xl">
                <h2 className="text-[20px] leading-[24px] font-normal mb-[5px]">Total Earned Amount</h2>
                <h3 className="text-[32px] leading-[38.4px] font-normal">0</h3>
            </div>

            {/* Referral Link Section */}
            <div className="mt-5 border border-[#7209C5] rounded-xl py-1.5 px-5 flex items-center gap-5">
                <h2 className="text-[18px] leading-[27px] font-normal font-poppins">
                    Your Referral Link:
                    <Link href={referralLink} className="ml-1" target="_blank">
                        {referralLink}
                    </Link>
                </h2>
                <button onClick={handleCopy} className="relative">
                    <Image src="/assets/icons/copy.svg" alt="copy" width={24} height={24} />
                    {copied && (
                        <span className="absolute top-[-20px] left-0 bg-[#7209C5] text-white text-xs px-2 py-1 rounded">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Referral;
