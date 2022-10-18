import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [text, setText] = useState("...loading");
  const incrementValue = Number(incrementAmount) || 0;

  const fetchData = async (URL) => {
    const response = await axios.get(URL);
    console.log("response:", response);
    setText(response.data.res.title);
  };

  useEffect(() => {
    fetchData("/.netlify/functions/api");
    return () => {};
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <div>{text}</div>
      </div>
    </div>
  );
}
