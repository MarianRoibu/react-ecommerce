import { useEffect } from 'react';

const useWishlist = (localStorage, setItems) => {
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    setItems(storedItems);
  }, []);
};

export default useWishlist;
