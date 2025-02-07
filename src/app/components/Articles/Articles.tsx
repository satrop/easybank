// Articles.tsx
"use client";

import React from 'react';
import Card from '../../partials/Card/Card';
import { motion, useInView } from 'framer-motion';

import data from './data.json';

const Articles: React.FC = () => {
  const cards = data[0].cards;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <section className="container">
        <div className="inner mx-auto max-w-[1110px] px-8 py-8 lg:py-20">
          {/* First Row */}
          <div className="mb-8">
            <h1 className="title text-2xl lg:text-4xl font-thin mb-4 text-easybankBlue">Latest Articles</h1>
          </div>

          {/* Second Row */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Articles;
