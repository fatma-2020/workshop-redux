import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../JS/Actions/PostsAction";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea onChange={(e) => setContent(e.target.value)}></textarea>
      <button
        onClick={() => {
          dispatch(addPost({ title, content }));
          navigate("/");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddPost;
