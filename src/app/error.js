'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-[#003087] mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-8">We apologize for the inconvenience.</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-[#00BFB3] text-white px-6 py-2 rounded-md hover:bg-[#00a89d] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-block bg-[#003087] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 