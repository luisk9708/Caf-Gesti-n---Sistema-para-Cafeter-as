# Diseño del Sistema – CaféGestión (Versión 2.0 - Singleton)

Este documento describe el diseño lógico del sistema **CaféGestión**, orientado a la  inventario para cafeterías.  
La versión 2.0 implementa el patrón de diseño **Singleton** y organiza sus componentes en capas funcionales.

---

## 📐 Estructura General

El sistema está dividido en dos capas principales:

### 1. Frontend
Encargado de la interacción con el usuario:

- **Interfaz de Usuario (HTML + CSS + JavaScript):** Define la estructura visual, estilos y comportamiento dinámico.  
- **app.js:** Actúa como punto de entrada del sistema. Recibe las acciones del usuario y las envía al controlador correspondiente.  


### 2. Backend Lógico
Gestiona la lógica de negocio y el almacenamiento:

- **productoManager.js:** Controlador CRUD para productos. Gestiona creación, lectura, actualización y eliminación.   
- **Singleton de datos:** Instancia única que administra colecciones de productos. Garantiza coherencia y evita múltiples instancias.  
- **storage.js:** Módulo de persistencia usando **localStorage** (o base de datos en MongoDB en despliegues avanzados).  

---

## 🧩 Patrón de diseño aplicado

**Singleton:**  
El objeto principal que administra los datos de inventario y transacciones se crea como una única instancia. Esto garantiza:

- Coherencia en la información mostrada en todas las vistas.  
- Evitar duplicación de datos o inconsistencias.  
- Un punto centralizado para modificar la información.  

---

## 🖼️ Diagrama del diseño

El diagrama `docs/diagrama_diseño_cafegestion.png` representa la arquitectura descrita, diferenciando claramente:

- **Frontend:** Interfaz de usuario y punto de entrada.  
- **Backend lógico:** Controladores y gestión de almacenamiento.  

---

## 📁 Archivos Relacionados

- `index.html`  
- `css/estilos.css`  
- `js/app.js`  
- `js/singletongaravito/productoManager.js`    
- `js/singletongaravito/storage.js`  
- `docs/diagrama_diseño_cafegestion.png`  
- `docs/diagrama_archimate_cafegestion.archimate` (editable con Archi)  

---

## 📌 Notas finales

Este diseño modular y basado en **Singleton** permite que el sistema sea escalable, fácil de mantener y adaptable a futuras integraciones como conexión con base de datos externa o API REST.
