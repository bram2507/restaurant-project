const getBooking = (state) => {
  return state.booking;
};

const iva = (state) => {
  return state.booking.iva;
};

const subTotal = (state) => {
  return state.booking.subTotal;
};

export default {
  getBooking,
  iva,
  subTotal,
};
