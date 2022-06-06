import { combineReducers } from "redux";
import { postsReducer } from "./PostsReducer";
import { usersReducer } from "./UsersReducer";

export const rootReducer = combineReducers({ postsReducer, usersReducer });
