"use client";
import React, { useState } from "react";
import { Home, BarChart2, User, Settings, Menu, LogOut } from "lucide-react";
import LogInPage from "./LogInPage";
import NotPaid from "./NotPaid";
import Paid from "./Paid";
import TotalConnection from "./TotalConnection";

const Main = ({ userinfo }) => {
  const [activePage, setActivePage] = useState("home");

  const userInfo = userinfo;

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <div className="p-6 text-center text-white text-xl">
            <LogInPage />
          </div>
        );
      case "total":
        return (
          <div className="p-6 text-center text-white text-xl">
            <TotalConnection userInfo={userInfo} />
          </div>
        );
      case "paid":
        return (
          <div className="p-6 text-center text-white text-xl">
            <Paid userInfo={userInfo} />
          </div>
        );
      case "notpaid":
        return (
          <div className="p-6 text-center text-white text-xl">
            <NotPaid userInfo={userInfo} />
          </div>
        );

      case "settings":
        return (
          <div className="p-6 text-center text-white text-xl">
            ⚙️ Settings Page
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-[100vh] w-full bg-green-200">
      <div className="hidden h-full w-60 flex-col bg-green-600 p-4 text-white md:flex">
        <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActivePage("home")}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
              activePage === "home" ? "bg-green-800" : "hover:bg-green-700"
            }`}
          >
            <Home size={18} /> Home
          </button>
          <button
            onClick={() => setActivePage("total")}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
              activePage === "total" ? "bg-green-800" : "hover:bg-green-700"
            }`}
          >
            <BarChart2 size={18} /> Total Connections
          </button>
          <button
            onClick={() => setActivePage("paid")}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
              activePage === "paid" ? "bg-green-800" : "hover:bg-green-700"
            }`}
          >
            <BarChart2 size={18} /> Paid
          </button>
          <button
            onClick={() => setActivePage("notpaid")}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
              activePage === "notpaid" ? "bg-green-800" : "hover:bg-green-700"
            }`}
          >
            <User size={18} /> Not Paid
          </button>
          <button
            onClick={() => setActivePage("settings")}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
              activePage === "settings" ? "bg-green-800" : "hover:bg-green-700"
            }`}
          >
            <Settings size={18} /> Settings
          </button>
        </nav>

        <div className="mt-auto">
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-700">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex h-14 items-center justify-between bg-green-500 px-4 text-white md:hidden">
          <div className="flex items-center gap-2">
            <Menu />
            <span className="text-lg font-semibold">Dashboard</span>
          </div>
        </div>

        <div className="flex-1 bg-gray-400">{renderPage()}</div>

        <div className="flex h-14 items-center justify-around bg-green-100 shadow-inner md:hidden">
          <button
            onClick={() => setActivePage("home")}
            className={`flex flex-col items-center ${
              activePage === "home" ? "text-green-600" : "text-gray-500"
            }`}
          >
            <Home size={22} />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => setActivePage("total")}
            className={`flex flex-col items-center ${
              activePage === "total" ? "text-green-600" : "text-gray-500"
            }`}
          >
            <BarChart2 size={22} />
            <span className="text-xs">Total Connections</span>
          </button>
          <button
            onClick={() => setActivePage("paid")}
            className={`flex flex-col items-center ${
              activePage === "paid" ? "text-green-600" : "text-gray-500"
            }`}
          >
            <BarChart2 size={22} />
            <span className="text-xs">Paid</span>
          </button>

          <button
            onClick={() => setActivePage("notpaid")}
            className={`flex flex-col items-center ${
              activePage === "notpaid" ? "text-green-600" : "text-gray-500"
            }`}
          >
            <User size={22} />
            <span className="text-xs">Not Paid</span>
          </button>

          <button
            onClick={() => setActivePage("settings")}
            className={`flex flex-col items-center ${
              activePage === "settings" ? "text-green-600" : "text-gray-500"
            }`}
          >
            <Settings size={22} />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
