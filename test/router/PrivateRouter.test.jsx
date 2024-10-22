import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context"
import { PrivateRouter } from "../../src/router/PrivateRouter"
import { MemoryRouter } from "react-router-dom"


describe('Pruebas en <PrivateRouter />', () => {
    test('debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: "abc",
                name: "user name"
            }
        }
    
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                  <PrivateRouter>
                    <h1>Private route</h1>
                  </PrivateRouter>  
                </MemoryRouter>
            </AuthContext.Provider> 
        )
    
        // screen.debug();
    
        expect( screen.getByText("Private route")).toBeTruthy;
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/search?q=batman');
      
    })
    
  
})
