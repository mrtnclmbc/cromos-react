import React from 'react';
import CardStack from './CardStack';

const ServicesRow = () => {
  return (
    <>
      <div className="flex items-between justify-center">
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
      </div>
    </>
  )
}

export default ServicesRow;
