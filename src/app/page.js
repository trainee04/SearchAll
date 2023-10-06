"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  // const options = ["cricket", "football", "hockey"];
  // const days = ["weekdays", "weekend"];
  const [state, setState] = useState(0);
  return (
    <div>
      {/* show Radio button dynamically
      <div>
        {options.map((ele) => {
          return (
            <>
              <input type="radio" name="ele" id="options" value={ele} />
              <label>{ele}</label>
            </>
          );
        })}
      </div>
      <div>
        {days.map((day) => {
          return (
            <>
              <input type="radio" name="day" id="days" value={days} />
              <label>{day}</label>
            </>
          );
        })}
      </div> */}

      {/* <button value={state} onClick={() => setState(state + 1)}>
        Inc
      </button>
      <h1>{state}</h1>
      <button value={state} onClick={() => setState(state - 1)}>
        dec
      </button> */}
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>inc</button>
      <button onClick={() => setState(state - 1)}>dec</button>
    </div>
  );
}
