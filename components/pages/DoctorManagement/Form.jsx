"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import BackButton from "@/components/atoms/BackButton";

const AddDoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    designation: "",
    speciality: "",
    experience: "",
    review: "",
    rating: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor added:", formData);
    alert("Doctor added successfully!");
    router.push("/doctor-management");
  };

  return (
    <div className="mx-auto py-6 md:max-w-2xl">
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        {/* Back Button */}
        <BackButton value="Back" onClick={() => router.back()} />

        <h2 className="text-primary mb-4 text-xl font-bold md:text-2xl">
          Add New Doctor
        </h2>

        <form onSubmit={handleSubmit} className="text-peracolor space-y-4">
          <Input
            lable="Doctor Nane"
            type="text"
            name="name"
            placeholder="Doctor's Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Input
            lable="Upload File"
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Input
            lable="Designation"
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Input
            lable="Speciality"
            type="text"
            name="speciality"
            placeholder="Speciality"
            value={formData.speciality}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Input
            lable="Experience"
            type="number"
            name="experience"
            placeholder="Experience (in years)"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Input
            lable="Review"
            type="text"
            name="review"
            placeholder="Review Summary"
            value={formData.review}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Input
            lable="Rating"
            type="number"
            name="rating"
            placeholder="Rating (1 to 5)"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Button value="Add Doctor" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctorForm;
