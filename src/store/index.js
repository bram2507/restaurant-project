import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import booking from "./modules/booking";

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    booking,
  },
});
