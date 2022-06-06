import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";

const ListPost = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  return (
    <>
      {" "}
      <h1>ListPost</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default ListPost;
