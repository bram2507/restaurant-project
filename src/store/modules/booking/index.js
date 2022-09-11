import actions from "@/store/modules/booking/actions";
import getters from "@/store/modules/booking/getters";
import mutations from "@/store/modules/booking/mutations";

const state = {
  booking: {
    Edamame: {
      name: "Edamame",
      price: "4.40",
      cant: 0,
    },
    "Gyozas-de-Pollo": {
      name: "Gyozas-de-Pollo",
      price: "5.40",
      cant: 0,
    },
    "Gyozas-Vegetales": {
      name: "Gyozas-Vegetales",
      price: "4.90",
      cant: 0,
    },
    Ex: {
      name: "Ex",
      price: "12.40",
      cant: 0,
    },
    Veggie: {
      name: "Veggie",
      price: "10.90",
      cant: 0,
    },
    Tentación: {
      name: "Tentación",
      price: "13.40",
      cant: 0,
    },
    "Poke-de-Salmón": {
      name: "Poke-de-Salmón",
      price: "13.40",
      cant: 0,
    },
    "Noodles-de-pollo-y-vegetales": {
      name: "Noodles-de-pollo-y-vegetales",
      price: "10.90",
      cant: 0,
    },
    "Noodles-de-langostinos-y-vegetales": {
      name: "Noodles-de-langostinos-y-vegetales",
      price: "13.40",
      cant: 0,
    },
    "Maki-de-Red-Velvet": {
      name: "Maki-de-Red-Velvet",
      price: "6.90",
      cant: 0,
    },
    iva: 0,
    subTotal: 0,
  },
};

export default {
  nameaspace: true,
  state,
  actions,
  getters,
  mutations,
};
