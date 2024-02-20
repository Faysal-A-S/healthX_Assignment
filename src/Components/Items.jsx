import React from "react";
import { FaRegStar } from "react-icons/fa";
const Items = ({ item }) => {
  let discountPrice = (
    item.price -
    (item.price * item.discountPercentage) / 100
  ).toFixed(2);
  let rating = Math.round(item.rating);
  let star = [];
  for (let i = 0; i < 5; i++) {
    star.push(
      <FaRegStar style={{ color: `${i < rating ? "orange" : "black"}` }} />
    );
  }
  return (
    <div style={{ backgroundColor: "rgb(245 245 244)", borderRadius: ".5rem" }}>
      <div
        style={{ backgroundColor: "white", position: "relative" }}
        className="flex justify-center"
      >
        <img
          src={item.thumbnail}
          alt=""
          style={{ width: "200px", height: "200px", borderRadius: ".25rem" }}
        />
        <span
          style={{
            position: "absolute",
            padding: "3px",
            top: 5,
            left: 15,
            backgroundColor: "rgb(234 88 12)",
            borderRadius: ".25rem",
            color: "white",
            fontSize: "12px",
          }}
        >
          -{item.discountPercentage}%
        </span>
      </div>
      <div className="flex justify-center " style={{ width: "100%" }}>
        <h3>{item.title}</h3>
      </div>
      <div
        className="flex justify-between items-center"
        style={{ width: "100%" }}
      >
        <p style={{ padding: "5px" }}>{star}</p>
        <p style={{ padding: "5px" }}>
          {item.stock > 1 ? (
            <span style={{ color: "rgb(34 197 94)", fontSize: "12px" }}>
              Stock Available
            </span>
          ) : (
            <span style={{ color: "rgb(239 68 68)", fontSize: "12px" }}>
              Out of Stock
            </span>
          )}
        </p>
      </div>
      <div className="flex gap-2">
        <h2 style={{ padding: "5px", color: "rgb(14 165 233)" }}>
          ${discountPrice}
        </h2>
        <h2
          style={{
            padding: "5px",
            textDecoration: "line-through",
            color: "rgb(113 113 122)",
          }}
        >
          ${item.price}
        </h2>
      </div>
    </div>
  );
};

export default Items;
