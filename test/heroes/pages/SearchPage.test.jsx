import { fireEvent, render,screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom",()=> ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <SearchPage/>', () => {

    test('Debe de mostrarse correctamente los valores por defecto', () => {
    
    render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPage />
        </MemoryRouter>
    )

    // screen.debug();
    expect( screen.getByText("Batman") ).toBeTruthy;

  })

  test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {
    render(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <SearchPage />
        </MemoryRouter>
    )

    // screen.debug();
    expect( screen.getByText("No heroes with") ).toBeTruthy;
    
  })

  test('Debe de llamar el navigate a la pantalla nueva', () => {
    render(
        <MemoryRouter initialEntries={['/search']}>
            <SearchPage />
        </MemoryRouter>
    )

    const input = screen.getByRole("textbox");
    const search = screen.getByRole("button");

    fireEvent.change(input,{target: { value: 'spider'}});
    fireEvent.click(search);
    screen.debug();

    expect( mockUseNavigate ).toHaveBeenCalledWith('?q=spider');
  })
  
  
})
