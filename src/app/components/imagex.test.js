import { render, screen } from '@testing-library/react'
import ImageX from './imagex' // Path to component


// Mock next/image for tests

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Create a regular img with the same props
    return <img {...props} />
  },
}))


describe('ImageX Component', () => {
  it('displays "Brain" heading', () => {
    render(<ImageX />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Brain')
  })

  it('displays image with correct attributes', () => {
    render(<ImageX />)
    
    const image = screen.getByTestId('imagex')
    expect(image).toBeInTheDocument()
    
    // Check basic attributes
    expect(image).toHaveAttribute('src', '/X-brain.png')
    expect(image).toHaveAttribute('alt', 'Brain')
    expect(image).toHaveAttribute('width', '200')
    expect(image).toHaveAttribute('height', '200')
    
    // Check Next.js classes (if needed)
    // expect(image).toHaveClass('next/image')
  })

  it('image has correct src for different environments', () => {
    // Use Object.defineProperty to test absolute paths
    const originalProcessEnv = process.env
    
    process.env = {
      ...originalProcessEnv,
      NEXT_PUBLIC_BASE_PATH: '',
    }
    
    render(<ImageX />)
    const image = screen.getByTestId('imagex')
    
    // If your project uses basePath
    if (process.env.NEXT_PUBLIC_BASE_PATH) {
      expect(image).toHaveAttribute('src', `${process.env.NEXT_PUBLIC_BASE_PATH}/X-brain.png`)
    } else {
      expect(image).toHaveAttribute('src', '/X-brain.png')
    }
    
    // Restore original process.env
    process.env = originalProcessEnv
  })
  
})
