import Employe from "./employe";
import EditDetail from "./editDetail";
import {
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
  UserGroupIcon,
  CalendarIcon,
  UserCircleIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";




export default function Attendance() {

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">Admin Panel</h1>
          <BellIcon className="h-6 w-6" />
        </div>
        <div className="flex flex-col items-center space-y-3 px-4 py-5">
          <HomeIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Home</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 px-4 py-5">
          <UserGroupIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Employees</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 px-4 py-5">
          <CalendarIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Attendance & leaves</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 px-4 py-5">
          <CalendarIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Performance</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 px-4 py-5 ">
          <UserCircleIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Account</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 px-4 py-5 ">
          <CogIcon className="h-6 w-6" />
          <h2 className="text-sm font-medium">Settings</h2>
        </div>
        <div className="flex flex-col items-center space-y-3 px-4 py-5">
          <LogoutIcon className="h-6 w-6" />
          <button className="text-sm font-medium">
            Sign Out
          </button>
        </div>
      </div>
       {/* <Employe/> */}
       <EditDetail/>
    </div>
    
  );
}
