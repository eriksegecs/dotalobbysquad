
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Up from '../assets/arrow-up.svg'

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-4 right-4 p-2 rounded-full text-white"
          onClick={scrollToTop}
        >
          <Image className="transform hover:scale-[1.4] duration-500 ease-in-out" src={Up} alt="arrow up"/>
        </button>
      )}
    </>
  )
}
