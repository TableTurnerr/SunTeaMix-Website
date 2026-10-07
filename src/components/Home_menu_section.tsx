"use client";

import { useCallback, useRef, useState } from 'react'

import Image from 'next/image';
import { POPULAR_ITEMS } from '@/data/site';

// import arrow from '@/../public/Svgs/Arrow.svg';
import ScrollableMenuCards, { ScrollableMenuRef } from './Home_menu_card';

export interface MenuItem {
  id: string;
  name: string;
  image?: string;
  price: string;
  loyaltyPoints: number;
  description: string;
  tags: string[];
  isFavorite?: boolean;
}

export default function Home_menu_section() {

  const popularItems: MenuItem[] = POPULAR_ITEMS.map((item) => ({
    id: item.slug,
    name: item.name,
    image: item.image,
    price: item.price,
    loyaltyPoints: 0,
    description: item.description,
    tags: item.category.split(' · '),
  }));


  const scrollableMenuRef = useRef<ScrollableMenuRef>(null);
  const [isMenuAtEnd, setIsMenuAtEnd] = useState(false);

  const handleScrollEndChange = useCallback((isAtEnd: boolean) => {
      setIsMenuAtEnd(isAtEnd);
  }, []); // Empty dependency array means this function identity is stable

  // Function to trigger scroll in the child component
  const handleNextClick = () => {
    if (scrollableMenuRef.current) {
      scrollableMenuRef.current.scrollNext();
    }
  };

  return (
    <div className='group relative flex h-full w-full flex-col overflow-hidden rounded-l-[12px] bg-primary-dark p-[20px] sm:h-[460px] sm:flex-row'>
      <div
        className={`pointer-events-none absolute -bottom-60 -left-60 -z-0 hidden h-80 w-80 rounded-full bg-black/10 transition-all duration-500 ease-in-out group-hover:-bottom-18 group-hover:-left-12 sm:block`}
      />
      <div className='z-10 flex h-full flex-col px-[8px] py-[26px]'>
        <div className='text-start text-h3 leading-[1.2] text-white'>
          Trending in
          <br />
          Honolulu
        </div>
        <div className='mt-[5px] text-normal1 text-white/50'>
          Boba • Bubble Tea • Soufflé Pancakes • Smoothies • Dessert Café
        </div>

        <div className='flex-1' />

        <div className='text-normal3 text-white'>
          Scroll through to explore our best-sellers
        </div>
        <div className='flex aspect-square w-fit items-center justify-center rounded-full transition-all duration-400 group-hover:translate-x-5 hover:bg-white/20'
          onClick={handleNextClick}
          style={{
            rotate: isMenuAtEnd ? '180deg' : '0deg',
          }}
        >
          <Image
            src="/Svgs/Arrow.svg"
            alt="Arrow"
            width={24}
            height={24}
            className="m-[10px] h-[24px] w-[24px] cursor-pointer"
          />
        </div>
      </div>

      <div className='flex h-fit justify-center overflow-x-hidden'>
        <ScrollableMenuCards
          ref={scrollableMenuRef}
          menuItems={popularItems}
          onScrollEndChange={handleScrollEndChange}
        />
      </div>
    </div>
  )
}

