import { useDispatch } from "react-redux";
import { postActions } from "../features/postSlice";
import React from "react";
import "./styles/PostList.css";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😯",
  heart: "❤️",
  rocket: "🚀",
  coffee: "🍵",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionsButtons = Object.entries(reactionEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          className="reaction-button"
          key={name}
          type="button"
          onClick={() =>
            dispatch(
              postActions.reactionAdded({ postId: post.id, reaction: name })
            )
          }
        >
          {emoji}
          {post.reactions[name]}
        </button>
      );
    }
  );

  return <div>{reactionsButtons}</div>;
};

export default ReactionButton;
