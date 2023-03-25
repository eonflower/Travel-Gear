import React, { useContext } from 'react';
import WishlistCard from '../Components/Cards/WishlistCard';
import { TechGearContext } from '../Components/TechGearContext';

export default function Wishlist() {
  const { wishlist } = useContext(TechGearContext);

  return (
    <>
    <div className='wishlist'>
    <WishlistCard />
    </div>
      
    </>
  );
}
