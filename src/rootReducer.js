import { render } from '@testing-library/react';
import React, { Component } from 'react';

const initialState = {
 posts: [
     { id: "1", title: "First post", content: "This is a post" },
     { id: "2", title: "Second post", content: "This is a post" },
     { id: "3", title: "Third post", content: "This is a post" }
 ]
}
const rootReducer = ( state=initialState, action) => {
switch(action.type) {
 case "DELETE_POST":
  let newState = state.posts.filter(post => post.id === action.id)
    return {
     ...state,
     posts: newState
        }
         default: return state
         }
      }

export default rootReducer;