'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { DaggerHeartCard } from '../daggerheart-card';
import type { CardProperties } from '@/lib/types';

let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: CardProperties[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<CardProperties[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: CardProperties[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className='relative h-[476px] w-[340px]'>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.title}
            className='absolute shadow-black/[0.1]'
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <DaggerHeartCard card={card} />
          </motion.div>
        );
      })}
    </div>
  );
};
