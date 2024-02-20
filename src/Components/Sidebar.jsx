import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const Sidebar = () => {
  const btnlist = [
    { name: "Fashion Collection", link: "/" },
    { name: "Electronics Item", link: "/" },
    { name: "Home Appliance", link: "/" },
    { name: "Kitchen Item", link: "/" },
    { name: "Furniture", link: "/" },
    { name: "Food", link: "/" },
    { name: "Gadgets", link: "/" },
    { name: "Toys and Games", link: "/" },
    { name: "Health & beauty", link: "/" },
  ];
  return (
    <div className="sidebar">
      <div
        style={{ padding: "5px", width: "100%" }}
        className="flex flex-col divide-y"
      >
        {btnlist.map((btn) => {
          return (
            <div style={{ width: "100%" }} key={btn.name}>
              <button className="sidebar-btn flex items-center">
                <p>{btn.name}</p>
                <MdKeyboardArrowRight
                  size={20}
                  style={{ color: "rgb(212, 212, 212)", fontWeight: "bold" }}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
