// js/singletongaravito/storage.js

const Storage = {
  guardarProductos: function (productos) {
    localStorage.setItem('products', JSON.stringify(productos));
  },

  obtenerProductos: function () {
    const datos = localStorage.getItem('products');
    return datos ? JSON.parse(datos) : [];
  }
};

export default Storage;