interface ErrorMessageProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

export function ErrorMessage({
  title = 'Something went wrong',
  message = 'An unexpected error occurred',
  retry
}: ErrorMessageProps) {
  return (
    <div className="rounded-lg bg-red-50 p-6">
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        {title}
      </h3>
      <p className="text-red-600 mb-4">
        {message}
      </p>
      {retry && (
        <button
          onClick={retry}
          className="text-sm text-red-800 hover:text-red-900 underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}