import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./index.css"
import { render } from "@testing-library/react";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      <div className="mx-auto">
        <div className="relative w-max mx-auto h-12 grid grid-cols-2 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
          <button
            className={ `${showLogin ? "" : "bg-green-50"} relative block h-10 px-6 tab rounded-full` }
            onClick={ () => setShowLogin(false) }
          >
            <span className="text-gray-800">Users Details</span>
          </button>
          <button
            className={ `${showLogin ? "bg-green-50" : ""} relative block h-10 px-6 tab rounded-full` }
            onClick={ () => setShowLogin(true) }
          >
            <span className="text-gray-800">Account Creation</span>
          </button>
        </div>
        <div className="mt-6 rounded-2xl bg-green-50">
          { showLogin ?
            <Login />
            :
            <Dashboard />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
