"use client";
import React from "react";

function Theme() {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
      }}
      className="border border-slate-300 px-2 py-1 font-semibold text-[#342c3d76] transition-all duration-300 hover:blur-[1px] dark:border-slate-700 dark:text-slate-400"
    >
      <div className="">
        <span
          className={`icon-[tabler--moon] flex size-6 self-center font-bold dark:hidden`}
        ></span>
      </div>
      <div className="border border-transparent hover:text-slate-500 dark:text-slate-300">
        <span
          className={`icon-[tabler--sun] hidden size-6 self-center font-bold dark:flex`}
        ></span>
      </div>
    </button>
  );
}

export default Theme;
