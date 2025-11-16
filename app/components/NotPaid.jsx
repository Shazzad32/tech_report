// "use client";
// import React from "react";

// const NotPaid = ({ userInfo }) => {
//   const notpaidDevice = userInfo.filter(
//     (item) => item.reference === "SHAKIL" && item.uid === null
//   );

//   // const profitDevices = retailDevice
//   //   .filter((item) => item.device_price > 2300)
//   //   .map((item) => ({
//   //     ...item,
//   //     profit: item.device_price * 0.3,
//   //   }));
//   // const totalProfit = profitDevices.reduce((sum, item) => sum + item.profit, 0);

//   return (
//     <div className="w-full h-[93vh] overflow-y-scroll ">
//       <p>Not Paid Device : {notpaidDevice.length}</p>
//       {notpaidDevice.map((d, i) => (
//         <div key={i} className="text-white flex gap-4">
//           <p>{d.id}</p>
//           <p>{d.registration_number}</p>
//           <p>{d.service_charge}</p>
//           <p>{d.driver_phone}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NotPaid;
"use client";
import React from "react";
import { PhoneCall } from "lucide-react";

const NotPaid = ({ userInfo }) => {
  const notPaid = userInfo.filter(
    (item) => item.reference === "SHAKIL" && item.uid === null
  );

  return (
    <div className="w-full h-[93vh] overflow-y-scroll p-4 bg-[#0d0d0d]">
      <h2 className="text-xl font-semibold text-white mb-4">
        Paid Devices: {notPaid.length}
      </h2>

      {/* Responsive Grid: 1 → 2 → 3 → 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {notPaid.map((data, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-xl transition-all text-white"
          >
            {/* Header */}
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
  );
};

export default NotPaid;
