import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-6 text-red-200">
          <h2 className="mb-2 text-xl font-bold">Erro ao renderizar a aplicação</h2>
          <pre className="whitespace-pre-wrap text-sm text-red-100/90">
            {this.state.error?.message || 'Erro desconhecido'}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
