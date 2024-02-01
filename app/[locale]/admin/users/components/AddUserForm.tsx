'use client'
import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 w-full"
        required
      />

      <label className="block text-sm font-medium text-gray-700 mt-2">
        Email:
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 w-full"
        required
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;