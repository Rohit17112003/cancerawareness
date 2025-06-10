"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddUserForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    role: "User",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.gender &&
      formData.phone &&
      formData.password &&
      formData.role
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill all fields.");
      return;
    }

    router.push("/user-management");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Add User</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md"
      />

      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md"
      />

      {/* Password Field with Toggle */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md pr-10"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md"
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Bloger">Blogger</option>
        <option value="Editor">Editor</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
