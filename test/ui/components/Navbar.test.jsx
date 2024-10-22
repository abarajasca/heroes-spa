import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext,AuthProvider } from "../../../src/auth/context"
import { Navbar } from "../../../src/ui/components/Navbar"
import { fireEvent, render,screen } from "@testing-library/react"

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom",()=> ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar/>', () => {

  test('Debe de mostrar el nombre del usuario', () => {
 
    const contextValue = {
      user: {
        id: '123',
        name: 'user name'
      }
    }

    render(
      <MemoryRouter>
        <AuthContext.Provider value={ contextValue }>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    )  

    // screen.debug();
    expect( screen.getByText( contextValue.user.name)).toBeTruthy;

  })

  test('Debe de llamar logout y navigate cuando se hace click en el boton de logout', () => {
    
    const logoutMock = jest.fn();    

    const contextValue = {
      user: {
        id: '123',
        name: 'user name'
      },
      logout: logoutMock
    }
   

    render(
      <MemoryRouter>
        <AuthContext.Provider value={ contextValue }>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    )  

    // screen.debug();
    const btn = screen.getByRole("button");

    fireEvent.click( btn );
    expect( logoutMock ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith('/login',{replace: true});   
   
  })
  
  
})
