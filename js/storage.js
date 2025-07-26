// Obtener productos desde localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

// Guardar productos en localStorage
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Guardar o actualizar un solo producto
function saveProduct(product) {
    let products = getProducts();
    const existingIndex = products.findIndex(p => p.id === product.id);

    if (existingIndex !== -1) {
        products[existingIndex] = product;
    } else {
        products.push(product);
    }

    saveProducts(products);
}

// Eliminar un producto por ID
function deleteProduct(id) {
    let products = getProducts();
    products = products.filter(product => product.id !== id);
    saveProducts(products);
    renderProducts();
}

// Buscar un producto por ID
function findProductById(id) {
    const products = getProducts();
    return products.find(p => p.id === id);
}

// Mostrar productos en la tabla
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // limpiar la tabla

    const products = getProducts();
    products.forEach(product => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.stock}</td>
            <td>${product.description}</td>
            <td>
                <button onclick="editProduct('${product.id}')">Editar</button>
                <button onclick="deleteProduct('${product.id}')">Eliminar</button>
            </td>
        `;

        productList.appendChild(row);
    });
}

// Cargar datos al formulario para editar
function editProduct(id) {
    const product = findProductById(id);
    if (!product) return;

    document.getElementById('product-id').value = product.id;
    document.getElementById('name').value = product.name;
    document.getElementById('category').value = product.category;
    document.getElementById('price').value = product.price;
    document.getElementById('stock').value = product.stock;
    document.getElementById('description').value = product.description;
}

// Evento para guardar producto al enviar el formulario
document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('product-id').value || crypto.randomUUID();
    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;
    const price = parseFloat(document.getElementById('price').value);
    const stock = parseInt(document.getElementById('stock').value);
    const description = document.getElementById('description').value.trim();

    const product = { id, name, category, price, stock, description };
    saveProduct(product);

    // limpiar el formulario
    document.getElementById('product-form').reset();
    document.getElementById('product-id').value = '';

    renderProducts();
});

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', renderProducts);
