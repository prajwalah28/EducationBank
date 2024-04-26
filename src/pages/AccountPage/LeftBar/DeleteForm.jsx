import React, { useEffect } from "react";

const DeleteForm = ({ onClose, onSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overlay">
      <div className="bg-white w-96 shadow-lg rounded-md p-6">
        <h1 className="font-bold text-xl mb-4">Close your account?</h1>
        <p className="text-gray-700 mb-6">
          Are you sure you want to close your account?
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Close account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteForm;
