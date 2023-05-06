import resso from 'resso'

const store = resso({
  count: 0,
  text: 'hello',
  inc: () => store.count++
});

export default store;
