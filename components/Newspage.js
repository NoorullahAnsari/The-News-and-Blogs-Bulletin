import Link from 'next/link'
import Image from 'next/image'


export default function Newspage({ article }) {
  const { title, author, description, urlToImage, content } = article;
  const slug=title;
  console.log(article);

  return (
    <div className="card border-b-4 border-black p-2">
      <div className="featured">
        <Image className='rounded'
          src={urlToImage}
          width={`500`}
          height={`650`}
          alt='a news picture'
        />
      </div>
      <div className='text-blue-700 text-xl hover:text-blue-950'>{title}</div>

      <div className='text-xl mt-2'>By: {author} </div>

      <Link href={'/news/' +slug}>
        <div className="bg-blue-700 h-8 w-1/3 rounded-full text-center overflow-hidden text-white p-1 mr-0 ml-auto hover:bg-blue-400">
          read more
        </div>
      </Link>

    </div>

  )
}