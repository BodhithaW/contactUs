'use client';

import { useEffect, useRef } from 'react';

const locations = [
  {
    name: 'ESOFT Metro Campus - Head Office',
    coords: [6.8868, 79.8563],
    address: 'No.03, De Fonseka Place, Colombo 04'
  },
  {
    name: 'ESOFT Metro Campus - Wattala',
    coords: [6.9775, 79.8926],
    address: 'No 274, Negombo Road, Wattala'
  },
  {
    name: 'ESOFT Metro Campus - Mount Lavinia',
    coords: [6.8296, 79.8625],
    address: 'No.100, Galle Road, Mount Lavinia'
  },
  {
    name: 'ESOFT Metro Campus - Nugegoda',
    coords: [6.8721, 79.8886],
    address: 'No 68, Stanley Thilakaratne Mawatha, Nugegoda'
  },
  {
    name: 'ESOFT College - Pitakotte',
    coords: [6.8902, 79.9031],
    address: 'No 344, Kotte Road, Pitakotte'
  }
];

export default function LocationMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      try {
        // Import Leaflet dynamically
        const L = (await import('leaflet')).default;

        // Initialize the map if it hasn't been initialized yet
        if (!mapRef.current._leaflet) {
          const map = L.map(mapRef.current).setView([6.9271, 79.8612], 12);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Add markers for each location
          locations.forEach(location => {
            const marker = L.marker(location.coords)
              .bindPopup(`
                <div style="padding: 1rem;">
                  <h3 style="color: #003087; font-weight: bold; font-size: 1.1rem; margin-bottom: 0.5rem;">
                    ${location.name}
                  </h3>
                  <p style="color: #666666;">
                    ${location.address}
                  </p>
                </div>
              `)
              .addTo(map);

            // Open popup on hover
            marker.on('mouseover', function() {
              this.openPopup();
            });
          });

          // Store the map instance
          mapRef.current._leaflet = map;
        }
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    // Initialize the map
    initMap();

    // Cleanup function
    return () => {
      if (mapRef.current?._leaflet) {
        mapRef.current._leaflet.remove();
        mapRef.current._leaflet = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height: '500px', 
        width: '100%',
        position: 'relative',
        zIndex: 0 
      }} 
    />
  );
} 