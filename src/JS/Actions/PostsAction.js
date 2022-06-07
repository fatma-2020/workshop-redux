import { ADD_POST, DELETE_POST, EDIT_POST, STATUS_POSTS, VERIFIED_POST } from "../Constants/ActionTypes";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};
export const editPost = (id,title,content) => {
  return {
    type: EDIT_POST,
    payload: {id,title,content}
  };
};
export const verifiedPost = (id) => {
  return {
    type: VERIFIED_POST,
    payload: id,
  };
};

export const statusPosts = (status) => {
  return {
    type: STATUS_POSTS,
    payload: status,
  };
};

