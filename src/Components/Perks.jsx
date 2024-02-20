import React from "react";

const Perks = ({ logo, Main, small }) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: ".25rem",
        border: "1px solid rgb(212, 212, 212)",
      }}
    >
      <div
        style={{ width: "100%", padding: "10px" }}
        className="grid grid-cols-3 gap-2 items-center"
      >
        <div style={{ justifySelf: "end", color: "rgb(14 165 233)" }}>
          {" "}
          {logo}
        </div>
        <div className="col-span-2">
          <h3 style={{ lineHeight: "8px" }}>{Main}</h3>
          <p style={{ fontSize: "12px", color: "rgb(120 113 108)" }}>{small}</p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
