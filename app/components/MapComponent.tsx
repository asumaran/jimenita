'use client';

import { APIProvider, Map, AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import { useState } from 'react';

const PARQUE_ENTRANCE = {
  lat: -11.927194,
  lng: -77.048611
};

const PARTY_LOCATION = {
  lat: -11.922556,
  lng: -77.050250
};

// Centro del mapa entre ambos puntos
const MAP_CENTER = {
  lat: (PARQUE_ENTRANCE.lat + PARTY_LOCATION.lat) / 2,
  lng: (PARQUE_ENTRANCE.lng + PARTY_LOCATION.lng) / 2
};

export default function MapComponent() {
  const [entranceInfoOpen, setEntranceInfoOpen] = useState(true);
  const [partyInfoOpen, setPartyInfoOpen] = useState(true);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <APIProvider apiKey={apiKey}>
      <div className="w-full h-[600px]">
        <Map
          defaultCenter={MAP_CENTER}
          defaultZoom={16}
          mapId="DEMO_MAP_ID"
          mapTypeId="hybrid"
          disableDefaultUI={false}
          zoomControl={true}
          gestureHandling="greedy"
          className="w-full h-full"
        >
          {/* Marcador de la entrada del parque */}
          <AdvancedMarker
            position={PARQUE_ENTRANCE}
            onClick={() => setEntranceInfoOpen(!entranceInfoOpen)}
          >
            <Pin
              background="#5B9BD5"
              glyphColor="#FFFFFF"
              borderColor="#4A90E2"
            />
          </AdvancedMarker>

          {entranceInfoOpen && (
            <InfoWindow
              position={PARQUE_ENTRANCE}
              onCloseClick={() => setEntranceInfoOpen(false)}
              headerDisabled
              pixelOffset={[0, -20]}
            >
              <div className="relative p-3 pr-8">
                <button
                  onClick={() => setEntranceInfoOpen(false)}
                  className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <span className="text-gray-500 text-xl leading-none">×</span>
                </button>
                <h3 className="font-bold text-base text-[#5B9BD5] mb-1">
                  📍 Entrada del Parque
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Parque Zonal Sinchi Roca
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${PARQUE_ENTRANCE.lat},${PARQUE_ENTRANCE.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm inline-block"
                >
                  Cómo llegar →
                </a>
              </div>
            </InfoWindow>
          )}

          {/* Marcador del lugar de la fiesta */}
          <AdvancedMarker
            position={PARTY_LOCATION}
            onClick={() => setPartyInfoOpen(!partyInfoOpen)}
          >
            <Pin
              background="#FF8C42"
              glyphColor="#FFFFFF"
              borderColor="#FF6B1A"
            />
          </AdvancedMarker>

          {partyInfoOpen && (
            <InfoWindow
              position={PARTY_LOCATION}
              onCloseClick={() => setPartyInfoOpen(false)}
              headerDisabled
              pixelOffset={[0, -20]}
            >
              <div className="relative p-3 pr-8">
                <button
                  onClick={() => setPartyInfoOpen(false)}
                  className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <span className="text-gray-500 text-xl leading-none">×</span>
                </button>
                <h3 className="font-bold text-base text-[#FF8C42] mb-1">
                  🎉 ¡Aquí es la Fiesta!
                </h3>
                <p className="text-sm text-gray-600">
                  Lagunita - Lugar del cumpleaños
                </p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
