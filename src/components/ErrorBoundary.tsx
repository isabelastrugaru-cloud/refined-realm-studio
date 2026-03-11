import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Ceva nu a funcționat
            </h2>
            <p className="font-inter text-muted-foreground mb-8">
              A apărut o eroare neașteptată. Vă rugăm să încercați din nou.
            </p>
            <Button
              variant="luxury"
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/';
              }}
            >
              Înapoi acasă
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
