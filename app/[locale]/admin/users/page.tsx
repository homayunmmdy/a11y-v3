'use client'
import React, { useState } from 'react'
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';

const Users = () => {
  const [userData, setUserData] = useState([]);
  const addUser = (user) => {
    setUserData((preveUserData) => [...preveUserData , user])
  };
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">User Data Table</h1>
    <AddUserForm addUser={addUser}/>
    <UserTable userData={userData} />
  </div>
  )
}

export default Users
