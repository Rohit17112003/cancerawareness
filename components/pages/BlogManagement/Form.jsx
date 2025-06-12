
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import toast from "react-hot-toast";

const AddBlogForm = () => {
  const router = useRouter();
  const [error,setError] = useState();

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
   
 if(!formData.title){
  setError("Title is required ")
  return ;
 }
 if(!formData.description){
  setError("description is required ")
  return ;
 }
 if(!formData.content){
  setError("content is required ")
  return ;
 }
 if(!formData.author){
  setError("author is required ")
  return ;
 }
 if(!formData.category){
  setError("category is required ")
  return ;
 }
 if(!formData.thumbnail){
  setError("thumbnail is required ")
  return ;
 }

  toast.success("form submited successfully")
    router.push("/blog-management");
  };

  return (
   <>
     {/* Back Button */}
      <div className="mx-auto max-w-2xl mt-4">
        <button
          onClick={() => router.back()}
          className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-800 hover:bg-gray-300 cursor-pointer"
        >
          <span><i className="ri-arrow-left-line"></i></span> Back
        </button>
      </div>
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto  bg-white p-6 rounded-lg shadow space-y-5"
    >

      <h2 className="md:text-2xl text-xl font-bold text-black mb-2 ">Add New Blog</h2>

      <Input 
        lable="Blog Title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Blog Title"
        className="w-full border border-gray-300 px-4 py-2 rounded-md outline-0"
      />

      <Input 
        lable="Description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Short Description"
        className="w-full border border-gray-300 px-4 py-2 rounded-md outline-0"
      />
       <label> Write Content</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content / Summary"
        rows={4}
        className="w-full border border-gray-300 px-4 py-2 rounded-md outline-0"
      />

      <Input 
        lable="Author Name"
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author Name"
        className="w-full border border-gray-300 px-4 py-2 rounded-md outline-0"
      />

       <label>Category</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md outline-0"
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
        className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-md"
      />
      <span className="text-red-500" >{error}</span>

     <Button value="Submit Blog"/>
    </form>
   </>
  );
};

export default AddBlogForm;

