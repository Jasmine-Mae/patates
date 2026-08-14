// script.js - Versión mejorada

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  
  // ===== SELECCIONAR ELEMENTOS =====
  const botonPrincipal = document.getElementById('botonPrincipal');
  const botonSecundario = document.getElementById('botonSecundario');
  const profileImg = document.querySelector('.profile-img');
  const titulo = document.querySelector('h1');
  
  // ===== FUNCIONES =====
  
  // Función para mostrar alerta personalizada
  function mostrarAlerta(mensaje) {
    alert(mensaje);
  }
  
  // Función para cambiar el color de fondo aleatorio
  function cambiarColorFondo() {
    const colores = ['#f4f4f4', '#e8f4f8', '#f0e6ff', '#fff0e6', '#e6fff0'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.querySelector('.container').style.background = colorAleatorio;
  }
  
  // Función para cambiar el texto del título
  function cambiarTitulo() {
    const textos = ['PATATES', '¡Hola!', 'Bienvenido', '¿Cómo estás?', '🌟'];
    const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
    titulo.textContent = textoAleatorio;
  }
  
  // Función para mostrar la hora actual
  function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
  }
  
  // ===== EVENTOS =====
  
  // Evento para el botón principal
  if (botonPrincipal) {
    botonPrincipal.addEventListener('click', function() {
      mostrarAlerta('¡Funciona! 🎉');
      cambiarColorFondo();
      cambiarTitulo();
    });
  }
  
  // Evento para el botón secundario
  if (botonSecundario) {
    botonSecundario.addEventListener('click', function() {
      const horaActual = mostrarHora();
      mostrarAlerta(`Hora actual: ${horaActual} ⏰`);
    });
  }
  
  // Evento para la imagen (al hacer clic)
  if (profileImg) {
    profileImg.addEventListener('click', function() {
      const mensajes = [
        '¡Foto bonita! 📸',
        'Me gusta tu foto 😊',
        '¡Qué estilo! ✨',
        'Foto de perfil 😎'
      ];
      const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
      mostrarAlerta(mensajeAleatorio);
    });
    
    // Efecto al pasar el mouse sobre la imagen
    profileImg.addEventListener('mouseenter', function() {
      this.style.borderColor = '#ff6b6b';
    });
    
    profileImg.addEventListener('mouseleave', function() {
      this.style.borderColor = '#89bff4';
    });
  }
  
  // Evento para el título (al hacer doble clic)
  if (titulo) {
    titulo.addEventListener('dblclick', function() {
      this.style.color = '#ff6b6b';
      setTimeout(() => {
        this.style.color = '#1466b8';
      }, 1000);
      mostrarAlerta('¡Doble clic detectado! 👆');
    });
  }
  
  // ===== CONSOLA INTERACTIVA =====
  console.log('🚀 PATATES App cargada correctamente');
  console.log('💡 Prueba a hacer clic en los botones o en la imagen');
  
  // ===== EJEMPLO DE FETCH (para mostrar datos) =====
  // Si quieres obtener datos de una API, descomenta esto:
  /*
  function obtenerDatos() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        console.log('📦 Datos obtenidos:', data);
      })
      .catch(error => {
        console.error('❌ Error:', error);
      });
  }
  */
  
  // ===== TIMER (actualización automática) =====
  // Actualizar la hora en consola cada 10 segundos
  setInterval(() => {
    console.log(`🕐 Hora actual: ${mostrarHora()}`);
  }, 10000);
  
  console.log('✅ App lista para usar');
  
});

// ===== FUNCIONES GLOBALES (opcional) =====
// Estas funciones pueden ser llamadas desde la consola del navegador

function resetearTodo() {
  document.querySelector('.container').style.background = 'white';
  document.querySelector('h1').textContent = 'PATATES';
  document.querySelector('h1').style.color = '#1466b8';
  document.querySelector('.profile-img').style.borderColor = '#89bff4';
  console.log('🔄 Todo reiniciado');
}

function saludar(nombre = 'Usuario') {
  alert(`¡Hola ${nombre}! 👋`);
  console.log(`👋 Saludando a: ${nombre}`);
}

console.log('💡 Escribe "resetearTodo()" o "saludar(\'TuNombre\')" en la consola');