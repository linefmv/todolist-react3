import { render, screen, fireEvent} from '@testing-library/react'
import List from './List'

describe('List.jsx', () => {
  it('should be able to add a task', () => {
    render(<List />)

    const inputElement = screen.getByPlaceholderText('add new a task')
    const buttonElement = screen.getByTestId('add-task')
    
    fireEvent.change(inputElement, {
      target: {
        value: 'do homework'
      }
    })

    fireEvent.click(buttonElement)

    const addedFirstTaskTitle = screen.getByText('do homework')

    expect(addedFirstTaskTitle).toHaveTextContent('do homework')

    fireEvent.change(inputElement, {
      target: {
        value: 'study test'
      }
    })

    fireEvent.click(buttonElement)

    const addedSecondTaskTitle = screen.getByText('study test')
    expect(addedSecondTaskTitle).toHaveTextContent('study test')


  })

  it('should not be able to add task empty', () => {
    render(<List />)

    const buttonElement = screen.getByTestId('add-task')

    fireEvent.click(buttonElement)

    expect(screen.queryByTestId('task')).not.toBeInTheDocument()
  })

  it('should be able to delete a task', () => {
    render(<List />)

    const inputElement = screen.getByPlaceholderText('add new a task')
    const buttonElement = screen.getByTestId('add-task')
    
    fireEvent.change(inputElement, {
      target: {
        value: 'do homework'
      }
    })

    fireEvent.click(buttonElement)

    fireEvent.change(inputElement, {
      target: {
        value: 'study test'
      }
    })

    fireEvent.click(buttonElement)

    const addedFirstTaskTitle = screen.getByText('do homework')
    const addedSecondTaskTitle = screen.getByText('study test')

    expect(addedFirstTaskTitle).toBeInTheDocument()
    expect(addedSecondTaskTitle).toBeInTheDocument()

    const [addedFirstTaskTitleRemoveButon] = screen.getAllByTestId('remove-task')
    fireEvent.click(addedFirstTaskTitleRemoveButon)

    expect(addedFirstTaskTitle).not.toBeInTheDocument()
    expect(addedSecondTaskTitle).toBeInTheDocument()
  })
})



