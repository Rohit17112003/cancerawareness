"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiArrowGoBackLine } from "react-icons/ri";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import BackButton from "@/components/atoms/BackButton";

const AddLabPackageForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    packageName: "",
    testsIncluded: "",
    price: "",
    description: "",
    availableFrom: "",
    availableTo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Package submitted:", formData);
    alert("Lab Package added successfully!");
    router.push("/lab-management");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="mx-auto py-6 md:max-w-xl">
      <div className="mb-6 flex items-center justify-between gap-2">
        <BackButton value="Back" onClick={() => router.back()} />
        <h2 className="text-primary text-lg font-bold md:text-xl">
          Add Lab Test Package
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="text-peracolor space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-md"
      >
        <Input
          lable="Package Name"
          type="text"
          name="packageName"
          placeholder="Package Name"
          value={formData.packageName}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
        />
        <label className="text-primary pb-1 font-medium">Test Included</label>
        <textarea
          name="testsIncluded"
          placeholder="Tests Included (comma separated)"
          value={formData.testsIncluded}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
          rows="3"
        ></textarea>

        <Input
          lable="Price "
          type="number"
          name="price"
          placeholder="Price (INR)"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
        />
        <label className="text-primary pb-1 font-medium">Description</label>
        <textarea
          name="description"
          placeholder="Description (optional)"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
          rows="2"
        ></textarea>

        <div className="flex gap-4">
          <Input
            lable="Available From "
            type="date"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
          />
          <Input
            lable="Available To "
            type="date"
            name="availableTo"
            value={formData.availableTo}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none"
          />
        </div>

        <Button value=" Add Package" />
      </form>
    </div>
  );
};

export default AddLabPackageForm;
