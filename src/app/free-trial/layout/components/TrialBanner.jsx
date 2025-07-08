import React from "react";

const TrialBanner = () => {
  return (
    <div className="w-full bg-amber-100 h-[450px] text-center">
      <div className="container">
        <h2 className="mt-5">Start Your Free Gym Trial Today</h2>
        <h5 className="">No payment. No commitment. Just results.</h5>
        <button onClick={() => window.scroll("#trial-form", "smooth")}>
          Claim Free Trail
        </button>
      </div>
    </div>
  );
};

export default TrialBanner;
