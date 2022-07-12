import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../../../services";

interface props {
  categories?: string;
  slug?: string;
}

const PostWidget: React.FC<props> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result: any) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPosts().then((result: any) => setRelatedPost(result));
    }
  }, [slug, categories]);

  console.log(relatedPosts);

  return <div>Post Widget</div>;
};

export default PostWidget;
