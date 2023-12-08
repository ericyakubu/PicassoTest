import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import { PostType } from "../../type";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <>
      <p className={classes.post}>
        <span>
          {post.id}
          <b>{post.title}</b>
          {post.body}
        </span>
        <Link to={`/post/${post.id}`}>Просмотр</Link>
      </p>
    </>
  );
};

export default Post;
