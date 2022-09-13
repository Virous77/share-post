import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "./features/postSlice";

const NewApp = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [change, setChange] = useState(true);

  const themeChangeHandler = () => {
    setChange(!change);
  };

  const fetchPosts = () => {
    return async (dispatch) => {
      const fetchPost = async () => {
        const res = await fetch(
          "https://posts-6fdae-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
        );

        if (!res.ok) {
          throw new Error("Could not fetch cart data!");
        }

        const data = res.json();

        return data;
      };

      const postData = await fetchPost();
      dispatch(
        postActions.replacePost({
          posts: postData.posts,
        })
      );
    };
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  /////////////////////////////////////////////////////
  useEffect(() => {
    const sendPost = async () => {
      const res = await fetch(
        "https://posts-6fdae-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        {
          method: "PUT",
          body: JSON.stringify(post),
        }
      );
      if (!res.ok) {
        throw new Error("Sending cart data failed.");
      }

      const resData = await res.json();
    };

    sendPost(post);
  }, [post]);

  return (
    <div className={`App ${change ? "light" : "dark"}`}>
      <main>
        <Header change={change} onThemeChange={themeChangeHandler} />
        <PostForm />
        <Footer />
      </main>
      <PostList />
    </div>
  );
};

export default NewApp;
