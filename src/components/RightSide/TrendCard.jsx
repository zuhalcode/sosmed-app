import React from "react";
import { TrendData } from "../../data/TrendData";

const TrendCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-card p-4 rounded-2xl">
      <h3 className="">Trends for you</h3>
      {TrendData.map((trend, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="font-bold">#{trend.name.toLowerCase()}</span>
          <span className="text-xs">{trend.shares}k</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
