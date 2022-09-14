import actions from "@/store/modules/navbar/actions";
import getters from "@/store/modules/navbar/getters";
import mutations from "@/store/modules/navbar/mutations";

const state = {
  navbar: false,
};

export default {
  nameaspace: true,
  state,
  actions,
  getters,
  mutations,
};
