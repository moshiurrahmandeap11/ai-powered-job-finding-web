import React from "react";

const Loader = ({ size = "w-6 h-6", borderColor = "border-white", borderTopColor = "border-t-primary" }) => {
  return (
    <div
      className={`animate-spin ${size} border-4 ${borderColor} ${borderTopColor} rounded-full`}
    ></div>
  );
};

export default Loader;
