import React from 'react';

interface HeroStatsProps {
    stats: {
        count: string;
        label: string;
    }[];
}

const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
    return (
        <div className="careers-hero-stats">
            {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3 mb-3 mb-md-0">
                    <div className="card-style-one-item text-center">
                        <div className="counter-number">{stat.count}</div>
                        <p>{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroStats;
