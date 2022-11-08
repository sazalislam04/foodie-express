import React from "react";
import "../../../styles/SectionHeading.css";

const SectionHeading = () => {
  return (
    <div className="text-center pt-20">
      <span className="text-yellow-400">Quick pick</span>
      <h2 className="text-gray-900 heading text-4xl uppercase font-semibold">
        <span className="text-warning">Popular</span> Goods
      </h2>
    </div>
  );
};

export default SectionHeading;
