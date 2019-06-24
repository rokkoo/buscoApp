// import { createStore, thunk, action } from 'easy-peasy';
import { createStore } from 'redux';

const initial_state = {
  posts: []
};

const pageData = (state = initial_state, action) => {
  switch (action.type) {
    case 'LOAD_PAGE': {
      return { ...state, posts: [...action.posts, ...state.posts] };
    }
    default:
      return state;
  }
};

const store = createStore(pageData);

// const stores = createStore({
//   postsList: {
//     list: [],
//     loadList: thunk(async (actions, payload) => {
//       const data = await serverFetch();
//       actions.listLoaded(data);
//     }),
//     listLoaded: action((state, payload) => {
//       state.list.push(payload);
//     })
//   }
// });

export default store;
