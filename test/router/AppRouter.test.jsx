import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context"
import { AppRouter } from "../../src/router/AppRouter"


describe('Pruebas en <AppRouter/>', () => {

  test('Debe de mostrar el login si no esta authenticado', () => {
    const contextValue = {
        logged: false,
        
    }    

    render( 
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={ contextValue}>
                <AppRouter></AppRouter>
            </AuthContext.Provider>
        </MemoryRouter>
    )

    // screen.debug();
    expect( screen.getByText("Login Page")).toBeTruthy;
  })

  test('Debe mostrar el componente de Marvel si esta aunthenticado ', () => {
    const contextValue = {
        logged: true,
        user: {
            id: "abc",
            name: "user name"
        }
    }    

    render( 
        <MemoryRouter initialEntries={['/login']}>
            <AuthContext.Provider value={ contextValue}>
                <AppRouter></AppRouter>
            </AuthContext.Provider>
        </MemoryRouter>
    )

    // screen.debug();
    expect( screen.getByText("MarvelPage")).toBeTruthy;
  })
  
  
})
