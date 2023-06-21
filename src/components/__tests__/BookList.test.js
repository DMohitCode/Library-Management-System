
import { render, screen, cleanup} from '@testing-library/react'
import LibBookList from '../LIBList/BookList'

test('Should render BookList component', () => {
    render(<LibBookList/>)
    const toDoElement = screen.getByTestId('book-list')
    expect(toDoElement).toBeInTheDocument();
})