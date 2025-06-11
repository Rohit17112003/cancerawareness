"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiArrowLeftLine } from "react-icons/ri";

const AddServiceForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Service Added:", formData);
    alert("Service Added Successfully!");
    router.push("/services"); // replace with your actual route
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl border border-gray-200 mt-8">
      <button
        onClick={() => router.back()}
        className="mb-4 flex items-center text-sm text-pink-600 hover:underline"
      >
        <RiArrowLeftLine className="mr-1" /> Back to Services
      </button>

      <h2 className="text-2xl font-bold text-pink-700 mb-4">Add New Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Service Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Duration</label>
          <input
            type="text"
            name="duration"
            required
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g. 30 mins"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition cursor-pointer"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddServiceForm;
