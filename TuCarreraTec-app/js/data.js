// Estructura modelo del objeto Carrera 
const carreraEstructuraModelo = {
  id: "",           // Identificador único (ej: "isc", "ind", "ige")
  nombre: "",       // Nombre oficial de la carrera
  area: "",         // Área o campo de conocimiento
  resumen: "",      // Descripción corta para mostrar en la tarjeta de la lista
  modalidad: "",    // Escolarizada, Sabatina, etc.
  duracion: ""      // Semestres o periodos
};
const carreras = [
  {
    id: "isc",
    nombre: "Ingeniería en Sistemas Computacionales",
    area: "Físico-Matemáticas e Ingenierías",
    resumen: "Desarrollo de software, infraestructura de red y soluciones basadas en la nube y cómputo inteligente."
  },
  {
    id: "ind",
    nombre: "Ingeniería Industrial",
    area: "Físico-Matemáticas e Ingenierías",
    resumen: "Optimización de procesos productivos, gestión de la calidad y logística empresarial."
  },
  {
    id: "ige",
    nombre: "Ingeniería en Gestión Empresarial",
    area: "Económico-Administrativas",
    resumen: "Diseño y creación de nuevos negocios, dirección estratégica y gestión de proyectos."
  },
  {
    id: "gast",
    nombre: "Licenciatura en Gastronomía",
    area: "Económico-Administrativas",
    resumen: "Innovación culinaria, administración de negocios gastronómicos y preservación patrimonial."
  }
];
