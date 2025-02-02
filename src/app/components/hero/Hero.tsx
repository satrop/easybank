"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import Button from "../button/button";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  return (
    <section className="hero-section">
      <div className="container mx-auto max-w-[1440px] relative lg:px-8 py-11">
        <div className="hero-background-image"></div>
        <div className="flex flex-col-reverse lg:flex-row items-center font-publicSans">

          {/* Column 1: Text Content */}
          <div className="flex flex-col items-center lg:items-start flex-1 max-w-full lg:max-w-[450px] gap-y-3 lg:gap-y-8 px-8 pb-8 lg:pb-0 lg:px-0 ">
            <h1 className="text-3xl text-center text-wrap-balance lg:text-left text-easybankBlue font-thin lg:text-5xl mb-4 !leading-tight">Next generation digital banking</h1>
            <p className="text-lg text-center text-wrap-balance lg:text-left text-gray-400 mb-4">Take your financial life online. Your Easybank account will be one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button className="!block" label="Request Invite" />
          </div>

          {/* Column 2: Image */}
          <div className="mb-8 lg:mb-0 flex-1 relative w-full min-h-[360px] md:min-h-[470px]">
            <motion.img
              src="/p-1.png"
              className="absolute phone-1 left-[50%] top-0 lg:top-[-30%] w-[125px] sm:w-[170px] lg:w-auto"
              style={{
                x: "-50%",
                y: useTransform(scrollY, [0, 1000], ['-25%', '-225%']),
              }}
            />
            <motion.img
              src="/p-2.png"
              className="absolute styles.phone phone-2 left-9 sm:left-32 lg:left-10 top-0 lg:top-[-30%] w-[125px] sm:w-[170px] lg:w-auto"
              style={{
                y: useTransform(scrollY, [10, 2500], ['25%%', '-150%'])
              }}
            />
            <motion.img
              src="/p-3.png"
              className="absolute styles.phone phone-3 right-9 sm:right-32 lg:right-10 top-0 lg:top-[-30%] w-[125px] sm:w-[170px] lg:w-auto"
              style={{
                y: useTransform(scrollY, [50, 1500], ['25%%', '-150%'])
              }}
            />
            <motion.img
              src="/p-4.png"
              className="absolute styles.phone phone-4 left-[50%] top-[43%] lg:top-[40%] w-[125px] sm:w-[170px] lg:w-auto"
              style={{
                x: "-50%",
                y: useTransform(scrollY, [25, 1000], ['0%', '-225%']),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
