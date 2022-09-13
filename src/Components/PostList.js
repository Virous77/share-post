import React from "react";
import { useSelector } from "react-redux";
import "./styles/PostList.css";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useSelector((state) => state.post.posts);

  console.log(posts);
  const orderPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderPost.map((post) => (
    <article key={post.id} className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="author-info">
        <p>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButton post={post} />
      </div>
    </article>
  ));

  return (
    <section className="section">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
