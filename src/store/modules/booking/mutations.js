const addItem = (state, item) => {
  state.booking[item.name].cant++;
};

const deleteItem = (state, item) => {
  state.booking[item.name].cant <= 0
    ? (state.booking[item.name].cant = 0)
    : state.booking[item.name].cant--;
};

const iva = (state, iva) => {
  state.booking.iva = iva;
};

const subTotal = (state, subTotal) => {
  state.booking.subTotal = subTotal;
};

const clearCart = (state) => {
  state.booking = [];
};

export default {
  addItem,
  deleteItem,
  iva,
  subTotal,
  clearCart,
};
