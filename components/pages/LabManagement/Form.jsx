"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiTestTubeLine } from "react-icons/ri";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import BackButton from "@/components/atoms/BackButton";

const AddLabForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    rating: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lab added:", formData);
    alert("Lab added successfully!");
    router.push("/lab-management");
  };

  return (
    <>
      <div className="mx-auto mt-4 max-w-xl">
        <BackButton value="Back" onClick={() => router.back()} />
      </div>
      {/* Top Header Card */}
      <div className="mx-auto flex max-w-xl items-center gap-4 rounded-2xl bg-[#fdf8f5] p-5 shadow-md">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-100">
          <RiTestTubeLine className="text-3xl text-pink-600" />
        </div>
        <div>
          <h2 className="text-primary text-xl font-bold md:text-2xl">
            Add New Lab
          </h2>
          <p className="text-sm text-gray-600">
            Please enter lab details below
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="text-peracolor mx-auto mt-10 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md"
      >
        <Input
          lable="Lab Name"
          type="text"
          name="name"
          placeholder="Lab Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <Input
          lable="Address"
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <Input
          lable="Rating"
          type="number"
          name="rating"
          placeholder="Rating (1 to 5)"
          value={formData.rating}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          min={1}
          max={5}
          required
        />

        <label className="text-primary pb-1 font-medium">Review</label>
        <textarea
          name="review"
          placeholder="Review"
          value={formData.review}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          rows="4"
          required
        ></textarea>

        <Button value="Add Lab" />
      </form>
    </>
  );
};

export default AddLabForm;
