// src/App.js
import React from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
      <div className="App">
        <h1>Gestión de Usuarios</h1>
        <CreateUser />
        <UserList />
        <UpdateUser userId={1} /> {/* Reemplaza con un ID de usuario existente */}
        <DeleteUser userId={1} /> {/* Reemplaza con un ID de usuario existente */}
      </div>
  );
}

export default App;
