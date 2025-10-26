'use client';

import MapComponent from './components/MapComponent';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFE8CC] font-sans">
      {/* Barra de Navegación */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#5B9BD5] to-[#4A90E2] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between md:justify-center gap-2 md:gap-6 py-4 overflow-x-auto">
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="whitespace-nowrap px-3 md:px-6 py-2 text-white font-semibold hover:bg-white/20 rounded-full transition-all duration-200 text-sm md:text-base"
            >
              📍 Ubicación
            </button>
            <button
              onClick={() => scrollToSection('confirmacion')}
              className="whitespace-nowrap px-3 md:px-6 py-2 text-white font-semibold hover:bg-white/20 rounded-full transition-all duration-200 text-sm md:text-base bg-[#FF8C42] hover:bg-[#FF8C42]/80"
            >
              ✨ Confirmar
            </button>
          </div>
        </div>
      </nav>

      {/* Espaciador para el navbar fijo */}
      <div className="h-20"></div>

      {/* Información del Evento */}
      <section id="ubicacion" className="max-w-4xl mx-auto px-2 md:px-4 py-12 scroll-mt-20">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12 border-4 border-[#FF8C42]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#5B9BD5]">
            📍 Ubicación de la fiesta dentro del parque
          </h2>


          {/* Mapa Embebido */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border-4 border-[#5B9BD5]">
            <MapComponent />
          </div>

          {/* Indicaciones */}
            <h3 className="text-2xl font-bold mb-4 text-[#5B9BD5] flex items-center gap-2">
              🗺️ Cómo Llegar una vez dentro del parque
            </h3>
            <ol className="space-y-4 text-lg text-gray-800">
              <li className="flex gap-3">
                <span className="font-bold text-[#FF8C42] text-xl">1.</span>
                <span>Ingresa al Parque Zonal Sinchi Roca por la entrada principal</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#FF8C42] text-xl">2.</span>
                <span>Camina hacia el interior siguiendo los senderos principales, ubícate con el mapa.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#FF8C42] text-xl">3.</span>
                <span>Busca la zona de la lagunita, un lugar especial con un amplio espacio para fiestas</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#FF8C42] text-xl">4.</span>
                <span>¡Verás globos y decoraciones que te indicarán que llegaste! 🎉</span>
              </li>
            </ol>
        </div>
      </section>

      {/* Formulario de Confirmación */}
      <section id="confirmacion" className="max-w-4xl mx-auto px-2 md:px-4 py-12 pb-16 scroll-mt-20">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-12 border-4 border-[#5B9BD5]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe9kYfV_cJ9ZBXvibT0UrWRznCqRYHEBNXN7vDlYFyT_P52Vw/viewform?embedded=true"
              width="640"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#5B9BD5] to-[#4A90E2] text-white py-8 text-center">
        <p className="text-xl font-semibold mb-2">¡Te esperamos! 🎂🎈</p>
        <p className="text-sm opacity-90">Con mucho cariño, la familia de Jimenita</p>
      </footer>
    </div>
  );
}
