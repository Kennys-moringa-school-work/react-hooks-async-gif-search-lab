import React from "react";

const GifList = ({ data }) => {
  return (
    <div>
      {data.map((data) => {
        return (
          <ul>
            <li>
              <img src={data.images.original.url} alt="gif"></img>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default GifList;
