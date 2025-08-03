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

- Registro y edición de productos (nombre, categoría, precio, stock y descripción)
- Eliminación de productos
- Visualización de productos en una tabla dinámica
- Búsqueda en tiempo real por nombre, categoría o descripción
- Almacenamiento persistente con `localStorage`
- Aplicación del **patrón de diseño Singleton** para la gestión de productos

---

## 🧠 Patrón Singleton aplicado

Se implementó el **patrón Singleton** en el archivo `js/productoManager.js`, garantizando que solo exista una instancia del gestor de productos durante toda la ejecución de la aplicación.  
Esto mejora el control de acceso a los datos, evita duplicaciones innecesarias y centraliza la lógica de almacenamiento y manipulación de productos.

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
│       ├── productoManager.js   ← Singleton implementado aquí
│       └── app.js               ← Lógica principal conectada al Singleton
├── index.html
└── README.md


---

## 📦 Cómo usar el sistema

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Usa el formulario para agregar productos con sus atributos.
4. Edita o elimina productos directamente desde la tabla.
5. Filtra productos usando la barra de búsqueda.
6. Toda la información se guarda automáticamente en `localStorage`.
---

## 👨‍🎓 Autor

- **Luis Carlos Garavito Agámez**
- Ingeniería de Software II – 2025

---

> Proyecto educativo con fines académicos. Libre para modificar, reutilizar y extender en nuevos contextos de aprendizaje.
