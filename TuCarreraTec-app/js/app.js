// Referencias a elementos del DOM
const contenedor = document.getElementById('contenedorCarreras');
const inputBuscar = document.getElementById('inputBuscar');

// Función para renderizar las tarjetas de carreras en pantalla
function renderizarCarreras(lista) {
  if (lista.length === 0) {
    contenedor.innerHTML = '<p class="sin-resultados">No se encontraron carreras con ese nombre.</p>';
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

// Búsqueda en tiempo real por nombre
inputBuscar.addEventListener('input', (evento) => {
  const textoBusqueda = evento.target.value.toLowerCase().trim();
  
  const carrerasFiltradas = carreras.filter(carrera => 
    carrera.nombre.toLowerCase().includes(textoBusqueda)
  );

  renderizarCarreras(carrerasFiltradas);
});

// Carga inicial al abrir la página
document.addEventListener('DOMContentLoaded', () => {
  renderizarCarreras(carreras);
});
