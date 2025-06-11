"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiArrowLeftLine } from "react-icons/ri";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

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
    router.push("/service-management"); // replace with your actual route
  };

  return (
    <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <button
        onClick={() => router.back()}
        className="mb-4 flex cursor-pointer items-center rounded-md bg-gray-200 px-3 py-2 text-sm text-black hover:bg-gray-300"
      >
        <RiArrowLeftLine className="mr-1" /> Back
      </button>

      <h2 className="mb-4 text-2xl font-bold text-pink-700">Add New Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            lable="Service Name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block  font-medium">Description</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <div>
          <Input
            lable="Duration"
            type="text"
            name="duration"
            required
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g. 30 mins"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <Button value="Add Service" />
      </form>
    </div>
  );
};

export default AddServiceForm;
