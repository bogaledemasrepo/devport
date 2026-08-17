import React from "react";

function Icon({ className }: { className: string }) {
  return (
    <div className="border border-transparent transition-all duration-300 hover:border-slate-500 hover:text-slate-500 hover:blur-[1px] dark:text-slate-300">
      <span
        className={`${className} icon-[tabler--brand-github] flex size-8 self-center font-bold`}
      ></span>
    </div>
  );
}

export default Icon;
