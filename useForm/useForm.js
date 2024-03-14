import { useState } from "react";

export const useForm = (initalForm = {}) => {
  const [formState, setFormState] = useState(initalForm);

  // const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState( initalForm );

  }

  return {
    // tips, desestructurar e formState 
    ...formState,
    // funcin para cambiarlo
    formState,
    // valor de formulario
    onInputChange,
    onResetForm,
  };
};
