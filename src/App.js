import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Taskhub from "./pages/Taskhub";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/taskhub" element={<Taskhub/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App;
