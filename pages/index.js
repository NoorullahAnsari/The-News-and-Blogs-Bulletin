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

export default function Home({ news }) {
  console.log(news);
  return (
    
    <>
    <div className="grid grid-cols-2 gap-2 p-1 md:grid-cols-4 gap-2"> 
      {
      news.slice(0,8).map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <hr/><hr/>
    <div className='text-center pt-12 h-24 font-bold text-4xl'>Sports</div>
    <hr/><hr/>
    <div className="grid grid-cols-2 gap-3 p-1 md:grid-cols-3"> 
      {
      news.filter(i=>i.fields.tags=='Sports').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <hr/><hr/>
    <div className='text-center pt-12 h-24 font-bold text-4xl'>Fashion</div>
    <hr/><hr/>
    <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-4"> 
      {
      news.filter(i=>i.fields.tags=='Fashion').map(item =>(
        <Homepage key={item.sys.id} news={item} />
      ))}
    </div>
    <hr/><hr/>
    <div className='text-center pt-12 h-24 font-bold text-4xl'>Entertainment</div>
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
