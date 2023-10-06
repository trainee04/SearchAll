import React from "react";

const Sum = () => {
  const input = [2, 7, 11, 4, -2];
  let sum = 0;
  return (
    <div>
      {input.map((ele) => {
        return (sum = sum + ele);
      })}
    </div>
  );
};

export default Sum;
