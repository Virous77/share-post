import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/PostForm.css";

import { postActions } from "../features/postSlice";

const PostForm = () => {
  const users = useSelector((state) => state.users);

  const Dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserdId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => {
    setUserdId(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      Dispatch(postActions.postAdd(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const userOption = users.map((user) => (
    <option key={user.id} value={user.Id}>
      {user.name}
    </option>
  ));

  return (
    <section className="post-bar">
      <h2>Add a New Post</h2>
      <form className="post-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="postTitle"> Post Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTile"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label htmlFor="postAuthor">Author</label>
          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChange}
            className="choose-author"
          >
            <option value=""></option>
            {userOption}
          </select>
        </div>
        <div>
          <label htmlFor="postContent">Post Content</label>
          <textarea
            name="postContent"
            id="postContent"
            value={content}
            onChange={onContentChange}
          />
        </div>

        <button onClick={onSavePostClicked} type="button">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default PostForm;
