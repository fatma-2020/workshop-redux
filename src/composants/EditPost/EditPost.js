import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPost, editPost } from "../../JS/Actions/PostsAction";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idEdit } = useParams();
  const post = useSelector((state) =>
    state.postsReducer.posts.find((el) => el.id === idEdit)
  );
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          dispatch(editPost(idEdit, title, content));
          navigate(-1);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditPost;
