import React from 'react';

const CreatorEarningsScreen = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#221c11] dark justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-[#221c11] p-4 pb-2 justify-between">
          <div
            className="text-white flex size-12 shrink-0 items-center"
            data-icon="ArrowLeft"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Earnings
          </h2>
        </div>
        <h3 className="text-white tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">
          Total Earnings
        </h3>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#483a23]">
            <p className="text-white text-base font-medium leading-normal">Last 30 Days</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">$1,250</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#483a23]">
            <p className="text-white text-base font-medium leading-normal">Lifetime</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">$5,750</p>
          </div>
        </div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Earnings Breakdown
        </h2>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#675332]">
            <p className="text-white text-base font-medium leading-normal">Tips</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">$350</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorEarningsScreen;
