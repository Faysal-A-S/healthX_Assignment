import React, { useState } from "react";
import { useProductsQuery } from "../features/Products/productApi";
import spinner from "../images/Spinner.svg";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Items from "./Items";
const FeaturedItems = () => {
  const { data, isLoading, isError } = useProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  let content = null;
  const indexOfLastItem = currentPage * 4;
  const indexOfFirstItem = indexOfLastItem - 4;
  if (isLoading) {
    content = (
      <div
        className="flex  justify-center items-center"
        style={{ width: "100%", height: "100%" }}
      >
        <img src={spinner} alt="loader" />
      </div>
    );
  }
  if (isError) {
    content = (
      <div
        className="flex  justify-center items-center"
        style={{ color: "red" }}
      >
        Some Error Occured, Please Reload!
      </div>
    );
  }
  if (!isError && !isLoading) {
    const currentItems = data?.products?.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    const totalPage = Math.ceil(data?.products?.length / 4);
    //rgb(120 113 108)
    content = (
      <div style={{ height: "100%" }}>
        <div
          className="flex justify-between items-start"
          style={{ padding: "10px" }}
        >
          <div>
            <h1 style={{ lineHeight: "0px" }}>Featured Item</h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: `${
                  currentPage > 1 ? "rgb(14 165 233)" : "rgb(120 113 108)"
                }`,
              }}
            >
              <BiLeftArrowAlt size={20} />
            </button>
            <button
              onClick={() => {
                if (currentPage < totalPage) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: `${
                  currentPage < totalPage
                    ? "rgb(14 165 233)"
                    : "rgb(120 113 108)"
                }`,
              }}
            >
              <BiRightArrowAlt size={20} />
            </button>
          </div>
        </div>
        <div
          style={{ marginTop: "15px", height: "84%" }}
          className="grid grid-cols-4 gap-2"
        >
          {currentItems.map((item) => {
            return <Items item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
  return <div style={{ width: "100%", height: "100%" }}>{content}</div>;
};

export default FeaturedItems;
