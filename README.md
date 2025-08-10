# ☕ CaféGestión - Sistema para Cafeterías

**CaféGestión** es una aplicación web desarrollada como proyecto académico para la asignatura de **Ingeniería de Software II**, con el objetivo de aplicar conceptos clave como diseño de software, separación de responsabilidades, arquitectura por capas, patrones de diseño, control de versiones y gestión de métricas.  

La versión **2.0** incorpora mejoras de usabilidad, nueva organización modular y la implementación del **patrón Singleton** para la gestión centralizada de datos.

---

## 🎯 ¿Qué problema resuelve?

Muchas cafeterías aún gestionan inventario, proveedores y finanzas de forma manual, lo que ocasiona errores, pérdida de información y desorganización.  
**CaféGestión** digitaliza este proceso, ofreciendo una herramienta que permite registrar y administrar productos, proveedores, ingresos, egresos y flujo de caja de manera simple, rápida y segura.

---

## 👥 Usuarios o actores principales

- **Propietarios de cafeterías**
- **Encargados o empleados administrativos**
- Futuras versiones: **cajeros con roles limitados**

---

## ✅ Funcionalidades actuales

### 📦 Gestión de Productos
- Registro, edición y eliminación de productos (nombre, categoría, precio, stock, descripción).
- Visualización de productos en una tabla dinámica.
- Búsqueda en tiempo real por nombre, categoría o descripción.
- Persistencia de datos con `localStorage`.
- Patrón **Singleton** para control centralizado.

### 🏪 Gestión de Proveedores
- CRUD completo para proveedores.
- Almacenamiento persistente.

### 💰 Gestión Financiera
- Registro de ingresos y egresos.
- Vista de **Flujo de Caja** con resumen total.
- Actualización automática de saldos.

### 🎨 Interfaz y Usabilidad
- Retroalimentación visual en botones y formularios.
- Diseño consistente y adaptado al contexto de cafetería.
- Estructura responsive para distintos dispositivos.

---

## 🧠 Patrón Singleton aplicado

El **patrón Singleton** se aplica en el núcleo de la aplicación para garantizar que:
- Los datos (productos, proveedores, transacciones) se gestionen desde una única instancia.
- Se evite la duplicación de información.
- Se centralice la lógica de negocio y manipulación de datos.

Ejemplo:  
- `js/productoManager.js` – Singleton para la gestión de productos.  
 


---

## 🛠 Estructura del proyecto

```plaintext
CaféGestión/
├── activos/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── Logo.png
│   │   └── Logo.ico
│   └── js/
│       ├── app.js                ← Punto de entrada y control de vistas
│       ├── productoManager.js    ← Singleton para productos
│       └── storage.js            ← Persistencia con localStorage
├── index.html
└── README.md
``` 

---

## 📦 Cómo usar el sistema

1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Instala la extensión Open Live Server (Ritwick Dey) desde el Marketplace de VS Code.
4. Haz clic derecho sobre index.html y selecciona "Open with Live Server".
5. Gestiona productos desde la interfaz.
6. Edita o elimina registros directamente desde las tablas dinámicas.
7. Filtra información usando las barras de búsqueda.
8. Toda la información se guarda automáticamente en localStorage.
---

## 👨‍🎓 Autor

Luis Carlos Garavito Agámez
Willian Esteven Ramos Argel
Kener David Guazne Álvarez
Ingeniería de Software II – 2025

---

> Proyecto educativo con fines académicos. Libre para modificar, reutilizar y extender en nuevos contextos de aprendizaje.
