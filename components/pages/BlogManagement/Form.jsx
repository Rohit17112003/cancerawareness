"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddBlogForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
    category: "Awareness",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, content, author, category, thumbnail } = formData;

    if (!title || !description || !content || !author || !category || !thumbnail) {
      alert("Please fill all fields.");
      return;
    }

    // You can handle API call here or route to BlogManagement
    router.push("/blog-management");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-lg shadow space-y-5"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Add New Blog</h2>

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Blog Title"
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
      />

      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Short Description"
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
      />

      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content / Summary"
        rows={4}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
      />

      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author Name"
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
      >
        <option value="Awareness">Awareness</option>
        <option value="Treatment">Treatment</option>
        <option value="Health Tips">Health Tips</option>
        <option value="Survivor Stories">Survivor Stories</option>
      </select>

      <input
        type="file"
          name="avatar"
          accept="image/*"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit Blog
      </button>
    </form>
  );
};

export default AddBlogForm;
