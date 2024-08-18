import React from 'react';
import api from '../axiosConfig';

const DeleteUser = ({ userId }) => {
    const handleDelete = async () => {
        try {
            await api.delete(`/users/${userId}`);
            alert('Usuario eliminado con éxito');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Eliminar Usuario</button>
    );
};

export default DeleteUser;
