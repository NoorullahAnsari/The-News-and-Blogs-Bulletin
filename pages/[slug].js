import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "news",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "news",
    "fields.slug": params.slug,
  });

  const { items: allNews } = await client.getEntries({
    content_type: "news",
  });

  return {
    props: { sport: items[0], allNews },
  };
};

export default function SportsDetails({ sport, allNews }) {
  const { data: session } = useSession();
  const { title, author, date } = sport.fields;

  const DEFAULT_DESCRIPTION =
    "Welcome! Select a news title to view its details.";

  const [selectedNews, setSelectedNews] = useState(null);
  const titlesRef = useRef(null);
  const timeoutRef = useRef(null);
  const isFirstVisit = useRef(true);

  const router = useRouter();

  const handleClick = (thumbnail) => {
    const newsItem = allNews.find(
      (item) => item.fields.thumbnail === thumbnail
    );
    setSelectedNews(newsItem);
  };

  useEffect(() => {
    if (!selectedNews && allNews.length > 0) {
      setSelectedNews(
        allNews.find((item) => item.fields.slug === router.query.slug)
      );
    }

    const titlesContainer = titlesRef.current;

    if (titlesContainer) {
      const scrollHeight = titlesContainer.scrollHeight;
      const clientHeight = titlesContainer.clientHeight;

      if (scrollHeight > clientHeight && isFirstVisit.current) {
        const scrollStep = 1;
        const scrollDelay = 100;

        const scrollAnimation = () => {
          if (titlesContainer.scrollTop < scrollHeight - clientHeight) {
            titlesContainer.scrollTop += scrollStep;
          } else {
            titlesContainer.scrollTop = 0;
          }

          if (titlesContainer.scrollTop === 0) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(scrollAnimation, scrollDelay);
          } else {
            timeoutRef.current = setTimeout(scrollAnimation, scrollDelay);
          }
        };

        timeoutRef.current = setTimeout(scrollAnimation, scrollDelay);
        isFirstVisit.current = false;
      }
    }
  }, [allNews, router.query.slug]);

  if (session) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-4">
          <div className="pt-5">
            <h1 className="text-4xl p-5">
              {selectedNews ? selectedNews.fields.title : title}
            </h1>
            <h3 className="text-2xl p-5 mb-4 mt-0">
              {selectedNews ? selectedNews.fields.author : author}{" "}
              <div className="bg-grey-200 text-normal border-b-2 border-black mt-4 ">
                {selectedNews ? selectedNews.fields.date.slice(0,10) : date}
              </div>
            </h3>
          </div>

          <div className="pt-4 pl-5">
            <Image
              className="rounded"
              src={
                selectedNews
                  ? "https:" + selectedNews.fields.thumbnail.fields.file.url
                  : "/path_to_default_image"
              }
              width={
                selectedNews?.fields.thumbnail.fields.file.details.image
                  .width || 500
              }
              height={
                selectedNews?.fields.thumbnail.fields.file.details.image
                  .height || 500
              }
              alt="a news picture"
            />
          </div>
        </div>
        <div className="text-lg indent-150 mt-8 p-3 font-normal text-justify text-xl md:col-span-5 overflow-auto">
          <div className="scrollbar" style={{ maxHeight: "50vh" }}>
            {selectedNews
              ? documentToReactComponents(selectedNews.fields.description)
              : DEFAULT_DESCRIPTION}
          </div>
        </div>
        <div className="mt-8 font-normal text-justify font-sans md:col-start-10 md:col-end-13 overflow-auto">
          <div
            ref={titlesRef}
            className="scrollbar"
            style={{
              maxHeight: "calc(80vh - 8rem)",
              overflowY: "auto",
              overflowX: "hidden",
              backgroundColor: "white",
              margin: 0,
              padding: 8,
            }}
          >
            {allNews.map((item, index) => (
              <Link
                key={item.sys.id}
                href={`/${item.fields.slug}`}
                className={`hover:underline ${
                  selectedNews === item ? "text-blue-500" : ""
                }`}
                onClick={() => handleClick(item.fields.thumbnail)}
              >
                {item.fields.title}
                <hr />
                <br /> <br />
                {index === allNews.length - 1 && <span ref={titlesRef}></span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
          <h2
            className="text-lg p-2 bg-blue-800 w-1/3 text-center text-white font-semibold mb-4 rounded hover:bg-blue-400"
            onClick={() => signIn()}
          >
            Sign in
          </h2>
          <p className="text-gray-700 text-xl mb-4">
            Please sign in to access the content.
          </p>
          <p className="text-gray-700 ">
            Sign in using your credentials to unlock the full experience.
          </p>
        </div>
      </div>
    );
  }
}

