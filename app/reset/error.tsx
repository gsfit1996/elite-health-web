'use client';

import * as React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Reset page error:', error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong.</h1>
      <p className="text-sm opacity-80">
        Please try again. If this keeps happening, go back home and retry.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
      >
        Try again
      </button>

      <a href="/" className="text-sm underline underline-offset-4 hover:opacity-80">
        Back to home
      </a>
    </div>
  );
}
