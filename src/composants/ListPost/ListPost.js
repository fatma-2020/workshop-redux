import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";

const ListPost = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const status = useSelector((state) => state.postsReducer.status);
  return (
    <>
      {" "}
      <h1>ListPost</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {status=="All"?
        posts.map((post) => (
          <Post key={post.id} post={post} />
        )):status=="Verified"? posts.filter(el=>el.isVerified).map((post) => (
          <Post key={post.id} post={post} />
        )):posts.filter(el=>!el.isVerified).map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
      </div>
    </>
  );
};

export default ListPost;
