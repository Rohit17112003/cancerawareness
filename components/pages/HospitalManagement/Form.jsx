
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiHospitalLine } from "react-icons/ri";

const AddHospitalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    rating: "",
    review: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, rating } = formData;

    if (!name || !address || !rating) {
      alert("Please fill all required fields.");
      return;
    }

    const stars = "⭐".repeat(Math.min(5, Math.max(1, parseInt(rating))));
    const finalData = { ...formData, rating: stars };

    console.log("Hospital added:", finalData);
    alert("Hospital added successfully!");
    router.push("/hospital-management");
  };

  return (
    <>
      {/* Back Button */}
      <div className="mx-auto mt-4 max-w-xl">
        <button
          onClick={() => router.back()}
          className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 cursor-pointer"
        >
          <span><i class="ri-arrow-left-line"></i></span> Back
        </button>
      </div>

      <div className="mx-auto flex max-w-xl items-center gap-4 rounded-2xl bg-[#fdf8f5] p-5 shadow-sm">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <RiHospitalLine className="text-3xl text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Add New Hospital</h2>
          <p className="text-sm text-gray-600">Please enter hospital details below</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Hospital Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
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

        <textarea
          name="review"
          placeholder="Review (optional)"
          value={formData.review}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700 cursor-pointer"
        >
          Add Hospital
        </button>
      </form>
    </>
  );
};

export default AddHospitalForm;

