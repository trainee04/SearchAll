"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FilterData = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((response) => {
        setUsers(response);
        setSearch(response);
      });
  }, []);

  const filter = (e) => {
    setSearch(
      users.filter((item) => {
        return (
          item.name.toLowerCase().includes(e.target.value),
          item.username.toLowerCase().includes(e.target.value),
          item.address.city.toLowerCase().includes(e.target.value)
        );
      })
    );
  };

  return (
    <div>
      <input type="text" placeholder="Type here..." onChange={filter} />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>City</th>
          </tr>
        </thead>
        {search?.map((item, index) => (
          <tbody>
            <tr key={index}>
              <th>{item.id}</th>
              <th>{item?.name}</th>
              <th>{item?.username}</th>
              <th>{item?.address.city}</th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default FilterData;
