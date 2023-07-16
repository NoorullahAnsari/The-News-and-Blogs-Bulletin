import { useRouter } from 'next/router';
import slugify from 'slugify';
import Image from 'next/image';
import Link from 'next/link';


export async function getServerSideProps({ params }) {
  try {
    const slug = params.slug; // Get the slug from the route parameters

    // Fetch news articles from the News API
    const response = await fetch(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=824cd70e296b4622a3ae94a3b90d6ae1'
    );
    const data = await response.json();

    // Find the news article with the matching slug or generate the slug dynamically
    const article = data.articles.find((article) => {
      const generatedSlug = slugify(article.title, { lower: true });
      return generatedSlug === slug;
    });

    if (!article) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article
      },
    };
  } catch (error) {
    console.log('Error fetching news:', error);
    return {
      notFound: true,
    };
  }
}

export default function NewsArticlePage({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { title,urlToImage,publishedAt, description,content,author,url } = article;

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 p-4">
        
             <div>
                 <div className='p-2 pt-10'>
                 <h1 className="text-4xl p-5">{title}</h1>
                 <h3 className='text-2xl p-5'>{author}</h3>
                 <div className='border-b-2 border-black ml-5'>{publishedAt.slice(0,10)}</div>
                 </div>
                 <div className='m-2 pt-10 pl-7'>
              
                 <Image className='rounded'
          src={urlToImage}
          width={`500`}
          height={`650`}
          alt='a news picture'
        />
                </div>            
            </div>
            <div className='flex flex-col flex-end'>
                <div className='text-lg indent-100 mt-16 p-3 font-normal text-xl font-Playfair'>
                {description}
                {content}
                {description}
                </div>
                <Link href={url}
                className='bg-blue-500 text-xl w-20 text-center text-white p-2 rounded hover:underline hover:bg-blue-700'>
                <div>more</div>
                </Link>
                </div>
               
              
                 </div>
  );
}
