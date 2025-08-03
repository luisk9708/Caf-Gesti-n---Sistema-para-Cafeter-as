// js/productoManager.js

/**
 * ProductoManagerSingleton
 * Gestión de productos usando el patrón Singleton.
 * Asegura una única instancia de gestión y sincronización con localStorage.
 */

const ProductoManagerSingleton = (function () {
  let instancia;

  function getProductsFromStorage() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  function saveProductsToStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  function crearInstancia() {
    return {
      agregar: function (producto) {
        const productos = getProductsFromStorage();
        productos.push(producto);
        saveProductsToStorage(productos);
      },

      obtenerTodos: function () {
        return getProductsFromStorage(); // Siempre datos actualizados
      },

      eliminar: function (id) {
        let productos = getProductsFromStorage();
        productos = productos.filter(p => p.id !== id);
        saveProductsToStorage(productos);
      },

      actualizar: function (id, nuevoProducto) {
        let productos = getProductsFromStorage();
        productos = productos.map(p => (p.id === id ? nuevoProducto : p));
        saveProductsToStorage(productos);
      },

      buscarPorId: function (id) {
        const productos = getProductsFromStorage();
        return productos.find(p => p.id === id);
      }
    };
  }

  return {
    getInstancia: function () {
      if (!instancia) {
        instancia = crearInstancia();
      }
      return instancia;
    }
  };
})();
