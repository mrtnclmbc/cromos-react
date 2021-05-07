import React from 'react';
import CardStack from './CardStack';

const ServicesRow = () => {
  return (
    <>
      <div className="flex items-between justify-center">
        <CardStack
          title="Tokenize your brand"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
        <CardStack
          title="Make NFT auctions"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
        <CardStack
          title="Deliver gamificated experiences to your collectors"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
        <CardStack
          title="All parties win!"
          text="Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet"
        />
      </div>
    </>
  )
}

export default ServicesRow;
