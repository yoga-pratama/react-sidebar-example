import { useState } from "react";
import reactLogo from "./assets/react.svg";
import dashboardLogo from "./assets/dashboard.svg";
import inboxLogo from "./assets/inbox.svg";
import accountLogo from "./assets/account.svg";
import scheduleLogo from "./assets/schedule.svg";
import searchLogo from "./assets/search.svg";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", id: "dashboard", src: dashboardLogo },
    { title: "Inbox", id: "inbox", src: inboxLogo },
    { title: "Account", id: "account", src: accountLogo, gap: true },
    { title: "Schedule", id: "schedule", src: scheduleLogo },
    { title: "Search", id: "search", src: searchLogo, gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-70" : "w-20"
        } h-screen p-5 pt-8 bg-dark-purple relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`bg-white absolute cursor-pointer 
                      -right-3 top-10 w-6 border border-black rounded-full
                      ${!open && "rotate-[180deg]"}`}
          onClick={() => setOpen(!open)}
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex p-2 gap-x-4 items-center">
          <img
            src={reactLogo}
            alt=""
            className={`cursor-pointer w-6 h-6 rounded-full duration-500
                    ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl 
               duration-300 ${!open && "scale-0"}`}
          >
            Designer
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((menu, idx) => (
            <li
              key={idx}
              className={`text-gray-300 text-sm flex items-center gap-x-4 
                      cursor-pointer p-2 hover:bg-light-white 
                      rounded-md ${menu.gap ? "mt-9" : "mt-2"}
                      ${idx === 0 && "bg-light-white"}`}
            >
              <img className="" src={menu.src}></img>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        Home Page
      </div>
    </div>
  );
}

export default App;
