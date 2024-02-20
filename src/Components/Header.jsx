import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineAccountBox } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
const Header = () => {
  const options = [
    { label: "All Categories", id: 1 },
    { label: "Electronics", id: 2 },
    { label: "Kitchen", id: 3 },
    { label: "Furniture", id: 4 },
    { label: "Food", id: 5 },
    { label: "Fashion", id: 6 },
  ];
  return (
    <div className="grid grid-cols-4 " style={{ width: "100%" }}>
      <div className="items-center ">
        <h1>Minago</h1>
      </div>
      <div className="col-span-3 flex  justify-between">
        <form
          className="flex items-center"
          style={{ position: "relative", borderRadius: ".5rem", width: "100%" }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              height: "48%",
              paddingLeft: "10px",
              borderColor: "gray",
              borderRadius: ".25rem",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
            placeholder="Search for products"
          />
          <div
            className="flex items-center "
            style={{ position: "absolute", right: 1, height: "45%" }}
          >
            <select
              name=""
              id=""
              style={{ border: "none" }}
              className="custom-select"
            >
              {options.map((option) => {
                return (
                  <option value={option.label} key={option.id}>
                    {option.label}
                  </option>
                );
              })}
            </select>
            <button
              type="submit"
              style={{
                height: "100%",
                border: "none",
                borderRadius: ".25rem",
                marginRight: "2px",
                padding: "2px",
              }}
              className="btn"
            >
              <CiSearch size={20} />
            </button>
          </div>
        </form>
        <div
          className="flex justify-between items-center gap-2"
          style={{ marginLeft: "30px" }}
        >
          <div
            className="flex items-center gap-2"
            style={{ marginRight: "40px" }}
          >
            <BiRepost size={20} />
            <CiHeart size={20} />

            <div className="flex items-center" style={{ position: "relative" }}>
              <BsCartPlus size={20} />
              <span
                style={{
                  color: "white",
                  backgroundColor: "rgb(59 130 246)",
                  borderRadius: "50%",
                  padding: "2px",
                  top: -5,
                  left: 15,
                  height: "15px",
                  width: "15px",
                  position: "absolute",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                0
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <h3>Account</h3>
            <MdOutlineAccountBox
              size={40}
              style={{ color: "rgb(22, 114, 233)" }}
            />
            <h3>$20.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
