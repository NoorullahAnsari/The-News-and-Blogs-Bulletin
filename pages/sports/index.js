import graphqlContent from "@/utils/graphqlContent";
import Head from "next/head";
import SportsPage from "@/components/SportsPage";

export async function getStaticProps() {
  const  sports  = await graphqlContent(`
  
  query {
    newsCollection(where:{tags:"Sports"}){
      items{
        sys{
          id
        }
        title
        author
        tags
        slug
        thumbnail{
            title
            description
            url
            width
            height
          }
      }
    }
  }  
  `);
  return {
    props: {
     sdata:sports.items,
      revalidate: 10
    }
  };
}

export default function Games({ sdata }) {

  console.log(sdata)
  

  return (
    <>
    <Head>
        <title>Sports</title>
        <meta name="description" content=" latest news,teams,sports, cricket, football, badminton, hockey,kabaddi,rugby, basketball" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <div className="grid grid-cols-2 gap-2 p-1 md:grid-cols-4 gap-2">
        {
      sdata.map(item =>(
        <SportsPage key={item.sys.id} news={item} />
      ))}
    </div>
    </>
      )
}