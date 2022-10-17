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
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  const fetchData = async () => {
    const response = await axios.get(".netlify/functions/api");
    console.log("response:", response);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <div>place holder text</div>
      </div>
    </div>
  );
}
