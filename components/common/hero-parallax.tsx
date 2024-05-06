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
import { BuyMeCofffeeBanner } from '.';

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
    useTransform(scrollYProgress, [0, 0.2], [-1000, 50]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className='relative flex h-[210vh]  flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <div className='container z-10 mt-4 flex w-full justify-center md:w-[800px]'>
        <BuyMeCofffeeBanner />
      </div>
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
    <div className='relative left-0 top-0 z-10 mx-auto w-full max-w-7xl rounded-xl bg-slate-950/20 px-4 py-20 md:py-40'>
      <Image
        src='/assets/logo.svg'
        width={808}
        height={149}
        alt='Daggerheart Logo'
      />
      <p className='mt-8 text-white md:text-xl'>
        This is a "Work in Progress" fan web application created by{' '}
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
      <p className='mt-2 text-lg text-white'>
        This tool is a supplament to the Daggerheart 1.3 Open Playtest
        Manuscript (which can be downloaded{' '}
        <Link
          href='https://www.daggerheart.com/'
          className='text-dh-purple hover:underline'
          target='_blank'
        >
          here
        </Link>
        ) and assumes that the user is familiar with the rules and terminology
        of the game.
      </p>
      <p className='mt-2 text-white'>
        This project is not affiliated with Darrington Press, LLC. and to be
        used for personal use only.
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
      <DaggerHeartCard card={card} />
    </motion.div>
  );
};
