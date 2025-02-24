// components/Timeline.js
'use client'; // Add this if using Next.js app router

import React, { useEffect, useRef, useState } from 'react';

const Timeline = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timelineRefs = useRef([]);

    const items = [
        {
            title: "AI-Powered Compute Grid",
            description: "This service manages decentralized GPU/CPU resources, dynamically allocating AI and machine learning workloads to the most suitable nodes, enabling cost-effective compute solutions for developers and benefit of resource providers.",
            image: "/api/placeholder/400/200"
        },
        {
            title: "AI-Optimized Energy Marketplace",
            description: "The AI-optimized energy marketplace balances supply and demand for tokenized renewable energy by predicting consumption patterns, dynamically pricing energy credits, and facilitating peer-to-peer energy trading.",
            image: "/api/placeholder/400/200"
        },
        {
            title: "AI Yield Management System",
            description: "The AI yield management system adjusts staking rewards in real-time based on network performance, asset utilization, and liquidity needs, offering users optimized passive income opportunities through AI-managed staking pools.",
            image: "/api/placeholder/400/200"
        }
    ];

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = timelineRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1) {
                        setActiveIndex(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        timelineRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ background: '#0A0B0F', minHeight: '100vh', padding: '2rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
                {/* Timeline line */}
                <div
                    style={{
                        position: 'absolute',
                        left: '15px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'rgba(147, 51, 234, 0.3)'
                    }}
                />

                {/* Timeline items */}
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={el => timelineRefs.current[index] = el}
                        style={{
                            marginBottom: '8rem',
                            paddingLeft: '40px',
                            position: 'relative',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Timeline dot */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '8px',
                                top: '24px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: index <= activeIndex ? '#9333EA' : 'rgba(147, 51, 234, 0.3)',
                                transform: index === activeIndex ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.3s ease'
                            }}
                        />

                        {/* Content card */}
                        <div
                            style={{
                                background: '#12141D',
                                borderRadius: '8px',
                                border: `1px solid ${index === activeIndex ? '#9333EA' : '#2A2D3A'}`,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                opacity: index === activeIndex ? 1 : 0.5,
                                transform: `translateY(${index === activeIndex ? '0' : '20px'})`
                            }}
                        >
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#A0A3B1', fontSize: '0.875rem', lineHeight: '1.5' }}>
                                    {item.description}
                                </p>
                            </div>

                            {/* Image section */}
                            <div
                                style={{
                                    maxHeight: index === activeIndex ? '300px' : '0',
                                    opacity: index === activeIndex ? 1 : 0,
                                    transition: 'all 0.3s ease',
                                    overflow: 'hidden',
                                    background: '#1A1C25',
                                    padding: index === activeIndex ? '1rem' : '0'
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;