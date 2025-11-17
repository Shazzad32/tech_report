// "use client";
// import { useState } from "react";

// export default function LogInPage({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // password must be reference + "1234"
//     if (password !== username + "1234") {
//       alert("Invalid Username or Password");
//       return;
//     }

//     onLogin(username); // send reference name to Main component
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div className="w-full max-w-md rounded-2xl p-8 shadow-2xl bg-white">
//         <h1 className="mb-6 text-center text-2xl font-bold text-green-600">
//           LOGIN PAGE
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium">Reference Name</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value.toUpperCase())}
//               placeholder="Enter reference (e.g., TAHIR)"
//               className="w-full rounded-xl border px-4 py-2"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Reference + 1234"
//               className="w-full rounded-xl border px-4 py-2"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-xl bg-green-600 py-2.5 text-white font-semibold"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { useReference } from "../context/ReferenceContext";

const LogInPage = () => {
  const { saveReference } = useReference();
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (!input) return;
    saveReference(input.toUpperCase());
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl w-80">
        <h1 className="text-center text-white text-2xl font-bold mb-6">
          Reference Login
        </h1>

        <input
          className="w-full px-4 py-2 rounded-lg text-black mb-4"
          placeholder="Enter reference"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LogInPage;
