// "use client";
// import React from "react";
// const AssignDevice = ({ userInfo }) => {
//   const paidDevice = userInfo.filter(
//     (item) => item.reference === "SHAKIL" && item.uid !== null
//   );
//   console.log("report", paidDevice);
//   return (
//     <div className="w-full h-[93vh] overflow-y-scroll">
//       {" "}
//       <p>Paid Device : {paidDevice.length}</p>{" "}
//       {paidDevice.map((data, i) => (
//         <div key={i} className="text-white flex gap-6 ">
//           {" "}
//           <p>{data.id}</p>
//           <p>{data.registration_number}</p> <p>{data.service_charge}</p>{" "}
//         </div>
//       ))}{" "}
//     </div>
//   );
// };
// export default AssignDevice;

// "use client";
// import React from "react";

// const Paid = ({ userInfo }) => {
//   const paidDevice = userInfo.filter(
//     (item) => item.reference === "SHAKIL" && item.uid !== null
//   );
//   console.log("report", paidDevice);
//   return (
//     <div className="w-full h-[93vh] overflow-y-scroll">
//       {" "}
//       <p>Paid Device : {paidDevice.length}</p>{" "}
//       {paidDevice.map((data, i) => (
//         <div key={i} className="text-white flex gap-6 ">
//           {" "}
//           <p>{data.id}</p>
//           <p>{data.registration_number}</p> <p>{data.service_charge}</p>{" "}
//         </div>
//       ))}{" "}
//     </div>
//   );
// };

// export default Paid;
"use client";
import React from "react";

const Paid = ({ userInfo }) => {
  const paidDevice = userInfo.filter(
    (item) => item.reference === "SHAKIL" && item.uid !== null
  );

  return (
    <div className="w-full h-[93vh] overflow-y-scroll p-4 bg-[#0d0d0d]">
      <h2 className="text-xl font-semibold text-white mb-4">
        Paid Devices: {paidDevice.length}
      </h2>

      {/* Responsive Grid: 1 → 2 → 3 → 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {paidDevice.map((data, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-xl transition-all text-white"
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
  );
};

export default Paid;
