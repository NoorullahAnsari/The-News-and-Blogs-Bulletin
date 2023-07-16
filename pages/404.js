import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div className="bg-white p-20 text-4xl leading-loose ">
      <h1 className='font-6xl'>404</h1>
      <h2>Oops! That page cannot be found :(</h2>
      <p>Going back to <Link className='bg-blue-600 rounded text-white shadow-lg shadow-blue-500/50  p-1'
      href="/" >Homepage</Link> ...</p>

    </div>
  );
}
 
export default NotFound;