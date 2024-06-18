import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';

export default function BottomNav() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navItems = [
    { icon: <HomeIcon />, label: "Home", path: "/" },
    { icon: <ConfirmationNumberIcon />, label: "Ticket", path: "/tickets" },
    { icon: <ExploreIcon />, label: "Explore", path: "/explore" },
    { icon: <AccountCircleIcon />, label: "Account", path: "/accounts" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-fbg">
      <div className="grid grid-cols-4 gap-4 border-t border-gray-700">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-center flex justify-center pb-2 pt-3 cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <div>
              <div
                className={`w-16 transition ease-in-out duration-300 h-8 rounded-2xl flex justify-center items-center ${
                  selectedIndex === index ? "bg-slate-700" : ""
                }`}
              >
                <div
                  className={`${
                    selectedIndex === index ? "text-slate-200" : "text-white"
                  }`}
                >
                  {item.icon}
                </div>
              </div>
              <div className="text-[12px] text-white">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
