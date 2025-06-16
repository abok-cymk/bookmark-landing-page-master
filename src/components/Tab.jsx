import clsx from "clsx";
import { forwardRef } from "react";

const Tab = forwardRef(({ tab, className, setActiveTab, activeTab }, ref ) => {
const isActive = activeTab === tab;
  return (
    <button
      ref={ref}
      onClick={() => setActiveTab(tab)}
      className={clsx(
        "whitespace-nowrap px-4 py-2 transition-colors duration-200 cursor-pointer",
        isActive
          ? "underline underline-offset-[1.8rem] md:underline-offset-[2.2rem] decoration-[0.2rem] decoration-Red-400 text-Red-400 font-bold"
          : "text-Blue-950 hover:text-Red-400",
        className
      )}
    >
      {tab}
    </button>
  );
});

export default Tab;
