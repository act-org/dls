export const mockResizeObserver = (): void => {
  const { ResizeObserver } = window;

  beforeEach((): void => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
  });

  afterEach((): void => {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
  });
};

export default mockResizeObserver;
