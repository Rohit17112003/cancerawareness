"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const AddUserForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "Volunteer",
    status: "Active",
    avatar: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData((prev) => ({ ...prev, avatar: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.role &&
      formData.status
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill all fields.");
      return;
    }

    // Handle user submission here (API call etc.)

    router.push("/user-management");
  };

  return (
    <>
      {/* Back Button */}
      <div className="mx-auto mt-4 max-w-2xl">
        <button
          onClick={() => router.back()}
          className="mb-4 cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-800 hover:bg-gray-300"
        >
          <span>
            <i className="ri-arrow-left-line"></i>
          </span>{" "}
          Back
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-6 rounded-xl bg-white p-6 shadow"
      >
        <h2 className="text-2xl font-bold text-gray-800">Add New User</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            lable="Name"
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <Input
            lable="Email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            lable="Phone No"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />

          <div className="relative">
            <Input
              lable="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 outline-0"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute md:top-11 top-11.5 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <i className="ri-eye-off-line"></i>
              ) : (
                <i className="ri-eye-line"></i>
              )}
            </span>
          </div>

          <div>
            <label className="font-medium pb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
            >
              <option value="Volunteer">Volunteer</option>
              <option value="Admin">Admin</option>
              <option value="Oncologist">Oncologist</option>
              <option value="Donor">Donor</option>
            </select>
          </div>

          <div>
            <label className="font-medium pb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <Input
            lable="Upload File"
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
          />
        </div>

        <Button value="Add User" />
      </form>
    </>
  );
};

export default AddUserForm;
