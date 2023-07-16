import Link from 'next/link'
import Image from 'next/image'


export default function Newspage({ article }) {
  const { title, author, urlToImage,slug } = article;
  console.log(article);

  return (
    <div className="card gap-4 relative border-b-4 border-black p-2">
      <div className="featured">
        <Image className='mb-3 w-full rounded md:48 '
          src={urlToImage}
          width={`500`}
          height={`650`}
          alt='a news picture'
        />
      </div>
      <Link href={"/news/"+slug}>
      <div className='text-blue-700 text-xl hover:underline active:text-blue-950'>{title}</div>
      </Link>
      <div className='text-lg overflow-hidden md:text-xl md:w-full mt-2 md:w-2/3 md:overflow-hidden text-ellipsis'>By: {author} </div>

      <Link href={'/news/' +slug}>
        <div className="absolute bottom-1 right-1 bg-blue-600 h-8 w-1/3 rounded-full text-center overflow-hidden text-white p-1  hover:underline active:bg-blue-900">
          read more
        </div>
      </Link>

    </div>

  )
}