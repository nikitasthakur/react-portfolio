import { Component } from 'react';
import PropTypes from 'prop-types';

class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Check for various WebGL and Three.js related errors
    const errorMessage = error.message || '';
    const isWebGLError = errorMessage.includes('WebGL') || 
                        errorMessage.includes('Error creating WebGL context') ||
                        errorMessage.includes('context creation') ||
                        error.name === 'WebGLContextCreationError';
    
    if (isWebGLError) {
      return { hasError: true, errorMessage };
    }
    
    // Also catch general rendering errors
    return { hasError: true, errorMessage: 'Graphics rendering error' };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('WebGL Error caught by boundary:', error.message, errorInfo);
    
    // Additional error handling for uncaught WebGL errors
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        if (event.error && event.error.message && event.error.message.includes('WebGL')) {
          this.setState({ hasError: true, errorMessage: event.error.message });
        }
      });
    }
  }

  componentDidMount() {
    // Listen for unhandled errors that might escape the boundary
    const handleGlobalError = (event) => {
      if (event.error && event.error.message && 
          (event.error.message.includes('WebGL') || 
           event.error.message.includes('Error creating WebGL context'))) {
        this.setState({ hasError: true, errorMessage: event.error.message });
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleGlobalError);
    this.globalErrorHandler = handleGlobalError;
  }

  componentWillUnmount() {
    if (this.globalErrorHandler) {
      window.removeEventListener('error', this.globalErrorHandler);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🖥️</div>
            <h3 className="text-white text-xl mb-2">3D Graphics Unavailable</h3>
            <p className="text-gray-400 text-sm">
              WebGL is not supported or disabled in your browser
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

WebGLErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

export default WebGLErrorBoundary;