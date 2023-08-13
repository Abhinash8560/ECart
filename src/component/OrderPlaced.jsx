import React, { useState } from "react";
import logo1 from "../assets/order.gif";
import logo2 from "../assets/done.gif";

const OrderPlaced = () => {
  const [data, setData] = useState({
    img: logo2,
    text: "Your Order has been places Successfully!",
  });

  setTimeout(() => {
    setData({ img: logo1, text: "We will  deliver your products soon!" });
  }, 5000);
  return (
    <div className="orderPlaced d-flex  flex-column justify-content-center align-items-center ">
      <img src={data.img} style={{ height: "80%" }} alt="Empty Cart"></img>
      <h5>Thank you for Shopping.</h5>
      <h2 style={{ padding: 10 }}>{data.text}</h2>
    </div>
  );
};

export default OrderPlaced;