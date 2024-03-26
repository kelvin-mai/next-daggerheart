'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';

import type { CardProperties } from '@/lib/types';
import { DaggerHeartCard } from '@/components/daggerheart-card';
import Link from 'next/link';

export const HeroParallax = ({ cards }: { cards: CardProperties[] }) => {
  const firstRow = cards.slice(0, 5);
  const secondRow = cards.slice(5, 10);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className='relative flex h-[240vh]  flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
          {firstRow.map((c) => (
            <HeroCard key={c.title} translate={translateX} card={c} />
          ))}
        </motion.div>
        <motion.div className='mb-20 flex  flex-row space-x-20 '>
          {secondRow.map((c) => (
            <HeroCard key={c.title} translate={translateXReverse} card={c} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='relative left-0 top-0 z-10 mx-auto w-full max-w-7xl  px-4 py-20 md:py-40'>
      <Image
        src='/assets/logo.svg'
        width={808}
        height={149}
        alt='Daggerheart Logo'
      />
      <p className='mt-8 max-w-2xl text-slate-500 dark:text-neutral-200 md:text-xl'>
        This is a fan web application created by{' '}
        <a
          className='text-dh-purple hover:underline'
          href='https://kelvinmai.io'
          target='_blank'
        >
          Kelvin Mai
        </a>{' '}
        for generating homebrew daggerheart cards. Try creating a new card from
        templates of existing playtest content{' '}
        <Link className='text-dh-purple hover:underline' href='/create'>
          here.
        </Link>
      </p>
    </div>
  );
};

export const HeroCard = ({
  card,
  translate,
}: {
  card: CardProperties;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={card.title}
      className='group/card relative h-[476px] w-[340px] flex-shrink-0'
    >
      <div className='overflow-hidden rounded-xl border-2 border-dh-gold-light shadow-lg'>
        <DaggerHeartCard {...card} />
      </div>
    </motion.div>
  );
};
