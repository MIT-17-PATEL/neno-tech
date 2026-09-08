"use client"
import CountUp from "react-countup";

interface CounterProps {
    end: number;
    decimals?: number;
}

const Counter = ({ end, decimals }: CounterProps) => {
    return (
        <>
            <CountUp end={end} enableScrollSpy decimals={decimals} />
        </>
    );
};

export default Counter;
