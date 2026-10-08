// Referencias a los elementos del DOM
const contenedor = document.getElementById('contenedorCarreras');
const inputBuscar = document.getElementById('inputBuscar');
const selectArea = document.getElementById('selectArea');

// 1. Función para renderizar las tarjetas de carreras en pantalla
function renderizarCarreras(lista) {
  if (lista.length === 0) {
    contenedor.innerHTML = '<p class="sin-resultados">No se encontraron carreras que coincidan con la búsqueda.</p>';
    return;
  }

  contenedor.innerHTML = lista.map(carrera => `
    <article class="card-carrera">
      <div>
        <h3>${carrera.nombre}</h3>
        <span class="badge">${carrera.area}</span>
        <p>${carrera.resumen}</p>
      </div>
      <button class="btn-detalle" onclick="verDetalleCarrera('${carrera.id}')">Ver más información</button>
    </article>
  `).join('');
}

// 2. Función unificada que aplica ambos filtros (Buscador por Texto + Menú Desplegable por Área)
function aplicarFiltros() {
  const textoBusqueda = inputBuscar.value.toLowerCase().trim();
  const areaSeleccionada = selectArea.value;

  const carrerasFiltradas = carreras.filter(carrera => {
    const coincideNombre = carrera.nombre.toLowerCase().includes(textoBusqueda);
    const coincideArea = (areaSeleccionada === "todas") || (carrera.area === areaSeleccionada);
    return coincideNombre && coincideArea;
  });

  renderizarCarreras(carrerasFiltradas);
}

// 3. Listeners para detectar eventos de entrada en tiempo real
inputBuscar.addEventListener('input', aplicarFiltros);
selectArea.addEventListener('change', aplicarFiltros);

// 4. Carga inicial del catálogo al abrir la página
document.addEventListener('DOMContentLoaded', () => {
  renderizarCarreras(carreras);
});
