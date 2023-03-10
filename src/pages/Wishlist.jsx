import React, { useContext } from 'react';
import { WishlistContext } from '../components/WishlistContextProvider';
import Product from '../components/Product';

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <>
          {wishlistItems.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default Wishlist;
