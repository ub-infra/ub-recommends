import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onClick?: () => void; // Optional onClick handler prop
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can log the error to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 400,
          }}
        >
          <p style={{ fontSize: 16, color: "#272722a", textAlign: "center" }}>
            Something went wrong.
          </p>
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "red",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Please ensure that your face is well-lit and the images are clear to
            achieve accurate results.
          </p>
          <div
            onClick={() => this.handleClick()}
            style={{
              backgroundColor: "#27272a",
              borderRadius: 6,
              padding: "8px 16px",
              display: "flex",
              justifyContent: "center",
              marginTop: 24,
              alignSelf: "flex-end",
              cursor: "pointer",
            }}
          >
            Ok, Thanks
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
