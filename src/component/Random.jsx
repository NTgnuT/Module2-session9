import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_random } from "../actions/actionTypes";

export default function Random() {
  const dispatch = useDispatch(); // dispatch dùng để gửi đi hành động
  const random = useSelector((r) => r.random); // lấy ở trong reducer file count.js

  const handleRandom = () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    dispatch(act_random(randomNumber));
  };
  return (
    <div>
      <h2>Danh sách random: {JSON.stringify(random)}</h2>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
