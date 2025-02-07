import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  id: number;
  image?: string | null;
  icon?: string | null;
  byLine?: string | null;
  title: string;
  text: string;
  link?: string | null;
  imgWidth?: string;
  imgHeight?: string;
}

const Card: React.FC<CardProps> = ({ image, icon, byLine, title, text, link, imgWidth, imgHeight }) => {
  const content = (
    <motion.div
      className={`flex flex-col overflow-clip rounded-md ${image ? 'article-card bg-white card-hover' : 'why-use-card'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {image &&
        <div className="img-wrapper overflow-clip">
          <img src={image} alt={title} width={imgWidth} height={imgHeight} className="w-full transform transition-transform duration-300" />
        </div>
      }
      {icon && <img src={icon} alt={title} width={imgWidth} height={imgHeight} className="flex-0 mb-10" />}
      <div className="text-section p-5 flex flex-col">
        {byLine && <p className="text-xs mb-3 text-gray-400">{byLine}</p>}
        <h2 className={`title text-easybankBlue ${image ? 'text-md mb-3 leading-5 transform duration-300' : 'text-xl mb-7'}`}>{title}</h2>
        <p className={`text-base text-gray-400 ${image ? 'text-xs' : ''}`}>{text}</p>
      </div>
    </motion.div>
  );

  return link ? <a href={link} className={`${image ? '' : ''}`}>{content}</a> : content;
};

export default Card;
