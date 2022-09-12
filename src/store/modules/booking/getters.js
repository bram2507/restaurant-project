const getBooking = (state) => {
  return state.booking;
};

const iva = (state) => {
  return state.booking.iva;
};

const subTotal = (state) => {
  return state.booking.subTotal;
};

const nav = (state) => {
  return state.nav;
};

export default {
  getBooking,
  iva,
  subTotal,
  nav,
};
