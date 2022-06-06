import { v4 as uuidv4 } from "uuid";
import { ADD_POST, DELETE_POST } from "../Constants/ActionTypes";

const initialState = {
  show: false,
  posts: [
    { id: uuidv4(), title: "html", content: "langage de balisage" },
    { id: uuidv4(), title: "css", content: "langage de design" },
  ],
};
export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { ...payload, id: uuidv4() }],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    default:
      return state;
  }
};
