// js/singletongaravito/productoManager.js
import Storage from './storage.js';

const ProductoManagerSingleton = (function () {
  let instancia;

  function crearInstancia() {
    return {
      agregar: function (producto) {
        const productos = Storage.obtenerProductos();
        productos.push(producto);
        Storage.guardarProductos(productos);
      },

      obtenerTodos: function () {
        return Storage.obtenerProductos();
      },

      eliminar: function (id) {
        let productos = Storage.obtenerProductos();
        productos = productos.filter(p => p.id !== id);
        Storage.guardarProductos(productos);
      },

      actualizar: function (id, nuevoProducto) {
        let productos = Storage.obtenerProductos();
        productos = productos.map(p => (p.id === id ? nuevoProducto : p));
        Storage.guardarProductos(productos);
      },

      buscarPorId: function (id) {
        const productos = Storage.obtenerProductos();
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

export default ProductoManagerSingleton;
