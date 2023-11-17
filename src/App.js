import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <div className="App min-h-screen flex items-center bg-gradient-to-br from-purple-300 to-green-400">
      <div className="max-w-3xl mx-auto">
        <div>
          <div className="relative w-max mx-auto h-12 grid grid-cols-2 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
            <button className="relative block h-10 px-6 tab rounded-full">
              <span className="text-gray-800">Users Details</span>
            </button>
            <button className="bg-green-50 relative block h-10 px-6 tab rounded-full">
              <span className="text-gray-800">Account Creation</span>
            </button>
          </div>
          <div className="mt-6 rounded-2xl bg-green-50">
            {/* <Dashboard /> */ }
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
