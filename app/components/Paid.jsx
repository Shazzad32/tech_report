"use client";
import React from "react";
import { useReference } from "../context/ReferenceContext";

const Paid = ({ userInfo }) => {
  const { reference } = useReference();
  const paidDevice = userInfo.filter(
    (item) => item.reference === reference && item.uid !== null
  );
  const totalServiceCharge = paidDevice.reduce(
    (sum, item) => sum + Number(item.service_charge || 0),
    0
  );
  const totalProfit = paidDevice.reduce(
    (sum, item) => sum + Number(item.service_charge || 0) * 0.1,
    0
  );

  return (
    <div className="w-full h-[93vh] p-4 bg-[#0d0d0d]">
      <div
        className="w-full h-[10%] 
             bg-white/10 backdrop-blur-xl  
             flex items-center justify-around md:justify-between 
             px-4 md:px-10 py-2 shadow-lg rounded-md"
      >
        <div className="flex flex-col items-center group">
          <h2 className="text-sm md:text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition">
            Paid Devices
          </h2>
          <p className="text-base md:text-xl font-bold text-white group-hover:scale-110 transition">
            {paidDevice.length}
          </p>
        </div>

        <div className="flex flex-col items-center group">
          <h2 className="text-sm md:text-lg font-semibold text-green-400 group-hover:text-green-300 transition">
            Total Collection
          </h2>
          <p className="text-base md:text-xl font-bold text-white group-hover:scale-110 transition">
            {totalServiceCharge}
          </p>
        </div>

        <div className="flex flex-col items-center group">
          <h2 className="text-sm md:text-lg font-semibold text-yellow-400 group-hover:text-yellow-300 transition">
            Profit
          </h2>
          <p className="text-base md:text-xl font-bold text-white group-hover:scale-110 transition">
            {totalProfit}
          </p>
        </div>
      </div>

      <div className="w-full h-[90%] overflow-y-auto p-2">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paidDevice.map((data, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-xl transition-all text-white text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <p className="text-base font-semibold text-blue-400">
                  {data.registration_number}
                </p>

                <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-600/80">
                  Paid
                </span>
              </div>

              {/* Body */}
              <div className="text-xs space-y-1 text-gray-200">
                <p>
                  <span className="text-gray-400">Device ID:</span> {data.id}
                </p>

                <p>
                  <span className="text-gray-400">Service Charge:</span>{" "}
                  {data.service_charge} Tk
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paid;
