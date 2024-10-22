import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context"
import { PublicRouter } from "../../src/router/PublicRouter"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <PublicRouter />', () => {
  test('debe de mostrar el children si no esta autenticado', () => {

    const contextValue = {
        logged: false
    }

    render( 
        <AuthContext.Provider value={ contextValue }>
            <PublicRouter>
                <h1>Public route</h1>
            </PublicRouter>
        </AuthContext.Provider> 
    )

    expect( screen.getByText("Public route")).toBeTruthy
  })

  test('debe de navegar a paginas internas si esta autenticado',()=>{
    
    const contextValue = {
        logged: true,
        user: {
            id: "abc",
            name: "user name"
        }
    }

    render( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login/*']}>
                <PublicRouter>
                    <h1>Public route</h1>
                </PublicRouter>
            </MemoryRouter>
            
        </AuthContext.Provider> 
    )

    // screen.debug();

    expect( screen.getByText("Asociaciones")).toBeTruthy;

  })
  
})
