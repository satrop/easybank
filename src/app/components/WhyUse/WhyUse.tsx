// Articles.tsx
"use client";

import React from 'react';
import Card from '../../partials/Card/Card';

import data from './data.json';

const Articles: React.FC = () => {
  const cards = data[0].cards;

  return (
    <section className="container w-full bg-easybankGray">
      <div className="inner mx-auto max-w-[1110px] px-8 py-24">
        {/* First Row */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Why choose Easybank?</h1>
          <p className="text-base">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              icon={card.icon}
              byLine={card.byLine}
              title={card.title}
              text={card.text}
              link={card.link}
              imgWidth={card.width}
              imgHeight={card.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
