const addItem = (state, item) => {
  console.log("Añadir item", item);
  state.booking.push(item);
};

const deleteItem = (state, item) => {
  console.log("Eliminar de la compra", item);
  state.booking = null;
};

export default {
  addItem,
  deleteItem,
};
