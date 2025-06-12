"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import BackButton from "@/components/atoms/BackButton";
import toast from "react-hot-toast";

const AddBlogForm = () => {
  const router = useRouter();
  const [error, setError] = useState();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
    category: "Awareness",
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "thumbnail") {
      setFormData((prev) => ({ ...prev, thumbnail: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title) {
      setError("Title is required ");
      return;
    }
    if (!formData.description) {
      setError("description is required ");
      return;
    }
    if (!formData.content) {
      setError("content is required ");
      return;
    }
    if (!formData.author) {
      setError("author is required ");
      return;
    }
    if (!formData.category) {
      setError("category is required ");
      return;
    }
    if (!formData.thumbnail) {
      setError("thumbnail is required ");
      return;
    }

    toast.success("form submited successfully");
    router.push("/blog-management");
  };

  return (
    <>
      {/* Back Button */}
      <div className="mx-auto mt-4 max-w-2xl">
        <BackButton value="Back" onClick={() => router.back()} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-peracolor mx-auto max-w-2xl space-y-5 rounded-lg bg-white p-6 shadow"
      >
        <h2 className="text-primary mb-2 text-xl font-bold md:text-2xl">
          Add New Blog
        </h2>

        <Input
          lable="Blog Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
        />

        <Input
          lable="Description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
        />
        <label className="text-primary pb-1 font-medium"> Write Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content / Summary"
          rows={4}
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
        />

        <Input
          lable="Author Name"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author Name"
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
        />

        <label className="text-primary pb-1 font-medium">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
        >
          <option value="Awareness">Awareness</option>
          <option value="Treatment">Treatment</option>
          <option value="Health Tips">Health Tips</option>
          <option value="Survivor Stories">Survivor Stories</option>
        </select>

        <Input
          lable="Upload File"
          type="file"
          name="thumbnail"
          accept="image/*"
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-0"
        />
        <span className="text-red-500">{error}</span>

        <Button value="Submit Blog" />
      </form>
    </>
  );
};

export default AddBlogForm;
