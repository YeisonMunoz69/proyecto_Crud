const express = require('express');
const router = express.Router();
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/itemsController');

// Crear un nuevo ítem
router.post('/', createItem);

// Obtener todos los ítems
router.get('/', getItems);

// Actualizar un ítem
router.put('/:id', updateItem);

// Eliminar un ítem
router.delete('/:id', deleteItem);

module.exports = router;

//Este archivo es un enrutador que define las rutas para el recurso de elementos.
// Utiliza itemsController para manejar la lógica de creación, obtención, actualización y eliminación de elementos.
