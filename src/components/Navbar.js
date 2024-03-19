"use client"
import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '@/styles/navbar.module.css'
import Link from 'next/link';

const Navbar = (props) => {

  function getLocn(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      console.log("Geolocation is not supported by this browser.");
  }
    
  function showPosition(position) {
      let lat = position.coords.latitude; 
      let lon = position.coords.longitude;
      alert("Latitude: "+lat+" Longitude: "+lon);
  }
  }
  
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-left']}>
        {/* <Image src="/images/logo.png" alt="Logo" width={100} height={50} /> */}
        <h1><Link className={styles.logo} href="/">Party Time</Link></h1>
        <div className={styles['navbar-location']}>
          <FaMapMarkerAlt />
          <span onClick={getLocn}>Set Location</span>
        </div>
      </div>
      <div className={styles['navbar-search']}>
        <input type="text" placeholder="Search for party food items..." />
        <button><FaSearch /></button>
      </div>
      <div className={styles['navbar-links']}>
        <Link className={styles.navlink} href="/about">About</Link>
        <Link className={styles.navlink} href="/store">Store</Link>
        <Link className={styles.Login} href="/login"><img src="/icons/icons8-user-profile-96.png" alt="Login" />Login</Link>
        {
        props.on && (
            <Link className={styles.cart} href="/cart">
              <img className={styles.cartImage} src="/icons/icons8-cart-96.png" alt="Cart"/>
              {props.totalQuantity === 0 || props.totalPrice === 0 ? (
                <>
                  <span>My Cart</span>
                </>
              ) : (
                <div className={styles.qty}>
                  { /* Only render the total quantity and price if they are not zero */ }
                  <div>{props.totalQuantity} Items</div>
                  <div>₹{props.totalPrice}</div>
                </div>
              )}
            </Link>
          )
        }


      </div>
    </nav>
  );
};

export default Navbar;
