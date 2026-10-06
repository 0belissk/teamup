import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import App from './App'

vi.mock('./api/apiClient', () => ({
  getHealth: vi.fn().mockResolvedValue({
    service: 'teamup-api',
    status: 'UP',
  }),
}))

describe('App', () => {
  it('renders the TeamUp home page', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'TeamUp' })).toBeInTheDocument()
    expect(await screen.findByText('Backend Status: Connected')).toBeInTheDocument()
  })
})