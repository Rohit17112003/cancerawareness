"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddDoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    designation: "",
    speciality: "",
    experience: "",
    reviews: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor added:", formData);
    alert("Doctor added successfully!");
  };

  const router = useRouter();
  const handleDoctorManagement = () => {
    router.push("/doctor-management");
  };
  const design = (
    <>
      <div className="mx-auto flex max-w-xl items-center rounded-2xl bg-[#fdf8f5] p-5 shadow-sm">
        {/* Avatar */}
        <div className="mr-5 h-24 w-24 overflow-hidden rounded-full">
          <img
            src="/doctor.jpg" // put your image in public folder with this name
            alt="Dr Rebbeka"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900">Dr Rebbeka</h2>
          <p className="text-gray-600">Reproductive Psychiatry • Psychiatry</p>
          <div className="mt-2 flex items-center text-sm text-gray-700">
            <span className="ml-2 cursor-pointer text-blue-600 hover:underline">
              220 Reviews
            </span>
            <span className="ml-3">• 6 Years Experience</span>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-2xl font-semibold">Add Doctor</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
          type="text"
          name="speciality"
          placeholder="Speciality"
          value={formData.speciality}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={formData.experience}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <input
          type="number"
          name="reviews"
          placeholder="Review Count"
          value={formData.reviews}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-0"
          required
        />

        <button
          type="submit"
          onClick={handleDoctorManagement}
          className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700 cursor-pointer"
        >
          Add Doctor
        </button>
      </form>
    </>
  );
  return design;
};
export default AddDoctorForm;
