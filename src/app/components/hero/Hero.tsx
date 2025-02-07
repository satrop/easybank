"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import Button from "../../partials/button/button";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  return (
    <section className="hero-section overflow-x-clip">
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
           <div className="mb-32 md:mb-56 lg:mb-0 flex-1 relative w-full">
            <div className="phone-wrapper">
              <motion.img
                src="/p-1.png"
                className="phone-1"
                style={{
                  y: useTransform(scrollY, [0, 1000], ['-49%', '-225%']) }}
                />
              <motion.img
                src="/p-2.png"
                className="phone-2"
                style={{
                  y: useTransform(scrollY, [10, 2500], ['0', '-150%'])
                }}
              />
              <motion.img
                src="/p-3.png"
                className="phone-3"
                style={{
                  y: useTransform(scrollY, [25, 1500], ['0', '-250%'])
                }}
              />
              <motion.img
                src="/p-4.png"
                className="phone-4"
                style={{
                  y: useTransform(scrollY, [5, 1000], ['49%', '-225%']),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
