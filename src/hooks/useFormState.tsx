import { useState } from "react";

const useFormState = () => {
  const [state, setState] = useState({
    recover: false,
    signIn: true,
    signUp: false,
    signUpPage: 1,
    completed: false,
  });

  const toggleSignIn = () => {
    setState((prevState) => ({
      ...prevState,
      recover: false,
      signIn: true,
      signUp: false,
    }));
  };

  const toggleSignUp = () => {
    setState((prevState) => ({
      ...prevState,
      recover: false,
      signIn: false,
      signUp: true,
    }));
  };

  const toggleRecover = () => {
    setState((prevState) => ({
      ...prevState,
      recover: true,
      signIn: false,
      signUp: false,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (state.signUpPage === 1) {
      setState((prevState) => ({
        ...prevState,
        signUpPage: 2,
      }));
    } else if (state.signUp && state.signUpPage === 2) {
      console.log("dispatched!");
      setState((prevState) => ({
        ...prevState,
        recover: false,
        signIn: false,
        signUp: false,
        completed:true
      }));
    } else if (state.recover) {
      console.log("recovered!");
    } else {
      console.log("singned in!");
    }
  };

  const handleBack = () => {
    setState((prevState) => ({
      ...prevState,
      signUpPage: 1,
    }));
  };

  return {
    state,
    toggleSignIn,
    toggleSignUp,
    toggleRecover,
    handleSubmit,
    handleBack,
  };
};

export default useFormState;