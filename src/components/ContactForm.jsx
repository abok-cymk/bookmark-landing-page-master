import { useCallback, useReducer } from "react";
import { actionTypes, initialState, reducer } from "../utils/formReducer";
import Input from "./Input";

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    let type;

    switch (name) {
      case "email":
        type = actionTypes.SET_EMAIL;
        break;
      default:
        return;
    }
    dispatch({ type, payload: value });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const stateAfterSubmitValidation = reducer(state, {
        type: actionTypes.SUBMIT_FORM,
      });
      dispatch({ type: actionTypes.SUBMIT_FORM });

      const hasErrors = Object.values(stateAfterSubmitValidation.errors).some(
        (error) => error !== ""
      );

      if (!hasErrors) {
        dispatch({ type: actionTypes.RESET_FORM });
      }
    },

    [state, dispatch]
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="flex md:flex-row flex-col justify-center gap-4 w-full"
    >
      <div className="">
        <label htmlFor="email_address" className="sr-only">
          Email address
        </label>
        <Input
          value={state.email}
          error={state.errors.email}
          onChange={handleChange}
          id="email_address"
        />
      </div>
      <button
        type="submit"
        className="bg-Red-400 px-4 py-1.5 rounded-md cursor-pointer hover:bg-Grey-50 h-fit hover:text-Red-400 hover:outline-2 transition-colors duration-200 ease-in"
      >
        Contact Us
      </button>
    </form>
  );
};

export default ContactForm;
