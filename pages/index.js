import Homepage from '@/components/Homepage'
import { createClient } from 'contentful'
import Head from 'next/head'


export async function getStaticProps(){
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: "news" })

  return {
    props: {
      news: res.items,
    }
  }
}

export default function Home({ news }) {
  console.log(news);
  return (
    
    <>
    <Head>
        <title>The News and Blogs Bulletin</title>
        <meta name="description" content="recent news, blogs,opinions about, sports, foods, entertainment,fashion, technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="grid grid-cols-2 gap-2 p-1 md:grid-cols-4 gap-2"> 
      {
      news.slice(0,8).map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <div className='text-center pt-14 h-24 font-bold text-4xl'>Sports</div>
    <hr/><hr/>
    <div className="grid grid-cols-2 gap-3 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='Sports').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>

    
    <div className='text-center pt-14 h-24 font-bold text-4xl'>Technology</div>
    <hr/><hr/>
    <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-4"> 
      {
      news.filter(i=>i.fields.tags=='Technology').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>

    <div className='text-center pt-14 h-24 font-bold text-4xl'>Fashion</div>
    <hr/><hr/>
    <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-4"> 
      {
      news.filter(i=>i.fields.tags=='Fashion').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <div className='text-center pt-14 h-24 font-bold text-4xl'>Entertainment</div>
    <hr/><hr/>
    <div className="grid grid-cols-2 gap-3 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='Entertainment').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    
          </>
  )
}
