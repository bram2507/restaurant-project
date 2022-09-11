const addItem = ({ commit }, item) => {
  commit("addItem", item);
};

const deleteItem = ({ commit }, item) => {
  commit("deleteItem", item);
};

const subTotal = ({ commit }, subTotal) => {
  commit("subTotal", subTotal);
};

const iva = ({ commit }, iva) => {
  commit("iva", iva);
};

const clearCart = ({ commit }) => {
  commit("clearCart");
};
export default { addItem, deleteItem, subTotal, iva, clearCart };
