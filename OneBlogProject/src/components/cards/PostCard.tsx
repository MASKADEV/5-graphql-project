import React from "react";

interface props {
  title: string;
  excerpt: string;
}

const PostCard: React.FC<props> = ({ title, excerpt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
