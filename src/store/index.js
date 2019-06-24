import { createStore } from "redux";

const initial_state = {
  posts: []
};

const pageData = (state = initial_state, action) => {
  switch (action.type) {
    case "LOAD_PAGE": {
      return { ...state, posts: [...action.posts, ...state.posts] };
    }
    case "DELETE_POST": {
      const filterPosts = state.posts.filter(({ id }) => id != action.id);
      console.log("acaba ->", action.id);
      return { ...state, posts: [...filterPosts] };
    }
    default:
      return state;
  }
};

const store = createStore(pageData);

export default store;
