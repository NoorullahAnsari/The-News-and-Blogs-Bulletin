import Link from 'next/link';
import { useSession,signIn,signOut } from 'next-auth/react';
import {AiOutlineLogin,AiOutlineLogout} from "react-icons/Ai"


export default function Menu(){
    const {data:session}=useSession();
return(
    <>
<div className='p-1 hover:bg-gray-300 hover:scale-125 rounded'>
            <Link href="/">
              Home
            </Link>
          </div>
          <div className='p-1 hover:bg-gray-300 hover:scale-125 rounded'>
            <Link href="/news">
              News
            </Link>
          </div>

          <div className='p-1 hover:bg-gray-300 hover:scale-125 rounded'>
            <Link href="/foods">
              Foods
            </Link>
          </div>
          <div className='p-1 hover:bg-gray-300 hover:scale-125 rounded'>
            <Link href="/fashion">
              Fashion
            </Link>
          </div>
    
          <div className='p-1 hover:bg-gray-300 hover:scale-125 rounded'>
            <Link href="/sports">
              Sports
            </Link>
            </div>
            <div className='p-1 hover:bg-gray-300 hover:scale-125 rounded'>
            <Link href="/entertainment">
              Entertainment
            </Link>
          </div>
          <div className='p-1 hover:bg-gray-300 hover:scale-125 rounded'>
            <Link href="/technology">
              Technology
            </Link>
          </div>
          <div>
         {session?.user ?(
          <div onClick={()=> signOut()} className='flex justify-end gap-2 hover:bg-gray-300 hover:scale-125 rounded'>  
              {/* <div className='p-2 bg-blue-800 text-white text-sm text-center rounded hover:bg-blue-400 rounded'
              onClick={()=> signOut()}>Sign out</div> */}
              <AiOutlineLogout className='text-3xl text-red-500'
               />
               <p>Sign Out</p>
              </div>
          ):
          (
            <div  onClick={()=> signIn()} className='flex justify-end gap-2  hover:bg-gray-300 hover:scale-125 rounded'>
            
            <AiOutlineLogin className='text-3xl text-blue-700'
               />
               <p>Sign In</p>
               </div>
          )
          }      
        </div>
        </>
)
        }