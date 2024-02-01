'use client'
import React, { useState, useEffect } from 'react';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';

const Users = () => {
  const [userData, setUserData] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    setUserData(storedUserData);
  }, []);

  const addUser = (user) => {
    setUserData((prevUserData) => {
      const newUserData = [...prevUserData, user];
      localStorage.setItem('userData', JSON.stringify(newUserData));
      return newUserData;
    });
  };
  const removeUser = (index) => {
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1);
    setUserData(updatedUserData);
    // Update localStorage if needed
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Data Table</h1>
      <AddUserForm addUser={addUser} />
      <UserTable userData={userData} onRemoveUser={removeUser} />
    </div>
  );
};

export default Users;
