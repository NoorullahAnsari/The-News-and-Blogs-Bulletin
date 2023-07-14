import Homepage from '@/components/Homepage'
import { createClient } from 'contentful'

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

export default function Entertainment({ news }) {
  console.log(news);
  return (
    
    <>
    <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='News').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>

        </>
    )
}