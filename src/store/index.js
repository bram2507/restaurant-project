import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import booking from "./modules/booking";
import navbar from "./modules/navbar";

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  namespaced: true,
  modules: {
    booking,
    navbar,
  },
});
