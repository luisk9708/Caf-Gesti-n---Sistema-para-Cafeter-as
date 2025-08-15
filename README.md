# ☕ CaféGestión - Sistema para Cafeterías

**CaféGestión** es una aplicación web desarrollada como proyecto académico para la asignatura de **Ingeniería de Software II**, con el objetivo de aplicar conceptos clave como diseño de software, separación de responsabilidades, arquitectura, patrones, control de versiones y gestión de métricas.

---

## 🎯 ¿Qué problema resuelve?

Muchos negocios como cafeterías aún gestionan su inventario de forma manual, lo que ocasiona errores, pérdida de información y desorganización.  
**CaféGestión** permite digitalizar este proceso, ofreciendo una herramienta sencilla para registrar productos, controlar precios y stock, todo en una interfaz accesible y fácil de usar.

---

## 👥 Usuarios o actores principales

- Propietarios de cafeterías
- Encargados o empleados administrativos
- En una evolución futura: cajeros con roles limitados

---

## ✅ Funcionalidades actuales

- Agregar y editar productos (nombre, categoría, precio, stock y descripción).
- Eliminar productos de forma rápida.
- Búsqueda en tiempo real por nombre, categoría o descripción.
- Tabla dinámica con datos actualizados al instante.
- Persistencia de datos mediante localStorage.
- Diseño responsive adaptable a móviles y escritorio.
- Interfaz mejorada con iconos (Font Awesome) y estilos personalizados.
- Patrón de diseño Singleton para centralizar la gestión de productos.

---

## 🧠 Patrón Singleton aplicado

* Patrón Singleton
Implementado en js/singletongaravito/productoManager.js, asegura que solo exista una instancia del gestor de productos.

* Separación de responsabilidades

- productoManager.js → Lógica de gestión de productos.
- storage.js → Manejo de almacenamiento en localStorage.
- app.js → Conexión con la interfaz y eventos del usuario.

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
├── js/
│   ├── app.js                        ← Lógica principal (UI + Singleton)
│   └── singletongaravito/
│       ├── productoManager.js        ← Singleton gestor de productos
│       └── storage.js                ← Manejo de localStorage
├── index.html                        ← Interfaz principal
└── README.md
``` 

---

## 📦 Cómo usar el sistema

1. Clona o descarga el repositorio.
2. Abra la carpeta del proyecto en Visual Studio Code.
3. Instale la extensión Open Live Server (Ritwick Dey) desde el Marketplace de VS Code.
4. Haga clic derecho sobre index.html y seleccione "Abrir con Live Server".
5. Gestiona productos desde la interfaz.
6. Edite o elimine registros directamente desde las tablas dinámicas.
7. Filtra información usando las barras de búsqueda.
8. Toda la información se guarda automáticamente en localStorage.
---

## 👨‍🎓 Autor

- **Luis Carlos Garavito Agámez**
- Ingeniería de Software II – 2025

---

> Proyecto educativo con fines académicos. Libre para modificar, reutilizar y extender en nuevos contextos de aprendizaje.
