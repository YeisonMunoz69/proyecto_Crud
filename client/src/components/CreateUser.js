import React, { useState } from 'react';
import api from '../axiosConfig';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/users', { name, email });
            alert('Usuario creado con éxito');
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error creando el usuario:', error);
        }
    };

    return (
        <div>
            <h1>Crear Usuario</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    );
};

export default CreateUser;
