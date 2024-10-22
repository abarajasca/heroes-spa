import { types } from "../../../src/auth/types/types"

describe('Pruebas en los types', () => {
  test('debe regresar los types validos', () => {
    
    expect( types.login).toEqual("[Auth] Login");
    expect( types.logout).toEqual("[Auth] Logout");
  })
  
})
