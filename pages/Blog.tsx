import Link from "next/link";
import React, { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../sanity";
import { Post } from '../typings';
import ContainerBlock from "../components/ContainerBlock";

interface Props {
  posts: [Post];
}


export default function Blog({ posts }: Props) {

  //change text every 3 seconds
  const [text, setText] = useState("");
  const customText = ["Tech", "Coding", "Design"]

  
  useEffect(() => {
    const interval = setInterval(() => {
      setText(customText.indexOf(text) === customText.length - 1 ? customText[0] : customText[customText.indexOf(text) + 1]);
    }, 3000);
    return () => clearInterval(interval);
  }, [text]);

  console.log(posts);
  return (
    <ContainerBlock title="Blogs - Tarun Singh">

      {/* Header Section */}

      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-between items-center bg-yellow-300 border-y border-black py-10 lg:py-5">
          <div className="px-10 space-y-5">
            <h1 className="text-6xl max-w-xl font-serif">Get yourself busy with Tech Articles </h1>
            <h2>Introduced by a Technical Writer.</h2>
          </div>
          <img
            src="/favicon.ico"
            alt="blog"
            className="hidden md:inline-flex h-32 lg:h-full"
          />
        </div> */}

        <div className="mx-4">
          <h1 className="text-7xl font-bold text-green-500">{text}</h1>
          <h1 className="text-7xl font-bold">Blogs for everyone</h1>
        </div>

        <div>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="sm:text-4xl text-3xl mb-4 font-bold">{posts[0].title}</h1>
              <p className="mb-8 leading-relaxed">{ posts[0].description }</p>
              <div className="flex justify-center">
                <button style={{backgroundColor: '#274672'}} className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
                  <Link key={posts[0]._id} href={`/post/${posts[0].slug.current}`}>
                    <a className="text-white">Read More</a>
                  </Link>
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 xs:w-0 w-5/6">
              <img className="w-6/8 object-cover object-center rounded" alt="hero" src={urlFor(posts[0].mainImage).url()!} />
            </div>
          </div>
        </div>

        <hr className="mb-6 "/>

        <h1 className="text-4xl font-bold font-sans mx-6">Latest Posts</h1>

        {/* Posts section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border-rounded-lg rounded group cursor-pointer overflow-hidden shadow-xl">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt={post.title}
                />
                <div className="flex justify-between p-5 bg-white h-full">
                  <div className="w-72 text-justify">
                    <p className="text-xl font-bold text-black">{post.title}</p>
                    <p className="text-xs text-black">{post.description} <br /> <span className="font-bold">by {post.author.name}</span></p>
                  </div>
                  <img className="h-10 w-10 rounded-full" src={urlFor(post.author.image).url()!} alt={post.author.name} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name, 
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }

}
