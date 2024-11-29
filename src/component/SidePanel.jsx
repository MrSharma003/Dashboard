import React from "react";

export default function SidePanel({ tabs, selectedTab, setSelectedTab }) {
  // console.log(selectedTab)
  return (
    <div className="absolute top-0 left-0 z-20 flex flex-col justify-start bg-midnight h-screen py-2 px-3 rounded-r-3xl">
      <div className="relative top-20 ">
        {tabs.map((tab, index) => (
          <div key={tab.value}>
            <button
              className={`${
                selectedTab === tab.value ? "!bg-blue-600 !text-white" : ""
              } rounded-md px-8 py-2 my-3 text-sm text-steelgray`}
              onClick={() => setSelectedTab(tab.title)}
            >
              <div className="flex relative -left-5 gap-2 px-2">
                {tab.icon}
                {tab.title}
              </div>
            </button>

            {index === 3 && <div className="h-[2px] bg-gray-400 my-2"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
