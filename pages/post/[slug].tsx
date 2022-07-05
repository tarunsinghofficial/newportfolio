import ContainerBlock from "../../components/ContainerBlock";
import React, { useState } from "react";
import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { Post } from "../../typings";
import PortableText from "react-portable-text";
//using react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

// import the icons you need
import { faLinkedin, faGithub, faFacebook, faWhatsapp, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userData from "../../constants/data";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
}

function post({ post }: Props) {

  const [submitted, setSubmitted] = useState(false);

  console.log(post);

  //connecting forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    /* console.log(data); */
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(() => {
      console.log('Comment created');
      setSubmitted(true);
    }).catch((err) => {
      console.log(err);
      setSubmitted(false);
    })
  }

  return (
    <ContainerBlock title={post.title}>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">

      {/* Sticky Social Media Column */}
      <div className="static w-12 sticky top-5 flex justify-center align-center">
        <ul className="bg-blue-100 p-2 flex flex-col space-y-2">
           <a href={userData.socialLinks.linkedin}><li className="bg-blue-500 rounded-2 p-2"><FontAwesomeIcon icon={faLinkedin} size="2x" color="white" /></li></a>
           <a href={userData.socialLinks.github}><li className="bg-black rounded-2 p-2"><FontAwesomeIcon icon={faGithub} size="2x" color="white" /></li></a>
           <a href={userData.socialLinks.twitter}><li className="bg-blue-600 rounded-2 p-2"><FontAwesomeIcon icon={faTwitter} size="2x" color="white" /></li></a>
           <a href={userData.socialLinks.instagram}><li className="bg-red-600 rounded-2 p-2"><FontAwesomeIcon icon={faInstagram} size="2x" color="white" /></li></a>
        </ul>
      </div>

        <article className="max-w-4xl mx-auto -mt-60 p-5">
          <h1 className="text-5xl text-center font-bold mb-8 font-sans">{post.title}</h1>
          <h3 className="text-center uppercase text-gray-500 my-5">{new Date(post._createdAt).toLocaleDateString()} - 3 min read</h3>   
          <img
            className="w-full h-96 object-cover flex align-items-center mb-8"
            src={urlFor(post.mainImage).url()!}
            alt={post.title}
          />
          <h2 className="text-xl font-light text-gray-500 mb-2 ">
            {post.description}
          </h2>
          <div className="flex items-center space-x-2 my-4">
            <img
              src={urlFor(post.author.image).url()!}
              className="h-12 w-12 rounded-full mr-2"
            />
            <p className="font-extrtalight text-sm">
              Blog post by{" "}
              <span className="text-green-600">{post.author.name}</span> -
              Published at {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>
          <div className="text-justify">
            <PortableText
              className=""
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),
                h2: (props: any) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                li: ({ children }: any) => <li className="ml-4 list-disc"></li>,
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500">
                    {children}
                  </a>
                ),
                img: (props: any) => (
                  <img
                    className="mt-4 mb-4"
                    {...props}
                  />
                ),
              }}
            />
          </div>
        </article>

        <hr className="max-w-lg my-5 mx-auto border-green-500" />

        {/* Comments section */}

        {submitted ? (
          <div className="flex flex-col p-5 my-10 bg-green-500 text-white max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold">Thanks for your comment!</h3>
            <p>Once your comment is approved, it will appear below.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
            <h3 className="text-sm text-green-500">Enjoyed the article?</h3>
            <h4 className="text-3xl font-bold">leave us a comment below!</h4>
            <hr className="py-3 mt-2" />

            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />

            <label className="block md-5">
              <span className="text-gray-700">Name</span>
              <input
                {...register("name", { required: true })}
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring"
                placeholder="John Bay"
                type="text"
              />
            </label>
            <label className="block md-5">
              <span>Email</span>
              <input
                {...register("email", { required: true })}
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring"
                placeholder="John Bay"
                type="email"
              />
            </label>
            <label className="block md-5">
              <span>Comment</span>
              <textarea
                {...register("comment", { required: true })}
                className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-green-500 outline-none focus:ring"
                placeholder="John Bay"
                rows={8}
              />
            </label>

            {/* Errors will return here */}
            <div className="flex flex-col p-5">
              {errors.name && (
                <span className="text-red-500">-The Name Field is required</span>
              )}
              {errors.comment && (
                <span className="text-red-500">
                  -The Comment Field is required
                </span>
              )}
              {errors.email && (
                <span className="text-red-500">-The Email Field is required</span>
              )}
            </div>

            <input
              type="submit"
              className="shadow bg-green-500 hover:bg-green-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            />
          </form>
        )}

        {/* Comment section */}
        <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-green-500 shadow space-y-2">
          <h3 className="text-4xl">Comments</h3>
          <hr className="pb-2" />

          {post.comment.map((comment) => (
            <div key={comment._id}>
              <p>
                <span className="text-green-600">{comment.name}: </span>
                {comment.comment}
              </p>
            </div>
          ))}

        </div>

      </div>
    </ContainerBlock>
  );
}

export default post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image,
        },
        'comment':  *[
          _type == "comment" && 
          post._ref == ^._id &&
          approved == true
        ],
        description,
        mainImage,
        slug,
        body
    }`;

  const post = await sanityClient.fetch(query, {
    slug: params.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60, //after 60 seconds, it revalidate
  };
};



/* const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image,
        },
        description,
        mainImage,
        slug,
        body
    }`; */