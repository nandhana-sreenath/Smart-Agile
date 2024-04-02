import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Employee/pages/Navbar";
import Sidebar from "./Employee/pages/Sidebaremp";
import Dashboard from "./Employee/pages/Dashboard";
import Projects from "./Employee/pages/Projects";
import TaskHub from "./Employee/pages/Taskhub";
import Chat from "./Employee/pages/Chat";
import Settings from "./Employee/pages/Settings";

function App() {
  return (
   
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-grow overflow-hidden">
          <Sidebar />
          <main className="flex-grow overflow-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tasks" element={<TaskHub />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/settings" element={<Settings />} />
              {/* Define more routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    
  );
}

export default App;
