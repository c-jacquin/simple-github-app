jest.mock('Linking', () => {

  const getInitialURL = jest.fn()
  getInitialURL.mockReturnValueOnce({then: jest.fn()})

  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: getInitialURL
  }
})
