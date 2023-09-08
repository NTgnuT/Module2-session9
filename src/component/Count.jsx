import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_decrease, act_increase } from "../actions/actionTypes";

export default function Count() {
  // Lấy dữu liệu từ store về
  const count = useSelector((c) => c.count); // lấy ở trong reducer file count.js
  const dispatch = useDispatch(); // dispatch dùng để gửi đi hành động
  // B1: Gửi sự kiện lên reducer
  const handleIncrese = () => {
    dispatch(act_increase()); // import act_increase từ actionType.jsx
  };

  const handleDecrease = () => {
    dispatch(act_decrease());
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrese}>Count</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
