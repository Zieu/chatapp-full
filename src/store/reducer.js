const reducer = (state = { input: "" }, action) => {
  switch (action.type) {
    case "CLEAR_INPUT":
      return {
        input: "",
      };
    default:
      return false;
  }
};

export default reducer;
