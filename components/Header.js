import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';


const Header = () => {
  return (
    <>
    
    <nav className="fixed top-0 left-0 right-0 bg-white grid grid-cols-1 md:flex justify-between m-0 p-1 border-2 border-indigo-300 ">
        <Image className='rounded' 
        src={ "/header.png" } 
        width={ `400` } 
        height={ `200` } 
        alt="Logo" />
      <div className="p-8">
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/foods">
              Foods
            </Link>
          </li>
          <li>
            <Link href="/fashion">
              Fashion
            </Link>
          </li>
    
          <li>
            <Link href="/sports">
              Sports
            </Link>
            </li>
            <li>
            <Link href="/entertainment">
              Entertainment
            </Link>
          </li>
          <li>
            <Link href="/technology">
              Technology
            </Link>
          </li>
      
        </ul>
      </div>
    </nav>
    
    </>
  );
};

export default Header;
