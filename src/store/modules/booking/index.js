import actions from "@/store/modules/booking/actions";
import getters from "@/store/modules/booking/getters";
import mutations from "@/store/modules/booking/mutations";

const state = {
  booking: [],
};

export default {
  nameaspace: true,
  state,
  actions,
  getters,
  mutations,
};
