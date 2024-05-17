import React, { useState } from "react";
import { Menu } from "antd";
import "../scss/index.scss";
import user3 from "../assets/icons/3 User.svg";
import activity from "../assets/icons/Activity.svg";
import category from "../assets/icons/Category.svg";
import graph from "../assets/icons/Graph.svg";
import chat from "../assets/icons/Chat.svg";
import buy from "../assets/icons/Buy.svg";
import discount from "../assets/icons/Discount.svg";
import image from "../assets/icons/Image.svg";
import infoCircle from "../assets/icons/Info Circle.svg";
import paper from "../assets/icons/Paper.svg";
import message from "../assets/icons/Message.svg";
import profile from "../assets/icons/Profile.svg";
import setting from "../assets/icons/Setting.svg";
import star from "../assets/icons/Star.svg";
import swap from "../assets/icons/Swap.svg";
import tickSquare from "../assets/icons/Tick Square.svg";
import ticket from "../assets/icons/Ticket.svg";
import wallet from "../assets/icons/Wallet.svg";
import document from "../assets/icons/Document.svg";

const sliderItems = [
  { name: "Dashboard", icon: category, key: 1, active: false },
  { name: "Service Jobs", icon: activity, key: 2, active: false },
  { name: "Invoices", icon: document, key: 3, active: false },
  { name: "Customers", icon: buy, key: 4, active: false },
  { name: "Products", icon: star, key: 5, active: false },
  { name: "Offered Services", icon: discount, key: 6, active: false },
  { name: "Parts", icon: ticket, key: 7, active: false },
  { name: "Enquiries", icon: infoCircle, key: 8, active: false },
  { name: "Users", icon: user3, key: 9, active: false },
  { name: "Permissions", icon: tickSquare, key: 10, active: false },
  { name: "Roles", icon: profile, key: 11, active: false },
  { name: "Email Templates", icon: message, key: 12, active: false },
  { name: "PDF Templates", icon: paper, key: 13, active: false },
  { name: "SMS Templates", icon: chat, key: 14, active: false },
  { name: "Theming", icon: image, key: 15, active: false },
  { name: "Payment Gateways", icon: wallet, key: 16, active: false },
  { name: "Backup", icon: swap, key: 17, active: false },
  { name: "Configurations", icon: graph, key: 18, active: false },
  { name: "Settings", icon: setting, key: 19, active: false },
];

function getCity(x) {
  const items = x.map((data) => {
    return {
      key: data.key,
      icon: (
        <div>
          <div
            className="recBar"
            style={{ display: `${!data.active ? "none" : ""}` }}
          ></div>
          <div className={`${data.active ? "menuIcon" : ""}`}>
            <img src={data.icon} alt="" />
          </div>
        </div>
      ),
      label: <p className={`${data.active ? "menuLabel" : ""}`}>{data.name}</p>,
    };
  });
  return items;
}

export default function SliderContent() {
  const [items, setItems] = useState(sliderItems);
  const itemsData = getCity(items);

  function handleMenu(e) {
    const updatedSliderItems = sliderItems.map((item) => {
      if (item.key === Number(e.key)) {
        return { ...item, active: item.key === Number(e.key) ? true : false };
      }

      return item;
    });
    setItems(updatedSliderItems);
  }

  return (
    <Menu
      mode="inline"
      style={{
        height: "100%",
        borderRight: 0,
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
      items={itemsData}
      onSelect={(e) => handleMenu(e)}
    />
  );
}
