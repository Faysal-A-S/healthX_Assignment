import React from "react";
import Sidebar from "../Components/Sidebar";
import MainAd from "../Components/MainAd";
import SmallAd from "../Components/SmallAd";
import airpod from "../images/airpod.png";
import ring from "../images/ring.png";
import chocolate from "../images/chocolate.png";
import chair from "../images/chair.png";
import Perks from "../Components/Perks";
import FeaturedItems from "../Components/FeaturedItems";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
const Home = () => {
  const smallAddList = [
    {
      type: "Gadget Store",
      Sale: "30%",
      saleText: "Sale",
      buttonText: "See All",
      logo: true,
      color: "rgb(191 219 254)",
      img: `${airpod}`,
    },
    {
      type: "Bundle Package",
      Sale: "30%",
      saleText: "Sale",
      buttonText: "Buy Now",
      logo: false,
      color: "rgb(254 215 170)",
      img: `${chocolate}`,
    },
    {
      type: "Valentines Offer",
      Sale: "30%",
      saleText: "Sale",
      buttonText: "Buy Now",
      logo: true,
      img: `${ring}`,
      color: "rgb(191 219 254)",
    },
    {
      type: "Relax Chair",
      Sale: "New Arrival",
      buttonText: "Buy Now",
      logo: true,
      img: `${chair}`,
      color: "rgb(251 207 232)",
    },
  ];
  const perkList = [
    {
      logo: <MdLocalShipping size={60} />,
      mainText: "Free Shipping",
      smallText: "Minimum order $90",
    },
    {
      logo: <MdOutlineSupportAgent size={60} />,
      mainText: "24/7 Support",
      smallText: "Contact us 24 Hours",
    },
    {
      logo: <MdOutlinePriceCheck size={60} />,
      mainText: "Best Prices & offers",
      smallText: "Order $100 or more",
    },
    {
      logo: <GiReturnArrow size={60} />,
      mainText: "Easy Returns",
      smallText: "Within 30 Days",
    },
  ];
  return (
    <div>
      <div style={{ marginTop: "15px" }} className="grid grid-cols-4 gap-2">
        <Sidebar />
        <div className="col-span-3" style={{ height: "100%" }}>
          <MainAd />
        </div>
      </div>
      <div style={{ marginTop: "15px" }} className="grid grid-cols-4  gap-2">
        {smallAddList.map((ad) => {
          return (
            <SmallAd
              type={ad.type}
              key={ad.type}
              sale={ad.Sale}
              logo={ad.logo}
              buttonText={ad.buttonText}
              img={ad.img}
              color={ad.color}
              saleText={ad.saleText}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-4 gap-2" style={{ marginTop: "50px" }}>
        <div
          style={{ height: "100%", marginTop: "10px" }}
          className="flex flex-col gap-2"
        >
          {perkList.map((perk) => {
            return (
              <Perks
                key={perk.mainText}
                Main={perk.mainText}
                small={perk.smallText}
                logo={perk.logo}
              />
            );
          })}
        </div>
        <div className="col-span-3">
          <FeaturedItems />
        </div>
      </div>
    </div>
  );
};

export default Home;
