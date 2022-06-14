import { Component } from 'react';

const Car = (props) => {
  return <li>I am a {props.brand}</li>;
};

export const Garage = () => {
  const cars = [
    {
      id: 1,
      brand: 'Ford',
    },
    {
      id: 2,
      brand: 'BMW',
    },
    {
      id: 3,
      brand: 'Audi',
    },
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car, index) => (
          <Car key={index} brand={car.brand} />
        ))}
      </ul>
    </>
  );
};
