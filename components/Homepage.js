import Link from 'next/link'
import Image from 'next/image'


export default function Homepage({ news }) {
  const { title,author,tags,thumbnail,slug } = news.fields;

  return (
    <div className="card bg-green-50">
      <div className="featured">
        <Image className='rounded'
        //  src={ 'https:'+ thumbnail.map(image=>image.fields.file.url)  }
        src={'https:'+ thumbnail.fields.file.url}
         width={thumbnail.fields.file.details.image.width}
         height={thumbnail.fields.file.details.image.height}
        // width={`500`}
        // height={`650`}
        alt='a news picture'
        />
      </div>
        {/* <div className="card rounded p-1"> */}
        <div className='text-lg font-light font-sans'>{ tags }</div>
          <div className='text-blue-700 text-2xl font-sans'>{ title }</div>
          <div className='text-xl mt-2'>By: { author } </div>
        
        <div className="bg-blue-600 h-7 w-1/3 rounded-full text-center text-white mt-3">
           <Link href={'/'+slug}>Read This</Link> 
        </div>
      {/* </div> */}
    </div>
  )
}