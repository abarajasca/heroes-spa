import { useState } from 'react'

export const useForm = ( { initialState }) => {
  const [formState,setFormState] = useState( initialState );

  const onChangeField = ( { target } ) => {
    setFormState({...formState, [target.name] : target.value });
  }

  const updateEntity= ( entity ) => {
    setFormState({...entity});
  }

  const reset = () => setFormState(initialState);

  return {
   formState,   
   onChangeField,
   updateEntity,
   reset
  }
}
