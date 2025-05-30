'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the LocationMap component with no SSR
const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading map...</div>
    </div>
  ),
});

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F7F7] to-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003087] mb-4">
          Our <span className="text-[#00BFB3]">Locations</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Find your nearest ESOFT Metro Campus in Colombo. We have multiple branches 
          across the city to serve you better.
        </p>
      </div>

      {/* Map Container */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Suspense fallback={
            <div className="h-[600px] w-full flex items-center justify-center bg-gray-100">
              <div className="text-gray-600">Loading map...</div>
            </div>
          }>
            <LocationMap />
          </Suspense>
        </div>
      </div>
    </div>
  );
} 