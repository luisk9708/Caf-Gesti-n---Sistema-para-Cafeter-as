# 🌀 Notas de Scrum – Proyecto CaféGestión

## Roles
- **Scrum Master**: Leli Liliana Díaz Izquierdo
- **Product Owner**: Luis Carlos Garavito Agamez
- **Development Team**: Willian Esteven Ramos Argel y Kener David Guazne Alvarez

---

## Sprint 1 – Optimización de Inventario y Flujo de Caja

### Objetivo
Refactorizar el sistema para:
- Separar la lógica de almacenamiento (`storage.js`).
- Implementar el patrón **Singleton** para la gestión centralizada de productos, proveedores e ingresos/egresos.
- Mejorar la interfaz para agilizar las operaciones en caja e inventario.

### Historias de Usuario
1. Como administrador, quiero gestionar productos y proveedores desde una sola interfaz, para ahorrar tiempo en la operación diaria.
2. Como usuario, quiero que el sistema guarde los datos aunque cierre el navegador, para no perder información.
3. Como encargado de caja, quiero ver un resumen rápido de ingresos y egresos, para tomar decisiones rápidas.


### Tareas

- [x] Crear archivo `storage.js` para la persistencia de datos.
- [x] Implementar **Singleton** para manejo de colecciones (productos, proveedores, transacciones).
- [x] Verificar funcionalidad de agregar y eliminar productos/proveedores.
- [ ] Implementar sistema de ingresos y egresos.
- [ ] Agregar funcionalidad para ver resumen de ingresos y egresos.
- [ ] Agregar retroalimentación visual en botones y formularios.
- [ ] Optimizar vista de **Flujo de Caja**.

### Retroalimentación

El sistema ahora tiene una arquitectura más modular y mantiene la información de forma persistente.  
Falta optimizar la edición de registros y mejorar la interactividad visual para que el flujo de trabajo sea más intuitivo.
