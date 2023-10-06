"use client";

import React from "react";
import { useState } from "react";

function Dropdown() {
  const [country, setCountry] = useState("");

  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pakistan", value: "PAK", cities: ["karachi", "Lahore"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "chittagong"] },
  ];

  console.log(countries.cities);
  const filteredData = countries?.find((e) => {
    return e.name == country;
  });
  const citiesData = filteredData.cities.map((e) => {
    console.log(e);
  });
  // console.log(country);

  console.log(filteredData, "filteredData");

  return (
    <div>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        {countries.map((ele, index) => {
          return <option value={ele.name}>{ele.name}</option>;
        })}
      </select>
      <select value={country}>{/* {countries.filter} */}</select>
    </div>
  );
}

export default Dropdown;
