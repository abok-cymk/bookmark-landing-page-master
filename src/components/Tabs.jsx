import { useState } from "react";
import Tab from "./Tab";
import SimpleBookmarking from "./SimpleBookmarking";
import SpeedySearching from "./SpeedySearching";
import EasySharing from "./EasySharing";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Simple Bookmarking")
  return (
    <div className="mt-8 mb-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between max-w-2xl mx-auto pb-6 md:border-b-1 border-gray-500/30 md:mb-10">
        <Tab tab="Simple Bookmarking" setActiveTab={setActiveTab} activeTab={activeTab} className="max-sm:py-6 max-sm:border-b border-gray-500/30"/>
        <Tab tab="Speedy Searching" setActiveTab={setActiveTab} activeTab={activeTab} className="max-sm:py-6 max-sm:border-b border-gray-500/30"/>
        <Tab tab="Easy Sharing" setActiveTab={setActiveTab} activeTab={activeTab} className="max-sm:py-6 max-sm:border-b border-gray-500/30"/>
      </div>
      {activeTab === "Simple Bookmarking" && <SimpleBookmarking />}

      {activeTab === "Speedy Searching" && <SpeedySearching />}

      {activeTab === "Easy Sharing" && <EasySharing />}
    </div>
  );
}

export default Tabs;
