import { createStore, thunk, action } from 'easy-peasy';

const Posts = [
  {
    id: 1,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'desc',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  },
  {
    id: 2,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'desc',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  },
  {
    id: 3,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'desc',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  }
];

const serverFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Posts);
    }, 3000);
  });
};
const stores = createStore({
  postsList: {
    list: [],
    loadList: thunk(async (actions, payload) => {
      const data = await serverFetch();
      actions.listLoaded(data);
    }),
    listLoaded: action((state, payload) => {
      state.list.push(payload);
    })
  }
});

export default stores;
