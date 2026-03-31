'use client';

import Image from 'next/image';
import { useState } from 'react';

const CARROUSEL_IMGS = [
  {
    src: '/light-mirror/1.jpg',
    alt: '1'
  },
  {
    src: '/light-mirror/2.jpg',
    alt: '2'
  },
  {
    src: '/light-mirror/3.jpg',
    alt: '3'
  },
  {
    src: '/light-mirror/4.jpg',
    alt: '4'
  },
  {
    src: '/light-mirror/5.jpg',
    alt: '5'
  },
  {
    src: '/light-mirror/6.jpg',
    alt: '6'
  },
  // {
  //   src: '/light-mirror/7.jpg',
  //   alt: '7'
  // },
  {
    src: '/light-mirror/8.jpg',
    alt: '8'
  }
];

const Carrousel = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0);

  function showPreviousImage() {
    setIndex(index === 0 ? CARROUSEL_IMGS.length - 1 : (prevIndex) => prevIndex - 1);
  }

  function showNextImage() {
    setIndex(index === CARROUSEL_IMGS.length - 1 ? 0 : (prevIndex) => prevIndex + 1);
  }

  return (
    <section className={`${className} flex justify-center gap-2`}>
      <div
        onClick={showPreviousImage}
        className="relative left-10 flex size-96 scale-90 items-center justify-center bg-white object-contain opacity-50"
      >
        <Image
          src={CARROUSEL_IMGS[index === 0 ? CARROUSEL_IMGS.length - 1 : index - 1].src}
          alt={CARROUSEL_IMGS[index === 0 ? CARROUSEL_IMGS.length - 1 : index - 1].alt}
          width={384}
          height={384}
          className="rounded-sm"
        />
      </div>
      <div className="z-20 flex size-96 items-center justify-center bg-white object-contain">
        <Image
          src={CARROUSEL_IMGS[index].src}
          alt={CARROUSEL_IMGS[index].alt}
          width={384}
          height={384}
          className="rounded-sm"
        />
      </div>
      <div
        onClick={showNextImage}
        className="relative right-10 flex size-96 scale-90 items-center justify-center bg-white object-contain opacity-50"
      >
        <Image
          src={CARROUSEL_IMGS[index === CARROUSEL_IMGS.length - 1 ? 0 : index + 1].src}
          alt={CARROUSEL_IMGS[index === CARROUSEL_IMGS.length - 1 ? 0 : index + 1].alt}
          width={384}
          height={384}
          className="rounded-sm"
        />
      </div>
    </section>
  );
};

export default Carrousel;
