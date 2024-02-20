import React from "react";
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <nav
      className="navbar "
      style={{
        width: "100%",
        backgroundColor: "rgb(59 130 246)",
        color: "white",
      }}
    >
      <div style={{ padding: "5px" }} className="flex grow">
        <div className="flex items-center">
          <button
            style={{
              backgroundColor: "rgb(59 130 246)",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
            className="flex items-center gap-1"
          >
            <IoIosMenu size={20} />
            <p style={{ display: "inline" }}>Browse Categories</p>
          </button>
        </div>
        <div
          className="flex justify-between gap-2 flex-grap"
          style={{ width: "100%", justifyContent: "space-evenly" }}
        >
          <button className="btn-nav">Home</button>
          <button className="btn-nav">Products</button>
          <button className="btn-nav">Categories</button>
          <button className="btn-nav">Pages</button>
          <button className="btn-nav">Campaign</button>
          <button className="btn-nav">Offer</button>
          <button className="btn-nav">Blog</button>
          <button className="btn-nav">Review</button>
          <button className="btn-nav">Flash Sale</button>
          <button className="btn-nav">Contact us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
