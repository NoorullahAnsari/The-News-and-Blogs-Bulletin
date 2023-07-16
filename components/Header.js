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
        <div className='content-center p-1 '>
          <Link href={"/"} >
        <Image className='rounded m-auto hover:border-2' 
        src={ "/header.png" } 
        width={ `400` } 
        height={ `200` } 
        alt="Logo" />
        </Link>
        
        {session?.user ?(
        <div className='text-right mr-8'>Welcome, {session.user.name}</div>):
        (" ")
        }
        </div>

      <div className=" hidden md:flex flex-row font-semibold justify-center gap-6 p-1 border-b-2 border-black">
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
