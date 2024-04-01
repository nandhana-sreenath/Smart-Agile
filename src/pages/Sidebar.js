import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faBriefcase,
  faTasks,
  faComments,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; 

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    
    const optionToRoute = {
      "Dashboard": "/",
      "Projects": "/projects",
      "Task Hub": "/taskhub",
      "Chat": "/chat",
      "Settings": "/settings",
    };

    const route = optionToRoute[option];
    if (route) {
      navigate(route); // Use navigate to change the route
    }
  
  };

  return (
    <div className="w-64 h-screen bg-teal-500 bg-opacity-5 overflow-y-auto">
      <div className="py-4 px-3 mb-4 mt-11">
        <div
          className={`flex items-center cursor-pointer ${
            selectedOption === "Dashboard"
              ? "bg-teal-600 rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Dashboard")}
        >
          <FontAwesomeIcon icon={faChartBar} className="mr-4 ml-12" />
          <span className="text-lg">Dashboard</span>
        </div>
      </div>
      <div className="py-4 px-3 mb-4">
        <div
          className={`flex items-center cursor-pointer ${
            selectedOption === "Projects"
              ? "bg-teal-600 rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Projects")}
        >
          <FontAwesomeIcon icon={faBriefcase} className="mr-4 ml-12" />
          <span className="text-lg">Projects</span>
        </div>
      </div>
      <div className="py-4 px-3 mb-4">
        <div
          className={`flex items-center cursor-pointer ${
            selectedOption === "Task Hub"
              ? "bg-teal-600 rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Task Hub")}
        >
          <FontAwesomeIcon icon={faTasks} className="mr-4 ml-12" />
          <span className="text-lg">Task Hub</span>
        </div>
      </div>
      <div className="py-4 px-3 mb-4">
        <div
          className={`flex items-center cursor-pointer ${
            selectedOption === "Chat"
              ? "bg-teal-600 rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Chat")}
        >
          <FontAwesomeIcon icon={faComments} className="mr-4 ml-12" />
          <span className="text-lg">Chat</span>
        </div>
      </div>
      <div className="py-4 px-3 mb-4">
        <div
          className={`flex items-center cursor-pointer ${
            selectedOption === "Settings"
              ? "bg-teal-600 rounded-r-lg text-white "
              : ""
          }`}
          onClick={() => handleOptionClick("Settings")}
        >
          <FontAwesomeIcon icon={faCog} className="mr-4 ml-12" />
          <span className="text-lg">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
