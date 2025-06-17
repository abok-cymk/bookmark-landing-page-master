
export const initialState = {
    email: "",
    errors: {},
};

export const actionTypes = {
  SET_EMAIL: "EMAIL_ADDRESS",
  SUBMIT_FORM: "SUBMIT",
  RESET_FORM: "RESET",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL: {
      let emailError = "";
      if (action.payload && !emailRegex.test(action.payload)) {
        emailError = "whoops, make sure it's an email";
      }
      return {
        ...state,
        email: action.payload,
        errors: { ...state.errors, email: emailError },
      };
    }

    case actionTypes.SUBMIT_FORM: {
      const errors = {};
      if (!state.email) {
        errors.email = "Email Address cannot be empty";
      } else if (!emailRegex.test(state.email)) {
        errors.email = "Whoops, make sure it's an email";
      }
      return {
        ...state,
        errors,
      };
    }
    case actionTypes.RESET_FORM:
      return initialState;
    default:
      return state;
  }
};