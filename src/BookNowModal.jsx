import React from 'react';

const BookNowModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#221c11] dark justify-between group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Spline Sans, Noto Sans, sans-serif' }}
      >
        <div>
          <div className="flex absolute top-0 left-0 h-full w-full flex-col justify-end items-stretch bg-[#141414]/40">
            <div className="flex flex-col items-stretch bg-[#221c11]">
              <button
                onClick={onClose}
                className="flex h-5 w-full items-center justify-center"
              >
                <div className="h-1 w-9 rounded-full bg-[#675332]"></div>
              </button>
              <div className="flex-1">
                <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
                  Book Now
                </h1>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#483a23] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#c9b592] p-4 text-base font-normal leading-normal">
                      <option value="one">Select a service</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                    </select>
                  </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      placeholder="Date & Time"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#483a23] focus:border-none h-14 placeholder:text-[#c9b592] p-4 text-base font-normal leading-normal"
                      value=""
                    />
                  </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <textarea
                      placeholder="Custom note or request"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#483a23] focus:border-none min-h-36 placeholder:text-[#c9b592] p-4 text-base font-normal leading-normal"
                    ></textarea>
                  </label>
                </div>
                <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                  Estimated Cost
                </h3>
                <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                  $250
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#eead3e] text-[#221c11] text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Continue to Payment</span>
            </button>
          </div>
          <div className="h-5 bg-[#221c11]"></div>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
