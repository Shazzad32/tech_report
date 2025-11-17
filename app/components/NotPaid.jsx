"use client";
import React from "react";
import { PhoneCall } from "lucide-react";
import { useReference } from "../context/ReferenceContext";

const NotPaid = ({ userInfo }) => {
  const { reference } = useReference();
  const notPaid = userInfo.filter(
    (item) => item.reference === reference && item.uid === null
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
            Not Paid
          </h2>
          <p className="text-base md:text-xl font-bold text-white group-hover:scale-110 transition">
            {notPaid.length}
          </p>
        </div>
      </div>
      <div className="w-full h-[90%] p-2 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {notPaid.map((data, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-xl transition-all text-white text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-base font-semibold text-blue-400">
                  {data.registration_number}
                </p>

                <a
                  href={`tel:${data.driver_phone}`}
                  className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition"
                >
                  <PhoneCall size={20} className="text-white" />
                </a>
              </div>

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

export default NotPaid;
