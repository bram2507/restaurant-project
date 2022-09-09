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
export default { addItem, deleteItem, subTotal, iva };
