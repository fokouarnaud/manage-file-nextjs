import { useEffect } from 'react';

export default function useScroll(callback) {
  useEffect(function mount() {
    function onScroll() {
      const scrollPosition = window.scrollY;
      callback(scrollPosition);
    }

    window.addEventListener('scroll', onScroll);

    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return null;
}