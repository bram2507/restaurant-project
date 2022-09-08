const addItem = (state, item) => {
  item.id = Date.now();
  state.booking[item.id] = item;
};

const deleteItem = (state, item) => {
  let obj = state.booking.filter((e) => e.id !== item.id);
  state.booking = obj;
};

const clearCart = (state) => {
  state.booking = [];
};

export default {
  addItem,
  deleteItem,
  clearCart,
};
