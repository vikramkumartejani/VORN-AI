"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SlArrowDown } from "react-icons/sl";

const NavLink = ({ link, dropdownOpen, setDropdownOpen }) => {
    const router = useRouter();
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownOpen &&
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen, setDropdownOpen]);

    return (
        <li className="relative group" ref={containerRef}>
            {link.submenu ? (
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="mt-0.5 flex items-center space-x-1.5 text-[#FFFFFF]/60 hover:text-primary transition duration-300"
                >
                    <span className="font-poppins text-base font-normal">{link.name}</span>
                    <SlArrowDown className="text-[11px] mt-0.5" />
                </button>
            ) : (
                <button
                    onClick={() => router.push(link.href)}
                    className="font-poppins text-base font-normal text-[#FFFFFF]/60 hover:text-primary transition duration-300"
                >
                    {link.name}
                </button>
            )}

            {link.submenu && dropdownOpen && (
                <ul className="absolute -left-4 w-[120px] top-[50px] bg-black/90 border border-primary rounded-md shadow-lg">
                    {link.submenu.map((sublink, subIndex) => (
                        <li key={subIndex}>
                            <button
                                onClick={() => {
                                    router.push(sublink.href);
                                    setDropdownOpen(false);
                                }}
                                className="block text-center px-3 py-2 text-white/60 hover:bg-primary w-full text-base"
                            >
                                {sublink.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavLink;
