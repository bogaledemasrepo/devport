import { FooterNewsletter } from '@/components/news-latter'
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, it, describe, vi } from 'vitest'

describe('Newsletter Component', () => {
  it('updates the ref and can be submitted', async () => {
    // We mock the fetch call
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<FooterNewsletter />)
    
    const input = screen.getByPlaceholderText(/email address/i)
    const button = screen.getByRole('button')

    // Simulate typing
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect((input as HTMLInputElement).value).toBe('test@example.com')

    // Simulate click
    fireEvent.click(button)
    
    // Check if fetch was called
    expect(global.fetch).toHaveBeenCalledWith('/api/newsletter', expect.anything())
  })
})