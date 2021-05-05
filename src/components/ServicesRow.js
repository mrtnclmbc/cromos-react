import React from 'react';
import CardStack from './CardStack';

const ServicesRow = () => {
  return (
    <>
      <div className="flex items-between justify-center">
        <CardStack
          title="Quick Delivery"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
        <CardStack
          title="Secure Payment"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
        <CardStack
          title="Best quality"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
        <CardStack
          title="Return guarantee"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
      </div>
    </>
  )
}

export default ServicesRow;
