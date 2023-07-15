import Newspage from "@/components/Newspage";

export async function getStaticProps(){
  //use getServerSideProps
  const data=await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-07-13&to=2023-07-13&sortBy=popularity&apiKey=824cd70e296b4622a3ae94a3b90d6ae1')
  const res= await data.json();
  return {
    props: { allnews :res}
  }
}

export default function News({ allnews }) {
  const list = allnews.articles;
  return (
    
    <>
    <div className="grid grid-cols-1 gap-3 p-1 md:grid-cols-3"> 
    {
     list.slice(0,5).map(item =>(
          <Newspage key={item.title} article={item} />
       ))}
    </div>

        </>
    )
}