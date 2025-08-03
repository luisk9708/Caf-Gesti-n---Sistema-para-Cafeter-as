// ===============================
// 🎯 CaféGestión - JS Principal
// ===============================

// 📌 Selección de elementos del DOM
const form = document.getElementById('product-form');
const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const priceInput = document.getElementById('price');
const stockInput = document.getElementById('stock');
const descriptionInput = document.getElementById('description');
const idInput = document.getElementById('product-id');
const tableBody = document.getElementById('product-table-body');
const searchInput = document.getElementById('search');

// ===============================
// 📦 Funciones de almacenamiento local
// ===============================

// Obtener productos desde localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

// Guardar productos en localStorage
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Guardar o actualizar un producto
function saveProduct(product) {
    let products = getProducts();
    const index = products.findIndex(p => p.id === product.id);

    if (index !== -1) {
        products[index] = product; // actualizar
    } else {
        products.push(product); // nuevo
    }

    saveProducts(products);
}

// Eliminar un producto por ID
function deleteProduct(id) {
    let products = getProducts();
    products = products.filter(product => product.id !== id);
    saveProducts(products);
}

// Buscar producto por ID
function findProductById(id) {
    return getProducts().find(p => p.id === id);
}

// ===============================
// 🎛️ Funciones de UI
// ===============================

// Mostrar productos en la tabla, aplicando búsqueda si es necesario
function renderTable() {
    const products = getProducts();
    const filter = searchInput.value.trim().toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(filter) ||
        product.category.toLowerCase().includes(filter) ||
        product.description.toLowerCase().includes(filter)
    );

    tableBody.innerHTML = '';

    filtered.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$${parseFloat(product.price).toFixed(2)}</td>
            <td>${product.stock}</td>
            <td>${product.description}</td>
            <td>
                <button onclick="editProduct('${product.id}')">Editar</button>
                <button onclick="handleDelete('${product.id}')">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Cargar datos al formulario para edición
function editProduct(id) {
    const product = findProductById(id);
    if (!product) return;

    nameInput.value = product.name;
    categoryInput.value = product.category;
    priceInput.value = product.price;
    stockInput.value = product.stock;
    descriptionInput.value = product.description;
    idInput.value = product.id;
}

// Confirmar y eliminar producto
function handleDelete(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        deleteProduct(id);
        renderTable();
    }
}

// ===============================
// 🚀 Eventos
// ===============================

// Evento al enviar el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const category = categoryInput.value.trim();
    const price = parseFloat(priceInput.value).toFixed(2);
    const stock = parseInt(stockInput.value);
    const description = descriptionInput.value.trim();

    if (!name || !category || isNaN(price) || isNaN(stock)) return;

    const product = {
        id: idInput.value || crypto.randomUUID(),
        name,
        category,
        price,
        stock,
        description
    };

    saveProduct(product);
    renderTable();
    form.reset();
    idInput.value = '';
});

// Búsqueda en tiempo real
searchInput.addEventListener('input', renderTable);

// Cargar tabla al iniciar
document.addEventListener('DOMContentLoaded', renderTable);
