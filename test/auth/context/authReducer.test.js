import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas authReducer', () => {

  const initialState = {
     logged: false
  }  

  test('debe mostrar el estado inicial ', () => {
    const state = authReducer(initialState,{})
    expect( state ).toBe(initialState);
  })

  test('debe llamar el login y autenticar y establecer el usuario ', () => {
    const action = {
      type: types.login,
      payload: { ID: "ABC", name: "User name"}
    }

    const state = authReducer(initialState,action)
    expect( state ).toEqual({user: action.payload,logged: true});
  })

  test('debe llamar el logut y borrar el usuario y cambiar el estatus de logged', () => {
    const action = {
      type: types.logout
    }

    const state = authReducer({logged: true,user: {id: "123",name:"user name"}},action);    
    expect( state ).toEqual({logged: false });
    

  })
  
  
  
})
