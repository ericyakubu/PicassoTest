import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../api/postApi";
import Post from "../../components/Post";
import { PostType } from "../../type";
const LandingPage: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const { isSuccess, data } = useQuery("posts", () => getPosts());

  const fetchMorePosts = () => {
    if (isSuccess && data) {
      setPosts((prev) => [...prev, ...data]);
    }
  };
  const scrollHandler = () => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    const scrollLeft = scrollHeight - (clientHeight + scrollTop);
    if (scrollLeft < clientHeight * 0.75) {
      fetchMorePosts();
    }
  };
  useEffect(() => {
    if (isSuccess) setPosts(data);
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [data, isSuccess]);

  if (isSuccess)
    return (
      <>
        {posts.length >= 1 && (
          <>
            {posts.map((post, i) => (
              <Post post={post} key={i} />
            ))}
          </>
        )}
      </>
    );
};

export default LandingPage;
