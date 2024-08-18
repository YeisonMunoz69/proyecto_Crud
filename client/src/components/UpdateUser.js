import React, { useState } from 'react';
import api from '../axiosConfig';

const UpdateUser = ({ userId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/users/${userId}`, { name, email });
            alert('Usuario actualizado con éxito');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
            <h1>Actualizar Usuario</h1>
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
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
};

export default UpdateUser;
