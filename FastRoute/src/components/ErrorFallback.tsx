import { FallbackProps } from 'react-error-boundary'

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary-red mb-4">Something went wrong</h2>
        <pre className="text-sm text-neutral-gray mb-4">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}