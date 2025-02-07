// WhyUse.tsx
"use client";

import React from 'react';
import Card from '../../partials/Card/Card';
import { motion, useInView } from 'framer-motion';

import data from './data.json';

const WhyUse: React.FC = () => {
  const cards = data[0].cards;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="container w-full bg-easybankGray" aria-labelledby="why-choose-easybank">
      <div className="inner mx-auto max-w-[1110px] px-8 py-8 lg:py-20">
        {/* First Row */}
        <div className="mb-20">
          <h1 id="why-choose-easybank" className="title text-2xl lg:text-4xl font-thin mb-4 text-easybankBlue">Why choose Easybank?</h1>
          <p className="text-base text-gray-400">We leverage Open Banking to turn your bank account into your financial hub.<br/>Control your finances like never before.</p>
        </div>

        {/* Second Row */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-stretch"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUse;
