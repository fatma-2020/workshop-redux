import { v4 as uuidv4 } from "uuid";
import { ADD_POST, DELETE_POST, EDIT_POST, STATUS_POSTS, VERIFIED_POST,  } from "../Constants/ActionTypes";

const initialState = {
  status: "All",
  posts: [
    { id: uuidv4(), title: "html", content: "langage de balisage", isVerified:true  },
    { id: uuidv4(), title: "css", content: "langage de design" , isVerified:true },
    { id: uuidv4(), title: "Java script", content: "langage de programmation", isVerified:false }
  ],
};
export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { ...payload, id: uuidv4(),isVerified:false }],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
      case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((el)=>el.id===payload.id? {...el,title:payload.title,content:payload.content} : el),
      };
      case VERIFIED_POST:
      return {
        ...state,
        posts: state.posts.map((el)=>el.id===payload? {...el,isVerified:!el.isVerified} : el),
      };
      case STATUS_POSTS:
        return {
          ...state,status:payload
        };
      
    
    default:
      return state;
  }
};
