import React from "react";
import moment from "moment";
import Link from "next/link";

interface props {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  photo: string;
  author: { name: string };
  createdAt: string;
}

const PostCard: React.FC<props> = (props) => {
  // console.log(props);

  return (
    <div className="bg-white shadow-md rounded-lg  p-0 lg:p-8 pb-12 mb-8">
      <div className=" relative overflow-hidden shadow pb-8 mb-6">
        <img
          src={props.image}
          alt="thumbnail Image"
          className="object-top absulot h-80 w-full object-cover shadow-lg rounded-t-lg"
        />
      </div>
      <h1 className=" transition duration-700 text-center mb-2 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${props.slug}`}>{props.title}</Link>
      </h1>
      <div className="flex flex-row items-center justify-start text-gray-400  mb-8 w-full">
        <p className=" ml-2 mr-4">{props.author.name}</p>
        <div className="font-medium ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(props.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {props.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${props.slug}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
