// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChartBar,
//   faBriefcase,
//   faTasks,
//   faComments,
//   faCog,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//   const [selectedOption, setSelectedOption] = useState("Dashboard");

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);

//   };

//   return (
//     <div className="w-64 h-screen bg-teal-500 bg-opacity-5 overflow-y-auto">
//       <div className="py-4 px-3 mb-4 mt-11">
//         <div
//           className={`flex items-center cursor-pointer ${
//             selectedOption === "Dashboard"
//               ? "bg-teal-600 rounded-r-lg text-white"
//               : ""
//           }`}
//           onClick={() => handleOptionClick("Dashboard")}
//         >
//           <FontAwesomeIcon icon={faChartBar} className="mr-4 ml-12" />
//           <span className="text-lg">Dashboard</span>
//         </div>
//       </div>
//       <div className="py-4 px-3 mb-4">
//         <div
//           className={`flex items-center cursor-pointer ${
//             selectedOption === "Projects"
//               ? "bg-teal-600 rounded-r-lg text-white"
//               : ""
//           }`}
//           onClick={() => handleOptionClick("Projects")}
//         >
//           <FontAwesomeIcon icon={faBriefcase} className="mr-4 ml-12" />
//           <span className="text-lg">Projects</span>
//         </div>
//       </div>
//       <div className="py-4 px-3 mb-4">
//         <div
//           className={`flex items-center cursor-pointer ${
//             selectedOption === "Task Hub"
//               ? "bg-teal-600 rounded-r-lg text-white"
//               : ""
//           }`}
//           onClick={() => handleOptionClick("Task Hub")}
//         >
//           <FontAwesomeIcon icon={faTasks} className="mr-4 ml-12" />
//           <span className="text-lg">Task Hub</span>
//         </div>
//       </div>
//       <div className="py-4 px-3 mb-4">
//         <div
//           className={`flex items-center cursor-pointer ${
//             selectedOption === "Chat"
//               ? "bg-teal-600 rounded-r-lg text-white"
//               : ""
//           }`}
//           onClick={() => handleOptionClick("Chat")}
//         >
//           <FontAwesomeIcon icon={faComments} className="mr-4 ml-12" />
//           <span className="text-lg">Chat</span>
//         </div>
//       </div>
//       <div className="py-4 px-3 mb-4">
//         <div
//           className={`flex items-center cursor-pointer ${
//             selectedOption === "Settings"
//               ? "bg-teal-600 rounded-r-lg text-white "
//               : ""
//           }`}
//           onClick={() => handleOptionClick("Settings")}
//         >
//           <FontAwesomeIcon icon={faCog} className="mr-4 ml-12" />
//           <span className="text-lg">Settings</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faBriefcase,
  faTasks,
  faComments,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: faChartBar, path: "/dashboard" },
    { name: "Projects", icon: faBriefcase, path: "/projects" },
    { name: "Task Hub", icon: faTasks, path: "/tasks" },
    { name: "Chat", icon: faComments, path: "/chat" },
    { name: "Settings", icon: faCog, path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-[#4D989D] bg-opacity-20 font-regular text-white flex flex-col pt-10 pr-5">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center p-2 my-2 transition-colors duration-0 justify-start ${
              isActive ? "bg-[#4D989D] rounded-r-full" : "text-black "
            }`
          }
          onClick={() => setActive(item.name)}
        >
          <div className="pl-9">
            <FontAwesomeIcon icon={item.icon} className="ml-1 mr-3 text-lg" />
            <span className=" pr-1 ml-4">{item.name}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
