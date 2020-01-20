import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should exist', () => {
    const { container } = render(<App />)

    expect(getByTestId(container, 'heading').textContent).toBe('Hello React App')
  })
})
