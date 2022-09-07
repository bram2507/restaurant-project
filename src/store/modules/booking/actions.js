const addItem = ({ commit }, item) => {
  commit("addItem", item);
};

const deleteItem = ({ commit }, item) => {
  commit("deleteItem", item);
};
export default { addItem, deleteItem };
