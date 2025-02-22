import React from "react";

const Leaderboard = () => {
    const leaderboardData = [
        { id: 1, user: "0x863E...8515", amount: "36474144.43" },
        { id: 2, user: "0xB627...6d32", amount: "26057582.46" },
        { id: 3, user: "0x6Fh2...b916", amount: "26561519.92" },
        { id: 4, user: "0xBe56...A7aA", amount: "10000965.75" },
        { id: 5, user: "0x8f19...b048", amount: "36474144.43" },
        { id: 6, user: "0xB627...6d32", amount: "26561519.92" },
        { id: 7, user: "0xBe56...A7aA", amount: "26057582.46" },
        { id: 8, user: "0x8f19...b048", amount: "36474144.43" },
        { id: 9, user: "0xB627...6d32", amount: "26561519.92" },
        { id: 10, user: "0x863E...8515", amount: "10000965.75" },
        { id: 11, user: "0x6Fh2...b916", amount: "26057582.46" },
        { id: 12, user: "0xB627...6d32", amount: "36474144.43" },
        { id: 13, user: "0xBe56...A7aA", amount: "26057582.46" },
        { id: 14, user: "0x6Fh2...b916", amount: "26561519.92" },
    ];

    return (
        <div className="mt-[30px] border border-[#440675] bg-[#0B0015] rounded-[20px] p-[30px]">
            <h1 className="text-[24px] leading-[28.8px] font-bold mb-[25px] text-white">
                Leaderboard
            </h1>

            {/* Thead as a separate box */}
            <div className="w-full bg-[#1C0035] border border-[#7209C5] rounded-xl p-5 h-[70px] flex justify-between text-nowrap">
                <h3 className="text-left text-white text-[20px] leading-[24px] font-medium w-1/3">SR</h3>
                <h3 className="text-center text-white text-[20px] leading-[24px] font-medium w-20">User</h3>
                <h3 className="text-right text-white text-[20px] leading-[24px] font-medium w-1/3">$VRN Amount</h3>
            </div>

            {/* Table Wrapper */}
            <div className="overflow-hidden mt-[25px]">
                <table className="w-full border-collapse">
                    <tbody className="">
                        {leaderboardData.map((item, index) => (
                            <tr key={item.id}>
                                <td className="py-2.5 px-6 text-left text-[16px] leading-[19.2px] font-medium text-white w-1/3">
                                    {item.id}
                                </td>
                                <td className="px-4 text-center text-[16px] leading-[19.2px] font-medium text-white w-1/3">
                                    {item.user}
                                </td>
                                <td className="pr-10 text-right text-[16px] leading-[19.2px] font-medium text-white w-1/3">
                                    {item.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
