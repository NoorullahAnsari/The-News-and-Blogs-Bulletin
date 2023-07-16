import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';
import { useSession,signIn,signOut } from 'next-auth/react';


export default function Dropdown() {
    const {data:session}=useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block ">
      <button
        type="button"
        onClick={toggleDropdown}
        className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-800 active:bg-gray-900"
      >
        <FiMenu className="text-3xl" />
      </button>
      {isOpen && (
        <div onClick={toggleDropdown}
        className="absolute bg-slate-100 right-0 mt-2 py-1 bg-white rounded-md shadow-lg">
          <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
            Home
          </Link>
          <Link href="/news" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
            News
          </Link>
          <Link href="/fashion" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
            Fashion
          </Link>
          <Link href="/sports" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
            Sports
          </Link>
          <Link href="/foods" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
            Foods
          </Link>
          <Link href="/entertainment" className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
          Entertainment
          </Link>

          <div>
         {session?.user ?(
          <div onClick={()=> signOut()} className="block px-4 py-2 text-gray-800 hover:bg-gray-400">  
              
               <p>Sign Out</p>
              </div>
          ):
          (
            <div  onClick={()=> signIn()} className="block px-4 py-2 text-gray-800 hover:bg-gray-400">
               <p>Sign In</p>
               </div>
          )
          }      
        </div>

        </div>
      )}
    </div>
  );
}