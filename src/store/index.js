import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import booking from "./modules/booking";
import nav from "./modules/booking";

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  namespaced: true,
  modules: {
    booking,
    nav,
  },
});
