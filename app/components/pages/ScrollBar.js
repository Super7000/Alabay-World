'use client'
import { useEffect, useState } from 'react';
export default function ScrollBar({ themeColor, scrollElement }) {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollElement.current) {
                const scrollTop = scrollElement.current.scrollTop;
                const scrollHeight = scrollElement.current.scrollHeight - scrollElement.current.clientHeight;
                const scrollPercent = (scrollTop / scrollHeight) * 100;
                setScrollPercentage(scrollPercent);
            }
        };

        const element = scrollElement.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => element.removeEventListener('scroll', handleScroll);
        }
    }, [scrollElement]);

    return (
        <div className='fixed top-1/2 h-2/6 right-8 -translate-y-1/2 flex flex-col gap-6'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none" className="cursor-pointer">
                <rect x="0.949219" width="34.1" height="34.1" rx="9" fill={scrollPercentage <= 0 ? 'white' : themeColor} fillOpacity={scrollPercentage <= 0 ? "0.36" : "1"} />
                <path d="M17.134 9.5C17.5189 8.83333 18.4811 8.83333 18.866 9.5L24.9282 20C25.3131 20.6667 24.832 21.5 24.0622 21.5H11.9378C11.168 21.5 10.6869 20.6667 11.0718 20L17.134 9.5Z" fill={scrollPercentage <= 0 ? "white" : "#353535"} />
            </svg>

            <div className='flex-1 rounded-lg w-5 mx-auto' style={{ background: "#D9D9D957", height: '50%' }}>
                <div className='h-1/2 rounded-lg relative' style={{ background: themeColor, transform: `translateY(${scrollPercentage}%)` }}></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none" className="cursor-pointer">
                <rect x="0.949219" y="0.100098" width="34.1" height="34.1" rx="9" fill={scrollPercentage >= 99 ? 'white' : themeColor} fillOpacity={scrollPercentage >= 99 ? "0.36" : "1"} />
                <path d="M17.0832 24.6001C17.4681 25.2668 18.4303 25.2668 18.8152 24.6001L24.8774 14.1001C25.2623 13.4334 24.7812 12.6001 24.0114 12.6001H11.887C11.1172 12.6001 10.6361 13.4334 11.021 14.1001L17.0832 24.6001Z" fill={scrollPercentage >= 99 ? "white" : "#353535"} />
            </svg>
        </div>
    )
}