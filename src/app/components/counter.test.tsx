import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './counter'

describe('Counter Component', () => {
  it('displays initial value 0', () => {
    render(<Counter />)
    expect(screen.getByRole('heading')).toHaveTextContent('0')
  })

  it('increments counter on "+" click', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('+')
    
    fireEvent.click(incrementButton)
    expect(screen.getByRole('heading')).toHaveTextContent('1')
    
    fireEvent.click(incrementButton)
    expect(screen.getByRole('heading')).toHaveTextContent('2')
  })

  it('decrements counter on "-" click', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('+')
    const decrementButton = screen.getByText('-')
    
    // Increase to 2 before testing decrement
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    
    fireEvent.click(decrementButton)
    expect(screen.getByRole('heading')).toHaveTextContent('1')
    
    fireEvent.click(decrementButton)
    expect(screen.getByRole('heading')).toHaveTextContent('0')
  })

  it('does not decrement below 0', () => {
    render(<Counter />)
    const decrementButton = screen.getByText('-')
    
    fireEvent.click(decrementButton)
    expect(screen.getByRole('heading')).toHaveTextContent('0')
    
    fireEvent.click(decrementButton)
    expect(screen.getByRole('heading')).toHaveTextContent('0')
  })

  it('disables "-" button when value is 0', () => {
    render(<Counter />)
    const decrementButton = screen.getByText('-')
    
    expect(decrementButton).toBeDisabled()
    
    // Increase and verify button is enabled
    fireEvent.click(screen.getByText('+'))
    expect(decrementButton).toBeEnabled()
    
    // Decrease back to 0
    fireEvent.click(decrementButton)
    expect(decrementButton).toBeDisabled()
  })
})