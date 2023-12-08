import React from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./PostPage.module.css";
import { getPost } from "../../api/postApi";
import { useQuery } from "react-query";
import { PostType } from "../../type";

const PostPage: React.FC = () => {
  const { postId } = useParams();

  const { isSuccess, data } = useQuery<PostType, Error>("post", () =>
    postId ? getPost(postId) : Promise.reject("postId is undefined")
  );

  if (isSuccess)
    return (
      <div className={classes.container}>
        <div className={classes.post}>
          <p className={classes.post_head}>
            Post: {data.id} <span>User: {data.userId}</span>
          </p>
          <p className={classes.post_title}>{data.title}</p>
          <p>{data.body}</p>
          <Link to={".."}>Назад</Link>
        </div>
      </div>
    );
};

export default PostPage;
