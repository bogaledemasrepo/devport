import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

// A simple component to test
function Hero() {
  return (
    <div>
      <h1>Welcome to my Portfolio</h1>
      <button>Get Started</button>
    </div>
  )
}

describe('Hero Component', () => {
  it('should render the correct heading', () => {
    render(<Hero />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/welcome to my portfolio/i)
  })

  it('should show the get started button', () => {
    render(<Hero />)
    
    const button = screen.getByRole('button', { name: /get started/i })
    expect(button).toBeInTheDocument()
  })
})