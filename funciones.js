// Declaración de variables y objetos
const camisetasDisponibles = [
  { id: 1, equipo: 'Boca Juniors', talla: 'M', precio: 20000 },
  { id: 2, equipo: 'Independiente', talla: 'L', precio: 18000 },
  { id: 3, equipo: 'Racing', talla: 'XL', precio: 16000 },
  { id: 4, equipo: 'San Lorenzo', talla: 'XL', precio: 15000 },
  { id: 5, equipo: 'Riber', talla: 'XXS', precio: 2 },
];

let carrito = [];

// Función para mostrar el catálogo de camisetas disponibles
function mostrarCatalogo() {
  console.log('Catálogo de Camisetas Disponibles:');
  camisetasDisponibles.forEach(camiseta => {
    console.log(`${camiseta.id}. Equipo: ${camiseta.equipo}, Talla: ${camiseta.talla}, Precio: $${camiseta.precio}`);
  });
}

// Función para agregar camisetas al carrito
function agregarAlCarrito() {
  const idCamiseta = parseInt(prompt('Ingresa el ID de la camiseta que deseas agregar al carrito:'));
  const camisetaSeleccionada = camisetasDisponibles.find(camiseta => camiseta.id === idCamiseta);

  if (camisetaSeleccionada) {
    carrito.push(camisetaSeleccionada);
    console.log(`Camiseta del ${camisetaSeleccionada.equipo} en talla ${camisetaSeleccionada.talla} ha sido agregada al carrito.`);
  } else {
    console.log('El ID ingresado no corresponde a ninguna camiseta disponible.');
  }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  console.log('Contenido del Carrito:');
  carrito.forEach(camiseta => {
    console.log(`${camiseta.equipo} - Talla: ${camiseta.talla}, Precio: $${camiseta.precio}`);
  });
}

// Función para calcular el total de la compra
function calcularTotal() {
  let total = 0;
  carrito.forEach(camiseta => {
    total += camiseta.precio;
  });
  return total;
}

// Función para calcular el IVA
function calcularIVA(total) {
  const iva = total * 0.21; 
  return iva;
}

// Función para mostrar el resumen de la compra
function mostrarResumenCompra() {
  const totalCompra = calcularTotal();
  const ivaCompra = calcularIVA(totalCompra);
  const totalConIVA = totalCompra + ivaCompra;

  let resumenTexto = `Resumen de la compra:\n\n`;
  resumenTexto += `Total a pagar (sin IVA): $${totalCompra}\n`;
  resumenTexto += `IVA: $${ivaCompra}\n`;
  resumenTexto += `Total a pagar (con IVA): $${totalConIVA}\n`;

  alert(resumenTexto);
}

// Ejecución del programa
mostrarCatalogo();

const numCamisetas = parseInt(prompt('¿Cuántas camisetas deseas comprar?'));
for (let i = 0; i < numCamisetas; i++) {
  agregarAlCarrito();
}

mostrarCarrito();

mostrarResumenCompra();
