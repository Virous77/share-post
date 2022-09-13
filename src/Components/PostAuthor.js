import { useSelector } from "react-redux";
import React from "react";
import "./styles/PostList.css";

const PostAuthor = ({ userId }) => {
  const users = useSelector((state) => state.users);

  const author = users.find((user) => user.name === userId);

  return (
    <span className="author">by {author ? author.name : "Unknow author"}</span>
  );
};

export default PostAuthor;
