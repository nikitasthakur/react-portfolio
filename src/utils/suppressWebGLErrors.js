// Utility to suppress WebGL-related console errors and warnings
export const suppressWebGLErrors = () => {
  // Store original console methods
  const originalError = console.error;
  const originalWarn = console.warn;

  // List of WebGL-related error patterns to suppress (only the noisy ones)
  const webglErrorPatterns = [
    /THREE\.WebGLRenderer: A WebGL context could not be created/i,
    /THREE\.WebGLRenderer: Error creating WebGL context/i,
    /BindToCurrentSequence failed/i,
    /ANGLE.*SwiftShader/i,
    /WebGL.*not supported.*browser/i
  ];

  // Check if a message should be suppressed
  const shouldSuppress = (message) => {
    const messageStr = String(message);
    return webglErrorPatterns.some(pattern => pattern.test(messageStr));
  };

  // Override console.error
  console.error = (...args) => {
    if (args.length > 0 && shouldSuppress(args[0])) {
      return; // Suppress specific WebGL errors
    }
    originalError.apply(console, args);
  };

  // Override console.warn
  console.warn = (...args) => {
    if (args.length > 0 && shouldSuppress(args[0])) {
      return; // Suppress specific WebGL warnings
    }
    originalWarn.apply(console, args);
  };

  // Return cleanup function
  return () => {
    console.error = originalError;
    console.warn = originalWarn;
  };
};