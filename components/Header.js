import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from "react-icons/fi";
import { useSession,signIn,signOut } from 'next-auth/react';
import Menu from './Menu';
import Dropdown from './Dropdown';


const Header = () => {
  const {data:session}=useSession();
  return (
    <> 
    <nav className=" bg-white ">
        <div className='card content-center p-1 '>
          <Link href={"/"} >
        <Image className='rounded m-auto hover:border-2' 
        src={ "/header.png" } 
        width={ `400` } 
        height={ `200` } 
        alt="Logo" />
        </Link>
        </div>
      <div className=" hidden md:flex flex-row justify-center gap-6 bg-blue-100 p-3">
        <Menu />
        
      </div>
      <div className="float-right m-2 md:hidden">
          <Dropdown />
        </div>
    </nav>
    
    </>
  );
};

export default Header;
