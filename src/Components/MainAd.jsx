import React from "react";
import picture from "../images/picture.png";
const MainAd = () => {
  return (
    <div className="main-ad" style={{ height: "100%" }}>
      <div style={{ padding: "5px" }} className="grid grid-cols-2">
        <div
          className="flex flex-col items-center"
          style={{
            height: "100%",
            justifyContent: "center",

            color: "rgb(75 85 99)",
          }}
        >
          <p>
            Up to{" "}
            <span style={{ color: "rgb(59 130 246)", fontSize: "20px" }}>
              70%
            </span>{" "}
            off on Black Friday
          </p>
          <h1 style={{ color: "black" }}>
            TRENDY{" "}
            <span style={{ color: "rgb(59 130 246)", fontWeight: "bold" }}>
              FASHION
            </span>{" "}
          </h1>
          <h1 style={{ margin: "0px", color: "black" }}>COLLECTION</h1>
          <button
            className="btn"
            style={{
              marginTop: "20px",
              fontSize: "18px",
              padding: "10px",
            }}
          >
            But Now
          </button>
        </div>
        <img src={picture} alt="img" style={{ height: "100%" }} />
      </div>
    </div>
  );
};

export default MainAd;
