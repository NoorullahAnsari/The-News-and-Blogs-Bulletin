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

export default function Foods({ news }) {
  console.log(news);
  return (
    
    <>
    <Head>
        <title>Foods</title>
        <meta name="description" content=" foods,chinese foods,Indian foods, Italian food,korean food, veg, non-veg,cooking,recipe, healthy food,kitchen, halal," />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='Food').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>

        </>
    )
}