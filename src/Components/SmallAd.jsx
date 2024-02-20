import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
const SmallAd = ({ type, saleText, sale, logo, buttonText, img, color }) => {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          backgroundColor: `${color}`,
          borderRadius: ".25rem",
          height: "100%",
        }}
        className="grid grid-cols-2 items-center"
      >
        <div>
          <h4 style={{ color: "rgb(120 113 108)" }}>{type}</h4>
          <h1 style={{ lineHeight: "16px" }}>
            {sale} {saleText}
          </h1>
          <div className="flex items-center gap-1">
            {logo && (
              <AiOutlineShopping
                style={{ color: " rgb(251 146 60)", fontWeight: "bold" }}
              />
            )}
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "rgb(251 146 60)",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
        <img src={img} alt="img" style={{ height: "150px", width: "150px" }} />
      </div>
    </div>
  );
};

export default SmallAd;
