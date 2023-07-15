import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-8">
      <footer className="footer-1  bg-sky-950 text-white">
        <div className="mx-auto  w-full max-w-screen-xl">
          <div className="grid  grid-cols-2 gap-8 px-4 py-6 lg:py-8 text-lg md:grid-cols-4 ">
            <div>
              <h2 className="mb-6 font-semibold uppercase ">
                <Image
                  src="/app-logo.jpg"
                  alt="app logo"
                  width={120}
                  height={130}
                />
              </h2>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Fashion</h2>
              <ul className=" font-medium ">
                <li className="mb-4">
                  <Link href="/foods" className="hover:underline">
                    Foods
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/news" className="hover:underline">
                    Trending News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Arts & Culture
              </h2>
              <ul className="text-white-500">
                <li className="mb-4">
                  <Link href="/news" className="hover:underline">
                    Blogs
                  </Link>
                </li>

                <li className="mb-4">
                  <Link href="news" className="hover:underline">
                    Movies News
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/entertainment" className="hover:underline">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Sports</h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <Link href="/sports" className="hover:underline">
                    Cricket
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/sports" className="hover:underline">
                    Football
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-3 text-sm text-gray-900 p-6 text-center bg-gray-200 font-size text-xl">
            © 2023 <Link href="/">The News Bulletin™</Link>. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}