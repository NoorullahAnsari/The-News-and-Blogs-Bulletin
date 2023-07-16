import slugify from 'slugify';
import { useEffect,useState } from 'react';
import Newspage from "@/components/Newspage";
import Skeleton from '@/components/Skeleton';
import Head from 'next/head';

export async function getServerSideProps(){
  try {
    const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=824cd70e296b4622a3ae94a3b90d6ae1');
    const data = await response.json();

    const newsWithSlugs = data.articles.map((article) => {
      const slug = slugify(article.title, { lower: true });
       return { ...article, slug };
    });

    const reqNews= newsWithSlugs.slice(0,32);

    return{
    props:{
      news:reqNews
      
    }
  }

    // setNews(newsWithSlugs);
  } catch (error) {
    console.log('Error fetching news:', error);
    return error;
  }
};

export default function News({news}) {
    // const [news, setNews] = useState([]);
    return (
      <>
      <Head>
        <title>Latest News</title>
        <meta name="description" content=" latest news, blogs,opinions, sports, foods, entertainment,fashion, technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="grid grid-cols-1 gap-3 p-3 md:scroll-auto md:grid-cols-4 md:grid-flow-row">
        {news.map((article) => (
          <Newspage key={article.title} article={article} />
        ))}
      </div>
      </>
    );
  }
