import "./App.css";
import { Tabs } from "./type";
import { useState } from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import SidePanel from "./component/SidePanel";
import { GoArrowSwitch } from "react-icons/go";
import { FaGgCircle, FaHandsHelping } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { RiFolderSharedLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import Assets from "./component/Assets";
import Jobs from "./component/Jobs";
import Render from "./component/Render";
import Reports from "./component/Reports";
import Help from "./component/Help";
import Settings from "./component/Settings";
import Support from "./component/Support";
import Feedback from "./component/Feedback";

function App() {
  const [selectedTab, setSelectedTab] = useState(Tabs.DAHSBOARD);
  const tabs = [
    {
      title: "Dashboard",
      value: Tabs.DAHSBOARD,
      show: selectedTab === Tabs.DAHSBOARD,
      component: Home,
      icon: <RxDashboard size={18} />,
    },
    {
      title: "Assets",
      value: Tabs.ASSETS,
      show: selectedTab === Tabs.ASSETS,
      component: Assets,
      icon: <RiFolderSharedLine size={18} />,
    },
    {
      title: "Jobs",
      value: Tabs.JOBS,
      show: selectedTab === Tabs.JOBS,
      component: Jobs,
      icon: <FaGgCircle size={18} />,
    },
    {
      title: "Render",
      value: Tabs.RENDER,
      show: selectedTab === Tabs.RENDER,
      component: Render,
      icon: <GoArrowSwitch size={18} />,
    },
    {
      title: "Reports",
      value: Tabs.REPORTS,
      show: selectedTab === Tabs.REPORTS,
      component: Reports,
      icon: <TbReportSearch size={18} />,
    },
    {
      title: "Help",
      value: Tabs.HELP,
      show: selectedTab === Tabs.HELP,
      component: Help,
      icon: <FaHandsHelping size={18} />,
    },
    {
      title: "Settings",
      value: Tabs.SETTINGS,
      show: selectedTab === Tabs.SETTINGS,
      component: Settings,
      icon: <IoIosSettings size={18} />,
    },
    {
      title: "Support",
      value: Tabs.SUPPORT,
      show: selectedTab === Tabs.SUPPORT,
      component: Support,
      icon: <BiSupport size={18} />,
    },
    {
      title: "Feedback",
      value: Tabs.FEEDBACK,
      show: selectedTab === Tabs.FEEDBACK,
      component: Feedback,
      icon: <MdFeedback size={18} />,
    },
  ];

  return (
    <div className="w-full h-screen flex overflow-hidden bg-slate-100">
      <SidePanel
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-1 relative left-60 ">
          {/* <Home /> */}
          {tabs.map((tab) => {
            if (tab.show) {
              return <tab.component key={tab.title} />;
            }
            return null; // Explicitly return null for hidden tabs
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
