    // Configurar Supabase
const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://sqnomsomybshgzddqeeh.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


// Crear un nuevo ítem
const createItem = async (req, res) => {
    const { name, email } = req.body;

    const { data, error } = await supabase
        .from('users')
        .insert([{ name, email }]);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({
        message: 'Usuario creado',
        data
    });
};

// Obtener todos los ítems
const getItems = async (req, res) => {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
};

// Actualizar un ítem
const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const { data, error } = await supabase
        .from('users')
        .update({ name, email })
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
};

// Eliminar un ítem
const deleteItem = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
};

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem,
};


