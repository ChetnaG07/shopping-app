import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const Ratings = ({ value }) => {
  const [star, setStar] = useState([]);

  useEffect(() => {
    setStar(Math.round(value));
  }, [value]);
  console.log(star, value);
  return (
    <>
      {[...Array(star)].map((star, index) => (
        <li key={index}>
          <AiFillStar />
        </li>
      ))}
    </>
  );
};

export default Ratings;
