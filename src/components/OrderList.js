import React, { useState, useEffect } from "react";
import { orders } from "../utils";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(orders);
  }, []);

  return (
    <>
      {list.map((item) => {
        return <OrderItem key={item.id} item={item} />;
      })}
    </>
  );
};

export default OrderList;
