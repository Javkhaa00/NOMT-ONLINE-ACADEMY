import React from 'react'

export const Card = ({ name, price, lessons }) => {
  return (
    <div className="bundle">
      <h1 className="bundle-name">{name}</h1>
      <h5 className="bundle-price">{price}</h5>
      {
        lessons.map((cur, index) => <h5 className="bundle-lessons" key={index}>{cur}</h5>)
      }
    </div>
  );
}
