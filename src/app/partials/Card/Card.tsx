// Card.tsx
import React from 'react';

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
    <div className={`flex flex-col gap-4 overflow-clip rounded-tl-md rounded-tr-md ${image ? 'article-card' : 'why-use-card'}`}>
      {image &&
        <div className="img-wrapper">
          <img src={image} alt={title} width={imgWidth} height={imgHeight} className="w-full" />
        </div>
      }
      {icon && <img src={icon} alt={title} width={imgWidth} height={imgHeight} className="flex-0" />}
      <div className="text-section p-5 flex flex-col gap-2">
        {byLine && <p className="text-sm text-gray-500">{byLine}</p>}
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );

  return link ? <a href={link}>{content}</a> : content;
};

export default Card;
